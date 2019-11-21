<?php
namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Libraries\Bank\EBank;
use App\Libraries\ExportCsv;
use App\Models\FundMerchant;
use App\Models\FundPurseType;
use App\Models\FundTransfer;
use App\Models\FundTransferReason;
use App\Models\FundUserType;
use Illuminate\Support\Facades\DB;

class ReasonController extends CommonController {
	
	/**
	 * 转账行为 reason 代码管理
	 * @param Request $request
	 * @return array
	 */
	public function index(Request $request){
		$data['user_type'] = FundUserType::active()->pluck('name','id');
		$data['purse_type'] = FundPurseType::active()->pluck('name','id');
		$data['merchant'] = FundMerchant::active()->pluck('name','id');
		$data['list'] = FundTransferReason::where(['merchant_id'=>$request->input('merchant_id')])
			->when($request->input('id'),function($query) use ($request){
				$query->where('id',$request->input('id'));
			})
			->when($request->input('name'),function($query) use ($request){
				$query->where('name','like','%'.$request->input('name').'%');
			})
			->when($request->input('reason'),function($query) use ($request){
				$query->where('reason','like','%'.$request->input('reason').'%');
			})
			->orderBy('id','desc')
			->pages();
		return json_success('OK',$data);
	}
	
	public function detail(Request $request,int $id){
		$max = FundTransferReason::orderByDesc('id')->value('id');	// 找出最大的ID，用于自动生成reason
		$max++;
		$data['detail'] = FundTransferReason::firstOrNew(['id'=>$id],[
			'merchant_id'		=> 0,
			'name'				=> '',
			'out_user_type_id'	=> 0,
			'out_purse_type_id'	=> 0,
			'into_user_type_id'	=> 0,
			'into_purse_type_id'=> 0,
			'reason'			=> '',
			'status'			=> 1,
			'remarks'			=> '',
		]);
		$data['max'] = $max;
		return json_success('OK',$data);
	}
	
	public function add(Request $request){
		request()->validate([
			'merchant_id'		=> 'required|integer|min:1',
			'name'				=> 'required',
			'reason'			=> 'required|integer|min:1',
			'out_user_type_id'	=> 'required|integer|min:1',
			'out_purse_type_id'	=> 'required|integer|min:1',
			'into_user_type_id'	=> 'required|integer|min:1',
			'into_purse_type_id'=> 'required|integer|min:1',
		]);
		$post = $request->all();
		$post['reason'] = strtolower($post['reason']);
		$id = FundTransferReason::updateOrCreate(['id'=>$post['id']],$post)->id;
		return json_return($id,'','',['id'=>$id]);
	}
	
	public function delete(Request $request){
		$id = $request->input('id');
		$var = FundTransferReason::destroy($id);
		return json_return($var);
	}
}
