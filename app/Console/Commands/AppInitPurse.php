<?php

namespace App\Console\Commands;

use App\Libraries\Bank\EBank;
use Illuminate\Console\Command;

class AppInitPurse extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:init-purse {amount=100000000000000}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '初始化钱包数据，金额大于 0 忽略';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
    	$amount = $this->argument('amount');
        $Ebank = new EBank();
        $Ebank->initPurse($amount);
		$this->info('系统钱包数据初始化完成，启动资金'.number_format($amount / 100,2).'元');
    }
}
