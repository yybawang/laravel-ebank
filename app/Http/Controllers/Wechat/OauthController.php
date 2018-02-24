<?php
namespace App\Http\Controllers\Wechat;

use App\Http\Requests\BasicRequest;

class OauthController extends CommonController {
	
	public function index(BasicRequest $request){
		$user = session('wechat.oauth_user'); // 拿到授权用户资料
		// 返回值示例
//		$user = [
//			'id'		=> 'openid',
//			'name'		=> '姓名',
//			'nickname'	=> '昵称',
//			'avatar'	=> 'http://ddd 头像链接',
//			'email'		=> null,
//			'original'	=> [	// 原生属性
//				'openid'	=> 'openid',
//				'nickname'	=> '昵称',
//				'sex'		=> '1男否则女',
//				'language'	=> 'en微信APP语言',
//				'country'	=> '中国',
//				'province'	=> '湖北',
//				'city'		=> '武汉',
//				'headimgurl'=> 'http://ddd 头像地址',
//			],
//		];
		
		// 判断openid是否存在，然后跳到对应页面
		dd($user);
	}
}