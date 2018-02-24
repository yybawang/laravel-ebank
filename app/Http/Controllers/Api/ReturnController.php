<?php
namespace App\Http\Controllers\Api;

use App\Http\Requests\BasicRequest;
use App\Models\FundOrder;

class ReturnController extends CommonController {
	
	/**
	 * 微信支付同步回调
	 * @param BasicRequest $request
	 * @return mixed|string
	 */
	public function wechat(BasicRequest $request){
		$order_no = $request->input('order_no');	// 订单号
		$pay_status = $request->input('pay_status');	// 成功1，未付款2，这是我支付模板里自己返回的参数
		$order = FundOrder::where(['order_no'=>$order_no])->first();
		if($order){
			$html = build_form($order->return_url,compact('order_no','pay_status'),'get');
			return $html;
		}else{
			abort_500('微信通知回调参数错误：订单号不存在');
		}
	}
	
	/**
	 * 支付宝支付同步回调
	 * @param BasicRequest $request
	 * @return mixed|string
	 */
	public function alipay(BasicRequest $request){
		$order_no = $request->input('out_trade_no');
		$pay_status = 1;
		$order = FundOrder::where(['order_no'=>$order_no])->first();
		if($order){
			$html = build_form($order->return_url,compact('order_no','pay_status'),'get');
			return $html;
		}else{
			abort_500('支付宝通知回调参数错误：订单号不存在');
		}
	}
}