<?php


namespace yybawang\ebank\Illuminate;

use Illuminate\Database\Eloquent\Model;

/**
 * Class EBankWallets
 * @package yybawang\ebank\Illuminate
 */
class EBankWallets
{
    use BehaviorMiddleware;

    private $identity;
    private $params = [];

    public function setIdentity($identity){
        $this->identity = $identity;
        return $this;
    }

    /**
     * 用户钱包数据
     * @return \Illuminate\Support\Collection
     */
    public function execute() {
        $this->params['identity_id'] = $this->identity->getKey();
        $this->params['identity_type'] = get_class($this->identity);

        $this->handle('wallets', $this->params);
        $EBankService = new ApplicationService();
        $wallets =  $EBankService->wallet($this->params['identity_id'], $this->params['identity_type']);
        $this->terminate($wallets);
        return $wallets;
    }
}
