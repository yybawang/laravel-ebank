<?php

namespace App\Http\Requests;

use Illuminate\Http\Request;

class ApiUnfreezeRequest extends Request
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
			'freeze_id'		=> 'required|integer|min:1',
		];
	}
	
	public function messages(){
		return [
			'freeze_id.required'	=> '冻结历史ID参数必传',
			'freeze_id.integer'		=> '冻结历史ID参数只能为正整数',
			'freeze_id.min'			=> '冻结历史ID参数只能为正整数',
		];
	}
}
