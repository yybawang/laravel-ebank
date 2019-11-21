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
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Route;

Route::get('/', 'Controller@welcome');


/********************************************** 沙盒调试部分 ******************************************/
Route::group(['prefix'=>'sandbox'],function(){
    Route::any('/','SandboxController@index');
    Route::any('index','SandboxController@index');
    Route::any('submit','SandboxController@submit');
    Route::any('test','SandboxController@test');
});
