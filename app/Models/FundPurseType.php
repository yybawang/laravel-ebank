<?php

namespace App\Models;


class FundPurseType extends CommonModel
{
    //
	protected $table = 'fund_purse_type';
	
	public function scopeActive($query){
		return $query->where(['status'=>1]);
	}
}
