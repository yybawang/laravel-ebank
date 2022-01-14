<?php
/**
 * 电子银行核心sdk类库单文件
 */

namespace yybawang\ebank\Illuminate;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use yybawang\ebank\Models\EbankFreeze;
use yybawang\ebank\Models\EbankWalletType;
use yybawang\ebank\Models\EbankTransfer;
use yybawang\ebank\Models\EbankReason;
use yybawang\ebank\Models\EbankWallet;
use Illuminate\Contracts\Cache\LockTimeoutException;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

/**
 * 电子银行转账核心类
 *
 * 身份类型定死的三种类型，id 可以不固定
 * 1、中央银行
 * 2、系统银行
 * 3、用户银行
 * 可扩展其他类型，如商家
 *
 * 钱包类型定死一种类型，id 可以不固定，预置三种钱包类型
 * 1、现金钱包
 * 2、积分钱包
 * 3、授信钱包
 * 可扩展其它钱包类型，如红包
 */
class ApplicationService
{

    /**
     * 开始转账，使用身份类型&钱包类型别名驼峰拼接的形式解析
     * 内部使用，不暴露给外部SDK
     * @param $name
     * @param $arguments
     * @return int
     */
    public function __call($name, $arguments)
    {
        $out_user_id = $arguments[0] ?? 0;
        $into_user_id = $arguments[1] ?? 0;
        $amount = $arguments[2];
        $detail = $arguments[3];
        $reason_name = $arguments[4];

        $transfer_name = explode('_', Str::snake($name));
        if (count($transfer_name) != 5) {
            abort(422, '转账 alias 拼接参数有误');
        }

        $Validator = Validator::make([
            'from_user_id' => $out_user_id,
            'to_user_id' => $into_user_id,
            'amount' => $amount,
            'detail' => $detail,
            'out_identity_type' => $transfer_name[0],
            'out_purse_type' => $transfer_name[1],
            'into_identity_type' => $transfer_name[3],
            'into_purse_type' => $transfer_name[4]
        ], [
            'from_user_id' => 'required|integer|min:0',
            'to_user_id' => 'required|integer|min:0',
            'amount' => 'required|integer|min:1',
            'out_identity_type' => [
                'required',
                Rule::exists('fund_identity_types', 'alias')->where('status', 1),
            ],
            'out_purse_type' => [
                'required',
                Rule::exists('fund_purse_types', 'alias')->where('status', 1),
            ],
            'into_identity_type' => [
                'required',
                Rule::exists('fund_identity_types', 'alias')->where('status', 1),
            ],
            'into_purse_type' => [
                'required',
                Rule::exists('fund_purse_types', 'alias')->where('status', 1),
            ],
        ], [
            'from_user_id.required' => '转出用户ID参数必传',
            'from_user_id.integer' => '转出用户ID参数只能为正整数',
            'from_user_id.min' => '转出用户ID参数只能为正整数',
            'to_user_id.required' => '转入用户ID参数必传',
            'to_user_id.integer' => '转入用户ID参数只能为正整数',
            'to_user_id.min' => '转入用户ID参数只能为正整数',
            'amount.required' => '金额参数必传',
            'amount.integer' => '金额参数只能为正整数',
            'amount.min' => '金额参数只能为正整数',
            'out_identity_type.required' => '转出身份类型参数必传',
            'out_identity_type.exists' => '转出身份类型不存在',
            'out_purse_type.required' => '转出钱包类型参数必传',
            'out_purse_type.exists' => '转出钱包类型不存在',
            'into_identity_type.required' => '转入身份类型参数必传',
            'into_identity_type.exists' => '转入身份类型不存在',
            'into_purse_type.required' => '转入钱包类型参数必传',
            'into_purse_type.exists' => '转入钱包类型不存在',
        ]);
        if($Validator->fails()){
            abort(422, $Validator->errors()->first());
        }

        $out_identity_type = $transfer_name[0];
        $out_identity_type_id = EbankIdentityType::where(['alias' => $out_identity_type])->value('id');
        $out_purse_type = $transfer_name[1];
        $out_purse_type_id = EbankWalletType::where(['alias' => $out_purse_type])->value('id');
        $into_identity_type = $transfer_name[3];
        $into_identity_type_id = EbankIdentityType::where(['alias' => $into_identity_type])->value('id');
        $into_purse_type = $transfer_name[4];
        $into_purse_type_id = EbankWalletType::where(['alias' => $into_purse_type])->value('id');

        // 如果出账钱包或入账钱包为系统默认的三个钱包，就设置 user_id = 0;
        if ($out_identity_type === 'central' || $out_identity_type === 'system') {
            $out_user_id = 0;
        }
        if ($into_identity_type === 'central' || $into_identity_type === 'system') {
            $into_user_id = 0;
        }

        $out_purse = $this->walletDetail($out_user_id, $out_purse_type_id, $out_identity_type_id);
        $into_purse = $this->walletDetail($into_user_id, $into_purse_type_id, $into_identity_type_id);
        // 自动生成 reason，格式为：{$maxId} + 出账身份类型+出账钱包类型+进账身份类型+进账钱包类型
        $max_id = EbankReason::max('id') ?? 0;
        $reason = ($max_id + 1) . str_pad($out_identity_type_id, 2, '0', STR_PAD_LEFT) . str_pad($out_purse_type_id, 2, '0', STR_PAD_LEFT) . str_pad($into_identity_type_id, 2, '0', STR_PAD_LEFT) . str_pad($into_purse_type_id, 2, '0', STR_PAD_LEFT);
        EbankReason::firstOrCreate(['reason' => $reason], [
            'name' => $reason_name ?? '钱包内部变动',
            'out_identity_type_id' => $out_identity_type_id,
            'out_purse_type_id' => $out_purse_type_id,
            'into_identity_type_id' => $into_identity_type_id,
            'into_purse_type_id' => $into_purse_type_id,
            'status' => 1,
            'remarks' => '系统自动生成',
        ]);
        return $this->_transfer($out_purse->id, $into_purse->id, $amount, $reason, $detail);
    }


