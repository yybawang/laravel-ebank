<?php

namespace App\Http\Requests;

use Illuminate\Http\Request;

class ApiTransferRequest extends Request
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
			'alias'					=> 'required',
			'from_user_id'			=> 'required|integer|min:0',
			'to_user_id'			=> 'required|integer|min:0',
			'amount'				=> 'required|integer|min:1',
			'reason'				=> 'required|integer',
			'details'				=> 'nullable|string',
			'remarks'				=> 'nullable|string',
        ];
    }
    
    public function messages(){
    	return [
    		'alias.required'				=> '转账别名参数必传',
    		'from_user_id.required'			=> '转出用户ID参数必传',
    		'from_user_id.integer'			=> '转出用户ID参数只能为正整数',
    		'from_user_id.min'				=> '转出用户ID参数只能为正整数',
			'to_user_id.required'			=> '转入用户ID参数必传',
			'to_user_id.integer'			=> '转入用户ID参数只能为正整数',
			'to_user_id.min'				=> '转入用户ID参数只能为正整数',
			'amount.required'				=> '金额参数必传',
			'amount.integer'				=> '金额参数只能为正整数',
			'amount.min'					=> '金额参数只能为正整数',
			'reason.required'				=> 'reason 参数必传',
			'reason.integer'				=> 'reason 参数只能为数字',
			'details.string'				=> '详情只能为字符串类型',
			'remarks.string'				=> '备注只能为字符串类型',
		];
	}
}
