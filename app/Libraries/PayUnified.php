<?php
/**
 * APP 支付算签
 */
namespace App\Libraries;

use App\Exceptions\ApiException;
use App\Http\Controllers\Api\NotifyController;
use App\Http\Requests\BasicRequest;
use App\Models\FundConfig;

include_once 'wechat_pay/lib/WxPay.Api.php';
include_once 'alipay_sdk/AopSdk.php';
class PayUnified {
	protected $error = '';
	
	public function getError(){
		return $this->error;
	}
	
	
	/**
	 * @param $order_no
	 * @param $amount
	 * @return bool
	 * 内部钱包支付扣款
	 */
	public function wallet($order_no,$amount){
		$notifyController = new NotifyController();
		$status = $notifyController->wallet($order_no,$amount);
		if($status == 'SUCCESS'){
			return true;
		}else{
			$this->error = '内部钱包支付扣款失败，请稍后再试';
			return false;
		}
	}
	
	/**
	 * @param $order_no
	 * @param $product_name
	 * @param $price
	 * @param $notify_url
	 * @return array
	 * 微信APP支付签名，app使用此参数唤醒
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
	 * @param $openid
	 * @param $order_no
	 * @param $product_name
	 * @param $price
	 * @param $notify_url
	 * @return array
	 * 微信jsapi支付，前端使用js唤醒
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
	 * @param $order_no
	 * @param $product_name
	 * @param $price
	 * @param $notify_url
	 * @return string
	 * 支付宝APP支付，客户端使用此字符串直接唤醒支付宝app支付
	 */
	public function alipayApp($order_no,$product_name,$price,$notify_url){
		$aop = new \AopClient();
		$appid = config('basic.alipay_payment.appid');
//		$aop->gatewayUrl = 'https://openapi.alipay.com/gateway.do';
		$aop->appId = $appid;
//		$aop->rsaPrivateKey = '请填写开发者私钥去头去尾去回车，一行字符串';
		$aop->rsaPrivateKey = file_get_contents(__DIR__.'/alipay_sdk/pem/rsa_private_key.pem');
//		$aop->alipayrsaPublicKey='请填写支付宝公钥，一行字符串';
		$aop->alipayrsaPublicKey = file_get_contents(__DIR__.'/alipay_sdk/pem/alipay_public_key.pem');
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
	 * @param $order_no
	 * @param $product_name
	 * @param $price
	 * @param $return_url
	 * @param $notify_url
	 * @return string
	 * 支付宝jsapi支付，前端拿到此字符串唤醒js支付即可
	 */
	public function alipayJsapi($order_no,$product_name,$price,$return_url,$notify_url){
		$aop = new \AopClient();
		$appid = config('basic.alipay_payment.appid');
//		$aop->gatewayUrl = 'https://openapi.alipay.com/gateway.do';
		$aop->appId = $appid;
//		$aop->rsaPrivateKey = '请填写开发者私钥去头去尾去回车，一行字符串';
		$aop->rsaPrivateKey = file_get_contents(__DIR__.'/alipay_sdk/pem/rsa_private_key.pem');
//		$aop->alipayrsaPublicKey='请填写支付宝公钥，一行字符串';
		$aop->alipayrsaPublicKey = file_get_contents(__DIR__.'/alipay_sdk/pem/alipay_public_key.pem');
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
		$aop->alipayrsaPublicKey = file_get_contents(__DIR__.'/alipay_sdk/pem/alipay_public_key.pem');
		$flag = $aop->rsaCheckV1($_POST, NULL, "RSA2");
		return $flag;
	}
	
	
	/**
	 * @param string $merchant_no
	 * @param string $order_no
	 * @param string $product_name
	 * @param float $amount
	 * @param string $notify_url
	 * @return mixed
	 * 高汇通支付宝app支付
	 */
	public function gaohuitongAlipayApp(string $merchant_no,string $order_no,string $product_name,float $amount,string $notify_url){
		$trans_url = url('api/form/gaohuitong');
		$test = env('APP_ENV') == 'online' ? false : true;
		$wangguan = new Wangguan($trans_url,'',$notify_url,$test);
		$form = $wangguan->publicPay($merchant_no,$order_no,$product_name,'ALIPAY',$amount);
		$this->error = $wangguan->getError();
		return $form;
	}
	
	/**
	 * @param string $merchant_no
	 * @param string $order_no
	 * @param string $product_name
	 * @param float $amount
	 * @param string $notify_url
	 * @return mixed
	 * 高汇通微信app支付
	 */
	public function gaohuitongWechatApp(string $merchant_no,string $order_no,string $product_name,float $amount,string $notify_url){
		$trans_url = url('api/form/gaohuitong');
		$test = env('APP_ENV') == 'online' ? false : true;
		$wangguan = new Wangguan($trans_url,'',$notify_url,$test);
		$form = $wangguan->publicPay($merchant_no,$order_no,$product_name,'WECHAT',$amount);
		$this->error = $wangguan->getError();
		return $form;
	}
	
	/**
	 * @param string $merchant_no
	 * @param string $order_no
	 * @param string $product_name
	 * @param float $amount
	 * @param string $return_url
	 * @param string $notify_url
	 * @return mixed
	 * 高汇通支付宝jsapi支付
	 */
	public function gaohuitongAlipayJsapi(string $merchant_no,string $order_no,string $product_name,float $amount,string $return_url,string $notify_url){
		$trans_url = url('api/form/gaohuitong');
		$test = env('APP_ENV') == 'online' ? false : true;
		$wangguan = new Wangguan($trans_url,$return_url,$notify_url,$test);
		$form = $wangguan->publicPay($merchant_no,$order_no,$product_name,'PUBLICALIPAY',$amount);
		$this->error = $wangguan->getError();
		return $form;
	}
	
	/**
	 * @param string $merchant_no
	 * @param string $order_no
	 * @param string $product_name
	 * @param float $amount
	 * @param string $return_url
	 * @param string $notify_url
	 * @param string $openid
	 * @return mixed
	 * 高汇通微信jsapi支付
	 */
	public function gaohuitongWechatJsapi(string $merchant_no,string $order_no,string $product_name,float $amount,string $return_url,string $notify_url,string $appid,string $openid){
		// 高汇通正式需要一个中间地址，来源域名都是备案的，不然提示不合法的url
		$trans_url = url('api/form/gaohuitong');
		$test = env('APP_ENV') == 'online' ? false : true;
		$wangguan = new Wangguan($trans_url,$return_url,$notify_url,$test);
		$form = $wangguan->publicPay($merchant_no,$order_no,$product_name,'PUBLICWECHAT',$amount,$appid,$openid);
		$this->error = $wangguan->getError();
		return $form;
	}
	
	/**
	 * @param string $merchant_no
	 * @param string $order_no
	 * @param string $product_name
	 * @param float $amount
	 * @param string $card_no
	 * @param string $return_url
	 * @param string $notify_url
	 * @return mixed
	 * 高汇通银行卡支付，不支持信用卡
	 */
	public function gaohuitongCard(string $merchant_no,string $order_no,string $product_name,float $amount,string $card_no,string $return_url,string $notify_url){
		$trans_url = url('api/form/gaohuitong');
		$test = env('APP_ENV') == 'online' ? false : true;
		$wangguan = new Wangguan($trans_url,$return_url,$notify_url,$test);
		$form = $wangguan->cardPay($merchant_no,$order_no,$product_name,$amount,$card_no);
		$this->error = $wangguan->getError();
		return $form;
	}
	
	/**
	 * @return bool
	 * 高汇通支付
	 */
	public function gaohuitongCheckSign(){
		$request = request();
		$pay_status = $request->input('pay_result');	// 1 支付成功，0 未支付，2 支付失败
		$order_no = $request->input('order_no');
		$pay_no = $request->input('pay_no');
		$wangguan = new Wangguan('','','',env('APP_ENV') == 'online' ? false : true);
		if(!$wangguan->verifyParam($request->except(['s']))){
			return false;
		}
		return true;
	}
	
}
