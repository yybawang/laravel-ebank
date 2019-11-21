<?php

namespace App\Models;


use App\Libraries\ExportCsv;
use Illuminate\Database\Eloquent\Builder;

class FundTransfer extends CommonModel
{
    //
	protected $table = 'fund_transfer';
	
	public function scopeActive($query){
		return $query->where(['status'=>1]);
	}
	
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
	
	/**
	 * 导出任务到队列服务
	 * @param Builder $model
	 * @return bool
	 */
	public function export(Builder $model){
		return (new ExportCsv())
			->name('导出资金流水')
			->field(['id'=>'转账ID','reason'=>'转账reason行为','amount'=>'转账金额','out_user_id'=>'出账用户ID','out_user_type_id'=>'出账身份类型ID','out_purse_type_id'=>'出账钱包类型ID','out_purse_id'=>'出账钱包ID','out_balance'=>'出账后余额','into_user_id'=>'进账用户ID','into_user_type_id'=>'进账身份类型ID','into_purse_type_id'=>'进账钱包类型ID','into_purse_id'=>'进账钱包ID','into_balance'=>'进账后余额','parent_id'=>'父关联转账ID','status'=>'状态：1有效，2已冲正','detail'=>'detail','remarks'=>'备注','created_at'=>'创建时间'])
			->data($model)
			->save();
	}
	
	
	/**
	 * 递归查找父级（示例）
	 */
	public function parents(){
		$data = collect();
		$parent_id = $this->getAttribute('parent_id');
		$find = $this->where(['id'=>$parent_id])->first();
		if($find){
			$data2 = $find->parents();
			$data = $data2->push($find);
		}
		return $data;
	}
}
