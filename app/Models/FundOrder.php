<?php

namespace App\Models;


use App\Jobs\OrderNotify;
use App\Libraries\Bank\EBank;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class FundOrder extends CommonModel
{
	
	protected $table = 'fund_order';
	protected $casts = [
		'notify_param'	=> 'array',
	];
	
	// 支持的支付方式中文名称
	public $payments = [
		'wallet_cash'			=> '站内现金钱包',
		'wallet_withdraw'		=> '站内提现钱包',
		'wallet_credit'			=> '站内授信钱包',
		'wechat_app'			=> '微信APP',
		'wechat_mp'				=> '微信公众号',
		'wechat_wap'			=> '微信H5',
		'wechat_stage'			=> '微信反扫',
		'wechat_scan'			=> '微信正扫',
		'wechat_mini'			=> '微信小程序',
		
		'alipay_app'			=> '支付宝APP',
		'alipay_web'			=> '支付宝PC网页',
		'alipay_wab'			=> '支付宝H5',
		'alipay_stage'			=> '支付宝反扫',
		'alipay_scan'			=> '支付宝正扫',
		// 更多支付方式自行扩展，[键]为 OrderController 对应里的方法名，[值]为需要展示的中文名称，如未指定中文则显示方法名
	];
	
	
	
	/**
	 * 支付方式一对多表
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function payment(){
		return $this->hasMany('App\Models\FundOrderPayment','order_id','id');
	}
	
	/**
	 * 后台手动更改支付完成
	 * @param int $id
	 * @return bool
	 */
	public function completeAdmin(int $id){
		$order = $this->findOrFail($id);
		return $this->_completeOrder($order);
	}
	
	
	/**
	 * 支付完成回调
	 * @param string $order_no 表里存在的订单号
	 * @param int $amount 金额单位分
	 * @return bool
	 */
	public function complete(string $order_no,int $amount){
		$multi_key = 'notifyController_complete'.$order_no.'_'.$amount;
		if(Cache::has($multi_key)){
			exception($order_no.'并发重复通知，缓存已拦截');
		}
		Cache::add($multi_key,1,0.1);
		
		$order = FundOrder::where(['order_no'=>$order_no])->firstOrFail();
		// 如果此订单存在第三方支付就得到第三方支付的价格进行匹配
		$amount_thread = FundOrderPayment::where(['order_id'=>$order->id])->where('type','not like','wallet_%')->sum('amount');
		if($amount_thread > 0 && $amount_thread != $amount){
			exception('三方支付通知订单号['.$order_no.']通知价格不正确，本地价格：'.$amount_thread.'，通知价格：'.$amount);
		}
		if($amount_thread <= 0 && $order->amount != $amount){
			exception('钱包支付通知订单号['.$order_no.']通知价格不正确，本地价格：'.$order->amount.'，通知价格：'.$amount);
		}
		if(1 <= $order->pay_status){
			exception($order_no.'重复通知，订单 pay_status = 1 已支付');
		}
		
		$this->_completeOrder($order);
		return true;
	}
	
	
	private function _completeOrder(FundOrder $order){
		DB::transaction(function() use ($order){
			$EBank = new EBank();
			// 系统钱包增加金额，流水为充值，用户钱包支付部分就是用户到系统。
			FundOrderPayment::where(['order_id'=>$order->id])->pluck('amount','type')->each(function($amount,$type) use ($order,$EBank){
				$uid = $order->user_id;
				if($amount <= 0){
					return true;
				}
				
				// 如果是用户，就是回转到系统
				if(stripos($type,'wallet_') === 0){
					$purse_type = ucfirst(substr(strstr($type, '_'), 1));
					$transfer_alias = 'user'.$purse_type.'ToSystem'.$purse_type;
					$EBank->$transfer_alias($order->merchant_id,$uid,0,$amount,$order->order_no,'内部钱包支付成功扣款',1);
				}else{
					$EBank->centralCashToSystemCash($order->merchant_id,0,0,$amount,$order->order_no,'三方支付成功，中央银行现金拨款',2);	// 为凭空出来的钱，所以先从中央银行扣款到系统
					$EBank->systemCashToUserCash($order->merchant_id,0,$uid,$amount,$order->order_no,'用户充值',3);	// 系统先给用户充值，走流水
					$EBank->userCashToSystemCash($order->merchant_id,$uid,0,$amount,$order->order_no,'订单支付',4);	// 再转回系统，订单支付
				}
			});
			
			// 保存支付时间和状态
			$order->pay_status = 1;
			$order->pay_time = time2date();
			$order->save();
			
			
			// 异步通知到商户
			OrderNotify::dispatch($order->order_no)->onQueue(queue_name('order_notify'));
		});
		return true;
	}
}
