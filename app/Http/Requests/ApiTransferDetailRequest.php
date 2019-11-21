<?php

namespace App\Http\Requests;

use Illuminate\Http\Request;

class ApiTransferDetailRequest extends Request
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
		];
	}
	
	public function messages(){
		return [
			'transfer_id.required'		=> '转账ID参数必传',
			'transfer_id.integer'		=> '转账ID参数只能为正整数',
			'transfer_id.min'			=> '转账ID参数只能为正整数',
		];
	}
}