    /**
     * 转账暴露方法
     * @param int $wallet_id
     * @param float $amount
     * @param int $reason
     * @param array $upstream
     * @param null|string $remarks
     * @return int
     */
    public function transfer(int $wallet_id, float $amount, int $reason, array $upstream, ?string $remarks = null)
    {
        abort_if($amount === 0, 422, '转账金额不能为0');
        $Validator = Validator::make([
            'wallet_id' => $wallet_id,
            'amount' => $amount,
            'reason' => $reason,
            'upstream' => $upstream,
        ], [
            'wallet_id' => 'required|integer|min:1',
            'amount' => 'required|numeric',
            'reason' => [
                'required',
                'integer',
                Rule::exists('ebank_reasons', 'code')->where('status', 1),        // 底层已效验
            ],
            'upstream' => 'nullable|array',
        ]);
        abort_if($Validator->fails(), 422, $Validator->errors()->first());
        return $this->_transfer($wallet_id, $amount, $reason, $upstream, $remarks);
    }

    /**
     * @param int $wallet_id
     * @param float $amount
     * @param int $reason
     * @param array $upstream
     * @param string|null $remarks
     * @return int
     * 转账核心方法
     */
    private function _transfer(int $wallet_id, float $amount, int $reason, array $upstream = [], ?string $remarks = null)
    {
        abort_if($amount === 0, 422, '转账金额不能为0');
        $Validator = Validator::make([
            'wallet_id' => $wallet_id,
            'amount' => $amount,
            'reason' => $reason,
            'upstream' => $upstream,
        ], [
            'wallet_id' => [
                'required',
                'integer',
                Rule::exists('ebank_wallets', 'id'),
            ],
            'amount' => 'required|numeric',
            'reason' => [
                'required',
                'integer',
                Rule::exists('ebank_reasons', 'code')->where('status', 1),
            ],
            'upstream' => 'nullable|array',
        ]);
        abort_if($Validator->fails(), 422, $Validator->errors()->first());

        $Reason = EbankReason::where('code', $reason)->firstOrFail('id');
        $transfer_id = DB::transaction(function () use ($wallet_id, $amount, $Reason, $upstream, $remarks) {
            // 2019-11-26 14:48:39 修改为原子锁，避免幻读

            // 出账钱包扣款
            $wallet = null;
            $wallet_lock = Cache::lock('EBank@_transfer:' . $wallet_id);
            try {
                $wallet = $wallet_lock->block(50, function () use ($wallet_id, $amount) {
                    $var = EbankWallet::where(['id' => $wallet_id, 'status' => 1])->increment('balance', $amount);
                    // 未修改返回修改行数为0
                    if (!$var) {
                        return false;
                    }
                    return EbankWallet::find($wallet_id);
                });
                optional($wallet_lock)->release();
            } catch (LockTimeoutException $e) {
                abort(422, '钱包查询超时');
            } finally {
                optional($wallet_lock)->release();
            }
            if ($wallet === false) {
                abort(422, '钱包扣款失败，余额不足或账户被禁用');
            }

            // 增加流水
            $transfer_add = [
                'reason_id' => $Reason->id,
                'amount' => $amount,
                'wallet_id' => $wallet_id,
                'balance' => $wallet->balance,
                'identity_id' => $wallet->identity_id,
                'identity_type' => $wallet->identity_type,
                'upstream' => $upstream,
                'status' => 1,
                'remarks' => $remarks,
            ];
            return EbankTransfer::create($transfer_add)->id;
        });
        return $transfer_id;
    }


