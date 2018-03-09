<?php
return [
	
	// 后台分页每页数量
	'page_size'		=> 20,
	
	// 是否测试环境
	'test'			=> config('app.env') == 'production' ? false : true,
	'production'	=> config('app.env') == 'production' ? true : false,
	
	// bug 邮件接收者
	'bug_receives'	=> [
//		'512511253@qq.com',		// 作者邮箱
	],
	
	// bug 微信推送接受者，需要在 http://sc.ftqq.com/ 用 github 登录扫码绑定，不自己做是因为自己的公众号在第二层，不在微信首页，也不会又角标
	'bug_wechat'	=> [
		'https://sc.ftqq.com/SCU20083Tc2c88a6cec1be2a13cfe742ce21472a45a5b4b139af22.send',
	],
	
	
	// 微信支付配置
	'wechat_payment'	=> [
		'appid'		=> 'wxe36110336fb08ff8',
		'mchid'		=> '1462437002',
		'key'		=> 'f4b65ee90524f2d7d5b95a5eec43085a',
		'secret'	=> '391907f2247e48d4df3fbf1de3d1e1ba',
	],
	
	// 支付宝支付配置
	'alipay_payment'	=> [
		'appid'		=> '',
	],
];
