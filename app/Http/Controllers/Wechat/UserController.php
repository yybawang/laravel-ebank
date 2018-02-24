<?php
namespace App\Http\Controllers\Wechat;

use App\Http\Requests\BasicRequest;

class UserController extends CommonController {
	
	/**
	 * 获取当前关注公众号的用户的openid
	 * @param BasicRequest $request
	 * @return array
	 */
	public function list(BasicRequest $request){
		$app = app('wechat.official_account');
		$list = $app->user->list();
		return json_success('OK',$list);
	}
	
	/**
	 * 根据用户openid获取用户详情信息，可做于unionid 等信息补全操作
	 * @param BasicRequest $request
	 * @return array
	 */
	public function get(BasicRequest $request){
		$openid = $request->input('openid');
		$app = app('wechat.official_account');
		$data = $app->user->get($openid);
		return json_success('OK',$data);
	}
	
	/**
	 * 根据用户openid获取用户详情信息，可做于unionid 等信息补全操作，多个
	 * @param BasicRequest $request
	 * @return array
	 */
	public function select(BasicRequest $request){
		$openid = $request->input('openid');	// 数组
		$app = app('wechat.official_account');
		$list = $app->user->select($openid);
		return json_success('OK',$list);
	}
	
	/**
	 * 备注用户信息，可在公众号和用户列表接口里查看
	 * @param BasicRequest $request
	 * @return array
	 */
	public function remarks(BasicRequest $request){
		$openid = $request->input('openid');
		$remarks = $request->input('remarks');
		$app = app('wechat.official_account');
		$list = $app->user->remark($openid,$remarks);
		return json_success('OK',$list);
	}
}