<?php
namespace App\Http\Controllers\Admin;

use App\Http\Requests\BasicRequest;
use App\Libraries\Bank\EBank;
use App\Libraries\Bank\PayFieldsConfig;
use App\Models\FundMerchant;
use App\Models\FundMerchantGroup;

class MerchantController extends CommonController {
	
	/**
	 * 商户分组
	 * @param BasicRequest $request
	 * @return array
	 */
	public function group(BasicRequest $request){
		$data['list'] = FundMerchantGroup::when($request->input('name'),function($query) use ($request){
			$query->where('name','like','%'.$request->input('name').'%');
		})
			->when($request->input('date'),function($query) use ($request){
				$query->where('created_at','>',$request->input('date.0').' 00:00:00')->where('created_at','<=',$request->input('date.1').' 23:59:59');
			})
			->orderBy('id','desc')
			->pages();
		return json_success('OK',$data);
	}
	
	public function group_detail(BasicRequest $request){
		$id = $request->input('id');
		$PayFieldsConfig = new PayFieldsConfig();
		$data = FundMerchantGroup::firstOrNew(['id'=>$id],
			[
				'name'		=> '',
				'status'	=> 1,
				'pay_config'=> [],
				'remarks'	=> '',
			]
		);
		// 填充默认支付字段配置
//		if(empty($data->pay_config)){
			$data->pay_config = $PayFieldsConfig->mergeConfig($data->pay_config);
//		}
		return json_success('OK',$data);
	}
	
	public function group_add(BasicRequest $request){
		request()->validate([
			'name'	=> 'required',
		]);
		$post = $request->all();
		$id = FundMerchantGroup::updateOrCreate(['id'=>$post['id']],$post)->id;
		return json_return($id,'','',['id'=>$id]);
	}
	
	public function group_delete(BasicRequest $request){
		$id = $request->input('id');
		$var = FundMerchantGroup::destroy($id);
		return json_return($var);
	}
	
	/**
	 * API 商户列表
	 */
	public function index(BasicRequest $request){
		$data['group'] = FundMerchantGroup::pluck('name','id');
		$data['list'] = FundMerchant::when($request->input('appid'),function($query) use ($request){
			$query->where('appid','like','%'.$request->input('appid').'%');
		})
			->when($request->input('name'),function($query) use ($request){
				$query->where('name','like','%'.$request->input('name').'%');
			})
			->when($request->input('group_id'),function($query) use ($request){
				$query->where('group_id',$request->input('group_id'));
			})
			->when($request->input('date'),function($query) use ($request){
				$query->where('created_at','>',$request->input('date.0').' 00:00:00')->where('created_at','<=',$request->input('date.1').' 23:59:59');
			})
			->orderBy('id','desc')
			->pages();
		return json_success('OK',$data);
	}
	
	public function detail(BasicRequest $request){
		$id = $request->input('id');
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
	
	public function add(BasicRequest $request){
		request()->validate([
			'name'	=> 'required',
			'appid'	=> 'required',
			'secret'=> 'required',
		]);
		$post = $request->all();
		$id = FundMerchant::updateOrCreate(['id'=>$post['id']],$post)->id;
		// 钱包金额初始化
		$bank = new EBank();
		$bank->init();
		return json_return($id,'','',['id'=>$id]);
	}
	
	public function delete(BasicRequest $request){
		$id = $request->input('id');
		$var = FundMerchant::destroy($id);
		return json_return($var);
	}
}