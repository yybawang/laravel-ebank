<?php

namespace yybawang\ebank\Models;


use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;

class FundTransfer extends FundModel
{
    use SoftDeletes;

    const STATUS_SUCCESS = 1;   // 正常成功状态
    const STATUS_REVERSAL = 2;  // 已冲正

    protected $with = ['outIdentityType', 'intoIdentityType', 'outPurseType', 'intoPurseType', 'outPurse', 'intoPurse'];
    protected $casts = [
        'detail' => 'json',
    ];

    protected static function boot()
    {
        parent::boot();
        static::addGlobalScope('success', function(Builder $builder){
            return $builder->where('status', self::STATUS_SUCCESS);
        });
    }

    public function outIdentityType(){
        return $this->belongsTo(FundIdentityType::class, 'out_identity_type_id');
    }

    public function intoIdentityType(){
        return $this->belongsTo(FundIdentityType::class, 'into_identity_type_id');
    }

    public function outPurseType(){
        return $this->belongsTo(FundPurseType::class, 'out_purse_type_id');
    }

    public function intoPurseType(){
        return $this->belongsTo(FundPurseType::class, 'into_purse_type_id');
    }

    public function outPurse(){
        return $this->belongsTo(FundPurse::class, 'out_purse_id');
    }

    public function intoPurse(){
        return $this->belongsTo(FundPurse::class, 'into_purse_id');
    }
}
