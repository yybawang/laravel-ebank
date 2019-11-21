<?php
namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\FundAdmin;
use App\Models\FundAdminGroup;

class RuleController extends CommonController {
	
	/**
	 * 权限用户管理
	 * @param Request $request
	 * @return array
	 */
	public function user(Request $request){
		$data['group'] = FundAdminGroup::active()->pluck('name','id');
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
	
	public function user_detail(Request $request,int $id){
		$data = FundAdmin::firstOrNew(['id'=>$id],[
			'name'		=> '',
			'password'	=> '',
			'realname'	=> '',
			'email'		=> '',
			'mobile'	=> '',
			'group_id'	=> '',
			'status'	=> 1,
			'remarks'	=> '',
		]);
		$data->password = '';
		return json_success('OK',$data);
	}
	
	public function user_add(Request $request){
		request()->validate([
			'group_id'		=> 'required|integer|min:1',
			'name'			=> 'required',
			'realname'		=> 'required',
		]);
		$post = $request->all();
		if($post['password']){
			$post['password'] = FundAdmin::md5($post['password']);
		}else{
			unset($post['password']);
		}
		
		$id = FundAdmin::updateOrCreate(['id'=>$post['id']],$post)->id;
		return json_return($id,'','',['id'=>$id]);
	}
	
	public function user_delete(Request $request){
		$id = $request->input('id');
		$var = FundAdmin::destroy($id);
		return json_return($var);
	}
	
	/**
	 * 权限组管理
	 * @param Request $request
	 * @return array
	 */
	public function group(Request $request){
		$data['menu'] = init_menu();
		$data['list'] = FundAdminGroup::when($request->input('name'),function($query) use ($request){
			$query->where('name','like','%'.$request->input('name').'%');
		})
			->orderBy('id','desc')
			->pages();
		return json_success('OK',$data);
	}
	
	public function group_detail(Request $request,int $id){
		$data = FundAdminGroup::firstOrNew(['id'=>$id],[
			'name'		=> '',
			'rule'		=> [],
			'status'	=> 1,
			'remarks'	=> '',
		]);
		return json_success('OK',$data);
	}
	
	public function group_add(Request $request){
		request()->validate([
			'name'		=> 'required',
		]);
		$post = $request->all();
		$id = FundAdminGroup::updateOrCreate(['id'=>$post['id']],$post)->id;
		return json_return($id,'','',['id'=>$id]);
	}
	
	public function group_delete(Request $request){
		$id = $request->input('id');
		$var = FundAdminGroup::destroy($id);
		return json_return($var);
	}
	
	/**
	 * 登录密码重置
	 * @param Request $request
	 * @return array
	 */
	public function password_reset(Request $request){
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
