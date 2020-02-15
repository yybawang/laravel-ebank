<?php
return [

    /*
    |--------------------------------------------------------------------------
    | EBank Path
    |--------------------------------------------------------------------------
    |
    | This is the URI path where EBank will be accessible from. Feel free
    | to change this path to anything you like.
    |
    */
    'path'=> env('EBANK_URL', 'ebank'),

    /*
    |--------------------------------------------------------------------------
    | Merchant KEY/SECRET
    |--------------------------------------------------------------------------
    |
    | This is EBank merchant information for class EBankSDK.
    | You can configure it on admin panel.
    |
    */
    'ebank_merchant_appid'=> env('EBANK_MERCHANT_KEY', '10000'),
    'ebank_merchant_secret'=> env('EBANK_MERCHANT_SECRET', '10000'),


];
