<?php
namespace App\Http\Controllers\Admin;

use App\Http\Requests\BasicRequest;
use App\Models\FundMerchant;

class MerchantController extends CommonController {
	
	/**
	 * API 商户列表
	 */
	public function index(BasicRequest $request){
		$data = FundMerchant::when($request->input('appid'),function($query) use ($request){
			$query->where('appid','like','%'.$request->input('appid').'%');
		})
			->when($request->input('name'),function($query) use ($request){
				$query->where('name','like','%'.$request->input('name').'%');
			})
			->when($request->input('date'),function($query) use ($request){
				$query->where('created_at','>',$request->input('date')[0].' 00:00:00')->where('created_at','<=',$request->input('date')[1].' 23:59:59');
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
		return json_return($id,'','',['id'=>$id]);
	}
	
	public function delete(BasicRequest $request){
		$id = $request->input('id');
		$var = FundMerchant::destroy($id);
		return json_return($var);
	}
	
}