<?php
/**
 * 支付下单中转类
 */
namespace App\Libraries\Bank;

use App\Models\FundOrder;
use Yansongda\LaravelPay\Facades\Pay;


class OrderUnified {
	protected $error = '';
	
	public function getError(){
		return $this->error;
	}
	
	
	/**
	 * 内部钱包支付扣款
	 * @param string $order_no
	 * @param int $amount
	 * @return bool
	 */
	public function wallet(string $order_no,int $amount){
		$order = new FundOrder();
		$status = $order->complete($order_no,$amount);
		if(!$status){
			logger('['.$order_no.']纯钱包支付最终结果失败');
			abort_500('内部钱包支付扣款失败，请稍后再试');
		}
		return true;
	}
	
	
	
/*************************************************************************************
*                微信支付部分                                                          *
**************************************************************************************/

	/**
	 * 微信APP支付，返回json格式，微信支付SDK调用即可
	 * @param string $order_no
	 * @param int $amount
	 * @param string $product_name
	 * @return \Yansongda\Pay\Gateways\Wechat\AppGateway
	 */
	public function wechatApp(string $order_no,int $amount,string $product_name){
		$param = [
			'out_trade_no'	=> $order_no,
			'body'			=> $product_name,
			'total_fee'		=> $amount,
		];
		// 将返回 json 字符串格式，供后续 APP 调用
		$result = Pay::wechat()->app($param);
		return $result;
	}
	
	/**
	 * 微信H5支付(非公众号支付)，进入微信客户端确认交易，输入支付密码
	 * @param string $order_no
	 * @param int $amount
	 * @param string $product_name
	 * @return \Yansongda\Pay\Gateways\Wechat\WapGateway
	 */
	public function wechatWap(string $order_no,int $amount,string $product_name){
		$param = [
			'out_trade_no'	=> $order_no,
			'body'			=> $product_name,
			'total_fee'		=> $amount,
		];
		// $result['mweb_url'] 为前端直接跳转地址，location.href 跳转可唤醒微信APP支付
		$result = Pay::wechat()->wap($param);
		return $result;
	}
	
	/**
	 * 微信公众号支付
	 * @param string $order_no
	 * @param int $amount
	 * @param string $product_name
	 * @param string $openid
	 * @return \Yansongda\Pay\Gateways\Wechat\MpGateway
	 */
	public function wechatMp(string $order_no,int $amount,string $product_name,string $openid){
		$param = [
			'out_trade_no'	=> $order_no,
			'body'			=> $product_name,
			'total_fee'		=> $amount,
			'openid'		=> $openid,
		];
		// 返回 Collection 实例。包含了调用 JSAPI 的所有参数，如appId，timeStamp，nonceStr，package，signType，paySign 等
		$result = Pay::wechat()->mp($param);
		return $result;
	}
	
	/**
	 * 微信刷卡支付，反扫（商家扫用户）
	 * @param string $order_no
	 * @param int $amount
	 * @param string $product_name
	 * @param string $auth_code
	 * @return \Yansongda\Pay\Gateways\Wechat\PosGateway
	 */
	public function wechatStage(string $order_no,int $amount,string $product_name,string $auth_code){
		$param = [
			'out_trade_no'	=> $order_no,
			'body'			=> $product_name,
			'total_fee'		=> $amount,
			'auth_code'		=> $auth_code,
		];
		// 需要自己调用摄像头得到用户的付款码auth_code，此接口不用判断成功，等待异步回调即可
		$result = Pay::wechat()->pos($param);
		return $result;
	}
	
	/**
	 * 微信扫码支付，正扫（用户扫商家）
	 * 生成临时二维码，供用户微信扫一扫
	 * @param string $order_no
	 * @param int $amount
	 * @param string $product_name
	 * @return \Yansongda\Pay\Gateways\Wechat\ScanGateway
	 */
	public function wechatScan(string $order_no,int $amount,string $product_name){
		$param = [
			'out_trade_no'	=> $order_no,
			'body'			=> $product_name,
			'total_fee'		=> $amount,
		];
		// $result->code_url 为二维码内容(weixin://wxpay/bizpayurl?pr=h1kRidu)，需要自己生成一张二维码，可使用百度API：http://pan.baidu.com/share/qrcode?w=300&h=300&url=
		$result = Pay::wechat()->scan($param);
		return $result;
	}
	
