<?php
namespace App\Http\Controllers\Admin;

use App\Http\Requests\BasicRequest;
use App\Models\FundAdmin;
use App\Models\FundAdminGroup;

class RuleController extends CommonController {
	
	/**
	 * 权限用户管理
	 * @param BasicRequest $request
	 * @return array
	 */
	public function user(BasicRequest $request){
		$data['group'] = FundAdminGroup::where(['status'=>1])->pluck('name','id');
		$data['list'] = FundAdmin::when($request->input('name'),function($query) use ($request){
			$query->where('name','like','%'.$request->input('name').'%');
		})
			->when($request->input('realname'),function($query) use ($request){
				$query->where('realname','like','%'.$request->input('realname').'%');
			})
			->when($request->input('mobile'),function($query) use ($request){
				$query->where('mobile','like','%'.$request->input('mobile').'%');
			})
			->orderBy('id','desc')
			->pages();
		return json_success('OK',$data);
	}
	
	public function user_detail(BasicRequest $request){
		$id = $request->input('id');
		$data = FundAdmin::firstOrNew(['id'=>$id],[
			'name'		=> '',
			'password'	=> '',
			'realname'	=> '',
			'email'		=> '',
			'mobile'	=> '',
			'group_id'	=> 0,
			'status'	=> 1,
			'remarks'	=> '',
		]);
		$data->password = '';
		return json_success('OK',$data);
	}
	
	public function user_add(BasicRequest $request){
		request()->validate([
			'group_id'		=> 'required',
			'name'			=> 'required',
			'realname'		=> 'required',
		]);
		$post = $request->all();
		if(!$post['password']){
			unset($post['password']);
		}else{
			$post['password'] = FundAdmin::md5($post['password']);
		}
		
		$id = FundAdmin::updateOrCreate(['id'=>$post['id']],$post)->id;
		return json_return($id,'','',['id'=>$id]);
	}
	
	public function user_del(BasicRequest $request){
		$id = $request->input('id');
		$var = FundAdmin::destroy($id);
		return json_return($var);
	}
	
	/**
	 * 权限组管理
	 * @param BasicRequest $request
	 * @return array
	 */
	public function group(BasicRequest $request){
		$data['menu'] = init_menu();
		$data['list'] = FundAdminGroup::when($request->input('name'),function($query) use ($request){
			$query->where('name','like','%'.$request->input('name').'%');
		})
			->orderBy('id','desc')
			->pages();
		return json_success('OK',$data);
	}
	
	public function group_detail(BasicRequest $request){
		$id = $request->input('id');
		$data = FundAdminGroup::firstOrNew(['id'=>$id],[
			'name'		=> '',
			'rule'		=> '[]',
			'status'	=> 1,
			'remarks'	=> '',
		]);
		$data['rule'] = json_decode($data['rule'],true);
		return json_success('OK',$data);
	}
	
	public function group_add(BasicRequest $request){
		request()->validate([
			'name'	=> 'required',
		]);
		$post = $request->all();
		$post['rule'] = json_encode($post['rule']);
		$id = FundAdminGroup::updateOrCreate(['id'=>$post['id']],$post)->id;
		return json_return($id,'','',['id'=>$id]);
	}
	
	public function group_del(BasicRequest $request){
		$id = $request->input('id');
		$var = FundAdminGroup::destroy($id);
		return json_return($var);
	}
	
	/**
	 * 登录密码重置
	 * @param BasicRequest $request
	 * @return array
	 */
	public function password_reset(BasicRequest $request){
		$user = admin_user();
		$post = request()->validate([
			'password_old'		=> 'required|min:6',
			'password_new'		=> 'required|min:6|confirmed',
			'password_new_confirmation'	=> '',
		]);
		$password_old_md5 = FundAdmin::md5($post['password_old']);
		$password_new_md5 = FundAdmin::md5($post['password_new']);
		if(strcmp($user->password,$password_old_md5) !== 0){
			exception('原登录密码不匹配');
		}
		$var = FundAdmin::where(['id'=>$user->id])->update(['password'=>$password_new_md5]);
		return json_return($var);
	}
}