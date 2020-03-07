<?php


namespace yybawang\ebank\Illuminate;


use yybawang\ebank\Models\FundBehavior;

trait BehaviorMiddleware
{
    private $begin_time;
    private $funcname;
    private $params;
    /**
     * 记录入参
     * @param string $funcname
     * @param array $params
     */
    protected function handle(string $funcname, array $params){
        $this->begin_time = microtime(true);
        $this->funcname = $funcname;
        $this->params = $params;
    }

    protected function terminate($response){
        $create = [
            'funcname'=> $this->funcname,
            'params'=> $this->params,
            'execute_time'=> round(microtime(true) - $this->begin_time, 8),
            'response'=> $response,
        ];
        FundBehavior::create($create);
    }
}