	/**
	 * 微信小程序支付，和公众号支付参数差不多
	 * @param string $order_no
	 * @param int $amount
	 * @param string $product_name
	 * @param string $openid
	 * @return \Yansongda\Pay\Gateways\Wechat\MiniappGateway
	 */
	public function wechatMini(string $order_no,int $amount,string $product_name,string $openid){
		$param = [
			'out_trade_no'	=> $order_no,
			'body'			=> $product_name,
			'total_fee'		=> $amount,
			'openid'		=> $openid,
		];
		// 返回 Collection 实例。包含了调用 JSAPI 的所有参数，如appId，timeStamp，nonceStr，package，signType，paySign 等
		$result = Pay::wechat()->miniapp($param);
		return $result;
	}
	
	
/*************************************************************************************
*                 支付宝支付部分                                                       *
**************************************************************************************/

	/**
	 * 支付宝网页支付，PC端
	 * @param string $order_no
	 * @param int $amount
	 * @param string $product_name
	 * @return \Yansongda\Pay\Gateways\Alipay\WebGateway
	 */
	public function alipayWeb(string $order_no,int $amount,string $product_name){
		$param = [
			'out_trade_no'	=> $order_no,
			'subject'		=> $product_name,
			'total_amount'	=> round($amount / 100,2),
		];
		// 返回form表单，需要前端渲染
		$result = Pay::alipay()->web($param);
		return $result;
	}
	
	/**
	 * 支付宝h5、服务窗支付
	 * @param string $order_no
	 * @param int $amount
	 * @param string $product_name
	 * @return \Yansongda\Pay\Gateways\Alipay\WapGateway
	 */
	public function alipayWap(string $order_no,int $amount,string $product_name){
		$param = [
			'out_trade_no'	=> $order_no,
			'subject'		=> $product_name,
			'total_amount'	=> round($amount / 100,2),
		];
		// 返回form表单，需要前端渲染
		$result = Pay::alipay()->wap($param);
		return $result;
	}
	
	/**
	 * 支付宝APP支付
	 * @param string $order_no
	 * @param int $amount
	 * @param string $product_name
	 * @return \Yansongda\Pay\Gateways\Alipay\AppGateway
	 */
	public function alipayApp(string $order_no,int $amount,string $product_name){
		$param = [
			'out_trade_no'	=> $order_no,
			'subject'		=> $product_name,
			'total_amount'	=> round($amount / 100,2),
		];
		// 返回字符串，直接传递给APP调用即可
		$result = Pay::alipay()->app($param);
		return $result;
	}
	
	/**
	 * 支付宝扫码支付，反扫（商家扫用户）
	 * @param string $order_no
	 * @param int $amount
	 * @param string $product_name
	 * @param string $auth_code
	 * @return \Yansongda\Pay\Gateways\Alipay\PosGateway
	 */
	public function alipayStage(string $order_no,int $amount,string $product_name,string $auth_code){
		$param = [
			'out_trade_no'	=> $order_no,
			'subject'		=> $product_name,
			'total_amount'	=> round($amount / 100,2),
			'auth_code'		=> $auth_code,
		];
		// 需要自己调用摄像头得到用户的付款码auth_code，此接口调用一次，等待异步回调即可
		$result = Pay::alipay()->pos($param);
		return $result;
	}
	
	/**
	 * 支付宝扫码支付，正扫（用户扫商家）
	 * 返回一个临时的二维码内容
	 * @param string $order_no
	 * @param int $amount
	 * @param string $product_name
	 * @return \Yansongda\Pay\Gateways\Alipay\ScanGateway
	 */
	public function alipayScan(string $order_no,int $amount,string $product_name){
		$param = [
			'out_trade_no'	=> $order_no,
			'subject'		=> $product_name,
			'total_amount'	=> round($amount / 100,2),
		];
		// $result->qr_code 为二维码内容，需自己生成二维码图片，可使用百度API：http://pan.baidu.com/share/qrcode?w=300&h=300&url=
		$result = Pay::alipay()->scan($param);
		return $result;
	}
	
	
	
}
