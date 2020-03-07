<?php


namespace yybawang\ebank\Illuminate\Payments;


use Symfony\Component\HttpFoundation\JsonResponse;
use Yansongda\Pay\Pay;

class WechatAppPayment extends PaymentGateway
{

    /**
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function handle()
    {
        $param = [
            'out_trade_no' => $this->order_no,
            'body' => $this->product_name,
            'total_fee' => $this->amount_third_party,
        ];

        return Pay::wechat(config('ebank.platforms.wechat'))->app($param);
    }
}
