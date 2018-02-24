<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApiBankRequest extends BasicRequest
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
			'appid'		=> 'required|exists:fund_merchant,appid',
		];
	}
	
	public function messages(){
		return [
			'appid.required'	=> '商户appid参数必传',
			'appid.exists'		=> '商户appid不存在',
		];
	}
}
