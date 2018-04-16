<?php
/**
 * 支付下单中转类
 */
namespace App\Libraries\Bank;

use App\Exceptions\ApiException;
use App\Http\Controllers\Api\NotifyController;
use App\Http\Requests\BasicRequest;
use App\Models\FundConfig;
use App\Models\FundOrder;

include_once '../wechat_pay/lib/WxPay.Api.php';
include_once '../alipay_sdk/AopSdk.php';
class OrderUnified {
	protected $error = '';
	
	public function getError(){
		return $this->error;
	}
	
	
	/**
	 * 内部钱包支付扣款
	 * @param $order_no
	 * @param $amount
	 * @return bool
	 */
	public function wallet($order_no,$amount){
		$order = new FundOrder();
		$status = $order->complete($order_no,$amount);
		if($status){
			return true;
		}else{
			$this->error = '内部钱包支付扣款失败，请稍后再试';
			return false;
		}
	}
	
	/**
	 * 微信APP支付签名，app使用此参数唤醒
	 * @param $order_no
	 * @param $product_name
	 * @param $price
	 * @param $notify_url
	 * @return array
	 */
	public function wechatApp($order_no,$product_name,$price,$notify_url){
		$input = new \WxPayUnifiedOrder();
		$input->SetBody($product_name);
		$input->SetOut_trade_no($order_no);
		$input->SetTime_start(date("YmdHis"));
		$input->SetTime_expire(date("YmdHis", time() + 600));
		$input->SetTotal_fee($price * 100);		// 分为单位，数据表是元为单位，故乘100
		$input->SetNotify_url($notify_url);
		$input->SetTrade_type("APP");
		$order = \WxPayApi::unifiedOrder($input);
		
		$param = [
			'appid'		=> $order['appid'],
			'partnerid'		=> $order['mch_id'],
			'prepayid'		=> $order['prepay_id'],
			'package'		=> 'Sign=WXPay',
			'noncestr'		=> \WxPayApi::getNonceStr(),
			'timestamp'		=> time(),
		];
		ksort($param);
		$param['key'] = \WxPayConfig::config('key');
		$param2 = [];
		foreach($param as $k => $v){
			array_push($param2,$k.'='.$v);
		}
		$sign = strtoupper(md5(implode('&',$param2)));
		$param['sign'] = $sign;
		return $param;
	}
	
	/**
	 * 微信jsapi支付，前端使用js唤醒
	 * @param $openid
	 * @param $order_no
	 * @param $product_name
	 * @param $price
	 * @param $notify_url
	 * @return array
	 */
	public function wechatJsapi($openid,$order_no,$product_name,$price,$notify_url){
		$input = new \WxPayUnifiedOrder();
		$jsApi = new \JsApiPay();
		$input->SetBody($product_name);
		$input->SetOut_trade_no($order_no);
		$input->SetTime_start(date("YmdHis"));
		$input->SetTime_expire(date("YmdHis", time() + 600));
		$input->SetTotal_fee($price * 100);		// 分为单位，数据表是元为单位，故乘100
		$input->SetNotify_url($notify_url);
		$input->SetTrade_type("JSAPI");
		$input->SetOpenid($openid);
		$order = \WxPayApi::unifiedOrder($input);
		$jsApiParameters = $jsApi->GetJsApiParameters($order);
		return $jsApiParameters;
	}
	
	// 微信支付回调算签，成功返回true，失败返回false
	public function wechatCheckSign(){
		// return bool
		$error_msg = '';
		$status = \WxpayApi::notify(array($this, 'wechatCheckSignSuccess'), $error_msg);
		return $status;
	}
	// 原xml转数组后参数原样返回
	public function wechatCheckSignSuccess($post){
		return $post;
	}
	
	
	/**
	 * 支付宝APP支付，客户端使用此字符串直接唤醒支付宝app支付
	 * @param $order_no
	 * @param $product_name
	 * @param $price
	 * @param $notify_url
	 * @return string
	 */
	public function alipayApp($order_no,$product_name,$price,$notify_url){
		$aop = new \AopClient();
		$appid = config('basic.alipay_payment.appid');
//		$aop->gatewayUrl = 'https://openapi.alipay.com/gateway.do';
		$aop->appId = $appid;
//		$aop->rsaPrivateKey = '请填写开发者私钥去头去尾去回车，一行字符串';
		$aop->rsaPrivateKey = file_get_contents(__DIR__ . '/alipay_sdk/pem/rsa_private_key.pem');
//		$aop->alipayrsaPublicKey='请填写支付宝公钥，一行字符串';
		$aop->alipayrsaPublicKey = file_get_contents(__DIR__ . '/alipay_sdk/pem/alipay_public_key.pem');
		$aop->apiVersion = '1.0';
		$aop->signType = 'RSA2';
		$aop->postCharset='UTF-8';
		$aop->format='json';
		$request = new \AlipayTradeAppPayRequest();
		$bizcontent = json_encode([
			'subject'			=> $product_name,
			'out_trade_no'		=> $order_no,
			'total_amount'		=> $price,
			'product_code'		=> 'QUICK_MSECURITY_PAY',
		]);
		$request->setBizContent($bizcontent);
		$request->setNotifyUrl($notify_url);
		$result = $aop->sdkExecute($request);
		return $result;
	}
	
	
	/**
	 * 支付宝jsapi支付，前端拿到此字符串唤醒js支付即可
	 * @param $order_no
	 * @param $product_name
	 * @param $price
	 * @param $return_url
	 * @param $notify_url
	 * @return string
	 */
	public function alipayJsapi($order_no,$product_name,$price,$return_url,$notify_url){
		$aop = new \AopClient();
		$appid = config('basic.alipay_payment.appid');
//		$aop->gatewayUrl = 'https://openapi.alipay.com/gateway.do';
		$aop->appId = $appid;
//		$aop->rsaPrivateKey = '请填写开发者私钥去头去尾去回车，一行字符串';
		$aop->rsaPrivateKey = file_get_contents(__DIR__ . '/alipay_sdk/pem/rsa_private_key.pem');
//		$aop->alipayrsaPublicKey='请填写支付宝公钥，一行字符串';
		$aop->alipayrsaPublicKey = file_get_contents(__DIR__ . '/alipay_sdk/pem/alipay_public_key.pem');
		$aop->apiVersion = '1.0';
		$aop->signType = 'RSA2';
		$aop->postCharset='UTF-8';
		$aop->format='json';
		$request = new \AlipayTradeWapPayRequest();
		$bizcontent = json_encode([
			'subject'			=> $product_name,
			'out_trade_no'		=> $order_no,
			'total_amount'		=> $price,
			'product_code'		=> 'QUICK_WAP_WAY',
		]);
		$request->setBizContent($bizcontent);
		$request->setNotifyUrl($notify_url);
		$request->setReturnUrl($return_url);
		$html = $aop->pageExecute($request);
		return $html;
	}
	
	// 支付宝支付算签
	public function alipayCheckSign(){
		$aop = new \AopClient();
		$aop->alipayrsaPublicKey = file_get_contents(__DIR__ . '/alipay_sdk/pem/alipay_public_key.pem');
		$flag = $aop->rsaCheckV1($_POST, NULL, "RSA2");
		return $flag;
	}
	
}
