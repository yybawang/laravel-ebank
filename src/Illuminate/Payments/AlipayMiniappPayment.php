<?php


namespace yybawang\ebank\Illuminate\Payments;


use Yansongda\Pay\Pay;
use Yansongda\Supports\Collection;

class AlipayMiniappPayment extends PaymentGateway
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
            'buyer_id' => $this->buyer_id,
        ];

        return Pay::alipay(config('ebank.platforms.alipay'))->mini($param);
    }
}
