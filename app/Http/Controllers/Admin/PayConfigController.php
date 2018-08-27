<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 08/27/2018
 * Time: 18:10
 */

namespace App\Http\Controllers\Admin;


use App\Http\Requests\BasicRequest;
use App\Libraries\Bank\PayFieldsConfig;
use App\Models\FundPayConfig;

class PayConfigController extends CommonController
{
	
	
	/**
	 * 支付方式配置
	 * @param BasicRequest $request
	 * @return array
	 */
	public function index(BasicRequest $request){
		$data['list'] = FundPayConfig::when($request->input('name'),function($query) use ($request){
			$query->where('name','like','%'.$request->input('name').'%');
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
		$PayFieldsConfig = new PayFieldsConfig();
		$data = FundPayConfig::firstOrNew(['id'=>$id],
			[
				'name'		=> '',
				'pay_config'=> [],
				'status'	=> 1,
				'remarks'	=> '',
			]
		);
		// 填充支付字段配置
		$data->pay_config = $PayFieldsConfig->mergeConfig($data->pay_config);
		return json_success('OK',$data);
	}
	
	public function add(BasicRequest $request){
		request()->validate([
			'name'	=> 'required',
		]);
		$post = $request->all();
		$id = FundPayConfig::updateOrCreate(['id'=>$post['id']],$post)->id;
		return json_return($id,'','',['id'=>$id]);
	}
	
	public function delete(BasicRequest $request){
		$id = $request->input('id');
		$var = FundPayConfig::destroy($id);
		return json_return($var);
	}
}