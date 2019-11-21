<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CommonModel extends Model
{
	protected $guarded = [];	// 列出想被批量复制保护的字段，取反即为都可以被批量复制，用于 firstOrCreate()、updateOrCreate() 等方法快捷增改
	// 分页数量
	protected $page_size = 20;
	
	public function scopePages($query){
		$page_size = request()->input('rows',$this->page_size);
		return $query->paginate($page_size);
	}
}
