<?php


namespace yybawang\ebank\Illuminate;


class EBankUnTransfer
{
    use BehaviorMiddleware;

    private $params = [];

    public function setTransferId(int $transfer_id){
        $this->params['transfer_id'] = $transfer_id;
        return $this;
    }

    /**
     * @return bool
     */
    public function execute(): bool
    {

        $this->handle('unTransfer', $this->params);
        $FundService = new ApplicationService();
        $ok = $FundService->unTransfer($this->params['transfer_id']);
        $this->terminate($ok);
        return $ok;
    }
}
