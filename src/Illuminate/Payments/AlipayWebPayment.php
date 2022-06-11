<?php


namespace yybawang\ebank\Illuminate\Payments;


use Symfony\Component\HttpFoundation\Response;
use Yansongda\Pay\Pay;

class AlipayWebPayment extends PaymentGateway
{

    /**
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function handle()
    {
        $param = [
            'out_trade_no' => $this->order_no,
            'subject' => $this->product_name,
            'total_amount' => round($this->amount_third_party / 100, 2),
        ];

        return Pay::alipay(config('ebank.platforms.alipay'))->web($param);
    }
}
