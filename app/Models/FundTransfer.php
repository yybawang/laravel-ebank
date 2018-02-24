<?php

namespace App\Models;


class FundTransfer extends CommonModel
{
    //
	protected $table = 'fund_transfer';
	
	public function out_user_type(){
		return $this->hasOne('\App\Models\FundUserType','id','out_user_type_id');
	}
	
	public function into_user_type(){
		return $this->hasOne('\App\Models\FundUserType','id','into_user_type_id');
	}
	
	
	public function out_purse_type(){
		return $this->hasOne('\App\Models\FundPurseType','id','out_purse_type_id');
	}
	
	public function into_purse_type(){
		return $this->hasOne('\App\Models\FundPurseType','id','into_purse_type_id');
	}
}
