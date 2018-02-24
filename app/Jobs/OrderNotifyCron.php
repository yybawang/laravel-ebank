<?php

namespace App\Jobs;

use App\Models\FundOrder;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class OrderNotifyCron implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // 每分钟获取10分钟前未通知的商户，重新通知。
		$date_pre = time2date(strtotime('-10 minutes'));
		$list = FundOrder::where(['status'=>1,'pay_status'=>1,'notify_status'=>0])->where('created_at','>',$date_pre)->pluck('order_no');
		$list->each(function($order_no,$k){
			OrderNotify::dispatch($order_no)->onQueue('order_notify');
		});
    }
}
