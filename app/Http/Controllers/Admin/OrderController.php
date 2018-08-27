<?php
namespace App\Http\Controllers\Admin;

use App\Http\Requests\BasicRequest;
use App\Jobs\OrderNotify;
use App\Libraries\Bank\EBank;
use App\Libraries\ExportCsv;
use App\Models\FundMerchant;
use App\Models\FundOrder;
use App\Models\FundOrderPayment;
use Illuminate\Support\Facades\DB;

class OrderController extends CommonController {
	
	public function index(BasicRequest $request){
		$fundOrder = new FundOrder();
		$data['payments'] = $fundOrder->payments;
		$data['merchant'] = FundMerchant::pluck('name','id');
		$data['order_type'] = FundOrder::where('order_type','!=','')->groupBy('order_type')->pluck('order_type');
		$data['payment'] = FundOrderPayment::groupBy('type')->pluck('type','id');
		$model = FundOrder::select(DB::raw('fund_order.*'))->rightJoin('fund_order_payment as payment','payment.order_id','=','fund_order.id')
			->when($request->input('user_id'),function($query) use ($request){
				$query->where('user_id','like',$request->input('user_id'));
			})
			->when($request->input('order_no'),function($query) use ($request){
				$query->where('order_no','like',$request->input('order_no'));
			})
			->when($request->input('merchant_id'),function($query) use ($request){
				$query->whereIn('merchant_id',$request->input('merchant_id'));
			})
			->when($request->input('order_type'),function($query) use ($request){
				$query->whereIn('order_type',$request->input('order_type'));
			})
			->when($request->input('pay_status'),function($query) use ($request){
				$query->whereIn('pay_status',$request->input('pay_status'));
			})
			->when($request->input('notify_status'),function($query) use ($request){
				$query->whereIn('notify_status',$request->input('notify_status'));
			})
			->when($request->input('refund_status'),function($query) use ($request){
				$query->whereIn('refund_status',$request->input('refund_status'));
			})
			->when($request->input('payment'),function($query) use ($request){
				$query->whereIn('payment.type',$request->input('payment'));
			})
			->when($request->input('date'),function($query) use ($request){
				$query->where('fund_order.created_at','>',$request->input('date.0').' 00:00:00')->where('fund_order.created_at','<=',$request->input('date.1').' 23:59:59');
			})
			
			->orderBy('fund_order.id','desc');
		if($request->input('export')){
			$model2 = clone $model;
			(new ExportCsv())->name('导出用户订单')->field(['order_no'=>'订单号','user_id'=>'下单用户ID','product_name'=>'商品名','amount'=>'订单金额','pay_status'=>'支付状态','notify_status'=>'异步回调状态','refund_status'=>'退款状态','created_at'=>'创建时间'])->data($model2->groupBy('fund_order.id'))->save();
		}
		$model3 = clone $model;
		$sum_amount = $model3->select(DB::raw('payment.type,sum(payment.amount) amount'))->groupBy('payment.type')->pluck('amount','type');
		$data['sum_amount'] = $sum_amount;
		$data['list'] = $model->groupBy('fund_order.id')->pages();
		$data['list']->each(function($v){
			$v->payment;
		});
		return json_success('OK',$data);
	}
	
	// 订单重新异步通知
	public function notify(BasicRequest $request){
		$id = $request->input('id');
		$order = FundOrder::findOrFail($id);
		// 异步通知到商户
		OrderNotify::dispatch($order->order_no)->onQueue('order_notify');
		return json_success('已重新分发通知任务');
	}
	
	/**
	 * 订单标记为支付成功
	 * @param BasicRequest $request
	 * @return array
	 */
	public function complete(BasicRequest $request){
		$id = $request->input('id');
		$order = new FundOrder();
		$var = $order->completeAdmin($id);
		return json_return($var);
	}
	
	/**
	 * 订单退款
	 * @param BasicRequest $request
	 * @return array
	 */
	public function refund(BasicRequest $request){
		$id = $request->input('id');
		$amount = intval($request->input('amount'));
		
		$order = FundOrder::findOrFail($id);
		request()->validate([
			'id'		=> '',
			'amount'	=> 'required|integer|min:1|max:'.$order->amount,
		]);
		if ($order->status != 1 || $order->pay_status != 1) {
			exception('订单状态与退款条件不足');
		}
		DB::transaction(function () use ($amount, $order) {
			$bank = new EBank();
			
			// 2017-09-12 变动，第三方还是收了钱的，所以不再退到中央银行，直接系统拨对应现金即可
//			$transfer_id = $bank->systemCashToCentralCash(0, 0, $amount, 10001, $order->order_no);
			$transfer_id = $bank->systemCashToUserCash($order->merchant_id,0,$order->user_id,$amount,$order->order_no,'订单退款',5);
			$order->refund_status = 1;
			$order->refund_time = time2date();
			$order->refund_transfer_id = $transfer_id;
			$order->save();
		});
		return json_success('退款成功，已完成系统到用户的转账操作，如产生奖励部分需手动冲正');
	}
}