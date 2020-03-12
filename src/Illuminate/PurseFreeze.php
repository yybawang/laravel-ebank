<?php


namespace yybawang\ebank\Illuminate;


use Illuminate\Support\Facades\Validator;

class PurseFreeze
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
        if(is_null($remarks)){
            $remarks = '强制冻结';
        }
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

        $this->handle('freeze', $params);
        $FundService = new FundService();
        $freeze_id = $FundService->freeze($this->purse_id, $this->amount, $this->detail, $this->remarks);
        $this->terminate($freeze_id);
        return $freeze_id;
    }
}
