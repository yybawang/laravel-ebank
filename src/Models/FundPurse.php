<?php

namespace yybawang\ebank\Models;


use Illuminate\Database\Eloquent\Builder;

class FundPurse extends FundModel
{
    protected $with = ['identityType', 'purseType'];

    protected static function boot()
    {
        parent::boot();
        static::addGlobalScope('active', function(Builder $builder){
            return $builder->where('status', 1);
        });
    }

    public function identityType(){
        return $this->belongsTo(FundIdentityType::class, 'identity_type_id');
    }

    public function purseType(){
        return $this->belongsTo(FundPurseType::class, 'purse_type_id');
    }
}
