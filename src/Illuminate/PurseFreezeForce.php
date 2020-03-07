<?php


namespace yybawang\ebank\Illuminate;


use Illuminate\Support\Facades\Validator;

class PurseFreezeForce
{
    use BehaviorMiddleware;

    private $purse_id;
    private $amount;
    private $detail;
    private $remarks;

    public function purseId(int $purse_id){
        $this->purse_id = $purse_id;
        return $this;
    }

    public function amount(int $amount)
    {
        $this->amount = $amount;
        return $this;
    }

    public function detail(array $detail)
    {
        $this->detail = $detail;
        return $this;
    }

    public function remarks(?string $remarks)
    {
        $this->remarks = $remarks;
        return $this;
    }

    /**
     * @return int
     */
    public function execute(): int
    {
        $params = [
            'purse_id'=> $this->purse_id,
            'amount'=> $this->amount,
        ];
        $Validator = Validator::make($params, [
            'purse_id'=> 'required|integer|min:1',
            'amount'=> 'required|integer|min:1',
        ]);
        if($Validator->fails()){
            abort(422, $Validator->errors()->first());
        }

        $this->handle('freezeForce', $params);
        $FundService = new FundService();
        $freeze_id = $FundService->freezeForce($this->purse_id, $this->amount, $this->detail, $this->remarks);
        $this->terminate($freeze_id);
        return $freeze_id;
    }
}
