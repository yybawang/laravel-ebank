<?php
return [
	
	// 是否测试环境
	'test'			=> config('app.env') == 'production' ? false : true,
	'production'	=> config('app.env') == 'production' ? true : false,
	
	// bug 邮件接收者
	'bug_receives'	=> [
		'512511253@qq.com',		// 作者邮箱，修改成自己的邮箱即可收到错误邮件
	],
];
