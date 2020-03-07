<?php


namespace yybawang\ebank\Illuminate;


use Illuminate\Support\Facades\Validator;

class PurseUnTransfer
{
    use BehaviorMiddleware;

    private $transfer_id = 0;
    private $remarks;

    public function transferId(int $transfer_id){
        $this->transfer_id = $transfer_id;
        return $this;
    }

    public function remarks(?string $remarks): PurseUnTransfer
    {
        $this->remarks = $remarks;
        return $this;
    }

    /**
     * @return bool
     */
    public function execute(): bool
    {
        $params = [
            'transfer_id'=> $this->transfer_id,
        ];
        $Validator = Validator::make($params, [
            'transfer_id'=> 'required|integer|min:1',
        ]);
        if($Validator->fails()){
            abort(422, $Validator->errors()->first());
        }

        $this->handle('unTransfer', $params);
        $FundService = new FundService();
        $ok = $FundService->unTransfer($this->transfer_id, $this->remarks);
        $this->terminate($ok);
        return $ok;
    }
}
