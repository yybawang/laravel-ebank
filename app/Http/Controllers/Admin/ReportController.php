<?php
namespace App\Http\Controllers\Admin;

use App\Http\Requests\BasicRequest;
use App\Models\FundMerchant;
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
		$data['merchant'] = FundMerchant::pluck('name','id');
		$data['user_type'] = FundUserType::pluck('name','id');
		$data['purse_type'] = FundPurseType::pluck('name','id');
		$data['list'] = FundTransfer::select(DB::raw('r.reason,sum(amount) amount,r.name reason_name,r.out_user_type_id,r.out_purse_type_id,r.into_user_type_id,r.into_purse_type_id,r.remarks reason_remarks'))
			->leftJoin('fund_transfer_reason as r','r.reason','=','fund_transfer.reason')
			->when($request->input('merchant_id'),function($query) use ($request){
				$query->where('fund_transfer.merchant_id',$request->input('merchant_id'));
			})
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
		$merchant = FundMerchant::pluck('name','id');
		$user_type = FundUserType::pluck('name','id');
		$purse_type = FundPurseType::pluck('name','id');
		$list = [];
		$user_type->each(function($v,$user_type_id) use (&$list,$purse_type,$request){
			$purse_type->each(function($v,$purse_type_id) use (&$list,$user_type_id,$request){
				$amount_into = FundTransfer::when($request->input('merchant_id'),function($query) use ($request){
					$query->where('merchant_id',$request->input('merchant_id'));
				})
					->where(['status'=>1,'into_user_type_id'=>$user_type_id,'into_purse_type_id'=>$purse_type_id])
					->sum('amount');
				$amount_out = FundTransfer::when($request->input('merchant_id'),function($query) use ($request){
					$query->where('merchant_id',$request->input('merchant_id'));
				})
					->where(['status'=>1,'out_user_type_id'=>$user_type_id,'out_purse_type_id'=>$purse_type_id])
					->sum('amount');
//				$list[$user_type_id][$purse_type_id] = '出:'.$amount_out.'　进:'.$amount_into;
				$list[$user_type_id][$purse_type_id] = ['out'=> $amount_out,'into'=>$amount_into];
			});
		});
		$data = [
			'merchant'		=> $merchant,
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