<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Laravel\Horizon\Horizon;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
		// 设置错误级别
		error_reporting(E_ERROR &~ E_NOTICE);
	
		Horizon::auth(function ($request) {
			$passcode = 'love-ebank';
			$code = $request->input('code',session('horizon_auth'));
			if($code != $passcode){
				return false;
			}
			session(['horizon_auth'=>$passcode]);
			return true;
		});
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
