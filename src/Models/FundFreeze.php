<?php

namespace yybawang\ebank\Models;


class FundFreeze extends FundModel
{
    protected $with = ['purse'];
    protected $casts = [
        'detail' => 'json',
    ];

    public function purse(){
        return $this->belongsTo(FundPurse::class, 'purse_id', 'id');
    }
}
