<?php

namespace yybawang\ebank\Models;


use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;

class EbankTransfer extends EbankModel
{
    use SoftDeletes;

    const STATUS_SUCCESS = 1;   // 正常成功状态
    const STATUS_REVERSAL = 2;  // 已冲正

    protected $with = ['reason', 'wallet', 'identity'];
    protected $casts = [
        'upstream' => 'array',
    ];

    public function reason(){
        return $this->belongsTo(EbankReason::class, 'reason_id');
    }

    public function wallet(){
        return $this->belongsTo(EbankWallet::class, 'wallet_id');
    }

    public function walletType(){
        return $this->belongsTo(EbankWalletType::class, 'wallet_type_id');
    }

    public function identity(){
        return $this->morphTo();
    }
}
