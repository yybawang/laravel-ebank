<?php

namespace App\Http\Middleware;

use App\Exceptions\ApiException;
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
		if (empty($param['appid'])) {
			abort_500('商户appid不存在');
		}
		
		clear_null($param);
		
		$sign = $param['sign'];
		unset($param['sign']);
		ksort($param);
		$param2 = $param;
		$secret = FundMerchant::where(['appid' => $param['appid']])->value('secret');
		$param2['secret'] = $secret;
		$param_sign = strtolower(md5(http_build_query($param2)));
		// 如果字符串恒相等
		if(strcmp($sign,$param_sign) !== 0){
			abort_500('商户验签失败');
		}
        return $next($request);
    }
}
