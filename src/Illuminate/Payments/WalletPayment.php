<?php


namespace yybawang\ebank\Illuminate\Payments;


use yybawang\ebank\Facades\EBank;
use yybawang\ebank\Illuminate\FundService;

class WalletPayment extends PaymentGateway
{

    /**
     * @return array    转账ID列表
     */
    public function handle()
    {
        $payments = $this->payments;
        $FundService = new FundService();
        $transfer_ids = [];
        foreach ($payments as $payment => $price){
            $purse_name = ucfirst(substr(strstr($payment, '_'), 1));
            $wallet = EBank::wallet($this->user_id, $purse_name);
            if($wallet->balance < $price){
                abort(422, '['.$payment.'] 钱包剩余额度不足');
            }
        }
        foreach ($payments as $payment => $price) {
            $purse_name = ucfirst(substr(strstr($payment, '_'), 1));
            $transfer_alias = 'user'.$purse_name.'ToSystem'.$purse_name;
            $transfer_ids[] = $FundService->$transfer_alias($this->user_id, 0 , $price, ['order_no'=> $this->order_no], '内部钱包订单支付成功扣款');
        }
        return $transfer_ids;
    }
}
