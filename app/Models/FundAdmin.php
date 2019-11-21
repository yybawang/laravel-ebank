<?php

namespace App\Models;


class FundAdmin extends CommonModel
{
    //
	protected $table = 'fund_admin';
	
	public static function md5($password){
		$return = '';
		if($password){
			$return = md5($password.'_yy2017');
		}
		return $return;
	}
}
