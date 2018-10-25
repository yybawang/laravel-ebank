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
