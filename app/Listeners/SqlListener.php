<?php

namespace App\Listeners;

use Illuminate\Database\Events\QueryExecuted;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SqlListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  QueryExecuted  $event
     * @return void
     */
    public function handle(QueryExecuted $event)
    {
        //
		$sql = str_replace("?", "'%s'", $event->sql);
	
		$log = vsprintf($sql, $event->bindings);
		if(preg_match('/^\s*$/',$log)){
			return;
		}
		$log = $log . '　　['.request()->fullUrl().']';
		logger()->notice($log);
    }
}
