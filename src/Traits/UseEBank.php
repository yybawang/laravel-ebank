<?php

namespace yybawang\ebank\Traits;

use yybawang\ebank\Facades\EBank;

/**
 * Laravel Ebank trait
 * Trait UseEBank
 * @package yybawang\ebank\Models\Traits
// * @method Collection wallets
// * @method EBankWallet wallet
// * @method int freeze
// * @method int freezeForce
// * @method bool unfreeze
// * @method int transfer
// * @method bool unTransfer
 */
trait UseEBank {

    /**
     * 用户所有钱包|模型
     * @return \Illuminate\Support\Collection
     */
    public function wallets(){
        return EBank::wallets($this);
    }

    /**
     * 用户某钱包详情|模型
     * @param string $wallet_alias
     * @return \yybawang\ebank\Models\EbankWallet
     */
    public function wallet(string $wallet_alias){
        return EBank::wallet($this, $wallet_alias);
    }

    /**
     * 钱包转账，加减款流水
     * @param float $amount
     * @param string $wallet_alias
     * @param int $reason
     * @param array $upstream
     * @param string|null $remarks
     * @return int
     */
    public function transfer(float $amount, string $wallet_alias, int $reason, array $upstream = [], ?string $remarks = null){
        return EBank::transfer($this, $amount, $wallet_alias, $reason, $upstream, $remarks);
    }

    /**
     * 流水冲正
     * @param int $transfer_id
     * @return bool
     */
    public function unTransfer(int $transfer_id){
        return EBank::unTransfer($transfer_id);
    }

    /**
     * 冻结资金
     * @param float $amount
     * @param string $wallet_alias
     * @param string|null $remarks
     * @return int 冻结ID，业务方需存入此ID用作后续解冻
     */
    public function freeze(float $amount, string $wallet_alias, ?string $remarks = null){
        return EBank::freeze($this, $amount, $wallet_alias, $remarks);
    }

    /**
     * 强制冻结，不判断用户是否有余额并且允许余额为负数
     * @param float $amount
     * @param string $wallet_alias
     * @param string|null $remarks
     * @return int 冻结ID，业务方需存入此ID用作后续解冻
     */
    public function freezeForce(float $amount, string $wallet_alias, ?string $remarks = null){
        return EBank::freezeForce($this, $amount, $wallet_alias, $remarks);
    }

    /**
     * 金额解冻
     * @param int $freeze_id
     * @return bool
     */
    public function unfreeze(int $freeze_id){
        return EBank::unfreeze($freeze_id);
    }

    /**
     * 所有数据模型
     * @return \yybawang\ebank\Facades\Model
     */
    public function model(){
        return EBank::model();
    }
}
