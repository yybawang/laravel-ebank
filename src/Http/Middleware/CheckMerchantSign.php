<?php
namespace yybawang\ebank\Http\Middleware;

class CheckMerchantSign {

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, $next){
        $request->validate([
            'ebank_merchant_appid' => 'required',
            'ebank_merchant_secret' => 'required',
        ]);
        $param = $request->except(['sign']);
        $sign = $request->input('sign');
        ksort($param);
        $param2 = [];
        foreach ($param as $k => $v){
            $param2[] = $k . '=' . $v;
        }
        $param_sign = strtolower(md5(implode('&',$param2)));
        abort_if(strcmp($param_sign, $sign) !== 0, 500, trans('ebank::merchant.sign_failed'));
    }
}
