<?php
namespace App\Http\Controllers\Admin;

use App\Http\Requests\BasicRequest;
use App\Models\FundPurseType;
use App\Models\FundTransfer;
use App\Models\FundTransferReason;
use App\Models\FundUserType;
use Illuminate\Support\Facades\DB;

class ReportController extends CommonController {
	
	/**
	 * reason 分组交易金额统计
	 * @param BasicRequest $request
	 * @return array
	 */
	public function reason(BasicRequest $request){
		$data['user_type'] = FundUserType::active()->pluck('name','id');
		$data['purse_type'] = FundPurseType::active()->pluck('name','id');
		$data['list'] = FundTransfer::select(DB::raw('r.reason,sum(amount) amount,r.name reason_name,r.out_user_type_id,r.out_purse_type_id,r.into_user_type_id,r.into_purse_type_id,r.remarks reason_remarks'))
			->leftJoin('fund_transfer_reason as r','r.reason','=','fund_transfer.reason')
			->where(['fund_transfer.status'=>1])
			->groupBy('r.reason')
			->orderBy('r.reason','desc')
			->pages();
		return json_success('OK',$data);
	}
	
	/**
	 * 根据 reason 获取列表
	 * @param BasicRequest $request
	 * @return array
	 */
	public function reason_detail(BasicRequest $request){
		$reason = $request->input('reason');
		$data = FundTransfer::where(['reason'=>$reason,'status'=>1])->orderBy('id','desc')->pages();
		return json_success('OK',$data);
	}
	
	/**
	 * 统计钱包进出账金额
	 * @param BasicRequest $request
	 * @return array
	 */
	public function purse(BasicRequest $request){
		$user_type = FundUserType::active()->pluck('name','id');
		$purse_type = FundPurseType::active()->pluck('name','id');
		$list = [];
		$user_type->each(function($v,$user_type_id) use (&$list,$purse_type){
			$purse_type->each(function($v,$purse_type_id) use (&$list,$user_type_id){
				$amount_into = FundTransfer::where(['status'=>1,'into_user_type_id'=>$user_type_id,'into_purse_type_id'=>$purse_type_id])->sum('amount');
				$amount_out = FundTransfer::where(['status'=>1,'out_user_type_id'=>$user_type_id,'out_purse_type_id'=>$purse_type_id])->sum('amount');
//				$list[$user_type_id][$purse_type_id] = '出:'.$amount_out.'　进:'.$amount_into;
				$list[$user_type_id][$purse_type_id] = ['out'=> $amount_out,'into'=>$amount_into];
			});
		});
		$data = [
			'user_type'		=> $user_type,
			'purse_type'	=> $purse_type,
			'list'			=> $list,
		];
		return json_success('OK',$data);
	}
	
	/**
	 * 钱包进出账详情
	 * @param BasicRequest $request
	 * @return array
	 */
	public function purse_detail(BasicRequest $request){
		$post = request()->validate([
			'user_type_id'	=> 'required|integer|min:1',
			'purse_type_id'	=> 'required|integer|min:1',
			'type'			=> 'required',
		]);
		$data['reason'] = FundTransferReason::where(['status'=>1])->pluck('name','reason');
		$data['list'] = FundTransfer::select(['id','out_user_id','into_user_id','reason','amount','created_at'])
			->where([
				'status' => 1,
				$post['type'].'_user_type_id' => $post['user_type_id'],
				$post['type'].'_purse_type_id' => $post['purse_type_id'],
			])
			->orderBy('id','desc')
			->pages();
		return json_success('OK',$data);
	}
}