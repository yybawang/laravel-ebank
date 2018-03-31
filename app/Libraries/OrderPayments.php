<?php
/**
 * Created by PhpStorm.
 * User: yy
 * Date: 2018-03-31
 * Time: 22:21
 */

namespace App\Libraries;


use Illuminate\Support\Facades\Cache;

class OrderPayments
{
	private $order_no;
	private $amount_thread;
	private $amount_wallet;
	private $product_name;
	public function __construct($order_no,$amount_thread,$amount_wallet,$product_name)
	{
		$this->order_no = $order_no;
		$this->amount_thread = $amount_thread;
		$this->amount_wallet = $amount_wallet;
		$this->product_name = $product_name;
	}
	
	
	/**
	 * 内部钱包支付扣款
	 * @return array
	 */
	public function wallet(){
		// 防多次点击
		$cache_key = md5(serialize(request()->all()));
		$cache_val = Cache::has($cache_key);
		if($cache_val){
			abort_500('请求频繁，请稍后再试');
		}
		Cache::add($cache_key,1,0.1);	// 6秒钟
		$pay_unified = new OrderUnified();
		$status = $pay_unified->wallet($this->order_no,$this->amount_wallet);
		return json_return($status,$pay_unified->getError(),'支付成功',['order_no'=>$this->order_no,'type'=>'wallet','platform'=>'wallet','content'=>'']);
	}
	
	/**
	 * 微信APP支付
	 * @return array
	 */
	public function wechat_app(){
		$pay_unified = new OrderUnified();
		$notify_url = url('api/notify/wechat');
		$sign = $pay_unified->wechatApp($this->order_no,$this->product_name,$this->amount_thread,$notify_url);
		return json_success('OK',['order_no'=>$this->order_no,'type'=>'app','platform'=>'wechat','content'=>$sign]);
	}
	
	/**
	 * 微信 jsapi 支付签名
	 * @return array
	 */
	public function wechat_jsapi(){
		request()->validate([
			'openid'		=> 'required|string',
			'return_url'	=> 'required|url',
		],[
			'openid.required'		=> '用户微信openid参数必传',
			'openid.string'			=> '用户微信openid参数格式有误',
		]);
		$pay_unified = new OrderUnified();
		$openid = request()->input('openid');
		$return_url = url('api/return/wechat');
		$notify_url = url('api/notify/wechat');
		$sign = $pay_unified->wechatJsapi($openid,$this->order_no,$this->product_name,$this->amount_thread,$notify_url);
		$parse_url = parse_url($return_url);
		if($parse_url['query']){
			$return_url = $return_url.'&order_no='.$this->order_no.'&pay_status=';
		}else{
			$return_url = $return_url.'?order_no='.$this->order_no.'&pay_status=';
		}
		$html = build_form(url('api/form/wechat'),['sign'=>$sign,'return_url'=>$return_url]);
		return json_success('OK',['order_no'=>$this->order_no,'type'=>'wap','platform'=>'wechat','content'=>$html]);
	}
	
	/**
	 * 支付宝APP支付
	 * @return string
	 */
	public function alipay_app(){
		$pay_unified = new OrderUnified();
		$notify_url = url('api/notify/alipay');
		$sign = $pay_unified->alipayApp($this->order_no,$this->product_name,$this->amount_thread,$notify_url);
		return json_success('OK',['order_no'=>$this->order_no,'type'=>'app','platform'=>'alipay','content'=>$sign]);
	}
	
	/**
	 * 支付宝jsapi支付
	 * @return string
	 */
	public function alipay_jsapi(){
		request()->validate([
			'return_url'	=> 'required|url',
		]);
		$pay_unified = new OrderUnified();
		$return_url = url('api/return/alipay');
		$notify_url = url('api/notify/alipay');
		$html = $pay_unified->alipayJsapi($this->order_no,$this->product_name,$this->amount_thread,$return_url,$notify_url);
		return json_success('OK',['order_no'=>$this->order_no,'type'=>'wap','platform'=>'alipay','content'=>$html]);
	}
}