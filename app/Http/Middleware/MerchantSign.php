<?php

namespace App\Http\Middleware;

use App\Jobs\ApiBehavior;
use App\Models\FundMerchant;
use Closure;

class MerchantSign
{
    /**
     * Handle an incoming request.
     * 商户接口签名算法：
	 * 1、每个参数使用 $key=$val 方式使用 & 符号拼接在一起，如 p1=v1&p2=v2
	 * 2、最后拼接商户秘钥 &secret=密码
	 * 3、使用 md5 加密后转小写，追加 sign=md5 结果参数到源参数数组
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
		$param = $request->except(['s']);
		
		clear_null($param);
		
		$sign = $param['ebank_sign'];
		$secret = FundMerchant::active()->where(['appid' => $param['ebank_appid']])->value('secret');
		if(empty($param['ebank_appid']) || empty($secret)) {
			exception('商户appid不存在');
		}
		$param_sign = sign_merchant($param,$secret);
		// 如果字符串恒相等
		if(strcmp($sign,$param_sign) !== 0){
			exception('['.$param['ebank_appid'].']商户验签失败');
		}
        return $next($request);
    }
	
	
	/**
	 * 记录API日志
	 * laravel内部方法，在返回浏览器响应之后，自动调用
	 * @param $request
	 * @param $response
	 */
    public function terminate($request, $response){
		$now_time_float = microtime(true);
		$data = [
			'appid'=> $request->input('ebank_appid'),	// 直接记录appid，避免每次查询数据库
			'url'			=> request()->url(),
			'execute_time'	=> round($now_time_float - request()->server('REQUEST_TIME_FLOAT'),8),
			'response'		=> print_r(json_decode($response->getContent(),true),true),	// 输出的结果集
			'$_GET'			=> print_r($_GET,true),
			'$_POST'		=> print_r($_POST,true),
			'$_REQUEST'		=> print_r($request->all(),true),
			'$_SERVER'		=> print_r($_SERVER,true),
			'$_SESSION'		=> print_r($_SESSION,true),
			'$_COOKIE'		=> print_r($_COOKIE,true),
		];
		ApiBehavior::dispatch($data)->onQueue('behavior');
	}
}
