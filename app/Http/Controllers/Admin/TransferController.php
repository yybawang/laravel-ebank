<?php
namespace App\Http\Controllers\Admin;

use App\Http\Requests\BasicRequest;
use App\Libraries\Bank\EBank;
use App\Libraries\ExportCsv;
use App\Models\FundMerchant;
use App\Models\FundPurseType;
use App\Models\FundTransfer;
use App\Models\FundTransferReason;
use App\Models\FundUserType;
use Illuminate\Support\Facades\DB;

class TransferController extends CommonController {
	
	/**
	 * 转账记录管理
	 * @param BasicRequest $request
	 * @return array
	 */
	public function index(BasicRequest $request){
		$data['user_type'] = FundUserType::active()->pluck('name','id');
		$data['purse_type'] = FundPurseType::active()->pluck('name','id');
		$data['merchant'] = FundMerchant::active()->pluck('name','id');
		$data['reason'] = FundTransferReason::where(['status'=>1])->pluck('name','reason');
		$model = FundTransfer::select(DB::raw('*,1 as more'))->when($request->input('user_id'),function($query) use ($request){
			$query->where(function($query) use ($request){
				$query->where('out_user_id','like','%'.$request->input('user_id').'%')->orWhere('into_user_id','like','%'.$request->input('user_id').'%');
			});
		})
			->when($request->input('purse_type_id'),function($query) use ($request){
				$query->where(function($query) use ($request){
					$query->whereIn('out_purse_type_id',$request->input('purse_type_id'))->orWhere(function($query) use ($request){
						$query->whereIn('into_purse_type_id',$request->input('purse_type_id'));
					});
				});
			})
			->when($request->input('user_type_id'),function($query) use ($request){
				$query->where(function($query) use ($request){
					$query->whereIn('out_user_type_id',$request->input('user_type_id'))->orWhere(function($query) use ($request){
						$query->whereIn('into_user_type_id',$request->input('user_type_id'));
					});
				});
			})
			->when($request->input('merchant_id'),function($query) use ($request){
				$query->where('merchant_id',$request->input('merchant_id'));
			})
			->when($request->input('reason'),function($query) use ($request){
				$query->where('reason',$request->input('reason'));
			})
			->when($request->input('date'),function($query) use ($request){
				$query->where('created_at','>',$request->input('date.0').' 00:00:00')->where('created_at','<=',$request->input('date.1').' 23:59:59');
			})
			->orderBy('id','desc');
		if($request->input('export')){
			$model2 = clone $model;
			(new ExportCsv())
				->name('导出资金流水')
				->field(['id'=>'转账ID','reason'=>'转账reason行为','amount'=>'转账金额','out_user_id'=>'出账用户ID','out_user_type_id'=>'出账身份类型ID','out_purse_type_id'=>'出账钱包类型ID','out_purse_id'=>'出账钱包ID','out_balance'=>'出账后余额','into_user_id'=>'进账用户ID','into_user_type_id'=>'进账身份类型ID','into_purse_type_id'=>'进账钱包类型ID','into_purse_id'=>'进账钱包ID','into_balance'=>'进账后余额','parent_id'=>'父关联转账ID','status'=>'状态：1有效，2已冲正','detail'=>'detail','remarks'=>'备注','created_at'=>'创建时间'])
//				->data($model2/*->get()->each(function($v){$v->out_user_type_name = $v->out_user_type->name;$v->out_purse_type_name = $v->out_purse_type->name;$v->into_user_type_name = $v->into_user_type->name;$v->into_purse_type_name = $v->into_purse_type->name;})*/)
				->data($model2)
				->save();
		}
		$data['list'] = $model->pages();
		return json_success('OK',$data);
	}
	
	// 转账记录冲正，原路返还
	public function untransfer(BasicRequest $request){
		$id = $request->input('id');
		$remarks = $request->input('remarks');
		$bank = new EBank();
		$bool = $bank->untransfer($id,$remarks);
		return json_return($bool);
	}
	
	/**
	 * 转账行为 reason 代码管理
	 * @param BasicRequest $request
	 * @return array
	 */
	public function reason(BasicRequest $request){
		$data['user_type'] = FundUserType::active()->pluck('name','id');
		$data['purse_type'] = FundPurseType::active()->pluck('name','id');
		$data['merchant'] = FundMerchant::where(['status'=>1])->pluck('name','id');
		$data['list'] = FundTransferReason::where(['merchant_id'=>$request->input('merchant_id')])
			->when($request->input('name'),function($query) use ($request){
				$query->where('name','like','%'.$request->input('name').'%');
			})
			->when($request->input('reason'),function($query) use ($request){
				$query->where('reason','like','%'.$request->input('reason').'%');
			})
			->when($request->input('merchant_id'),function($query) use ($request){
				$query->where('merchant_id',$request->input('merchant_id'));
			})
			->orderBy('id','desc')
			->pages();
		return json_success('OK',$data);
	}
	
	public function reason_detail(BasicRequest $request){
		$id = $request->input('id');
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
	
	public function reason_add(BasicRequest $request){
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
		$id = FundTransferReason::updateOrCreate(['id'=>$post['id']],$post)->id;
		return json_return($id,'','',['id'=>$id]);
	}
	
	public function reason_delete(BasicRequest $request){
		$id = $request->input('id');
		$var = FundTransferReason::destroy($id);
		return json_return($var);
	}
}
