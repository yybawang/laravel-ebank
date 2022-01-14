<?php


namespace yybawang\ebank\Illuminate;

use yybawang\ebank\Models\EbankWalletType;

class EBankFreezeForce
{
    use BehaviorMiddleware;

    private $identity;
    private $params = [];

    public function setIdentity($identity){
        $this->identity = $identity;
        return $this;
    }

    public function setAmount(float $amount){
        $this->params['amount'] = $amount;
        return $this;
    }

    public function setWalletAlias(string $wallet_alias){
        $this->params['wallet_alias'] = $wallet_alias;
        return $this;
    }

    public function setRemarks(?string $remarks = null)
    {
        $this->params['remarks'] = $remarks;
        return $this;
    }

    /**
     * @return int
     */
    public function execute(): int
    {
        $this->params['identity_id'] = $this->identity->getKey();
        $this->params['identity_type'] = get_class($this->identity);

        $this->handle('freeze', $this->params);
        $wallet_type = EbankWalletType::where('alias', $this->params['wallet_alias'])->firstOrFail('id');
        $FundService = new ApplicationService();
        $wallet = $FundService->walletDetail($this->params['identity_id'], $this->params['identity_type'], $wallet_type->id);
        $freeze_id = $FundService->freezeForce($wallet->id, $this->params['amount'], $this->params['identity_id'], $this->params['identity_type'], $this->params['remarks']);
        $this->terminate($freeze_id);
        return $freeze_id;
    }
}
