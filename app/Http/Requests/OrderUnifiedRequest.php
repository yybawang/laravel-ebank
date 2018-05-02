<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class OrderUnifiedRequest extends BasicRequest
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
			'ebank_appid'	=> [
				'required',
				Rule::exists('fund_merchant','appid')->where('status',1),
			],
			'order_no'		=> 'required',
			'product_name'	=> 'required',
			'return_url'	=> 'url',
			'notify_url'	=> 'required|url',
			'pay_type_group'=> 'required|array'
		];
	}
	
	public function messages(){
		return [
			'user_id.required'		=> '用户id参数必传',
			'user_id.min'			=> '用户id参数必传',
			'ebank_appid.required'	=> '接口商户appid参数必传',
			'ebank_appid.exists'	=> '接口商户appid不存在',
			'order_no.required'		=> '订单号参数必传',
			'product_name.required'	=> '订单名称参数必传',
			'return_url.url'		=> '同步回调url地址格式错误',
			'notify_url.required'	=> '异步回调url地址参数必传',
			'notify_url.url'		=> '异步回调url地址格式错误',
			'pay_type_group.required'=> '组合支付参数必传',
			'pay_type_group.array'	=> '组合支付参数格式错误，需正确的数组格式',
		];
	}
}
