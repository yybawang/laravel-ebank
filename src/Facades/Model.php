<?php


namespace yybawang\ebank\Facades;


use yybawang\ebank\Models\EbankBehavior;
use yybawang\ebank\Models\EbankFreeze;
use yybawang\ebank\Models\EbankReason;
use yybawang\ebank\Models\EbankTransfer;
use yybawang\ebank\Models\EbankWallet;
use yybawang\ebank\Models\EbankWalletType;

class Model
{
    public $behavior;
    public $freeze;
    public $reason;
    public $transfer;
    public $wallet;
    public $walletType;

    public function __construct()
    {
        $this->behavior = EbankBehavior::query();
        $this->freeze = EbankFreeze::query();
        $this->reason = EbankReason::query();
        $this->transfer = EbankTransfer::query();
        $this->wallet = EbankWallet::query();
        $this->walletType = EbankWalletType::query();
    }
}
