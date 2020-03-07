<?php
/**
 * 电子银行核心sdk类库单文件
 */

namespace yybawang\ebank\Illuminate;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use yybawang\ebank\models\FundFreeze;
use yybawang\ebank\models\FundPurseType;
use yybawang\ebank\models\FundTransfer;
use yybawang\ebank\models\FundTransferReason;
use yybawang\ebank\models\FundPurse;
use yybawang\ebank\models\FundIdentityType;
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
class FundService
{

    /**
     * @param int $balance // 玖拾万亿元
     * @return bool
     * 初始化数据，数据清空后可调用此方法重新生成系统钱包id
     * 一层商户，一层
     */
    public function initPurse(int $balance = 9000000000000000): bool
    {
        $identity_types = FundIdentityType::pluck('id');

        $identity_types->each(function ($identity_type) use ($balance) {

            $wallet = $this->userWallet(0, $identity_type);

            $wallet->each(function ($v) use ($balance) {
                if ($v->balance <= 0) {
                    $v->balance = $balance;
                    $v->save();
                }
            });
        });

        return true;
    }


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
        $out_identity_type_id = FundIdentityType::where(['alias' => $out_identity_type])->value('id');
        $out_purse_type = $transfer_name[1];
        $out_purse_type_id = FundPurseType::where(['alias' => $out_purse_type])->value('id');
        $into_identity_type = $transfer_name[3];
        $into_identity_type_id = FundIdentityType::where(['alias' => $into_identity_type])->value('id');
        $into_purse_type = $transfer_name[4];
        $into_purse_type_id = FundPurseType::where(['alias' => $into_purse_type])->value('id');

        // 如果出账钱包或入账钱包为系统默认的三个钱包，就设置 user_id = 0;
        if ($out_identity_type === 'central' || $out_identity_type === 'system') {
            $out_user_id = 0;
        }
        if ($into_identity_type === 'central' || $into_identity_type === 'system') {
            $into_user_id = 0;
        }

