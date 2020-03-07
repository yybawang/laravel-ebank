<?php


namespace yybawang\ebank\Illuminate\Payments;


use Yansongda\Pay\Pay;
use Yansongda\Supports\Collection;

class AlipayTransferPayment extends PaymentGateway
{

    /**
     * @return Collection
     */
    public function handle()
    {
        $param = [
            'out_biz_no' => $this->order_no,
            'payee_type' => $this->payee_type,
            'payee_account' => $this->payee_account,
            'amount' => round($this->amount_third_party / 100, 2),
        ];

        return Pay::alipay(config('ebank.platforms.alipay'))->transfer($param);
    }
}
