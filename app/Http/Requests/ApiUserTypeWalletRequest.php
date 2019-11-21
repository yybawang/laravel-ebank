<?php

namespace App\Http\Requests;

use Illuminate\Http\Request;

class ApiUserTypeWalletRequest extends Request
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
			'user_type.required'		=> '身份类型参数必传',
			'user_type.string'			=> '身份类型参数只能为字符串类型',
			'user_type.exists'			=> '身份类型参数不存在',
		];
	}
}
