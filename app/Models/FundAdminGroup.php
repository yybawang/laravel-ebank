<?php

namespace App\Models;


class FundAdminGroup extends CommonModel
{
    //
	protected $table = 'fund_admin_group';
	protected $casts = [
		'rule'	=> 'array',
	];
	
	public function scopeActive($query){
		return $query->where(['status'=>1]);
	}
}
