<?php
namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\FundOrder;

class ReturnController extends CommonController {
	
	/**
	 * 微信支付同步回调
	 * @param Request $request
	 * @return mixed|string
	 */
	public function wechat(Request $request){
		$order_no 	= $request->input('order_no');	// 订单号
		$pay_status	= 0;	// 0不确定交易，1交易成功，2交易失败。前端不判断支付成功，提示等待支付结果即可,$request->input('pay_status') 这是我支付模板里自己返回的参数
		$amount		= $request->input('total_fee');
		$pay_time	= time2date(strtotime($request->input('time_end')));
		
		$order = FundOrder::where(['order_no'=>$order_no])->first();
		if($order){
			$html = build_form($order->return_url,compact('order_no','pay_status','amount','pay_time'),'get');
			return $html;
		}else{
			exception('微信同步回调参数错误：订单号['.$order_no.']不存在');
		}
	}
	
	/**
	 * 支付宝支付同步回调
	 * @param Request $request
	 * @return mixed|string
	 */
	public function alipay(Request $request){
		$order_no		= $request->input('out_trade_no');
		$amount			= intval($request->input('amount') * 100);
		$trade_status	= $request->input('trade_status');	// 等于 TRADE_SUCCESS || TRADE_FINISHED 为支付成功
		$pay_time		= $request->input('gmt_payment');	// 年月日 时分秒
		$pay_status		= 0;								// 0不确定交易，1交易成功，2交易失败。前端不判断支付成功，提示等待支付结果即可
		$order = FundOrder::where(['order_no'=>$order_no])->first();
		
		if($order){
			$html = build_form($order->return_url,compact('order_no','pay_status','amount','pay_time'),'get');
			return $html;
		}else{
			exception('支付宝同步回调参数错误：订单号['.$order_no.']不存在');
		}
	}
}