    /**
     * @param int $transfer_id
     * @return bool
     * 钱包冲正，资金原路退回，冲正后余额可为负数，避免资金不足冲正失败
     */
    public function unTransfer(int $transfer_id): bool
    {
        return DB::transaction(function () use ($transfer_id) {
            $detail = EbankTransfer::lockForUpdate()->findOrFail($transfer_id);

            if ($detail->status != 1) {
                abort(422, '数据('.$transfer_id.')状态已非活动，无法继续冲正');
            }
            $wallet_id = $detail->wallet_id;
            $amount = -$detail->amount;
            // 钱包加减款
            $var = EbankWallet::where(['id' => $wallet_id])->increment('balance', $amount);
            abort_if(!$var, 422, '冲正下转包('.$wallet_id.')余额修改失败');
            $detail->status = 2;
            return $detail->save();
        });
    }


    /**
     * @param int $identity_id
     * @param string $identity_type
     * @return \Illuminate\Support\Collection
     * 用户钱包
     */
    public function wallet(int $identity_id, string $identity_type)
    {
        $Validator = Validator::make(['identity_id' => $identity_id, 'identity_type' => $identity_type], [
            'identity_id' => 'required|integer|min:1',
            'identity_type' => 'required',
        ], [
            'identity_id.required' => '身份ID参数必传',
            'identity_id.integer' => '身份ID参数类型只能为正整数',
            'identity_id.min' => '身份ID参数最少为1',
            'identity_type.required' => '身份模型参数必传',
        ]);
        abort_if($Validator->fails(), 422, $Validator->errors()->first());

        $purse_types = EbankWalletType::pluck('id');
        $wallets = $purse_types->map(function ($purse_type_id) use ($identity_id, $identity_type) {
            return $this->walletDetail($identity_id, $identity_type, $purse_type_id);
        });
        return $wallets;
    }

