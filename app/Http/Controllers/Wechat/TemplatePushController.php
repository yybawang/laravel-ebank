<?php
namespace App\Http\Controllers\Wechat;

use App\Http\Requests\BasicRequest;
use App\Jobs\WechatTemplatePush;

/**
 * 微信模板消息推送，需要在微信公众号下建立模板，得到模板ID
 * Class TemplatePushController
 * @package App\Http\Controllers\Wechat
 */
class TemplatePushController extends CommonController {
	
	/**
	 * 同步推送，会占用curl时间
	 * data 参数示例
		'data' => [
			'foo' => '你好',  // 不需要指定颜色
			'bar' => ['你好', '#F00'], // 指定为红色
			'baz' => ['value' => '你好', 'color' => '#550038'], // 与第二种一样
			'zoo' => ['value' => '你好'], // 与第一种一样
			]
	 * @param BasicRequest $request
	 * @return array
	 */
	public function send(BasicRequest $request){
		$post = $this->_validate();
		$app = app('wechat.official_account');
		$app->template_message->send($post);
		return json_success('OK');
	}
	
	/**
	 * 异步队列推送
	 * @param BasicRequest $request
	 * @return array
	 */
	public function queue(BasicRequest $request){
		$post = $this->_validate();
		WechatTemplatePush::dispatch($post)->onQueue('email');
		return json_success('OK');
	}
	
	private function _validate(){
		$post = request()->validate([
			'touser'		=> 'required|string',
			'template_id'	=> 'required|string',
			'data'			=> 'required|array',
			'url'			=> '',
		]);
		return $post;
	}
}
