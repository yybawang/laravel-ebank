<?php


namespace yybawang\ebank\Illuminate\Payments;


use Illuminate\Support\Facades\Validator;
use Yansongda\Pay\Pay;
use Yansongda\Supports\Collection;

class WechatTransferPayment extends PaymentGateway
{

    /**
     * @return Collection
     */
    public function handle()
    {
        $param = [
            'partner_trade_no' => $this->order_no,
            'desc' => $this->product_name,
            'amount' => $this->amount_third_party,
            'openid' => $this->openid,
            'check_name' => 'NO_CHECK',
        ];
        $Validator = Validator::make($param, [
            'openid' => 'required',
        ]);
        if($Validator->fails()){
            abort(422, $Validator->errors()->first());
        }

        return Pay::wechat(config('ebank.platforms.wechat'))->transfer($param);
    }
}
