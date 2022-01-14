<?php

namespace yybawang\ebank\Models;


class EbankBehavior extends EbankModel
{
    const FUNCNAMES = [
        'wallets' => '所有钱包',
        'wallet' => '单个钱包',
        'transfer' => '转账',
        'unTransfer' => '转账冲正',
        'deleteTransfer' => '删除流水记录',
        'freeze' => '余额冻结',
        'unfreeze' => '余额解冻',
        'freezeForce' => '余额强制冻结',
        'order' => '支付下单',
        'orderPaid' => '订单成功结算',
        'orderCancelled' => '订单取消',
    ];

    protected $casts = [
        'params' => 'json',
        'response' => 'json',
    ];
}
