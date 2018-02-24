<?php
namespace App\Http\Controllers\Api;

use App\Libraries\Bank;
use App\Http\Requests\BasicRequest;
use App\Jobs\OrderNotify;
use App\Libraries\OrderUnified;
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
		$pay_unified = new OrderUnified();
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
		$pay_unified = new OrderUnified();
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
	 * 异步通知回调，统一处理方法
	 * @param $order_no
	 * @param $amount	// 单位分
	 * @return bool
	 */
	private function complete(string $order_no,int $amount){
		$order = new FundOrder();
		$status = $order->complete($order_no,$amount);
		return $status;
	}
}
