<?php


namespace yybawang\ebank\Illuminate\Payments;


use yybawang\ebank\Facades\EBank;
use yybawang\ebank\Models\FundFreeze;

class PaymentGateway
{
    /**
     * @var int $user_id 下单用户ID
     */
    public $user_id;

    /**
     * @var string $order_no 唯一订单号
     */
    public $order_no;

    /**
     * @var string $product_name 商品名
     */
    public $product_name;

    /**
     * @var array $payments 支付方式列表
     */
    public $payments;

    /**
     * @var int $amount_wallet 内部钱包支付总金额
     */
    public $amount_wallet;

    /**
     * @var int $amount_third_party 三方支付总金额
     */
    public $amount_third_party;

    /**
     * @var array 额外参数
     */
    private $param = [];

    /**
     * 获取所有参数
     * @return array
     */
    public function all(){
        return array_merge([
            'order_no' => $this->order_no,
            'product_name' => $this->product_name,
            'payments' => $this->payments,
        ], $this->param);
    }

    /**
     * 如果有内部钱包，就提前冻结
     */
    public function preFreeze(){

        $payments = $this->payments;
        $wallets = [];
        $freeze_ids = [];
        $payments = collect($payments)->filter(function($price, $payment){
            return strpos($payment, 'wallet_') === 0;
        });
        // 是否已经存在冻结，不能重复调用
        if(FundFreeze::where('detail->order_no', $this->order_no)->exists()){
            abort(422, '订单号重复，请保证下单号唯一');
        }
        foreach ($payments as $payment => $price){
            $purse_name = ucfirst(substr(strstr($payment, '_'), 1));
            $wallet = EBank::wallet($this->user_id, $purse_name);
            if($wallet->balance < $price){
                abort(422, '['.$payment.'] 钱包可用额度不足');
            }
            $wallets[$payment] = $wallet;
        }
        foreach ($payments as $payment => $price) {
            $freeze_ids[] = EBank::freeze($wallets[$payment]->id, $price, ['detail' => ['order_no' => $this->order_no]], '订单预支付前冻结');
        }
        return $freeze_ids;
    }

    /**
     * 设置额外参数
     * @param $name
     * @param $value
     */
    public function __set($name, $value)
    {
        $this->param[$name] = $value;
    }

    /**
     * 获取额外参数
     * @param $name
     * @return mixed
     */
    public function __get($name)
    {
        return $this->param[$name] ?? null;
    }
}
