<?php


namespace yybawang\ebank\Illuminate\Payments;


use Yansongda\Pay\Pay;
use Yansongda\Supports\Collection;

class WechatScanPayment extends PaymentGateway
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
        ];

        return Pay::wechat(config('ebank.platforms.wechat'))->scan($param);
    }
}
