<?php

use App\Http\Middleware\MerchantSign;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});



/********************************************** 前台接口模块 ******************************************/
Route::namespace('Api')->group(function(){
	
	Route::any('bank/init','BankController@init');	// 电子银行钱包余额初始化
	
	// 支付中转页。类似微信支付只能特定域名下才能唤醒
	Route::prefix('form')->group(function(){
		Route::any('wechat','FormController@wechat');
	});
	
	// 转账中心算签
	Route::middleware([MerchantSign::class])->prefix('bank')->group(function(){
		Route::post('test_sign','BankController@test_sign');
		
		Route::post('transfer','BankController@transfer');		// 转账通用方法，根据 transfer_alias 参数区分
		Route::post('untransfer','BankController@untransfer');		// 钱包冲正，钱包回转一次
		Route::post('transfer_detail','BankController@transfer_detail');	// 转账详情
		Route::post('user_type','BankController@user_type');
		Route::post('purse_type','BankController@purse_type');
		Route::post('user_type_wallet','BankController@user_type_wallet');
		Route::post('central_wallet','BankController@central_wallet');
		Route::post('system_wallet','BankController@system_wallet');
		Route::post('user_wallet','BankController@user_wallet');
		Route::post('wallet_detail','BankController@wallet_detail');
		Route::post('freeze','BankController@freeze');
		Route::post('unfreeze','BankController@unfreeze');
		
		
	});
	
	// 统一下单，下单中转对应的支付方式
	Route::middleware([MerchantSign::class])->prefix('order')->group(function(){
		Route::post('unified','OrderController@unified');
	});
	
	// 提现
	Route::middleware([MerchantSign::class])->prefix('withdraw')->group(function(){
		Route::post('bank','WithdrawController@bank');
		Route::post('alipay','WithdrawController@alipay');
		Route::post('wechat','WithdrawController@wechat');
	});
	
	
	// 支付回调，同步加异步
	Route::any('return/wechat','ReturnController@wechat');
	Route::any('return/alipay','ReturnController@alipay');
	Route::any('notify/wechat','NotifyController@wechat');
	Route::any('notify/alipay','NotifyController@alipay');
	
	
	// 短信发送
	Route::prefix('sms')->group(function(){
		Route::post('template','SmsController@template');
		Route::post('content','SmsController@content');
	});
});
