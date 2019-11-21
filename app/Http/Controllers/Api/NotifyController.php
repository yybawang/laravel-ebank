<?php
namespace App\Http\Controllers\Api;

use App\Libraries\Bank;
use Illuminate\Http\Request;
use App\Jobs\OrderNotify;
use App\Libraries\Bank\OrderUnified;
use App\Models\FundOrder;
use App\Models\FundOrderPayment;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Yansongda\LaravelPay\Facades\Pay;

class NotifyController extends CommonController {
	
	/**
	 * 微信支付异步回调
	 * @param Request $request
	 * @return string
	 */
	public function wechat(Request $request){
		// 验签成功后会返回所有参数collect，失败抛出异常
		$post = Pay::wechat()->verify();
		$order_no = $post->out_trade_no;
		$amount = $post->total_fee;		// 微信支付单位分
		$status = $this->complete($order_no,$amount,$post);
		if(!$status){
			logger('['.$order_no.']微信支付内部处理分账失败');
		}
		return Pay::wechat()->success();
	}
	
	/**
	 * 支付宝支付异步回调
	 * @param Request $request
	 * @return string
	 */
	public function alipay(Request $request){
		// 验签成功后会返回所有参数collect，失败抛出异常
		$post = Pay::alipay()->verify();
		$order_no = $post->out_trade_no;
		$amount = intval($post->total_amount * 100);	// 单位元
		$status = $this->complete($order_no,$amount,$post);
		// 支付宝支付回调，成功输出 SUCCESS
		if(!$status){
			logger('['.$order_no.']支付宝支付内部处理分账失败');
		}
		return Pay::alipay()->success();
	}
	
	
	
	
	
	
	
	/**
	 * 异步通知回调，统一处理方法
	 * @param $order_no
	 * @param $amount	// 单位分
	 * @param array $notify_param	回调所有参数
	 * @return bool
	 */
	private function complete(string $order_no,int $amount,$notify_param){
		$order = new FundOrder();
		$order->where(['order_no'=>$order_no])->update(['notify_param'=>$notify_param]);
		$status = $order->complete($order_no,$amount);
		return $status;
	}
}
