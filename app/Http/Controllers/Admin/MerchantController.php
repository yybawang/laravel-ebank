<?php
namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Libraries\Bank\EBank;
use App\Libraries\Bank\PayFieldsConfig;
use App\Models\FundMerchantBehavior;
use App\Models\FundMerchant;
use App\Models\FundPayConfig;

class MerchantController extends CommonController {
	
	/**
	 * API 商户列表
	 */
	public function index(Request $request){
		$data['pay_config'] = FundPayConfig::pluck('name','id');
		$data['list'] = FundMerchant::when($request->input('appid'),function($query) use ($request){
			$query->where('appid','like','%'.$request->input('appid').'%');
		})
			->when($request->input('name'),function($query) use ($request){
				$query->where('name','like','%'.$request->input('name').'%');
			})
			->when($request->input('pay_config_id'),function($query) use ($request){
				$query->where('pay_config_id',$request->input('pay_config_id'));
			})
			->when($request->input('date'),function($query) use ($request){
				$query->where('created_at','>',$request->input('date.0').' 00:00:00')->where('created_at','<=',$request->input('date.1').' 23:59:59');
			})
			->orderBy('id','desc')
			->pages();
		return json_success('OK',$data);
	}
	
	public function detail(Request $request,int $id){
		$data = FundMerchant::firstOrNew(['id'=>$id],
			[
				'name'		=> '',
				'appid'		=> '',
				'secret'	=> '',
				'status'	=> 1,
				'remarks'	=> '',
			]
		);
		return json_success('OK',$data);
	}
	
	public function add(Request $request){
		request()->validate([
			'pay_config_id' => 'required|integer|min:1',
			'name'	=> 'required',
			'appid'	=> 'required',
			'secret'=> 'required',
		]);
		$post = $request->all();
		$id = FundMerchant::updateOrCreate(['id'=>$post['id']],$post)->id;
		// 钱包金额初始化
		$EBank = new EBank();
		$EBank->initPurse();
		return json_return($id,'','',['id'=>$id]);
	}
	
	public function delete(Request $request){
		$id = $request->input('id');
		$var = FundMerchant::destroy($id);
		return json_return($var);
	}
	
	
	/**
	 * 行为记录列表
	 * @param Request $request
	 * @return array
	 */
	public function behavior(Request $request){
		$data['merchant'] = FundMerchant::pluck('name','appid');
		$data['list'] = FundMerchantBehavior::when($request->input('url'),function($query) use ($request){
			$query->where('url','like','%'.$request->input('url').'%');
		})
			->when($request->input('appid'),function($query) use ($request){
				$query->where('appid',$request->input('appid'));
			})
			->when($request->input('status'),function($query) use ($request){
				$query->whereIn('status',$request->input('status'));
			})
			->orderBy('id','desc')->pages();
		return json_success('OK',$data);
	}
}
