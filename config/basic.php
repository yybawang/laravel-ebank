<?php
return [
	
	// 是否测试环境
	'test'			=> config('app.env') == 'production' ? false : true,
	'production'	=> config('app.env') == 'production' ? true : false,
	
	// bug 邮件接收者，修改成自己的邮箱即可收到错误邮件
	'bug_receives'	=> explode(',',env('BUG_EMAIL','')),
];
