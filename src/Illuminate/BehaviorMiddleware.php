<?php


namespace yybawang\ebank\Illuminate;


use yybawang\ebank\Models\EbankBehavior;

trait BehaviorMiddleware
{
    private $begin_time;
    private $funcname;
    private $request;

    /**
     * 记录入参
     * @param string $funcname
     * @param array $request
     */
    protected function handle(string $funcname, array $request){
        $this->begin_time = microtime(true);
        $this->funcname = $funcname;
        $this->request = $request;
    }

    protected function terminate($response){
        $create = [
            'funcname'=> $this->funcname,
            'params'=> $this->request,
            'execute_time'=> round(microtime(true) - $this->begin_time, 8),
            'response'=> $response,
        ];
        EbankBehavior::create($create);
    }
}
