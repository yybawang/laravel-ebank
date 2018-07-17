<?php

namespace App\Console;

use App\Jobs\OrderNotifyCron;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
	 * 		// * * * * * php /usr/share/nginx/gpu2/artisan schedule:run >> /dev/null 2>&1
	 *
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')
        //          ->hourly();
		$schedule->call(function(){
//			logger('打开注释，查看日志，测试每分钟定时..');
		})->everyMinute();
	
		// horizon 仪表盘数据填充
		$schedule->command('horizon:snapshot')->everyFiveMinutes();
		
		// 每分钟获取支付成功但未通知成功的订单重新发起通知，部署支付时可打开
		$schedule->job((new OrderNotifyCron())->onQueue('order_notify'))->everyMinute();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
