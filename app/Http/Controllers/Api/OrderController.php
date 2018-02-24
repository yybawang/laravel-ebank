<?php
namespace App\Http\Controllers\Api;

use App\Exceptions\ApiException;
use App\Http\Requests\ApiPayUnifiedAlipayJsapiRequest;
use App\Http\Requests\OrderUnifiedRequest;
use App\Http\Requests\ApiPayUnifiedWechatJsapiRequest;
use App\Libraries\PayUnified;
use App\Models\FundMerchant;
use App\Models\FundOrder;
use App\Models\FundOrderPayment;
use App\Models\FundPurseType;
use Illuminate\Support\Facades\DB;

class OrderController extends CommonController {
	protected $order_no;
	protected $product_name;
	protected $amount;
	protected $openid;
	protected $pay_type_thread_count = 0;
	
	
	/**
	 * 包含了基本的支付请求参数
	 * @param OrderUnifiedRequest $request
	 * @return mixed
	 */
	public function unified(OrderUnifiedRequest $request){
		$basic_param = $request->only(['user_id','appid','order_no','order_type','product_name','amount','return_url','notify_url','pay_type_group']);
		$this->order_no = $basic_param['order_no'];
		$this->product_name = $basic_param['product_name'];
//		$this->amount = $basic_param['amount'];
//		$this->return_url = url('api/form/return_distribution');
//		$this->notify_url = url('api/form/notify_distribution');
		$pay_type_group = array_filter($basic_param['pay_type_group']);
		$pay_type_thread = '';
		$pay_type_thread_count = 0;
		$pay_type_wallet_count = 0;
		$amount = 0;
		$param_all = json_encode($request->all());
		
		// 钱包类型列表
		$purse_type = FundPurseType::where(['status'=>1])->pluck('alias')->toArray();
		
		foreach($pay_type_group as $pay_type=>$price){
			// 如果是第三方支付
			if(method_exists($this,$pay_type)){
				$pay_type_thread = $pay_type;
				$pay_type_thread_count++;
			}elseif(in_array(substr(strstr($pay_type,'_'),1),$purse_type)){		// 如果是内部钱包支付
				$pay_type_wallet_count++;
			}else{
			
			}
			$amount += $price;
		}
		// 如果第三方支付+内部钱包支付不登录组合支付数量，就是参数有误
		if($pay_type_thread_count + $pay_type_wallet_count != count($pay_type_group)){
			abort_500('组合支付参数中存在不支持的扣款类型');
		}
		if($amount < 1){
			abort_500('订单金额不能少于1');
		}
		if($pay_type_thread && $pay_type_thread_count != 1){
			abort_500('存在多个第三方支付，请修改组合支付方式');
		}
		
		if($pay_type_thread){
			$pay_type_unified = $pay_type_thread;
		}else{
			$pay_type_unified = 'wallet';
		}
		$this->amount = $amount;
		$this->pay_type_thread_count = $pay_type_thread_count;
		
		// 下单存表
		$merchant_id = FundMerchant::where(['appid'=>$basic_param['appid']])->value('id');
		
		$exist = FundOrder::where(['merchant_id'=>$merchant_id,'order_no'=>$this->order_no])->first();
		// 如果已支付，订单就不用再支付了
		if($exist->pay_status == 1){
			abort_500('商户订单已支付完成，无需再次支付');
		}
		DB::beginTransaction();
		if($exist){
			// 如果存在判断参数是否统一，不统一无法继续支付
			if($param_all != $exist->param){
				abort_500('商户订单号已存在但参数不同，无法继续支付');
			}
		}else{
			$add = [
				'user_id'		=> $basic_param['user_id'],
				'merchant_id'	=> $merchant_id,
				'order_no'		=> $this->order_no,
				'order_type'	=> $basic_param['order_type'],
				'product_name'	=> $this->product_name,
				'amount'		=> $this->amount,
				'return_url'	=> $basic_param['return_url'],
				'notify_url'	=> $basic_param['notify_url'],
				'param'			=> $param_all,
				'pay_status'	=> 0,
				'notify_status'	=> 0,
				'status'		=> 1,
			];
			$id = FundOrder::create($add)->id;
			
			// 存入支付方式表
			foreach($pay_type_group as $pay_type => $price){
				$add_payment = [
					'order_id'	=> $id,
					'type'		=> $pay_type,
					'amount'	=> $price,
				];
				FundOrderPayment::create($add_payment);
			}
			
			if(empty($id)){
				abort_500('下单信息存储失败，请稍后重试');
			}
		}
		$return = $this->$pay_type_unified();
		DB::commit();
		return $return;
	}
	
	
	/**
	 * 内部钱包支付扣款
	 * @return array
	 * @throws ApiException
	 * @throws \Exception
	 */
	public function wallet(){
		// 防多次点击
		$cache_key = md5(serialize(request()->all()));
		$cache_val = cache($cache_key);
		if($cache_val){
			abort_500('请求频繁，请稍后再试');
		}
		cache([$cache_key=>1],0.1);	// 6秒钟
		if($this->pay_type_thread_count != 0){
			abort_500('组合支付中存在三方支付，无法调用内部支付');
		}
		$pay_unified = new PayUnified();
		$status = $pay_unified->wallet($this->order_no,$this->amount);
		return json_return($status,$pay_unified->getError(),'支付成功',['order_no'=>$this->order_no,'type'=>'wallet','platform'=>'wallet','content'=>'']);
	}
	
	/**
	 * 微信APP支付
	 * @return array
	 */
	public function wechat_app(){
		$pay_unified = new PayUnified();
		$notify_url = url('api/notify/wechat');
		$sign = $pay_unified->wechatApp($this->order_no,$this->product_name,$this->amount,$notify_url);
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
		$pay_unified = new PayUnified();
		$openid = request()->input('openid');
		$return_url = url('api/return/wechat');
		$notify_url = url('api/notify/wechat');
		$sign = $pay_unified->wechatJsapi($openid,$this->order_no,$this->product_name,$this->amount,$notify_url);
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
		$pay_unified = new PayUnified();
		$notify_url = url('api/notify/alipay');
		$sign = $pay_unified->alipayApp($this->order_no,$this->product_name,$this->amount,$notify_url);
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
		$pay_unified = new PayUnified();
		$return_url = url('api/return/alipay');
		$notify_url = url('api/notify/alipay');
		$html = $pay_unified->alipayJsapi($this->order_no,$this->product_name,$this->amount,$return_url,$notify_url);
		return json_success('OK',['order_no'=>$this->order_no,'type'=>'wap','platform'=>'alipay','content'=>$html]);
	}
	
}