        $out_purse = $this->userWalletDetail($out_user_id, $out_purse_type_id, $out_identity_type_id);
        $into_purse = $this->userWalletDetail($into_user_id, $into_purse_type_id, $into_identity_type_id);
        // 自动生成 reason，格式为：{$maxId} + 出账身份类型+出账钱包类型+进账身份类型+进账钱包类型
        $max_id = FundTransferReason::max('id') ?? 0;
        $reason = ($max_id + 1) . str_pad($out_identity_type_id, 2, '0', STR_PAD_LEFT) . str_pad($out_purse_type_id, 2, '0', STR_PAD_LEFT) . str_pad($into_identity_type_id, 2, '0', STR_PAD_LEFT) . str_pad($into_purse_type_id, 2, '0', STR_PAD_LEFT);
        FundTransferReason::firstOrCreate(['reason' => $reason], [
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
     * @param int $out_user_id
     * @param int $into_user_id
     * @param int $amount
     * @param int $reason
     * @param array $detail
     * @param null|string $remarks
     * @return int
     */
    public function transfer(int $out_user_id, int $into_user_id, int $amount, int $reason, $detail = [], ?string $remarks = null)
    {
        $Validator = Validator::make([
            'out_user_id' => $out_user_id,
            'into_user_id' => $into_user_id,
            'amount' => $amount,
            'reason' => $reason,
            'detail' => $detail,
            'remarks' => $remarks
        ], [
            'out_user_id' => 'required|integer|min:0',
            'into_user_id' => 'required|integer|min:0',
            'amount' => 'required|integer|min:1',
            'reason' => [
                'required',
                'integer',
                Rule::exists('fund_transfer_reasons', 'reason')->where('status', 1),        // 底层已效验
            ],
        ], [
            'out_user_id.required' => '转出用户ID参数必传',
            'out_user_id.integer' => '转出用户ID参数只能为正整数',
            'out_user_id.min' => '转出用户ID参数只能为正整数',
            'into_user_id.required' => '转入用户ID参数必传',
            'into_user_id.integer' => '转入用户ID参数只能为正整数',
            'into_user_id.min' => '转入用户ID参数只能为正整数',
            'amount.required' => '金额参数必传',
            'amount.integer' => '金额参数只能为正整数',
            'amount.min' => '金额参数只能为正整数',
            'reason.required' => 'reason 参数必传',
            'reason.integer' => 'reason 参数只能为数字',
            'reason.exists' => 'reason 参数不存在',
        ]);
        if($Validator->fails()){
            abort(422, $Validator->errors()->first());
        }

        $reason_first = FundTransferReason::select(['out_identity_type_id', 'out_purse_type_id', 'into_identity_type_id', 'into_purse_type_id'])->where(['reason' => $reason])->firstOrFail();
        $out_identity_type_id = $reason_first->out_identity_type_id;
        $out_purse_type_id = $reason_first->out_purse_type_id;
        $into_identity_type_id = $reason_first->into_identity_type_id;
        $into_purse_type_id = $reason_first->into_purse_type_id;

        // 如果出账身份系统默认的两个，就设置 user_id = 0;
        if ($out_identity_type_id == 1 || $out_identity_type_id == 2) {
            $out_user_id = 0;
        }
        if ($into_identity_type_id == 1 || $into_identity_type_id == 2) {
            $into_user_id = 0;
        }
        // 如果转账身份类型为3，则必传用户ID
        if ($out_identity_type_id == 3 && $out_user_id <= 0) {
            abort(422, '出帐用户ID需大于0');
        }
        if ($into_identity_type_id == 3 && $into_user_id <= 0) {
            abort(422, '入帐用户ID需大于0');
        }

        $out_purse = $this->userWalletDetail($out_user_id, $out_purse_type_id, $out_identity_type_id);
        $into_purse = $this->userWalletDetail($into_user_id, $into_purse_type_id, $into_identity_type_id);
        return $this->_transfer($out_purse->id, $into_purse->id, $amount, $reason, $detail, $remarks);
    }

    /**
     * @param int $out_purse_id
     * @param int $into_purse_id
     * @param int $amount
     * @param int $reason
     * @param array $detail
     * @param string|null $remarks
     * @return int
     * 转账核心方法
     */
    private function _transfer(int $out_purse_id, int $into_purse_id, int $amount, int $reason, $detail = [], ?string $remarks = null)
    {
        // 出账钱包最大可用金额，且扣减后的余额要 >= 0 ，如果超过了此金额，就不能转账
        $out_purse_balance = FundPurse::where(['id' => $out_purse_id])->where('balance', '>=', $amount)->value('balance');
        $Validator = Validator::make([
            'out_purse_id' => $out_purse_id,
            'into_purse_id' => $into_purse_id,
            'amount' => $amount,
            'reason' => $reason
        ], [
            'out_purse_id' => [
                'required',
                'integer',
                Rule::exists('fund_purses', 'id'),
            ],
            'into_purse_id' => [
                'required',
                'integer',
                Rule::exists('fund_purses', 'id'),
                'different:out_purse_id',    // 验证出账钱包id与进账钱包id是否不一样，一样会报错
            ],
            'amount' => 'required|integer|min:1|max:' . $out_purse_balance,
            'reason' => [
                'required',
                'integer',
                Rule::exists('fund_transfer_reasons', 'reason')->where('status', 1),
            ],
        ], [
            'out_purse_id.required' => '转出钱包ID参数必传',
            'out_purse_id.integer' => '转出钱包ID参数类型错误',
            'out_purse_id.exists' => '转出钱包ID不存在',
            'into_purse_id.required' => '转入钱包ID参数必传',
            'into_purse_id.integer' => '转入钱包ID参数类型错误',
            'into_purse_id.exists' => '转入钱包ID不存在',
            'into_purse_id.different' => '转出钱包与转入钱包ID不能相同',
            'amount.required' => '转账金额参数必传',
            'amount.integer' => '转账金额参数类型错误',
            'amount.min' => '转账金额只能为正整数',
            'amount.max' => '转出钱包余额不足',
            'reason.required' => 'reason 参数必传',
            'reason.integer' => 'reason 参数类型错误',
            'reason.exists' => 'reason 参数不存在',
        ]);
        if($Validator->fails()){
            abort(422, $Validator->errors()->first());
        }

        $transfer_id = DB::transaction(function () use ($out_purse_id, $into_purse_id, $amount, $reason, $detail, $remarks) {
            // 2019-11-26 14:48:39 修改为原子锁，避免幻读

            // 出账钱包扣款
            $out_purse = null;
            $out_lock = Cache::lock('EBank@_transfer:' . $out_purse_id);
            try {
                $out_purse = $out_lock->block(50, function () use ($out_purse_id, $amount) {
                    $var = FundPurse::where(['id' => $out_purse_id, 'status' => 1])->where('balance', '>=', $amount)->decrement('balance', $amount);
                    // 未修改返回修改行数为0
                    if (!$var) {
                        return false;
                    }
                    return FundPurse::find($out_purse_id);
                });
                optional($out_lock)->release();
            } catch (LockTimeoutException $e) {

            } finally {
                optional($out_lock)->release();
            }
            if ($out_purse === null) {
                abort(422, '转出钱包查询超时');
            }
            if ($out_purse === false) {
                abort(422, '转出钱包扣款失败，余额不足或账户被禁用');
            }

            $into_purse = null;
            $into_lock = Cache::lock('EBank@_transfer:' . $into_purse_id);
            try {
                $into_purse = $into_lock->block(50, function () use ($into_purse_id, $amount) {
                    $var = FundPurse::where(['id' => $into_purse_id, 'status' => 1])->increment('balance', $amount);
                    if (!$var) {
                        return false;
                    }
                    return FundPurse::find($into_purse_id);
                });
                optional($into_lock)->release();
            } catch (LockTimeoutException $e) {

            } finally {
                optional($into_lock)->release();
            }
            if ($into_purse === null) {
                abort(422, '转入钱包查询超时');
            }
            if ($into_purse === false) {
                abort(422, '转入钱包加款失败，账户被禁用');
            }


            // 增加流水
            $transfer_add = [
                'reason' => $reason,
                'amount' => $amount,

                'out_user_id' => $out_purse->user_id,
                'out_identity_type_id' => $out_purse->identity_type_id,
                'out_purse_type_id' => $out_purse->purse_type_id,
                'out_purse_id' => $out_purse->id,
                'out_balance' => $out_purse->balance,

                'into_user_id' => $into_purse->user_id,
                'into_identity_type_id' => $into_purse->identity_type_id,
                'into_purse_type_id' => $into_purse->purse_type_id,
                'into_purse_id' => $into_purse->id,
                'into_balance' => $into_purse->balance,

                'detail' => $detail,
                'remarks' => $remarks,
                'status' => 1,
            ];

            return FundTransfer::create($transfer_add)->id;
        });
        return $transfer_id;
    }


    /**
     * @param int $transfer_id
     * @return FundTransfer
     * 根据转账id获取详情
     */
    public function transferDetail(int $transfer_id)
    {
        return FundTransfer::findOrFail($transfer_id);
    }


    /**
     * @param int $transfer_id
     * @param null|string $remarks
     * @return bool
     * 钱包冲正，双路资金原路退回，冲正后结果可为负数，避免资金不足冲正失败
     */
    public function unTransfer(int $transfer_id, ?string $remarks = null): bool
    {
        $remarks = $remarks ?? '流水冲正，资金退回';
        return DB::transaction(function () use ($transfer_id, $remarks) {
            $detail = FundTransfer::lockForUpdate()->findOrFail($transfer_id);

            if ($detail->status != 1) {
                abort(422, '该数据已被处理过，无法冲正');
            }
            $out_purse_id = $detail->into_purse_id;    // 解析后需转出的钱包id
            $into_purse_id = $detail->out_purse_id;    // 解析后需转入的钱包id
            $amount = $detail->amount;
            // 出账钱包扣款
            $var = FundPurse::where(['id' => $out_purse_id])->decrement('balance', $amount);
            if (!$var) {
                abort(422, '转出钱包扣款失败');
            }
            // 进账钱包收款
            $var = FundPurse::where(['id' => $into_purse_id])->increment('balance', $amount);
            if (!$var) {
                abort(422, '转入钱包收款失败');
            }
            $detail->status = 2;
            $detail->remarks = $remarks;
            return $detail->save();
        });
    }


    /**
     * @param int $user_id
     * @param int $identity_type
     * @return \Illuminate\Support\Collection
     * 用户钱包
     */
    public function userWallet(int $user_id, int $identity_type = 3)
    {
        $Validator = Validator::make(['user_id' => $user_id, 'identity_type' => $identity_type], [
            'user_id' => 'required|integer',
            'identity_type' => [
                'required',
                'integer',
                Rule::exists('fund_identity_types', 'id')->where('status', 1),
            ],
        ], [
            'user_id.required' => '用户ID参数必传',
            'user_id.integer' => '用户ID参数类型错误',
            'identity_type.required' => '身份类型参数必传',
            'identity_type.integer' => '身份类型参数类型错误',
            'identity_type.exists' => '身份类型不存在',
        ]);
        if($Validator->fails()){
            abort(422, $Validator->errors()->first());
        }

        $purse_types = FundPurseType::pluck('id');
        $wallet = $purse_types->map(function ($purse_type_id) use ($user_id, $identity_type) {
            return $this->userWalletDetail($user_id, $purse_type_id, $identity_type);
        });

        return $wallet;
    }

    /**
     * @param int $user_id
     * @param int $purse_type_id
     * @param int $identity_type_id
     * @return FundPurse
     * 获取用户下某一个钱包详情
     */
    public function userWalletDetail(int $user_id, int $purse_type_id, int $identity_type_id = 3)
    {
        $Validator = Validator::make(['user_id' => $user_id, 'purse_type' => $purse_type_id, 'identity_type' => $identity_type_id], [
            'user_id' => 'required|integer',
            'purse_type' => [
                'required',
                'integer',
                Rule::exists('fund_purse_types', 'id')->where('status', 1),
            ],
            'identity_type' => [
                'required',
                'integer',
                Rule::exists('fund_identity_types', 'id')->where('status', 1),
            ],
        ], [
            'user_id.required' => '用户ID参数必传',
            'user_id.integer' => '用户ID参数类型错误',
            'purse_type.required' => '钱包类型ID参数必传',
            'purse_type.integer' => '钱包类型ID参数类型错误',
            'purse_type.exists' => '钱包类型不存在',
            'identity_type.required' => '身份类型参数必传',
            'identity_type.integer' => '身份类型参数类型错误',
            'identity_type.exists' => '身份类型不存在',
        ]);
        if($Validator->fails()){
            abort(422, $Validator->errors()->first());
        }

        // 如果是中央或系统，用户ID都是0
        if ($identity_type_id == 1 || $identity_type_id == 2) {
            $user_id = 0;
        }
        return FundPurse::firstOrCreate(['user_id' => $user_id, 'identity_type_id' => $identity_type_id, 'purse_type_id' => $purse_type_id], ['balance' => 0, 'freeze' => 0, 'remarks' => null, 'status' => 1]);
    }


    /**
     * @return \Illuminate\Support\Collection
     * 身份类型
     */
    public function userType()
    {
        return FundIdentityType::get();
    }

    /**
     * @param int $type_id
     * @return \Illuminate\Support\Collection
     * 身份类型详情
     */
    public function userTypeDetail(int $type_id)
    {
        return FundIdentityType::findOrFail($type_id);
    }

    /**
     * @return \Illuminate\Support\Collection
     * 钱包类型
     */
    public function purseType()
    {
        return FundPurseType::get();
    }

    /**
     * @param int $type_id
     * @return \Illuminate\Support\Collection
     * 钱包类型详情
     */
    public function purseTypeDetail(int $type_id)
    {
        return FundPurseType::findOrFail($type_id);
    }


    /**
     * @param int $purse_id
     * @param int $amount
     * @param array $detail
     * @param null|string $remarks
     * @return int
     * 冻结用户金额
     */
    public function freeze(int $purse_id, int $amount, array $detail = [], ?string $remarks = null)
    {
        // 防多次点击
        $cache_key = 'EBank_freeze' . $purse_id . '_' . $amount . '_' . json_encode($detail);
        if (Cache::has($cache_key)) {
            abort(422, '钱包冻结请求频繁，请稍后再试');
        }
        Cache::add($cache_key, 1, 3);        // 3秒钟

        if ($amount <= 0) {
            abort(422, '冻结金额只能为正整数');
        }

        $purse = FundPurse::where(['id' => $purse_id])->firstOrFail();
        if ($purse->balance < $amount) {
            abort(422, '账户余额不足');
        }
        return $this->_freeze($purse_id, $amount, $detail, $remarks);
    }

    /**
     * 强制冻结金额，不验证余额是否扣为负数，用于坏账操作
     * @param int $purse_id
     * @param int $amount
     * @param array $detail
     * @param string|null $remarks
     * @return int
     */
    public function freezeForce(int $purse_id, int $amount, array $detail = [], ?string $remarks = null)
    {
        // 防多次点击
        $cache_key = 'EBank_freezeForce' . $purse_id . '_' . $amount . '_' . json_encode($detail);
        if (Cache::has($cache_key)) {
            abort(422, '钱包冻结请求频繁，请稍后再试');
        }
        Cache::add($cache_key, 1, 3);        // 3秒钟

        if ($amount <= 0) {
            abort(422, '冻结金额只能为正整数');
        }
        return $this->_freeze($purse_id, $amount, $detail, $remarks);
    }

    /**
     * @param int $freeze_id
     * @return bool
     * 解冻用户金额
     */
    public function unfreeze(int $freeze_id)
    {
        // 防多次点击
        $cache_key = 'EBank_unfreeze' . $freeze_id;
        if (Cache::has($cache_key)) {
            abort(422, '钱包解冻请求频繁，请稍后再试');
        }
        Cache::add($cache_key, 1, 3);        // 3秒钟
        return $this->_unfreeze($freeze_id);
    }

    /**
     * @param int $purse_id
     * @param int $amount
     * @param array $detail
     * @param null|string $remarks
     * @return int
     * 冻结用户钱包余额
     */
    private function _freeze(int $purse_id, int $amount, array $detail = [], ?string $remarks = null)
    {
        $Freeze = DB::transaction(function () use ($purse_id, $amount, $detail, $remarks) {
            FundPurse::where(['id' => $purse_id])->update(['balance' => DB::raw('balance - ' . $amount), 'freeze' => DB::raw('freeze + ' . $amount)]);

            $freeze_add = [
                'purse_id' => $purse_id,
                'amount' => $amount,
                'detail' => $detail,
                'status' => 1,
                'remarks' => $remarks,
            ];
            return FundFreeze::create($freeze_add);
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
        $freeze = FundFreeze::findOrFail($freeze_id);
        $purse = FundPurse::where(['id' => $freeze->purse_id])->firstOrFail();

        if ($freeze->status != 1) {
            abort(422, '冻结记录[' . $freeze_id . ']已被处理过');
        }

        $bool = DB::transaction(function () use ($purse, $freeze) {
            // 更新钱包冻结资金
            FundPurse::where(['id' => $purse->id])->update(['balance' => DB::raw('balance + ' . $freeze->amount), 'freeze' => DB::raw('freeze - ' . $freeze->amount)]);

            // 更新冻结历史数据，设为已冻结
            $freeze->status = 2;
            return $freeze->save();
        });
        return $bool;
    }
}
