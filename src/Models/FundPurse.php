<?php

namespace yybawang\ebank\Models;


use Illuminate\Database\Eloquent\Builder;

/**
 * @property int id
 * @property int user_id
 * @property int identity_type_id
 * @property int purse_type_id
 * @property int balance
 * @property int freeze
 * @property int status
 * @property string remarks
 * @property string created_at
 * @property string updated_at
 * Class FundPurse
 * @package yybawang\ebank\Models
 */
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
