<?php
namespace App\Http\Controllers\Api;

use App\Http\Requests\BasicRequest;

class FormController extends CommonController {
	
	/**
	 * 微信支付中转
	 * @param BasicRequest $request
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function wechat(BasicRequest $request){
		return view('api.form.wechat',['sign'=>$request->input('sign'),'return_url'=>$request->input('return_url')]);
	}
}