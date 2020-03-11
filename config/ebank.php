<?php
return [
    /*
    |--------------------------------------------------------------------------
    | EBank 路由访问路径
    |--------------------------------------------------------------------------
    */
    'path' => env('EBANK_PATH', 'ebank'),

    /*
    |--------------------------------------------------------------------------
    | Dashboard 路由中间件，与 laravel 中间件机制相同
    |--------------------------------------------------------------------------
    |
    | 可以追加自己的其它中间件
    |
    */
    'middleware' => ['web'],

    /*
    |--------------------------------------------------------------------------
    | 可用三方支付方法
    |--------------------------------------------------------------------------
    |
    | 文档可访问:
    |
    */
    'payments' => [
        // 纯内部钱包支付
        'wallet' => \yybawang\ebank\Illuminate\Payments\WalletPayment::class,

        // 微信支付
        'wechat_wap' => \yybawang\ebank\Illuminate\Payments\WechatWapPayment::class,
        'wechat_mp' => \yybawang\ebank\Illuminate\Payments\WechatMpPayment::class,
        'wechat_app' => \yybawang\ebank\Illuminate\Payments\WechatAppPayment::class,
        'wechat_pos' => \yybawang\ebank\Illuminate\Payments\WechatPosPayment::class,
        'wechat_scan' => \yybawang\ebank\Illuminate\Payments\WechatScanPayment::class,
        'wechat_miniapp' => \yybawang\ebank\Illuminate\Payments\WechatMiniappPayment::class,
        'wechat_transfer' => \yybawang\ebank\Illuminate\Payments\WechatTransferPayment::class,
        'wechat_redpack' => \yybawang\ebank\Illuminate\Payments\WechatRedpackPayment::class,

        // 支付宝支付
        'alipay_wap' => \yybawang\ebank\Illuminate\Payments\AlipayWabPayment::class,
        'alipay_wep' => \yybawang\ebank\Illuminate\Payments\AlipayWebPayment::class,
        'alipay_app' => \yybawang\ebank\Illuminate\Payments\AlipayAppPayment::class,
        'alipay_pos' => \yybawang\ebank\Illuminate\Payments\AlipayPosPayment::class,
        'alipay_scan' => \yybawang\ebank\Illuminate\Payments\AlipayScanPayment::class,
        'alipay_miniapp' => \yybawang\ebank\Illuminate\Payments\AlipayMiniappPayment::class,
        'alipay_transfer' => \yybawang\ebank\Illuminate\Payments\AlipayTransferPayment::class,

        /**
         * 其它三方支付，与上方微信/支付宝格式相同，使用键值对设置
         * 「键」为下单的支付方式名，「值」为对应支付类
         */
//        'tonglian_mp' => \App\Payments\TonglianMpPayment::class,
    ],


    /*
    |--------------------------------------------------------------------------
    | 三方平台支付秘钥配置
    |--------------------------------------------------------------------------
    |
    | 文档可访问:
    |
    */
    'platforms' => [
        'alipay' => [
            // 支付宝分配的 APPID
            'app_id' => env('ALI_APP_ID', ''),

            // 支付宝异步通知地址
            'notify_url' => '',

            // 支付成功后同步通知地址
            'return_url' => '',

            // 阿里公共密钥，验证签名时使用
            'ali_public_key' => env('ALI_PUBLIC_KEY', ''),

            // 自己的私钥，签名时使用
            'private_key' => env('ALI_PRIVATE_KEY', ''),

            // optional，默认 warning；日志路径为：sys_get_temp_dir().'/logs/yansongda.pay.log'
            'log' => [
                'file' => storage_path('logs/alipay.log'),
                //  'level' => 'debug'
                //  'type' => 'single', // optional, 可选 daily.
                //  'max_file' => 30,
            ],

            // optional，设置此参数，将进入沙箱模式
            // 'mode' => 'dev',
        ],

        'wechat' => [
            // 公众号 APPID
            'app_id' => env('WECHAT_APP_ID', ''),

            // 小程序 APPID
            'miniapp_id' => env('WECHAT_MINIAPP_ID', ''),

            // APP 引用的 appid
            'appid' => env('WECHAT_APPID', ''),

            // 微信支付分配的微信商户号
            'mch_id' => env('WECHAT_MCH_ID', ''),

            // 微信支付异步通知地址
            'notify_url' => '',

            // 微信支付签名秘钥
            'key' => env('WECHAT_KEY', ''),

            // 客户端证书路径，退款、红包等需要用到。请填写绝对路径，linux 请确保权限问题。pem 格式。
            'cert_client' => '',

            // 客户端秘钥路径，退款、红包等需要用到。请填写绝对路径，linux 请确保权限问题。pem 格式。
            'cert_key' => '',

            // optional，默认 warning；日志路径为：sys_get_temp_dir().'/logs/yansongda.pay.log'
            'log' => [
                'file' => storage_path('logs/wechat.log'),
                //  'level' => 'debug'
                //  'type' => 'single', // optional, 可选 daily.
                //  'max_file' => 30,
            ],

            // optional
            // 'dev' 时为沙箱模式
            // 'hk' 时为东南亚节点
            // 'mode' => 'dev',
        ],

        /**
         * 其它三方支付，与上方微信/支付宝格式相同，键为平台，值为对应平台需要的配置
         * 使用示例 config('ebank.platforms.tonglian')
         */
//        'tonglian' => [
//            'appkey' => '',
//            'appsecret' => '',
//        ],
    ]
];
