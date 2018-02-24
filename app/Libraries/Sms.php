<?php
namespace App\Libraries;


use Overtrue\EasySms\EasySms;

class Sms {
	protected $config = [];
	
	public function __construct()
	{
		$config_sms = config('sms.gateway');
		$config = [
			// HTTP 请求的超时时间（秒）
			'timeout' => 5.0,
			
			// 默认发送配置
			'default' => [
				// 默认可用的发送网关
				'gateways' => array_keys($config_sms),
			],
			// 可用的网关配置
			'gateways' => $config_sms,
		];
		$this->config = $config;
	}
	
	/**
	 * @param string|array $mobile		// 传递数组一次发送多人
	 * @param string $template			// 模板号
	 * @param array $data				// 模板替换数据
	 * @return bool
	 */
	public function template($mobile,string $template,array $data = [],$queue){
		$easy_sms = new EasySms($this->config);
		$easy_sms->send($mobile,[
			'template'	=> $template,
			'data'		=> $data,
		]);
		// 不管发送成功失败
		return true;
	}
	
	/**
	 * @param $mobile
	 * @param string $template
	 * @param array $data
	 * @return bool
	 */
	public function template_queue($mobile,string $template,array $data = []){
		\App\Jobs\Sms::dispatch($mobile,'',$template,$data)->onQueue('email');
		return true;
	}
	
	/**
	 * @param string|array $mobile		// 传递数组一次发送多人
	 * @param string $content			// 发送内容
	 * @return bool
	 */
	public function content($mobile,string $content){
		$easy_sms = new EasySms($this->config);
		$easy_sms->send($mobile,[
			'content'	=> $content,
		]);
		return true;
	}
	
	/**
	 * @param $mobile
	 * @param string $content
	 * @return bool
	 */
	public function content_queue($mobile,string $content){
		\App\Jobs\Sms::dispatch($mobile,$content)->onQueue('email');
		return true;
	}
}
