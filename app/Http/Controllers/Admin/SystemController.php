<?php
namespace App\Http\Controllers\Admin;

use App\Http\Requests\BasicRequest;
use App\Models\FundConfig;
use Illuminate\Validation\Rule;

/**
 * 系统管理，配置等
 * Class SystemController
 * @author yybawang
 * @package App\Http\Controllers\Admin
 */
class SystemController extends CommonController {
	
	/**
	 * 系统配置列表
	 * @param BasicRequest $request
	 * @return array
	 */
	public function config(BasicRequest $request){
		$data['list'] = FundConfig::when($request->input('key'),function($query) use ($request){
			$query->where('key','like','%'.$request->input('key').'%');
		})
			->when($request->input('value'),function($query) use ($request){
			$query->where('value','like','%'.$request->input('value').'%');
		})
			->when($request->input('date'),function($query) use ($request){
				$query->where('created_at','>',$request->input('date.0').' 00:00:00')->where('created_at','<=',$request->input('date.1').' 23:59:59');
			})
			->orderBy('status','desc')->orderBy('rank','asc')->pages();
		return json_success('OK',$data);
	}
	
	/**
	 * 配置详情
	 * @param BasicRequest $request
	 * @return array
	 */
	public function config_detail(BasicRequest $request,int $id){
		$data = FundConfig::firstOrNew(['id'=>$id],[
			'key'		=> '',
			'value'		=> '',
			'tips'		=> '',
			'status'	=> 1,
		]);
		return json_success('OK',$data);
	}
	
	/**
	 * 配置添加/修改
	 * @param BasicRequest $request
	 * @return array
	 */
	public function config_add(BasicRequest $request){
		$post = request()->validate([
			'id'		=> '',
			'key'		=> [
				'required',
				Rule::unique('fund_config','key')->ignore($request->input('id')),
			],
			'value'		=> 'required',
			'tips'		=> 'required',
			'rank'		=> '',
			'status'	=> '',
			'remarks'	=> '',
		]);
		// 查出排序字段最大的数字，新数据+1
//		$max = FundConfig::max('rank');
//		$post['rank'] = $max;
		$id = FundConfig::updateOrCreate(['id'=>$post['id']],$post)->id;
		return json_return($id,'','',['id'=>$id]);
	}
	
	/**
	 * 配置排序
	 * @param BasicRequest $request
	 * @return array
	 */
	public function config_rank(BasicRequest $request){
		$id = $request->input('id');
		$action = $request->input('action');
		FundConfig::where(['id'=>$id])->increment('rank',$action);
		return json_success('OK');
	}
	
	/**
	 * 配置删除
	 * @param BasicRequest $request
	 * @return array
	 */
	public function config_delete(BasicRequest $request){
		$id = $request->input('id');
		$var = FundConfig::destroy($id);
		return json_return($var);
	}
}
