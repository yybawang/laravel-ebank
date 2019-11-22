<?php

/**
 * 其他渠道开发步骤
 * 1、App\Libraries\Bank\OrderPayments 里编写对接渠道代码，建议一个渠道一个类，放在 App\Libraries\渠道名 下
 * 2、App\Libraries\Bank\OrderUnified 里编写调用代码，传入下单所需参数
 * 3、测试完成通过之后，渠道的配置信息采用此文件读取便于后台多商户（多项目）可控，如变动不大，可赋值默认值
 */
return [
	'alipay' => [
		[
			'field'			=> 'app_id',
			'description'	=> '支付宝分配的 appid',
			'value'			=> '',
		],
		[
			'field'			=> 'ali_public_key',
			'description'	=> '阿里公共密钥，验证签名时使用，一行字符串，不包括 "--- PUBLIC KEY ---" 等前后内容',
			'value'			=> '',
		],
		[
			'field'			=> 'private_key',
			'description'	=> '自己的私钥，签名时使用，一行字符串，不包括 "--- PRIMARY KEY ---" 等前后内容',
			'value'			=> '',
		],
		[
			'field'			=> 'mode',
			'description'	=> '可选项，设置为 dev，将进入沙箱模式',
			'value'			=> '',
		],
		[
			'field'			=> 'return_url',
			'description'	=> '支付成功后同步通知地址，固定参数，此项目会二次分发',
			'value'			=> env('APP_URL') . '/api/notify/alipay',
			'disabled'		=> true,
		],
		[
			'field'			=> 'notify_url',
			'description'	=> '支付成功后异步通知地址，固定参数，此项目会二次分发',
			'value'			=> env('APP_URL') . '/api/return/alipay',
			'disabled'		=> true,
		],
	],
	'wechat' => [
		[
			'field'			=> 'app_id',
			'description'	=> '公众号 APPID',
			'value'			=> '',
		],
		[
			'field'			=> 'miniapp_id',
			'description'	=> '小程序 APPID',
			'value'			=> '',
		],
		[
			'field'			=> 'appid',
			'description'	=> 'APP 支付的 appid',
			'value'			=> '',
		],
		[
			'field'			=> 'mch_id',
			'description'	=> '微信支付分配的微信商户号',
			'value'			=> '',
		],
		[
			'field'			=> 'key',
			'description'	=> '微信支付分配的签名秘钥',
			'value'			=> '',
		],
		[
			'field'			=> 'cert_client',
			'description'	=> '客户端证书路径，退款、红包等需要用到。请填写绝对路径，linux 请确保权限问题。pem 格式。',
			'value'			=> '',
		],
		[
			'field'			=> 'cert_key',
			'description'	=> '客户端秘钥路径，退款、红包等需要用到。请填写绝对路径，linux 请确保权限问题。pem 格式。',
			'value'			=> '',
		],
		[
			'field'			=> 'mode',
			'description'	=> '可选项，设置为 dev，将进入沙箱模式',
			'value'			=> '',
		],
		[
			'field'			=> 'notify_url',
			'description'	=> '微信支付异步通知地址，固定参数，此项目会二次分发',
			'value'			=> env('APP_URL') . '/api/notify/wechat',
			'disabled'		=> true,
		],
	],
	// 其他渠道可修改此处
//	'tonglian' => [
//
//	],
	// 其他支付方式，配置方式同上，但对接代码肯定得自己开发哦，在 App\Libraries\Bank\OrderPayments 里开发
	'other'	=> [
		[
			'field'			=> '示例配置',
			'description'	=> '其他支付渠道需自己在 App\Libraries\Bank\OrderPayments 里开发',
			'value'			=> '其他支付渠道开发步骤与此配置位于 config/pay.php 中',
			'disabled'		=> true,
		],
	],
];
