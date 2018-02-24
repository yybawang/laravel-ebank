<?php
namespace App\Http\Controllers\Api;

use App\Libraries\Bank;
use App\Http\Requests\BasicRequest;
use App\Jobs\OrderNotify;
use App\Libraries\PayUnified;
use App\Models\FundOrder;
use App\Models\FundOrderPayment;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class NotifyController extends CommonController {
	
	
	/**
	 * 内部支付回调
	 * @param string $order_no
	 * @param int $amount
	 * @return string
	 */
	public function wallet(string $order_no,int$amount){
		$status = $this->complete($order_no,$amount);
		if($status){
			return 'SUCCESS';
		}else{
			return 'ERROR';
		}
	}
	
	/**
	 * 微信支付异步回调
	 * @param BasicRequest $request
	 * @return string
	 */
	public function wechat(BasicRequest $request){
		$pay_unified = new PayUnified();
		// 微信验签成功后会返回所有参数数组，失败返回false
		$post = $pay_unified->wechatCheckSign();
		if($post){
			$order_no = $post['out_trade_no'];
			$amount = $post['total_fee'];
			$status = $this->complete($order_no,$amount);
			// 微信支付回调，成功输出 SUCCESS
			if($status){
				return 'SUCCESS';
			}else{
				return 'ERROR';
			}
		}else{
			logger('微信异步回调算签失败');
			logger($post);
		}
	}
	
	/**
	 * 支付宝支付异步回调
	 * @param BasicRequest $request
	 * @return string
	 */
	public function alipay(BasicRequest $request){
		$pay_unified = new PayUnified();
		// 微信验签成功后会返回所有参数数组，失败返回false
		$sign_success = $pay_unified->alipayCheckSign();
		if($sign_success){
			$order_no = $request->input('out_trade_no');
			$amount = $request->input('total_amount') * 100;	// 单位元
			$status = $this->complete($order_no,$amount);
			// 微信支付回调，成功输出 SUCCESS
			if($status){
				return 'SUCCESS';
			}else{
				return 'ERROR';
			}
		}else{
			logger('支付宝异步回调算签失败');
			logger($request->all());
		}
	}
	
	
	
	
	
	
	
	/**
	 * @param $order_no
	 * @param $amount	// 单位分
	 * @return bool
	 * 异步通知回调，统一处理方法
	 */
	private function complete(string $order_no,int $amount){
		$multi_key = 'notifyController_complete'.$order_no.'_'.$amount;
		if(Cache::has($multi_key)){
			logger($order_no.'并发重复通知，缓存已拦截');
			return false;
		}
		Cache::add($multi_key,1,0.1);
		
		$order = FundOrder::where(['order_no'=>$order_no])->first();
		if($order){
			if($order->amount != $amount){
				logger('异步通知订单号['.$order_no.']通知价格不正确，本地价格：'.$order->amount.'，通知价格：'.$amount);
				return false;
			}
			if(1 == $order->pay_status){
				logger($order_no.'重复通知，订单 pay_status = 1 已支付');
				return false;
			}
//			$job = (new OrderNotify($order_no))->onQueue('distribution_notify');
//			$this->dispatch($job);
//			return true;
			DB::transaction(function() use ($order){
				$bank = new Bank();
				// 系统钱包增加金额，流水为充值，用户钱包支付部分就是用户到系统。
				FundOrderPayment::where(['order_id'=>$order->id])->pluck('amount','type')->each(function($amount,$type) use ($order,$bank){
					$uid = $order->user_id;
					if($amount <= 0){
						return true;
					}
					// 如果是用户，就是回转到系统
					if(stripos($type,'wallet_') === 0){
						$purse_type = ucfirst(substr(strstr($type, '_'), 1));
						$transfer_alias = 'user'.$purse_type.'ToSystem'.$purse_type;
						$bank->$transfer_alias($uid,0,$amount,10004,0,$order->order_no);
					}else{
						$bank->transfer(0,0,$amount,10002,0,$order->order_no);	// 为凭空出来的钱，所以先从中央银行扣款到系统
						$bank->transfer(0,$uid,$amount,10003,0,$order->order_no);	// 系统先给用户充值，走流水
						$bank->transfer($uid,0,$amount,10004,0,$order->order_no);	// 再转回系统，订单支付
					}
				});
				
				// 保存支付时间和状态
				$order->pay_status = 1;
				$order->pay_time = time2date();
				$order->save();
				
				
				// 异步通知到商户
				OrderNotify::dispatch($order->order_no)->onQueue('order_notify');
			});
			return true;
		}else{
			logger('异步通知订单号['.$order_no.']未找到');
			bug_email('异步通知订单号['.$order_no.']未找到');
			return false;
		}
	}
}
