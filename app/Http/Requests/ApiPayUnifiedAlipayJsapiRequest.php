<?php

namespace App\Http\Requests;

use Illuminate\Http\Request;

class ApiPayUnifiedAlipayJsapiRequest extends Request
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
//			'openid'		=> 'required|string',
			'return_url'	=> 'required',
		];
	}
	
	public function messages(){
		return [
//			'openid.required'		=> 'openid参数必传',
//			'openid.string'			=> 'openid参数格式有误',
			'return_url.required'	=> '同步返回地址参数必传',
		];
	}
}
