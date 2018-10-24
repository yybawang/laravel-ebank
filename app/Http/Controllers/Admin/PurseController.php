<?php
namespace App\Http\Controllers\Admin;

use App\Http\Requests\BasicRequest;
use App\Libraries\Bank\EBank;
use App\Models\FundFreeze;
use App\Models\FundMerchant;
use App\Models\FundPurseType;
use App\Models\FundUserPurse;
use App\Models\FundUserType;

class PurseController extends CommonController {
	
	// 中央银行钱包管理--无增删改
	public function purse(BasicRequest $request){
		$data['purse_type'] = FundPurseType::pluck('name','id');
		$data['user_type'] = FundUserType::pluck('name','id');
		$data['merchant'] = FundMerchant::pluck('name','id');
		$data['list'] = FundUserPurse::when($request->input('merchant_id'),function($query) use ($request){
			$query->where('merchant_id',$request->input('merchant_id'));
		})
			->when($request->input('user_id'),function($query) use ($request){
				$query->where('user_id','like','%'.$request->input('user_id').'%');
			})
			->when($request->input('purse_type_id'),function($query) use ($request){
				$query->whereIn('purse_type_id',$request->input('purse_type_id'));
			})
			->when($request->input('user_type_id'),function($query) use ($request){
				$query->whereIn('user_type_id',$request->input('user_type_id'));
			})
			->where(['user_id' => 0])
			->orderBy('user_id','desc')->pages();
		return json_success('OK',$data);
	}
	
	/**
	 * 用户钱包管理
	 * @param BasicRequest $request
	 * @return array
	 */
	public function user(BasicRequest $request){
		$data['user_type'] = FundUserType::pluck('name','id');
		$data['purse_type'] = FundPurseType::pluck('name','id');
		$data['merchant'] = FundMerchant::pluck('name','id');
		$data['list'] = FundUserPurse::when($request->input('user_id'),function($query) use ($request){
			$query->where('user_id','like','%'.$request->input('user_id').'%');
		})
			->when($request->input('user_type_id'),function($query) use ($request){
				$query->whereIn('user_type_id',$request->input('user_type_id'));
			})
			->when($request->input('purse_type_id'),function($query) use ($request){
				$query->whereIn('purse_type_id',$request->input('purse_type_id'));
			})
			->when($request->input('merchant_id'),function($query) use ($request){
				$query->where('merchant_id',$request->input('merchant_id'));
			})
			->where('user_type_id','>=',3)->where('user_id','>',0)->orderBy('user_id','desc')->orderBy('purse_type_id','asc')->pages();
		return json_success('OK',$data);
	}
	
	/**
	 * 用户钱包详情
	 * @param BasicRequest $request
	 * @param int $id
	 * @return array
	 */
	public function user_detail(BasicRequest $request,int $id){
		$data = FundUserPurse::where(['id'=>$id])->first();
		return json_success('OK',$data);
	}
	
	public function user_add(BasicRequest $request){
		$post = request()->validate([
			'id'			=> 'required|integer|min:1',
			'status'		=> 'required',
			'remarks'		=> '',
		]);
		request()->validate([
			'freeze'		=> 'required|integer|min:0',
		]);
		FundUserPurse::where(['id'=>$post['id']])->update($post);
		$Purse = FundUserPurse::find($post['id']);
		// 冻结金额
		if(($freeze = $request->input('freeze') - $Purse->freeze) > 0){
			$EBank = new EBank();
			$EBank->freeze($Purse->id,$freeze,$request->input('freeze_remarks'));
		}
		return json_success('OK');
	}
	
	/**
	 * 冻结记录管理
	 * @param BasicRequest $request
	 * @return array
	 */
	public function freeze(BasicRequest $request){
		$data['purse_type'] = FundPurseType::active()->pluck('name','id');
		$data['list'] = FundFreeze::when($request->input('id'),function($query) use ($request){
			$query->where('id',$request->input('id'));
		})
			->when($request->input('purse_id'),function($query) use ($request){
			$query->where('purse_id',$request->input('purse_id'));
		})
			->orderBy('id','desc')->pages();
		return json_success('OK',$data);
	}
	
	// 冻结记录单条解冻
	public function unfreeze(BasicRequest $request){
		$id = $request->input('id');
		$EBank = new EBank();
		$bool = $EBank->unfreeze($id);
		return json_return($bool);
	}
	
	/**
	 * 身份类型管理
	 * @param BasicRequest $request
	 * @return array
	 */
	public function user_type(BasicRequest $request){
		$data = FundUserType::when($request->input('name'),function($query) use ($request){
			$query->where('name','like','%'.$request->input('name').'%');
		})
			->when($request->input('alias'),function($query) use ($request){
				$query->where('alias','like','%'.$request->input('alias').'%');
			})
			->orderBy('id','desc')
			->pages();
		return json_success('OK',$data);
	}
	
	public function user_type_detail(BasicRequest $request,int $id){
		$data = FundUserType::firstOrNew(['id'=>$id],[
			'name'		=> '',
			'alias'		=> '',
			'status'	=> 1,
			'remarks'	=> '',
		]);
		return json_success('OK',$data);
	}
	
	public function user_type_add(BasicRequest $request){
		request()->validate([
			'name'		=> 'required',
			'alias'		=> 'required',
		]);
		$post = $request->all();
		$id = FundUserType::updateOrCreate(['id'=>$post['id']],$post)->id;
		// 钱包金额初始化
		$EBank = new EBank();
		$EBank->initPurse();
		return json_return($id,'','',['id'=>$id]);
	}
	
	public function user_type_del(BasicRequest $request){
		$id = $request->input('id');
		$var = FundUserType::destroy($id);
		return json_return($var);
	}
	
	/**
	 * 钱包类型管理
	 * @param BasicRequest $request
	 * @return array
	 */
	public function purse_type(BasicRequest $request){
		$data = FundPurseType::when($request->input('name'),function($query) use ($request){
			$query->where('name','like','%'.$request->input('name').'%');
		})
			->when($request->input('alias'),function($query) use ($request){
				$query->where('alias','like','%'.$request->input('alias').'%');
			})
			->orderBy('id','desc')
			->pages();
		return json_success('OK',$data);
	}
	public function purse_type_detail(BasicRequest $request,int $id){
		$data = FundPurseType::firstOrNew(['id'=>$id],[
			'name'		=> '',
			'alias'		=> '',
			'status'	=> 1,
			'remarks'	=> '',
		]);
		return json_success('OK',$data);
	}
	
	public function purse_type_add(BasicRequest $request){
		request()->validate([
			'name'		=> 'required',
			'alias'		=> 'required',
		]);
		$post = $request->all();
		$id = FundPurseType::updateOrCreate(['id'=>$post['id']],$post)->id;
		// 钱包金额初始化
		$EBank = new EBank();
		$EBank->initPurse();
		return json_return($id,'','',['id'=>$id]);
	}
	
	public function purse_type_delete(BasicRequest $request){
		$id = $request->input('id');
		$var = FundPurseType::destroy($id);
		return json_return($var);
	}
}
