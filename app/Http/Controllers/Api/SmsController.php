<?php
namespace App\Http\Controllers\Api;

use App\Http\Requests\BasicRequest;
use App\Libraries\Sms;

class SmsController extends CommonController {
	
	/**
	 * 发送模板消息，队列
	 * @param BasicRequest $request
	 * @return array
	 */
	public function template(BasicRequest $request){
		$post = request()->validate([
			'mobile'	=> 'required',
			'template'	=> 'required',
			'data'		=> 'required|array'
		]);
		$sms = new Sms();
		$sms->template_queue($post['mobile'],$post['template'],$post['data']);
		return json_success('短信任务已分发');
	}
	
	/**
	 * 发送自定内容消息，队列
	 * @param BasicRequest $request
	 * @return array
	 */
	public function content(BasicRequest $request){
		$post = request()->validate([
			'mobile'	=> 'required',
			'content'	=> 'required',
		]);
		$sms = new Sms();
		$sms->content_queue($post['mobile'],$post['content']);
		return json_success('短信任务已分发');
	}
}