<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\BasicRequest;
use App\Models\FundAdminExport;
use Illuminate\Support\Facades\DB;

class ExportController extends CommonController
{
	
	/**
	 * 用户导出任务队列状态表
	 * @param BasicRequest $request
	 * @return mixed
	 */
	public function index(BasicRequest $request){
		$data = FundAdminExport::when($request->input('name'),function($query) use ($request){
			$request->where('name','like','%'.$request->input('name').'%');
		})
			->when($request->input('date'),function($query) use ($request){
				$query->where('created_at','>',$request->input('date.0').' 00:00:00')->where('created_at','<=',$request->input('date.1').' 23:59:59');
			})
			->when($request->input('date_end'),function($query) use ($request){
				$query->where('created_at','<=',$request->input('date_end').' 23:59:59');
			})
			->where(['admin_id'=>admin_user('id')])->orderBy('id','desc')->pages();
		return json_success('OK',$data);
	}
	
	/**
	 * 用户下载后计数+1
	 * @param BasicRequest $request
	 * @return array
	 */
	public function increment(BasicRequest $request){
		$id = $request->input('id');
		$var = FundAdminExport::where(['id'=>$id])->update(['downloads'=>DB::raw('downloads + 1')]);
		return json_success('OK');
	}
	
	/**
	 * 用户导出文件删除
	 * @param BasicRequest $request
	 * @return array
	 */
	public function delete(BasicRequest $request){
		$id = $request->input('id');
		$data = FundAdminExport::where(['id'=>$id])->first();
		unlink('.'.$data->file_path);
		$data->delete();
		return json_success('OK');
	}
}
