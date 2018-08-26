<?php

namespace App\Models;


class FundMerchantGroup extends CommonModel
{
    //
	protected $table = 'fund_merchant_group';
	
	// Eloquent 修改器，自动格式化/反格式化json
	protected $casts = [
		'pay_config'	=> 'array',
	];
	
	public function scopeActive($query){
		return $query->where(['status'=>1]);
	}
}
