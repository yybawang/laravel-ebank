<?php

namespace App\Http\Controllers\Api;

use App\Jobs\ApiBehavior;
use App\Http\Controllers\Controller;

class CommonController extends Controller
{
	
	/**
	 * 服务结束后，插入 behavior 数据
	 */
	public function __destruct()
	{
		if(request()->all()){
			$now_time_float = microtime(true);
			$data = [
				'url'			=> request()->url(),
				'execute_time'	=> round($now_time_float - request()->server('REQUEST_TIME_FLOAT'),8),
				'database'		=> print_r(config('database.connections'),true),
				'$_GET'			=> print_r($_GET,true),
				'$_POST'		=> print_r($_POST,true),
				'$_REQUEST'		=> print_r(request()->all(),true),
				'$_SERVER'		=> print_r($_SERVER,true),
				'$_SESSION'		=> print_r($_SESSION,true),
				'$_COOKIE'		=> print_r($_COOKIE,true),
			];
			ApiBehavior::dispatch($data)->onQueue('behavior');
		}
	}
}
