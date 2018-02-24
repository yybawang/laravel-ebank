<?php

namespace App\Jobs;

use App\Libraries\Wechat;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class WechatTemplatePush implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $post;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(array $post)
    {
        //
		$this->post = $post;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
		$app = app('wechat.official_account');
		$app->template_message->send($this->post);
	}
	
	
	public function failed(\Exception $exception){
		bug_email('微信推送失败','请求数据：',$this->post,$exception->__toString());
	}
}
