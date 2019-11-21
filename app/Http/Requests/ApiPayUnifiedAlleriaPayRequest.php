<?php

namespace App\Http\Requests;

use Illuminate\Http\Request;

class ApiPayUnifiedAlleriaPayRequest extends Request
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
			'merchant_order_no'		=> 'required',
			'order_no'				=> 'required',
			'sms_code'				=> 'required',
		];
	}
	
	public function messages(){
		return [
			'merchant_order_no.required'=> '总商户订单号参数必传',
			'order_no.required'			=> '平台订单号参数必传',
			'sms_code.required'			=> '短信码参数必传',
		];
	}
}
