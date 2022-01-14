<?php

namespace yybawang\ebank\Models;


class EbankWallet extends EbankModel
{
    protected $with = ['identity', 'walletType'];

    public function identity(){
        return $this->morphTo();
    }

    public function walletType(){
        return $this->belongsTo(EbankWalletType::class, 'wallet_type_id');
    }
}
