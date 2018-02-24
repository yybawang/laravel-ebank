<?php

namespace App\Models;


class FundOrder extends CommonModel
{
	
	protected $table = 'fund_order';
	
	// 支持的支付方式中文名称
	public $payments = [
		'wallet_cash'		=> '站内现金',
		'wallet_income'		=> '站内收益',
	];
	
	/**
	 * 支付方式一对多表
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function payment(){
		return $this->hasMany('App\Models\FundOrderPayment','order_id','id');
	}
}
