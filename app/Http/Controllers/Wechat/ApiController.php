<?php
namespace App\Http\Controllers\Wechat;
use App\Http\Requests\BasicRequest;


/**
 * 微信控制器
 * Class IndexController
 * @package App\Http\Controllers\Wechat
 */
class ApiController extends CommonController {
	
	/**
	 * 获取access_token 字符串，可以供其他平台使用
	 * @param BasicRequest $request
	 * @return array
	 */
	public function access_token(BasicRequest $request){
		$app = app('wechat.official_account');
		$token = $app->access_token->getToken();
		return json_success('OK',$token);
	}
}