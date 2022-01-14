<?php

namespace yybawang\ebank\Models;


class EbankFreeze extends EbankModel
{
    protected $with = ['wallet'];

    public function wallet(){
        return $this->belongsTo(EbankWallet::class, 'wallet_id');
    }
}
