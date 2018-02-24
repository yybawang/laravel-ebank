<?php
return [
	
	// 短信提供商秘钥配置，可配置多个发送短信平台，按照配置先后顺序发送，失败则进行下一个(只针对不是模板的发送)，所以要根据实际情况考虑先后配置问题
	'gateway'	=> [
		// 253云通讯（创蓝）
		'chuanglan'		=> [
			'username'	=> 'N4664472',
			'password'	=> '683bHWVKyd1ada',
		],
		// 螺丝帽
		'luosimao'		=> [
			'api_key'	=> '',
		],
		// 阿里大鱼
		'alidayu'		=> [
			'app_key'	=> '',
			'app_secret'=> '',
			'sign_name'	=> '',
		],
		// 容联云通讯
		'yuntongxun'	=> [
			'app_id' => '',
			'account_sid' => '',
			'account_token' => '',
			'is_sub_account' => false,
		],
		// 互亿无线
		'huyi' => [
			'api_id' => '',
			'api_key' => '',
		],
		// 聚合数据
		'juhe' => [
			'app_key' => '',
		],
		// SendCloud
		'sendcloud' => [
			'sms_user' => '',
			'sms_key' => '',
			'timestamp' => false, // 是否启用时间戳
		],
		// 百度云
		'baidu' => [
			'ak' => '',
			'sk' => '',
			'invoke_id' => '',
			'domain' => '',
		],
		// 华信短信平台
		'huaxin' => [
			'user_id'  => '',
			'password' => '',
			'account'  => '',
			'ip'       => '',
			'ext_no'   => '',
		],
		// 融云
		'rongcloud' => [
			'app_key' => '',
			'app_secret' => '',
		],
		// 天毅无线
		'tianyiwuxian' => [
			'username' => '', //用户名
			'password' => '', //密码
			'gwid' => '', //网关ID
		],
		// 云片
		'yunpian' => [
			'api_key' => '',
		],
		// Submail
		'submail' => [
			'app_id' => '',
			'app_key' => '',
			'project' => '',
		],
	],
];
