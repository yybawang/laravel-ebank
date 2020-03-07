<?php


namespace yybawang\ebank\Illuminate\Payments;


use Illuminate\Support\Facades\Validator;
use Yansongda\Pay\Pay;
use Yansongda\Supports\Collection;

class WechatRedpackPayment extends PaymentGateway
{

    /**
     * @return Collection
     */
    public function handle()
    {
        $param = [
            'mch_billno' => $this->order_no,
            'send_name' => $this->product_name,
            'total_amount' => $this->amount_third_party,
            're_openid' => $this->openid,
            'total_num' => $this->total_num ?? 1,
            'wishing' => $this->wishing ?? '恭喜发财，大吉大利',
            'act_name' => $this->act_name ?? '参与奖励',
        ];
        $Validator = Validator::make($param, [
            're_openid' => 'required',
            'total_num'=> 'required|integer|min:1',
        ]);
        if($Validator->fails()){
            abort(422, $Validator->errors()->first());
        }

        return Pay::wechat(config('ebank.platforms.wechat'))->redpack($param);
    }
}
