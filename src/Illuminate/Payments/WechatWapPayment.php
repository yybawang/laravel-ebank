<?php


namespace yybawang\ebank\Illuminate\Payments;


use Symfony\Component\HttpFoundation\RedirectResponse;
use Yansongda\Pay\Pay;

class WechatWapPayment extends PaymentGateway
{

    /**
     * @return RedirectResponse
     */
    public function handle()
    {
        $param = [
            'out_trade_no' => $this->order_no,
            'body' => $this->product_name,
            'total_fee' => $this->amount_third_party,
        ];

        return Pay::wechat(config('ebank.platforms.wechat'))->wap($param);
    }
}
