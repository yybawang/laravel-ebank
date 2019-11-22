<?php

namespace App\Models;

class FundCollect extends CommonModel
{
	//  定义可用的渠道
	const TYPES = [
		['id'=> 1, 'name'=> '支付宝'],
		['id'=> 2, 'name'=> '微信'],
	];
    //  定义可用的渠道
    const LIMIT_TYPES = [
        ['id'=> 1, 'name'=> '普通模式'],
        ['id'=> 2, 'name'=> '跑分模式'],
    ];
	
    public function scopeActive($query){
    	return $query->where('status', 1);
	}
	
	public function qrcodes(){
    	return $this->hasMany(FundCollectQrcode::class, 'collect_id', 'id');
	}
}
