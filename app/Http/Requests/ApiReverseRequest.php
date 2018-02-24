<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApiReverseRequest extends BasicRequest
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
			'transfer_id'		=> 'required|integer|min:1',
			'remarks'			=> 'nullable|string',
		];
	}
	
	public function messages(){
		return [
			'transfer_id.required'		=> '转账ID参数必传',
			'transfer_id.integer'		=> '转账ID参数只能为正整数',
			'transfer_id.min'			=> '转账ID参数只能为正整数',
			'remarks.string'				=> '备注只能为字符串类型',
		];
	}
}
