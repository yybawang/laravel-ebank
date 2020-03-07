<?php


namespace yybawang\ebank\Illuminate;


use Illuminate\Support\Facades\Validator;
use yybawang\ebank\Facades\EBank;
use yybawang\ebank\Models\FundFreeze;

class PurseOrderCancelled
{
    use BehaviorMiddleware;
    private $order_no;

    /**
     * @param string $order_no
     * @return $this
     */
    public function orderNo(string $order_no){
        $this->order_no = $order_no;
        return $this;
    }

    /**
     * @return bool
     */
    public function execute(){
        $params = [
            'order_no' => $this->order_no,
        ];
        $Validator = Validator::make($params, [
            'order_no' => 'required',
        ]);
        if($Validator->fails()){
            abort(422, $Validator->errors()->first());
        }

        $this->handle('orderCancelled', $params);
        $oks = FundFreeze::where('detail->order_no', $params['order_no'])->pluck('id')->map(function($id){
            return EBank::unfreeze($id);
        });
        $this->terminate($oks);
        return $oks->filter(function($v){return $v === false;})->count() > 0 ? false : true;
    }
}
