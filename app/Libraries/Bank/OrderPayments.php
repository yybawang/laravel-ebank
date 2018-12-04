<?php
/**
 * Created by PhpStorm.
 * User: yy
 * Date: 2018-03-31
 * Time: 22:21
 */

namespace App\Libraries\Bank;


use Illuminate\Support\Facades\Cache;

class OrderPayments
{
	private $merchant_id;
	private $order_no;
	private $amount_thread;
	private $amount_wallet;
	private $product_name;
	public function __construct($merchant_id,$order_no,$amount_thread,$amount_wallet,$product_name)
	{
		$this->merchant_id = $merchant_id;
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
			exception('请求频繁，请稍后再试');
		}
		Cache::add($cache_key,1,0.1);	// 6秒钟
		$order_unified = new OrderUnified();
		$order_unified->wallet($this->order_no,$this->amount_wallet);
		return [
			'order_no'	=> $this->order_no,
			'type'		=> 'wallet',
			'platform'	=> 'wallet',
			'content'	=> ''	// 内部支付直接成功，无需其他操作
		];
	}
	
	public function wechat_app(){
		$order_unified = new OrderUnified();
		$result = $order_unified->wechatApp($this->order_no,$this->amount_thread,$this->product_name);
		return [
			'order_no'	=> $this->order_no,
			'type'		=> 'app',
			'platform'	=> 'wechat',
			'content'	=> $result
		];
	}
	
//	返回示例
//"content" => array:6 [
//"appId" => "wx6e6f5d388ee3340f"
//"timeStamp" => "1525243594"
//"nonceStr" => "GDKr4fATsxZACvnD"
//"package" => "prepay_id=wx02144634499986be6acca6341866197768"
//"signType" => "MD5"
//"paySign" => "C22821291CCBFF40625539A05CB01624"
//]
	// 记得把微信授权地址改为此ebank的地址 url('api/form/wechat')
	public function wechat_mp(){
		$param = request()->validate([
			'openid'	=> 'required',
		]);
		$order_unified = new OrderUnified();
		$result = $order_unified->wechatMp($this->order_no,$this->amount_thread,$this->product_name,$param['openid']);
		$html = build_form(url('api/form/wechat'),['sign'=>json_encode($result),'return_url'=>url('api/return/wechat?pay_status=')]);
		return [
			'order_no'	=> $this->order_no,
			'type'		=> 'form',
			'platform'	=> 'wechat',
			'content'	=> $html
		];
	}
	
	public function wechat_wap(){
		$order_unified = new OrderUnified();
		$result = $order_unified->wechatWap($this->order_no,$this->amount_thread,$this->product_name);
		return [
			'order_no'	=> $this->order_no,
			'type'		=> 'url',	// location.href 跳转
			'platform'	=> 'wechat',
			'content'	=> $result->mweb_url
		];
	}
	
	public function wechat_stage(){
		$param = request()->validate([
			'auth_code'	=> 'required',
		]);
		$order_unified = new OrderUnified();
		$result = $order_unified->wechatStage($this->order_no,$this->amount_thread,$this->product_name,$param['auth_code']);
		return [
			'order_no'	=> $this->order_no,
			'type'		=> 'stage',
			'platform'	=> 'wechat',
			'content'	=> $result
		];
	}
	
	public function wechat_scan(){
		$order_unified = new OrderUnified();
		$result = $order_unified->wechatScan($this->order_no,$this->amount_thread,$this->product_name);
		return [
			'order_no'	=> $this->order_no,
			'type'		=> 'qrcode',	// location.href 跳转
			'platform'	=> 'wechat',
			'content'	=> $result->code_url
		];
	}
	
	public function wechat_mini(){
		$param = request()->validate([
			'openid'	=> 'required',
		]);
		$order_unified = new OrderUnified();
		$result = $order_unified->wechatMini($this->order_no,$this->amount_thread,$this->product_name,$param['openid']);
		return [
			'order_no'	=> $this->order_no,
			'type'		=> 'mini',
			'platform'	=> 'wechat',
			'content'	=> $result
		];
	}
	
	
	public function alipay_web(){
		$order_unified = new OrderUnified();
		$result = $order_unified->alipayWeb($this->order_no,$this->amount_thread,$this->product_name);
		return [
			'order_no'	=> $this->order_no,
			'type'		=> 'form',
			'platform'	=> 'alipay',
			'content'	=> $result
		];
	}
	
	public function alipay_wap(){
		$order_unified = new OrderUnified();
		$result = $order_unified->alipayWap($this->order_no,$this->amount_thread,$this->product_name);
		return [
			'order_no'	=> $this->order_no,
			'type'		=> 'form',
			'platform'	=> 'alipay',
			'content'	=> $result
		];
	}
	
	public function alipay_app(){
		$order_unified = new OrderUnified();
		$result = $order_unified->alipayApp($this->order_no,$this->amount_thread,$this->product_name);
		return [
			'order_no'	=> $this->order_no,
			'type'		=> 'app',
			'platform'	=> 'alipay',
			'content'	=> $result
		];
	}
	
	public function alipay_stage(){
		$param = request()->validate([
			'auth_code'	=> 'required',
		]);
		$order_unified = new OrderUnified();
		$result = $order_unified->alipayStage($this->order_no,$this->amount_thread,$this->product_name,$param['auth_code']);
		return [
			'order_no'	=> $this->order_no,
			'type'		=> 'stage',
			'platform'	=> 'alipay',
			'content'	=> $result
		];
	}
	
	public function alipay_scan(){
		$order_unified = new OrderUnified();
		$result = $order_unified->alipayScan($this->order_no,$this->amount_thread,$this->product_name);
		return [
			'order_no'	=> $this->order_no,
			'type'		=> 'qrcode',
			'platform'	=> 'alipay',
			'content'	=> $result->qr_code
		];
	}
}