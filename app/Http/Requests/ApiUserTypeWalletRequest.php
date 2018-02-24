<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApiUserTypeWalletRequest extends BasicRequest
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
			'user_type'		=> 'required|string|exists:fund_user_type,alias',
		];
	}
	
	public function messages(){
		return [
			'user_type.required'		=> '用户类型参数必传',
			'user_type.string'			=> '用户类型参数只能为字符串类型',
			'user_type.exists'			=> '用户类型参数不存在',
		];
	}
}
