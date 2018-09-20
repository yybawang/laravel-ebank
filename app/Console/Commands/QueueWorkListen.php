<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class QueueWorkListen extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'queue:work-listen
                            {connection? : The name of the queue connection to work}
                            {--queue= : The names of the queues to work}
                            {--delay=0 : The number of seconds to delay failed jobs}
                            {--sleep=3 : Number of seconds to sleep when no job is available}
                            {--tries=0 : Number of times to attempt a job before logging it failed}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Start processing jobs on the queue as a daemon';

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
        $this->call('queue:work',[
        	'--queue'	=> queue_name($this->option('queue') ?: 'default'),
			'--delay'	=> $this->option('delay'),
			'--sleep'	=> $this->option('sleep'),
			'--tries'	=> $this->option('tries'),
			'--quiet'	=> true,
		]);
    }
}
