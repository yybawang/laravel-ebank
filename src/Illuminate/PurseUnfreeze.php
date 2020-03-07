<?php


namespace yybawang\ebank\Illuminate;


use Illuminate\Support\Facades\Validator;

class PurseUnfreeze
{
    use BehaviorMiddleware;

    private $freeze_id;

    public function freezeId(int $freeze_id){
        $this->freeze_id = $freeze_id;
        return $this;
    }

    /**
     * @return bool
     */
    public function execute(): bool
    {
        $params = [
            'freeze_id'=> $this->freeze_id,
        ];
        $Validator = Validator::make($params, [
            'freeze_id'=> 'required|integer|min:1',
        ]);
        if($Validator->fails()){
            abort(422, $Validator->errors()->first());
        }

        $this->handle('unfreeze', $params);
        $FundService = new FundService();
        $ok = $FundService->unfreeze($this->freeze_id);
        $this->terminate($ok);
        return $ok;
    }
}
