<?php

namespace App\Jobs;

use App\Libraries\Bank;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

class Transfer implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $posts = [];
    
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($posts)
    {
        //
		$this->posts = $posts;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
		// 异步转账操作
		$bank = new Bank();
		$transfer_ids = [];
		DB::transaction(function() use (&$transfer_ids,$bank){
			$parent_id = 0;
		
			foreach($this->posts as $k => $post){
				$from_user_id = $post['from_user_id'] ?? 0;
				$amount = $post['amount'];
				$to_user_id = $post['to_user_id'] ?? 0;
				$reason = $post['reason'];
				$detail = $post['detail'];
				$remarks = $post['remarks'];
				$transfer_ids[] = $parent_id = $bank->transfer($from_user_id,$to_user_id,$amount,$reason,$parent_id,$detail,$remarks);
			}
		});
    }
	
	public function failed(\Exception $exception){
		bug_email('转账失败，数据已回滚','请求数据：',$this->posts,$exception->__toString());
	}
}
