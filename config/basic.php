<?php
return [
	
	// 后台分页每页数量
	'page_size'		=> 20,
	
	// 是否测试环境
	'test'			=> config('app.env') == 'production' ? false : true,
	'production'	=> config('app.env') == 'production' ? true : false,
	
	// bug 邮件接收者
	'bug_receives'	=> [
		'512511253@qq.com',		// 作者邮箱
	],
	
	// bug 微信推送接受者，需要在 http://sc.ftqq.com/ 用 github 登录扫码绑定，不自己做是因为自己的公众号在第二层，不在微信首页，也不会又角标
	'bug_wechat'	=> [
		'https://sc.ftqq.com/xxx.send',
	],
	
	'ebank_url'		=> env('EBANK_URL'),	// 项目部署应该是这个
];
