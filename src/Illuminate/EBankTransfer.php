<?php


namespace yybawang\ebank\Illuminate;



use yybawang\ebank\Models\EbankReason;
use yybawang\ebank\Models\EbankWalletType;

class EBankTransfer
{
    use BehaviorMiddleware;

    private $identity;
    private $params = [];

    public function setIdentity($identity){
        $this->identity = $identity;
        return $this;
    }

    /**
     * 设置转账 reason
     * @param int $reason
     * @return $this
     */
    public function setReason(int $reason)
    {
        $this->params['reason'] = $reason;
        return $this;
    }

    /**
     * 设置出账用户ID
     * @param string $wallet_alias
     * @return $this
     */
    public function setWalletAlias(string $wallet_alias)
    {
        $this->params['wallet_alias'] = $wallet_alias;
        return $this;
    }

    /**
     * 设置转账金额
     * @param float $amount
     * @return $this
     */
    public function setAmount(float $amount)
    {
        $this->params['amount'] = $amount;
        return $this;
    }

    /**
     * 设置上游关联业务数据
     * @param array $upstream
     * @return $this
     */
    public function setUpstream(array $upstream = [])
    {
        $this->params['upstream'] = $upstream;
        return $this;
    }

    /**
     * 设置转账备注
     * @param string|null $remarks
     * @return $this
     */
    public function setRemarks(?string $remarks = null)
    {
        $this->params['remarks'] = $remarks;
        return $this;
    }

    /**
     * 提交转账请求，返回转账ID
     * @return int
     */
    public function execute(){
        $this->params['identity_id'] = $this->identity->getKey();
        $this->params['identity_type'] = get_class($this->identity);

        $this->handle('transfer', $this->params);
        $wallet_type = EbankWalletType::where('alias', $this->params['wallet_alias'])->firstOrFail('id');
        $EBankService = new ApplicationService();
        $wallet = $EBankService->walletDetail($this->params['identity_id'], $this->params['identity_type'], $wallet_type->id);
        $Reason = EbankReason::where('code', $this->params['reason'])->firstOrFail(['identity', 'wallet_type_id']);
        abort_if($Reason->identity !== $this->params['identity_type'], 422, '当前对象名不等于 reason 绑定身份');
        abort_if($Reason->wallet_type_id !== $wallet_type->id, 422, '当前钱包类型不等于 reason 绑定类型');
        $transfer_id = $EBankService->transfer($wallet->id, $this->params['amount'], $this->params['reason'], $this->params['upstream'], $this->params['remarks']);
        $this->terminate($transfer_id);
        return $transfer_id;
    }
}
