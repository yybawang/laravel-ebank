<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\BasicRequest;
use App\Models\FundAdmin;
use Illuminate\Http\Request;

class LoginController extends Controller {
	
	public function login(Request $request){
		return view('admin.login');
	}
	
	/**
	 * post 提交登录，只用路由中间件验证
	 * @param BasicRequest $request
	 * @return array
	 */
	public function login_submit(BasicRequest $request){
		$param = request()->validate([
			'name'		=> 'required|exists:fund_admin,name',
			'password'	=> 'required',
		]);
		$param['password'] = FundAdmin::md5($param['password']);
		$uid = FundAdmin::where($param)->value('id');
		if(!$uid){
			exception('登录密码错误');
		}
		FundAdmin::where(['id'=>$uid])->update(['last_login'=>time2date()]);
		session(['admin_uid'=>$uid]);
		return json_success('验证成功，正在跳转主页');
	}
	
	/**
	 * @param BasicRequest $request
	 * @return array
	 */
	public function logout(BasicRequest $request){
		session(['admin_uid'=>null]);
		return json_success('已退出登录');
	}
}