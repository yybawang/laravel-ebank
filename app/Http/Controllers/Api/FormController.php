<?php
namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

class FormController extends CommonController {
	
	/**
	 * 微信支付中转
	 * @param Request $request
	 * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
	 */
	public function wechat(Request $request){
		return view('api.form.wechat',['sign'=>$request->input('sign'),'return_url'=>$request->input('return_url')]);
	}
}
