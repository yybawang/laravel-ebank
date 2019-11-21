<?php

namespace App\Models;


class FundConfig extends CommonModel
{
    //
	protected $table = 'fund_config';
	
	public static function get($key, $default = ''){
		$value = FundConfig::where(['key'=>$key])->value('value');
		return $value ?? $default;
	}
}
