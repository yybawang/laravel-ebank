<?php

namespace yybawang\ebank\Models;


use Illuminate\Database\Eloquent\Builder;

class FundTransferReason extends FundModel
{
    protected $with = ['outIdentityType', 'intoIdentityType', 'outPurseType', 'intoPurseType'];

    protected static function boot()
    {
        parent::boot();
        static::addGlobalScope('active', function(Builder $builder){
            return $builder->where('status', 1);
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
}
