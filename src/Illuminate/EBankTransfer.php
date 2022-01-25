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
        $Reason = EbankReason::where('code', $this->params['reason'])->firstOrFail(['identity', 'wallet_type_id']);
        // 是数字就查询出数据
        if(is_integer($this->identity)){
            $identity = $Reason->identity;
            $Identity = new $identity();
            $this->identity = $Identity->findOrFail($this->identity);
        }
        $this->params['identity_id'] = $this->identity->getKey();
        $this->params['identity_type'] = get_class($this->identity);

        $this->handle('transfer', $this->params);
        $EBankService = new ApplicationService();
        $wallet = $EBankService->walletDetail($this->params['identity_id'], $this->params['identity_type'], $Reason->wallet_type_id);
        abort_if($Reason->identity !== $this->params['identity_type'], 422, '当前对象名不等于 reason 绑定身份名');
        $transfer_id = $EBankService->transfer($wallet->id, $this->params['amount'], $this->params['reason'], $this->params['upstream'], $this->params['remarks']);
        $this->terminate($transfer_id);
        return $transfer_id;
    }
}
