<?php


namespace yybawang\ebank\Illuminate;


use yybawang\ebank\Models\EbankWalletType;

class EBankWallet
{
    use BehaviorMiddleware;

    private $identity;
    private $params = [];

    public function setIdentity($identity){
        $this->identity = $identity;
        return $this;
    }

    public function setWalletAlias(string $wallet_alias){
        $this->params['wallet_alias'] = $wallet_alias;
        return $this;
    }

    /**
     * 用户钱包数据
     * @return \yybawang\ebank\Models\EbankWallet
     */
    public function execute() {
        $this->params['identity_id'] = $this->identity->getKey();
        $this->params['identity_type'] = get_class($this->identity);

        $this->handle('wallets', $this->params);
        $wallet_type = EbankWalletType::where('alias', $this->params['wallet_alias'])->firstOrFail('id');
        $EBankService = new ApplicationService();
        $wallet = $EBankService->walletDetail($this->params['identity_id'], $this->params['identity_type'], $wallet_type->id);
        $this->terminate($wallet);
        return $wallet;
    }
}
