<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use App\Http\Middleware\AdminUser;

Route::get('/', 'Controller@index');






/********************************************** 沙盒调试部分 ******************************************/
Route::group(['prefix'=>'sandbox'],function(){
	Route::any('/','SandboxController@index');
	Route::any('index','SandboxController@index');
	Route::any('submit','SandboxController@submit');
	Route::any('test','SandboxController@test');
});


/********************************************** 后台管理模块 ******************************************/
Route::get('admin','Admin\IndexController@index');
Route::get('admin/index','Admin\IndexController@index');
Route::post('admin/login','Admin\LoginController@login_submit');

Route::middleware([AdminUser::class])->prefix('admin')->namespace('Admin')->group(function(){
	Route::get('init','IndexController@init');
	Route::any('logout','LoginController@logout');
	Route::post('upload', 'CommonController@upload');
	
	
	Route::name('admin.基本信息管理.')->group(function(){
		Route::get('welcome','IndexController@welcome')->name('menu.主页');
		Route::get('user_transfer','IndexController@user_transfer')->name('menu.用户流水统计');
		Route::get('sysinfo','IndexController@sysinfo')->name('menu.服务器信息');
	});
	
	Route::prefix('merchant')->name('admin.接口商户管理.')->group(function(){
		Route::get('/','MerchantController@index')->name('menu.商户列表');
		Route::post('/','MerchantController@add');
		Route::delete('/','MerchantController@delete');
		Route::get('detail','MerchantController@detail');
	});
	
	Route::prefix('pay')->name('admin.支付秘钥管理.')->group(function(){
		Route::get('/','PayController@index')->name('menu.商户支付配置');
		Route::post('/','PayController@add');
		Route::delete('/','PayController@delete');
		Route::get('detail','PayController@detail');
	});
	
	Route::prefix('transfer')->name('admin.业务流水管理.')->group(function(){
		Route::get('/','TransferController@index')->name('menu.流水记录');
		Route::post('untransfer','TransferController@untransfer');
	});
	
	Route::prefix('reason')->name('admin.转账行为管理.')->group(function(){
		Route::get('/','ReasonController@index')->name('menu.转账reason');
		Route::get('detail','ReasonController@detail');
		Route::post('/','ReasonController@add');
		Route::delete('/','ReasonController@delete');
	});
	
	Route::prefix('purse')->name('admin.业务资金管理.')->group(function(){
		Route::get('purse','PurseController@purse')->name('menu.身份类型余额');
		Route::get('user','PurseController@user')->name('menu.用户钱包余额');
		Route::get('user_type','PurseController@user_type')->name('menu.身份类型列表');
		Route::get('user_type_detail','PurseController@user_type_detail');
		Route::post('user_type','PurseController@user_type_add');
		Route::delete('user_type','PurseController@user_type_delete');
		Route::get('purse_type','PurseController@purse_type')->name('menu.钱包类型管理');
		Route::get('purse_type_detail','PurseController@purse_type_detail');
		Route::post('purse_type','PurseController@purse_type_add');
		Route::delete('purse_type','PurseController@purse_type_delete');
		Route::get('freeze','PurseController@freeze')->name('menu.余额冻结记录');
		Route::post('unfreeze','PurseController@unfreeze');
	});
	
	Route::prefix('order')->name('admin.订单管理.')->group(function(){
		Route::get('/','OrderController@index')->name('menu.订单列表');
		Route::post('notify','OrderController@notify');
		Route::post('refund','OrderController@refund');
		Route::post('complete','OrderController@complete');
	});
	
	Route::prefix('withdraw')->name('admin.提现管理.')->group(function(){
		Route::get('bank','WithdrawController@bank')->name('menu.银行卡提现');
		Route::get('alipay','WithdrawController@alipay')->name('menu.支付宝提现');
		Route::get('wechat','WithdrawController@wechat')->name('menu.微信提现');
		Route::post('success','WithdrawController@success');
		Route::post('fail','WithdrawController@fail');
	});
	
	Route::prefix('report')->name('admin.财务报表.')->group(function(){
		Route::get('reason','ReportController@reason')->name('menu.流水统计');
		Route::get('reason_detail','ReportController@reason_detail');
		Route::get('purse','ReportController@purse')->name('menu.钱包统计');
		Route::get('purse_detail','ReportController@purse_detail');
	});
	
	Route::prefix('export')->name('admin.导出任务.')->group(function(){
		Route::get('/','ExportController@index')->name('menu.任务列表');
		Route::post('/','ExportController@increment');
		Route::delete('/','ExportController@delete');
	});
	
	Route::prefix('system')->name('admin.系统管理.')->group(function(){
		Route::get('config','SystemController@config')->name('menu.系统设置');
		Route::get('config_detail','SystemController@config_detail');
		Route::post('config','SystemController@config_add');
		Route::delete('config','SystemController@config_delete');
		Route::post('config_rank','SystemController@config_rank');
		Route::get('behavior','SystemController@behavior')->name('menu.行为记录');
	});
	
	Route::prefix('rule')->name('admin.权限管理.')->group(function(){
		Route::get('user','RuleController@user')->name('menu.用户列表');
		Route::get('user_detail','RuleController@user_detail');
		Route::post('user','RuleController@user_add');
		Route::delete('user','RuleController@user_delete');
		Route::get('group','RuleController@group')->name('menu.权限组');
		Route::get('group_detail','RuleController@group_detail');
		Route::post('group','RuleController@group_add');
		Route::delete('group','RuleController@group_delete');
		Route::post('password_reset','RuleController@password_reset');
	});
});
