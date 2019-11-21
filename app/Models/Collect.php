<?php

namespace App\Models;

class Collect extends CommonModel
{
	//  定义可用的渠道
	const TYPES = [
		['id'=> 1, 'name'=> '支付宝'],
		['id'=> 2, 'name'=> '微信'],
	];
	
    public function scopeActive($query){
    	return $query->where('status', 1);
	}
	
	public function qrcodes(){
    	return $this->hasMany(CollectQrcode::class);
	}
}
