<?php

namespace yybawang\ebank\Models;


class EbankReason extends EbankModel
{
    protected $with = ['walletType'];

    public function walletType(){
        return $this->belongsTo(EbankWalletType::class, 'wallet_type_id');
    }
}
