<?php


namespace yybawang\ebank\Illuminate;


use Illuminate\Support\Facades\Validator;
use yybawang\ebank\Models\FundPurseType;

class PurseOrder
{
    use BehaviorMiddleware;

    private $param = ['payments' => []];

    public function userId(int $user_id){
        $this->param['user_id'] = $user_id;
        return $this;
    }

    /**
     * @param string $order_no 唯一订单号
     * @return $this
     */
    public function orderNo(string $order_no){
        $this->param['order_no'] = $order_no;
        return $this;
    }

    /**
     * @param string $product_name 商品名
     * @return $this
     */
    public function productName(string $product_name){
        $this->param['product_name'] = $product_name;
        return $this;
    }

    /**
     * 设置支付方式
     * @param array $payments
     * @return $this
     */
    public function payments(array $payments){
        foreach ($payments as $payment=> $amount){
            $Validator = Validator::make([
                'payment'=> $payment,
                'amount'=> $amount,
            ],[
                'payment'=> 'required',
                'amount'=> 'required|integer|min:1',
            ]);
            if($Validator->fails()){
                abort(422, $Validator->errors()->first());
            }
        }
        $this->param['payments'] = $payments;
        return $this;
    }

    /**
     * 追加支付方式
     * @param string $payment 支付方法名
     * @param int $price 支付金额
     * @return $this
     */
    public function appendPayment(string $payment, int $price){
        $Validator = Validator::make([
            'payment'=> $payment,
            'price'=> $price,
        ],[
            'payment'=> 'required',
            'price'=> 'required|integer|min:1',
        ]);
        if($Validator->fails()){
            abort(422, $Validator->errors()->first());
        }

        $this->param['payments'][$payment] = $price;
        return $this;
    }

    /**
     * 额外参数
     * @param array $extra_param 额外参数，键值对
     * @return $this
     */
    public function extraParam(array $extra_param){
        foreach ($extra_param as $key=> $value){
            $Validator = Validator::make([
                'key'=> $key,
                'value'=> $value,
            ],[
                'key'=> 'required',
                'value'=> '',
            ]);
            if($Validator->fails()){
                abort(422, $Validator->errors()->first());
            }
            $this->param[$key] = $value;
        }
        return $this;
    }

    /**
     * 追加额外参数
     * @param string $key 参数名
     * @param mixed$value 参数值
     * @return $this
     */
    public function appendExtraParam(string $key, $value){
        $Validator = Validator::make([
            'key'=> $key,
            'value'=> $value,
        ],[
            'key'=> 'required',
            'value'=> '',
        ]);
        if($Validator->fails()){
            abort(422, $Validator->errors()->first());
        }

        $this->param[$key] = $value;
        return $this;
    }

    /**
     * @return mixed
     */
    public function execute(){
        $pay_type_third = null;    // 三方支付方式
        $pay_type_third_count = 0; // 三方支付数量
        $pay_type_wallet_count = 0; // 内部支付数量
        $amount = 0;    // 所有支付方式的支付总额
        $amount_wallet = 0; // 单独内部支付的支付金额

        if(empty($this->param['order_no'])){
            $this->param['order_no'] = (10).date('YmdHis').rand(1000, 9999).rand(1000, 9999);
        }

        $purse_type = FundPurseType::pluck('alias')->mapWithKeys(function($alias){
            return ['wallet_'.$alias=> 'wallet_'.$alias];
        });
        foreach ($this->param['payments'] as $payment=> $price){
            // 如果是内部支付，否则第三方支付
            if($purse_type->has($payment)){     // 如果是内部钱包支付
                $pay_type_wallet_count++;
                $amount_wallet += $price;
            }else{
                $pay_type_third_count++;
                $pay_type_third = $payment;
            }
            $amount += $price;
        }
        // 计算三方支付金额，以总金额减去内部钱包金额为准
        $amount_third_party = $amount - $amount_wallet;

        // 如果第三方支付+内部钱包支付不登录组合支付数量，就是参数有误
        if($pay_type_third_count + $pay_type_wallet_count != count($this->param['payments'])){
            abort(422, '组合支付参数中存在不支持的支付方式');
        }
        if($amount < 0.01){
            abort(422, '订单金额不能少于 0.01 元');
        }

        if($pay_type_third && $pay_type_third_count != 1){
            abort(422, '存在多个第三方支付，三方支付方式只能指定一个');
        }

        if($pay_type_third){
            $pay_type_unified = $pay_type_third;
        }else{
            $pay_type_unified = 'wallet';
        }

        $this->handle('order', $this->param);
        $payments_config = config('ebank.payments');
        // 执行最终的支付方法
        if(!array_key_exists($pay_type_unified, $payments_config)){
            abort(422, '未配置的三方平台支付方式：' . $pay_type_unified);
        }
        $payment_class = $payments_config[$pay_type_unified];
        $Payment = new $payment_class();
        foreach ($this->param as $key => $value){
            $Payment->$key = $value;
        }
        $Payment->amount_wallet = $amount_wallet;
        $Payment->amount_third_party = $amount_third_party;
        // 如果是三方支付，提前冻结内部钱包支付的金额
        if($pay_type_unified !== 'wallet'){
            $Payment->preFreeze();
        }
        $response = $Payment->handle();
        $this->terminate($response);
        return $response;
    }
}
