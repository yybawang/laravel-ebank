<?php

namespace App\Models;


class FundMerchantGroup extends CommonModel
{
    //
	protected $table = 'fund_merchant_group';
	
	public function scopeActive($query){
		return $query->where(['status'=>1]);
	}
}
