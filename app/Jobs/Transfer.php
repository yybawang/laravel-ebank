<?php

namespace App\Jobs;

use App\Libraries\Bank\EBank;
use App\Models\FundMerchant;
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

    protected $merchant_id;
    protected $posts = [];
    
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(int $merchant_id, array $posts)
    {
        //
		$this->merchant_id = $merchant_id;
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
		$EBank = new EBank();
		$transfer_ids = [];
		DB::transaction(function() use (&$transfer_ids,$EBank){
			$parent_id = 0;
			foreach($this->posts as $k => $post){
				$from_user_id = $post['from_user_id'] ?? 0;
				$amount = $post['amount'];
				$to_user_id = $post['to_user_id'] ?? 0;
				$reason = $post['reason'];
				$detail = $post['detail'];
				$remarks = $post['remarks'];
				$transfer_ids[] = $parent_id = $EBank->transfer($this->merchant_id,$from_user_id,$to_user_id,$amount,$reason,$parent_id,$detail,$remarks);
			}
		});
    }
	
	public function failed(\Exception $exception){
		email_bug('转账失败，数据已回滚','请求数据：','商户ID' . $this->merchant_id,$this->posts,$exception->__toString());
	}
}
