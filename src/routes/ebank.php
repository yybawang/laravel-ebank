<?php

namespace yybawang\ebank\Http\Controllers;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use yybawang\ebank\Http\Middleware\Authenticate;

Route::middleware(array_merge(config('ebank.middleware') ?? [], [Authenticate::class]))->prefix(Str::start(config('ebank.path'), '/'))->group(function(){
    Route::get('/', [IndexController::class, 'index']);
    Route::get('/dashboard', [IndexController::class, 'dashboard']);
    Route::get('/report', [IndexController::class, 'report']);

    Route::get('/transfers', [TransferController::class, 'index']);
    Route::get('/transfers/filters', [TransferController::class, 'filters']);
    Route::put('/transfers/un_transfer/{id}', [TransferController::class, 'un_transfer']);
    Route::delete('/transfers/{id}', [TransferController::class, 'delete']);

    Route::get('/freezes', [FreezeController::class, 'index']);
    Route::put('/freezes/unfreeze/{id}', [FreezeController::class, 'unfreeze']);

    Route::get('/purses', [WalletController::class, 'index']);
    Route::get('/purses/filters', [WalletController::class, 'filters']);
    Route::put('/purses/enabled', [WalletController::class, 'enabled']);
    Route::put('/purses/disabled', [WalletController::class, 'disabled']);

    Route::get('/purse_types', [WalletTypeController::class, 'index']);
    Route::get('/purse_types/{id}', [WalletTypeController::class, 'show']);
    Route::post('/purse_types', [WalletTypeController::class, 'store']);
    Route::delete('/purse_types/{id}', [WalletTypeController::class, 'delete']);

    Route::get('/reasons', [ReasonsController::class, 'index']);
    Route::get('/reasons/{id}', [ReasonsController::class, 'show']);
    Route::post('/reasons', [ReasonsController::class, 'store']);
    Route::delete('/reasons/{id}', [ReasonsController::class, 'delete']);

    Route::get('/reports/reason', [ReportController::class, 'reason']);
    Route::get('/reports/transfer', [ReportController::class, 'transfer']);

    Route::get('/behaviors', [BehaviorController::class, 'index']);
    Route::get('/behaviors/{id}', [BehaviorController::class, 'show']);
});
