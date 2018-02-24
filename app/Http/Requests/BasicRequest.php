<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class BasicRequest extends FormRequest
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
        ];
    }
	
	
	/**
	 * @return array
	 * 重写方法，null 格式化成空字符串
	 */
	public function all(){
		$all = parent::all();
		unset($all['s']);
		clear_null($all);
		return $all;
	}
	
	public function input($key = null,$default = ''){
		$value = parent::input($key,$default);
		if(is_null($value)){
			$value = $default;
		}
		clear_null($value);
		return $value;
	}
	
	public function only($only){
		$only = parent::only($only);
		clear_null($only);
		return $only;
	}
	
	public function except($keys)
	{
		$except = parent::except($keys);
		clear_null($except);
		return $except;
	}
}
