<?php

namespace App\Models;


class FundFreeze extends CommonModel
{
    //
	protected $table = 'fund_freeze';
	
	/**
	 * 是否已经被冻结过
	 * @param int $id
	 * @return bool
	 */
	public static function isFreeze(int $id){
		$status = FundFreeze::where(['id'=>$id])->value('status');
		return $status == 1 ? false : true;
	}
}
