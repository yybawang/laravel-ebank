<?php

namespace App\Models;


class FundMerchant extends CommonModel
{
    //
	protected $table = 'fund_merchant';
	
	public function scopeActive($query){
		return $query->where(['status'=>1]);
	}
}
