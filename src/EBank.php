<?php


namespace yybawang\ebank;


use Illuminate\Support\Facades\Facade as LaravelFacade;
use yybawang\ebank\Provides\EBankAdminProvider;
use yybawang\ebank\Provides\EBankApiProvider;

/**
 * Class EBank
 * @package yybawang\ebank
 */
class EBank extends LaravelFacade
{
    /**
     * @return EBankAdminProvider
     */
    public static function admin(){
        return app('ebank.admin');
    }
    /**
     * @return EBankApiProvider
     */
    public static function api(){
        return app('ebank.api');
    }
}
