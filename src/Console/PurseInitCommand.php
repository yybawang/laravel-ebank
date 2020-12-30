<?php

namespace yybawang\ebank\Console;

use Illuminate\Console\Command;
use yybawang\ebank\Illuminate\FundService;

class PurseInitCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ebank:purse-init';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '钱包数据和余额初始化';

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
     * @return int
     */
    public function handle()
    {
        $this->comment('Initialize purse balance...');
        $FundService = new FundService();
        $FundService->initPurse();
        return 0;
    }
}
