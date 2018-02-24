<?php

namespace App\Jobs;

use App\Libraries\Wechat;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class Sms implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $mobile;
    protected $content;
    protected $template;
    protected $data;
    
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($mobile,$content = '',$template = '',$data = [])
    {
        //
		$this->mobile = $mobile;
		$this->content = $content;
		$this->template = $template;
		$this->data = $data;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
		$sms = new \App\Libraries\Sms();
		if(empty($this->content)){
			$sms->template($this->mobile,$this->template,$this->data);
		}else{
			$sms->content($this->mobile,$this->content);
		}
	}
	
	
	public function failed(\Exception $exception){
		bug_email('短信发送失败','请求数据：',$this->mobile,$this->content,$this->template,$this->data,$exception->__toString());
	}
}
