<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApiPayUnifiedWechatJsapiRequest extends BasicRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
	public function rules()
	{
		return [
			//
			'merchant_no'	=> 'required',
			'wechat_appid'			=> 'required|string',
			'wechat_openid'		=> 'required|string',
			'return_url'	=> 'required',
		];
	}
	
	public function messages(){
		return [
			'merchant_no.required'		=> '子商户手机号参数必传',
			'wechat_appid.required'		=> '微信appid参数必传',
			'wechat_appid.string'		=> '微信appid参数格式有误',
			'wechat_openid.required'	=> '用户openid参数必传',
			'wechat_openid.string'		=> '用户openid参数格式有误',
			'return_url.required'		=> '同步返回地址参数必传',
		];
	}
}
