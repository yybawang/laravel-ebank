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
                            {--daemon : Run the worker in daemon mode (Deprecated)}
                            {--delay=0 : The number of seconds to delay failed jobs}
                            {--force : Force the worker to run even in maintenance mode}
                            {--memory=128 : The memory limit in megabytes}
                            {--once : Only process the next job on the queue}
                            {--sleep=3 : Number of seconds to sleep when no job is available}
                            {--timeout=60 : The number of seconds a child process can run}
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
			'--connection'	=> $this->option('connection'),
        	'--queue'		=> queue_name($this->option('queue') ?: 'default'),
			'--daemon'		=> $this->option('daemon'),
			'--delay'		=> $this->option('delay'),
			'--force'		=> $this->option('force'),
			'--memory'		=> $this->option('memory'),
			'--once'		=> $this->option('once'),
			'--sleep'		=> $this->option('sleep'),
			'--timeout'		=> $this->option('timeout'),
			'--tries'		=> $this->option('tries'),
		]);
    }
}
