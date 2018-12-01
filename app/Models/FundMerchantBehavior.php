<?php
namespace App\Models;

use App\Jobs\ApiBehavior;

class FundMerchantBehavior extends CommonModel {
	protected $table = 'fund_merchant_behavior';
	
	/**
	 * 新增事件记录
	 * @param $request
	 * @param $response
	 */
	public static function createQueue($request, $response){
		$now_time_float = microtime(true);
		$response_content = json_decode($response->getContent(),true);
		$data = [
			'appid'			=> $request->input('ebank_appid'),
			'url'			=> $request->url(),
			'execute_time'	=> round($now_time_float - $request->server('REQUEST_TIME_FLOAT'),8),
			'response'		=> print_r($response_content,true),
			'status'		=> $response_content['status'],
			'$_GET'			=> print_r($_GET,true),
			'$_POST'		=> print_r($_POST,true),
			'$_REQUEST'		=> print_r($request->all(),true),
			'$_SERVER'		=> print_r($_SERVER,true),
			'$_SESSION'		=> print_r($_SESSION,true),
			'$_COOKIE'		=> print_r($_COOKIE,true),
			'created_at'	=> time2date(),
			'updated_at'	=> time2date(),
		];
		ApiBehavior::dispatch($data)->onQueue(queue_name('behavior'));
	}
}
