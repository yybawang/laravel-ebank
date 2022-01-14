<?php


namespace yybawang\ebank\Illuminate;


class EBankUnfreeze
{
    use BehaviorMiddleware;

    private $params = [];

    public function setFreezeId(int $freeze_id){
        $this->params['freeze_id'] = $freeze_id;
        return $this;
    }

    /**
     * @return bool
     */
    public function execute() {
        $this->handle('unfreeze', $this->params);
        $FundService = new ApplicationService();
        $ok = $FundService->unfreeze($this->params['freeze_id']);
        $this->terminate($ok);
        return $ok;
    }
}
