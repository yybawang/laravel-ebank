<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApiFreezeRequest extends BasicRequest
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
			'purse_id'		=> 'required|integer|min:1',
			'amount'		=> 'required|integer|min:1',
		];
	}
	
	public function messages(){
		return [
			'purse_id.required'		=> '用户钱包ID参数必传',
			'purse_id.integer'		=> '用户钱包ID参数只能为正整数',
			'purse_id.min'			=> '用户钱包ID参数只能为正整数',
			'amount.required'		=> '冻结金额参数必传',
			'amount.integer'		=> '冻结金额只能为正整数',
			'amount.min'			=> '冻结金额只能为正整数',
		];
	}
}
