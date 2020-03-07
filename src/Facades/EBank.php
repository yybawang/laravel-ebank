<?php


namespace yybawang\ebank\Facades;


use Illuminate\Support\Facades\Facade as LaravelFacade;
use yybawang\ebank\Illuminate\PurseFreeze;
use yybawang\ebank\Illuminate\PurseOrder;
use yybawang\ebank\Illuminate\PurseOrderCancelled;
use yybawang\ebank\Illuminate\PurseOrderPaid;
use yybawang\ebank\Illuminate\PurseTransfer;
use yybawang\ebank\Illuminate\PurseUnfreeze;
use yybawang\ebank\Illuminate\PurseUnTransfer;
use yybawang\ebank\Illuminate\PurseWallet;
use yybawang\ebank\Illuminate\PurseWallets;

/**
 * Class EBank
 * @package yybawang\ebank
 */
class EBank extends LaravelFacade
{
    /**
     * 获取所有钱包
     * @param int $user_id 用户ID
     * @param string|null $identity_name 身份类型名称，默认为 user
     * @return array|mixed 返回钱包列表
     */
    public static function wallets(int $user_id, ?string $identity_name = null)
    {
        return (new PurseWallets())->user($user_id)->identity($identity_name)->execute();
    }

    /**
     * 获取某一钱包
     * @param int $user_id 用户ID
     * @param string $purse_name 钱包类型名称，[cash, integral, credit, etc.]
     * @param string|null $identity_name 身份类型名称，默认为 user
     * @return array|mixed 返回钱包详情
     */
    public static function wallet(int $user_id, string $purse_name, ?string $identity_name = null){
        return (new PurseWallet())->user($user_id)->purse($purse_name)->identity($identity_name)->execute();
    }

    /**
     * @param int $out_user_id 出帐用户ID，系统出帐为0
     * @param int $into_user_id 进账用户ID，系统进账为0
     * @param int $amount 转账金额
     * @param int $reason
     * @param null $detail 自定义详情，可根据不同业务自行填充
     * @param string|null $remarks  备注，根据业务自行传入
     * @return int|mixed 返回转账ID，如果是核心业务，建议记录ID到业务表，用于冲正和核对业务
     */
    public static function transfer(int $out_user_id, int $into_user_id, int $amount, int $reason, $detail = null, ?string $remarks = null){
        return (new PurseTransfer())->outUser($out_user_id)->intoUser($into_user_id)->amount($amount)->reason($reason)->detail($detail)->remarks($remarks)->execute();
    }

    /**
     * @param int $transfer_id 调用转账返回的ID
     * @param string|null $remarks 备注，根据业务自行传入
     * @return bool|mixed
     */
    public static function unTransfer(int $transfer_id, ?string $remarks = null){
        return (new PurseUnTransfer())->transferId($transfer_id)->remarks($remarks)->execute();
    }

    /**
     * @param int $purse_id 用户钱包ID
     * @param int $amount 冻结金额
     * @param array $detail 业务详情
     * @param string|null $remarks 备注，根据业务自行传入
     * @return int|mixed 冻结ID，请自行记录到业务，用于冻结还原
     */
    public static function freeze(int $purse_id, int $amount, array $detail = [], ?string $remarks = null){
        return (new PurseFreeze())->purseId($purse_id)->amount($amount)->detail($detail)->remarks($remarks)->execute();
    }

    /**
     * @param int $purse_id 用户钱包ID
     * @param int $amount 冻结金额
     * @param array $detail 业务详情
     * @param string|null $remarks 备注，根据业务自行传入
     * @return int|mixed 冻结ID，请自行记录到业务，用于冻结还原
     */
    public static function freezeForce(int $purse_id, int $amount, array $detail = [], ?string $remarks = null){
        return (new PurseFreeze())->purseId($purse_id)->amount($amount)->detail($detail)->remarks($remarks)->execute();
    }

    /**
     * @param int $freeze_id 冻结方法返回的ID
     * @return bool|mixed
     */
    public static function unfreeze(int $freeze_id){
        return (new PurseUnfreeze())->freezeId($freeze_id)->execute();
    }

    /**
     * @param int $user_id 下单用户ID
     * @param string $order_no 唯一订单号
     * @param string $product_name 商品名
     * @param array $payments 支付方式列表，「键」为支付配置名，「值」为支付金额
     * @param array 额外参数 不同支付方式的额外参数，「键」为参数名，「值」为参数名
     * @return mixed
     */
    public static function order(int $user_id, string $order_no, string $product_name, array $payments, array $extra_param = []){
        return (new PurseOrder())->userId($user_id)->orderNo($order_no)->productName($product_name)->payments($payments)->extraParam($extra_param)->execute();
    }

    /**
     * 订单取消，解冻内部钱包的预冻结金额
     * @param string $order_no
     * @return bool
     */
    public static function orderCancelled(string $order_no){
        return (new PurseOrderCancelled())->orderNo($order_no)->execute();
    }

    /**
     * 订单支付成功，解冻内部钱包的预冻结金额并执行扣款
     * @param string $order_no
     * @return array
     */
    public static function orderPaid(string $order_no){
        return (new PurseOrderPaid())->orderNo($order_no)->execute();
    }
}
