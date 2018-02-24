<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApiUserWalletRequest extends BasicRequest
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
			'user_id'		=> 'required|integer|min:1',
		];
	}
	
	public function messages(){
		return [
			'user_id.required'		=> '用户ID参数必传',
			'user_id.integer'		=> '用户ID参数只能为正整数',
			'user_id.min'			=> '用户ID参数只能为正整数',
		];
	}
}
