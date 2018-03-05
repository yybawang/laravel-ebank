<?php

namespace App\Models;


class FundConfig extends CommonModel
{
    //
	protected $table = 'fund_config';
	
	public static function get($key){
		$value = FundConfig::where(['key'=>$key])->value('value');
		return $value;
	}
}
