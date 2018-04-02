<?php

namespace App\Models;


use App\Jobs\OrderNotify;
use App\Libraries\Bank;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class FundOrder extends CommonModel
{
	
	protected $table = 'fund_order';
	
	// 支持的支付方式中文名称
	public $payments = [
		'wallet_cash'			=> '站内现金',
		'wechat_app'			=> '微信APP',
		'wechat_jsapi'			=> '微信公众号',
		'alipay_app'			=> '支付宝APP',
		'alipay_jsapi'			=> '支付宝服务窗',
		// 更多支付方式自行扩展，[键]为 OrderController 对应里的方法名，[值]为需要展示的中文名称
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
			logger($order_no.'并发重复通知，缓存已拦截');
			return false;
		}
		Cache::add($multi_key,1,0.1);
		
		$order = FundOrder::where(['order_no'=>$order_no])->first();
		// 如果此订单存在第三方支付就得到第三方支付的价格进行匹配
		$amount_thread = FundOrderPayment::where(['order_id'=>$order->id])->where('type','not like','wallet_%')->sum('amount');
		if($order){
			if($amount_thread > 0){
				if($amount_thread != $amount){
					logger('三方支付通知订单号['.$order_no.']通知价格不正确，本地价格：'.$amount_thread.'，通知价格：'.$amount);
					return false;
				}
			}elseif($order->amount != $amount){
				logger('钱包支付通知订单号['.$order_no.']通知价格不正确，本地价格：'.$order->amount.'，通知价格：'.$amount);
				return false;
			}
			if(1 == $order->pay_status){
				logger($order_no.'重复通知，订单 pay_status = 1 已支付');
				return false;
			}
			
			$this->_completeOrder($order);
			return true;
		}else{
			logger('异步通知订单号['.$order_no.']未找到');
			bug_email('异步通知订单号['.$order_no.']未找到');
			return false;
		}
	}
	
	
	private function _completeOrder(FundOrder $order){
		DB::transaction(function() use ($order){
			$bank = new Bank();
			// 系统钱包增加金额，流水为充值，用户钱包支付部分就是用户到系统。
			FundOrderPayment::where(['order_id'=>$order->id])->pluck('amount','type')->each(function($amount,$type) use ($order,$bank){
				$uid = $order->user_id;
				if($amount <= 0){
					return true;
				}
				// 如果是用户，就是回转到系统
				if(stripos($type,'wallet_') === 0){
					$purse_type = ucfirst(substr(strstr($type, '_'), 1));
					$transfer_alias = 'user'.$purse_type.'ToSystem'.$purse_type;
					$bank->$transfer_alias($uid,0,$amount,10004,0,$order->order_no);
				}else{
					$bank->transfer(0,0,$amount,10002,0,$order->order_no);	// 为凭空出来的钱，所以先从中央银行扣款到系统
					$bank->transfer(0,$uid,$amount,10003,0,$order->order_no);	// 系统先给用户充值，走流水
					$bank->transfer($uid,0,$amount,10004,0,$order->order_no);	// 再转回系统，订单支付
				}
			});
			
			// 保存支付时间和状态
			$order->pay_status = 1;
			$order->pay_time = time2date();
			$order->save();
			
			
			// 异步通知到商户
			OrderNotify::dispatch($order->order_no)->onQueue('order_notify');
		});
		return true;
	}
}
