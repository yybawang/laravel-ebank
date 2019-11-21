<?php

namespace App\Http\Requests;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ApiUserWalletRequest extends Request
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
			'user_id'		=> 'required|integer|min:0',
			'type'			=> [
				Rule::exists('fund_user_type','alias')->where('status',1),
			],
		];
	}
	
	public function messages(){
		return [
			'user_id.required'		=> '用户ID参数必传',
			'user_id.integer'		=> '用户ID参数只能为正整数',
			'user_id.min'			=> '用户ID参数只能为正整数',
			'type.exists'			=> '身份类型不存在',
		];
	}
}
