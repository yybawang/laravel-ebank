<?php


namespace yybawang\ebank\Illuminate\Payments;


use Illuminate\Support\Facades\Validator;
use Yansongda\Pay\Pay;
use Yansongda\Supports\Collection;

class WechatMpPayment extends PaymentGateway
{

    /**
     * @return Collection
     */
    public function handle()
    {
        $param = [
            'out_trade_no' => $this->order_no,
            'body' => $this->product_name,
            'total_fee' => $this->amount_third_party,
            'openid' => $this->openid,
        ];
        $Validator = Validator::make($param, [
            'openid' => 'required',
        ]);
        if($Validator->fails()){
            abort(422, $Validator->errors()->first());
        }

        return Pay::wechat(config('ebank.platforms.wechat'))->mp($param);
    }
}
