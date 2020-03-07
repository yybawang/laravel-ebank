<?php


namespace yybawang\ebank\Illuminate\Payments;


use Illuminate\Support\Facades\Validator;
use Yansongda\Pay\Pay;
use Yansongda\Supports\Collection;

class AlipayPosPayment extends PaymentGateway
{

    /**
     * @return Collection
     */
    public function handle()
    {
        $param = [
            'out_trade_no' => $this->order_no,
            'subject' => $this->product_name,
            'total_amount' => round($this->amount_third_party / 100, 2),
            'auth_code' => $this->auth_code,
        ];
        $Validator = Validator::make($param, [
            'auth_code' => 'required',
        ]);
        if($Validator->fails()){
            abort(422, $Validator->errors()->first());
        }

        return Pay::alipay(config('ebank.platforms.alipay'))->pos($param);
    }
}
