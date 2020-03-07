<?php


namespace yybawang\ebank\Illuminate;


use Illuminate\Support\Facades\Validator;
use yybawang\ebank\Facades\EBank;
use yybawang\ebank\Models\FundFreeze;

class PurseOrderPaid
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
     * @return array
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

        $this->handle('orderPaid', $params);
        $FundService = new FundService();
        $transfer_ids = FundFreeze::where('detail->order_no', $params['order_no'])->get()->map(function($v) use ($FundService){
            EBank::unfreeze($v->id);
            $purse_name = $v->purse->purseType->alias;
            $transfer_alias = 'user'.$purse_name.'ToSystem'.$purse_name;
            return $FundService->$transfer_alias($v->user_id, 0 , $v->amount, ['order_no'=> $v->detail['order_no']], '内部钱包订单支付成功扣款');
        });
        $this->terminate($transfer_ids);
        return $transfer_ids;
    }
}
