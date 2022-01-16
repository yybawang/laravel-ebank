<?php


namespace yybawang\ebank\Facades;

use Illuminate\Support\Facades\Facade as LaravelFacade;
use yybawang\ebank\Illuminate\EBankFreeze;
use yybawang\ebank\Illuminate\EBankFreezeForce;
use yybawang\ebank\Illuminate\EBankTransfer;
use yybawang\ebank\Illuminate\EBankUnfreeze;
use yybawang\ebank\Illuminate\EBankUnTransfer;
use yybawang\ebank\Illuminate\EBankWallet;
use yybawang\ebank\Illuminate\EBankWallets;

class EBank extends  LaravelFacade
{
    /**
     * 所有 Model 对象，可以自定义查询流水/时间筛选等数据
     * @return Model
     */
    public static function model(){
        return new Model();
    }

    public static function wallets($model){
        abort_if(!method_exists($model, 'getKey') || $model->getKey() <= 0, 422, '参数错误，请传递 Model 对象');
        return (new EBankWallets())->setIdentity($model)->execute();
    }

    public static function wallet($model, $wallet_alias){
        abort_if(!method_exists($model, 'getKey') || $model->getKey() <= 0, 422, '参数错误，请传递 Model 对象');
        return (new EBankWallet())->setIdentity($model)->setWalletAlias($wallet_alias)->execute();
    }

    public static function transfer($model, float $amount, int $reason, array $upstream = [], ?string $remarks = null){
        abort_if(!method_exists($model, 'getKey') || $model->getKey() <= 0, 422, '参数错误，请传递 Model 对象');
        return (new EBankTransfer())->setIdentity($model)->setAmount($amount)->setReason($reason)->setUpstream($upstream)->setRemarks($remarks)->execute();
    }

    public static function unTransfer(int $transfer_id){
        return (new EBankUnTransfer())->setTransferId($transfer_id)->execute();
    }

    public static function freeze($model, float $amount, string $wallet_alias, ?string $remarks = null){
        abort_if(!method_exists($model, 'getKey') || $model->getKey() <= 0, 422, '参数错误，请传递 Model 对象');
        return (new EBankFreeze())->setIdentity($model)->setAmount($amount)->setWalletAlias($wallet_alias)->setRemarks($remarks)->execute();
    }

    public static function freezeForce($model, float $amount, string $wallet_alias, ?string $remarks = null){
        abort_if(!method_exists($model, 'getKey') || $model->getKey() <= 0, 422, '参数错误，请传递 Model 对象');
        return (new EBankFreezeForce())->setIdentity($model)->setAmount($amount)->setWalletAlias($wallet_alias)->setRemarks($remarks)->execute();
    }

    public static function unfreeze(int $freeze_id){
        return (new EBankUnfreeze())->setFreezeId($freeze_id)->execute();
    }
}