    /**
     * @param int $identity_id
     * @param string $identity_type
     * @param int $wallet_type_id
     * @return EbankWallet
     * 获取用户下某一个钱包详情
     */
    public function walletDetail(int $identity_id, string $identity_type, int $wallet_type_id)
    {
        $Validator = Validator::make(['identity_id' => $identity_id, 'identity_type' => $identity_type, 'wallet_type_id' => $wallet_type_id], [
            'identity_id' => 'required|integer|min:1',
            'identity_type' => 'required',
            'wallet_type_id' => [
                'required',
                'integer',
                Rule::exists('ebank_wallet_types', 'id')->where('status', 1),
            ],
        ], [
            'identity_id.required' => '身份ID参数必传',
            'identity_id.integer' => '身份ID参数类型只能为正整数',
            'identity_id.min' => '身份ID参数最少为1',
            'identity_type.required' => '身份类型参数必传',
            'wallet_type_id.required' => '钱包类型ID参数必传',
            'wallet_type_id.integer' => '钱包类型ID参数类型错误',
            'wallet_type_id.exists' => '钱包类型不存在',
        ]);
        abort_if($Validator->fails(), 422, $Validator->errors()->first());
        return EbankWallet::with(['identity', 'walletType'])->firstOrCreate(['identity_id' => $identity_id, 'identity_type' => $identity_type, 'wallet_type_id' => $wallet_type_id], ['balance' => 0, 'freeze' => 0, 'status' => 1]);
    }


    /**
     * @param int $wallet_id
     * @param float $amount
     * @param int $identity_id
     * @param string $identity_type
     * @param null|string $remarks
     * @return int
     * 冻结用户金额
     */
    public function freeze(int $wallet_id, float $amount, int $identity_id, string $identity_type, ?string $remarks = null)
    {
        abort_if($amount <= 0, 422, '冻结金额只能为正整数');
        $wallet = EbankWallet::where(['id' => $wallet_id])->firstOrFail();
        if ($wallet->balance < $amount) {
            abort(422, '['.$wallet->id.']账户余额不足');
        }
        return $this->_freeze($wallet_id, $amount, $identity_id, $identity_type, $remarks);
    }

    /**
     * 强制冻结金额，不验证余额是否扣为负数，用于坏账操作
     * @param int $wallet_id
     * @param float $amount
     * @param int $identity_id
     * @param string $identity_type
     * @param string|null $remarks
     * @return int
     */
    public function freezeForce(int $wallet_id, float $amount, int $identity_id, string $identity_type, ?string $remarks = null)
    {
        abort_if($amount <= 0, 422, '冻结金额只能为正整数');
        return $this->_freeze($wallet_id, $amount, $identity_id, $identity_type, $remarks);
    }

    /**
     * @param int $freeze_id
     * @return bool
     * 解冻用户金额
     */
    public function unfreeze(int $freeze_id)
    {
        return $this->_unfreeze($freeze_id);
    }

    /**
     * @param int $wallet_id
     * @param float $amount
     * @param int $identity_id
     * @param string $identity_type
     * @param null|string $remarks
     * @return int
     * 冻结用户钱包余额
     */
    private function _freeze(int $wallet_id, float $amount, int $identity_id, string $identity_type, ?string $remarks = null)
    {
        $Freeze = DB::transaction(function () use ($wallet_id, $amount, $identity_id, $identity_type, $remarks) {
            EbankWallet::where(['id' => $wallet_id])->update(['balance' => DB::raw('balance - ' . $amount), 'freeze' => DB::raw('freeze + ' . $amount)]);

            $freeze_add = [
                'wallet_id' => $wallet_id,
                'amount' => $amount,
                'identity_id' => $identity_id,
                'identity_type' => $identity_type,
                'status' => 1,
                'remarks' => $remarks,
            ];
            return EbankFreeze::create($freeze_add);
        });
        return $Freeze->id;
    }

    /**
     * @param int $freeze_id // fund_freeze 表 id
     * @return bool
     * 解冻用户资金
     */
    private function _unfreeze(int $freeze_id)
    {
        $freeze = EbankFreeze::findOrFail($freeze_id);
        $wallet = EbankWallet::where(['id' => $freeze->wallet_id])->firstOrFail();

        abort_if($freeze->status != 1, 422, '冻结记录[' . $freeze_id . ']已非待解冻状态');
        $bool = DB::transaction(function () use ($wallet, $freeze) {
            // 更新钱包冻结资金
            EbankWallet::where(['id' => $wallet->id])->update(['balance' => DB::raw('balance + ' . $freeze->amount), 'freeze' => DB::raw('freeze - ' . $freeze->amount)]);

            // 更新冻结历史数据，设为已冻结
            $freeze->status = 2;
            return $freeze->save();
        });
        return $bool;
    }
}
