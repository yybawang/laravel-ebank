<?php


namespace yybawang\ebank\Illuminate;



use Illuminate\Support\Facades\Validator;

class PurseTransfer
{
    use BehaviorMiddleware;

    private $reason = 0;
    private $out_user_id = 0;
    private $into_user_id = 0;
    private $amount = 0;
    private $detail;
    private $remarks;

    /**
     * 设置转账 reason
     * @param int $reason
     * @return $this
     */
    public function reason(int $reason)
    {
        $this->reason = $reason;
        return $this;
    }

    /**
     * 设置出账用户ID
     * @param int $user_id
     * @return $this
     */
    public function outUser(int $user_id)
    {
        $this->out_user_id = $user_id;
        return $this;
    }

    /**
     * 设置出账用户ID
     * @param int $user_id
     * @return $this
     */
    public function intoUser(int $user_id)
    {
        $this->into_user_id = $user_id;
        return $this;
    }

    /**
     * 设置转账金额
     * @param float $amount
     * @return $this
     */
    public function amount(float $amount)
    {
        $this->amount = $amount;
        return $this;
    }

    /**
     * 设置转账详情
     * @param $detail
     * @return $this
     */
    public function detail($detail)
    {
        $this->detail = $detail;
        return $this;
    }

    /**
     * 设置转账备注
     * @param string|null $remarks
     * @return $this
     */
    public function remarks(?string $remarks)
    {
        $this->remarks = $remarks;
        return $this;
    }

    /**
     * 提交转账请求，返回转账ID
     * @return int
     */
    public function execute(){
        $params = [
            'out_user_id'=> $this->out_user_id,
            'into_user_id'=> $this->into_user_id,
            'amount'=> $this->amount,
            'reason'=> $this->reason,
        ];
        // 验证必须的参数
        $Validator = Validator::make($params, [
            'out_user_id'=> 'required|integer|min:0',
            'into_user_id'=> 'required|integer|min:0',
            'amount'=> 'required|numeric|min:0.00000001',
            'reason'=> 'required|integer|min:10000',
        ]);
        if($Validator->fails()){
            abort(422, $Validator->errors()->first());
        }

        $this->handle('transfer', $params);
        $FundService = new FundService();
        $transfer_id = $FundService->transfer($this->out_user_id, $this->into_user_id, $this->amount, $this->reason, $this->detail, $this->remarks);
        $this->terminate($transfer_id);
        return $transfer_id;
    }
}
