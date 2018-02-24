<?php
/**
 * 电子银行核心sdk类库单文件
 */
namespace App\Libraries;

use App\Models\FundAdmin;
use App\Models\FundAdminGroup;
use App\Models\FundFreeze;
use App\Models\FundMerchant;
use App\Models\FundPurseType;
use App\Models\FundTransfer;
use App\Models\FundTransferReason;
use App\Models\FundUserPurse;
use App\Models\FundUserType;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

/**
 * 电子银行核心类
 *
 * 用户类型定死的三种类型，id 可以不固定
 * 1、中央银行
 * 2、系统银行
 * 3、用户银行
 * 可扩展其他类型，如商家
 *
 * 用户类型定死一种类型，id 可以不固定.
 * 1、现金
 */
class Bank {

	
	
	public function init_table(){
		// 初始化表，并初始化金额，判断没有产生流水的时候都可以初始化
		if(FundTransfer::count() > 0){
			return false;
		}
		DB::statement('truncate table failed_jobs');
		DB::statement('truncate table fund_admin');
		DB::statement('truncate table fund_admin_export');
		DB::statement('truncate table fund_admin_group');
		DB::statement('truncate table fund_behavior');
		DB::statement('truncate table fund_config');
		DB::statement('truncate table fund_freeze');
		DB::statement('truncate table fund_merchant');
		DB::statement('truncate table fund_order');
		DB::statement('truncate table fund_order_payment');
		DB::statement('truncate table fund_purse_type');
		DB::statement('truncate table fund_transfer');
		DB::statement('truncate table fund_transfer_reason');
		DB::statement('truncate table fund_user_purse');
		DB::statement('truncate table fund_user_type');
		DB::statement('truncate table fund_withdraw');
		DB::statement('truncate table fund_withdraw_alipay');
		DB::statement('truncate table fund_withdraw_wechat');
		
		FundAdminGroup::create([
			'id'		=> 1,
			'name'		=> '系统管理',
			'rule'		=> '',
			'status'	=> 1,
		]);
		
		FundAdmin::create([
			'name'		=> 'admin',
			'password'	=> FundAdmin::md5('123456'),
			'realname'	=> '系统管理员',
			'group_id'	=> 1,
			'status'	=> 1,
		]);
		
		FundMerchant::create([
			'name'		=> '系统商户',
			'appid'		=> 'gpu10000',
			'secret'	=> '10000',
			'status'	=> 1,
			'remarks'	=> '系统商户，保留',
		]);
		
		FundPurseType::create([
			'name'		=> '现金钱包',
			'alias'		=> 'cash',
			'status'	=> 1,
		]);
		
		FundTransferReason::create([
			'merchant_id'		=> 1,
			'name'				=> '第三方支付接口退款',
			'out_user_type_id'	=> 2,
			'out_purse_type_id'	=> 1,
			'into_user_type_id'	=> 1,
			'into_purse_type_id'=> 1,
			'reason'			=> '10001',
			'status'			=> 1,
			'remarks'			=> '系统到中央银行',
		]);
		FundTransferReason::create([
			'merchant_id'		=> 1,
			'name'				=> '第三方支付平台收款',
			'out_user_type_id'	=> 1,
			'out_purse_type_id'	=> 1,
			'into_user_type_id'	=> 2,
			'into_purse_type_id'=> 1,
			'reason'			=> '10002',
			'status'			=> 1,
			'remarks'			=> '系统第三方支付入账，中央到系统',
		]);
		FundTransferReason::create([
			'merchant_id'		=> 1,
			'name'				=> '第三方现金充值',
			'out_user_type_id'	=> 2,
			'out_purse_type_id'	=> 1,
			'into_user_type_id'	=> 3,
			'into_purse_type_id'=> 1,
			'reason'			=> '10003',
			'status'			=> 1,
			'remarks'			=> '用户订单支付中转，系统到用户',
		]);
		FundTransferReason::create([
			'merchant_id'		=> 1,
			'name'				=> '订单支付',
			'out_user_type_id'	=> 3,
			'out_purse_type_id'	=> 1,
			'into_user_type_id'	=> 2,
			'into_purse_type_id'=> 1,
			'reason'			=> '10004',
			'status'			=> 1,
			'remarks'			=> '用户支付订单，用户到系统',
		]);
		FundTransferReason::create([
			'merchant_id'		=> 1,
			'name'				=> '用户退款',
			'out_user_type_id'	=> 2,
			'out_purse_type_id'	=> 1,
			'into_user_type_id'	=> 3,
			'into_purse_type_id'=> 1,
			'reason'			=> '10005',
			'status'			=> 1,
			'remarks'			=> '后台订单退款',
		]);
		FundTransferReason::create([
			'merchant_id'		=> 1,
			'name'				=> '提现银行卡成功',
			'out_user_type_id'	=> 3,
			'out_purse_type_id'	=> 1,
			'into_user_type_id'	=> 2,
			'into_purse_type_id'=> 1,
			'reason'			=> '10006',
			'status'			=> 1,
			'remarks'			=> '提现银行卡成功',
		]);
		
		FundUserType::create([
			'name'		=> '中央银行',
			'alias'		=> 'central',
			'status'	=> 1,
			'remarks'	=> '系统类型，保留',
		]);
		FundUserType::create([
			'name'		=> '系统银行',
			'alias'		=> 'system',
			'status'	=> 1,
			'remarks'	=> '系统类型，保留',
		]);
		FundUserType::create([
			'name'		=> '用户银行',
			'alias'		=> 'user',
			'status'	=> 1,
			'remarks'	=> '系统类型，保留',
		]);
		return true;
	}
	
	/**
	 * @param int $balance	// 如果钱包余额为0，则重新赋此值
	 * @return bool
	 * 初始化数据，数据清空后可调用此方法重新生成系统钱包id
	 */
	public function init(int $balance = 100000000000000){
		$user_type = FundUserType::where(['status'=>1])->pluck('id');
		$user_type->each(function($purse_type_id) use ($balance){
			$wallet = $this->userWallet(0,$purse_type_id);
			$wallet->each(function($v) use ($balance){
				if(empty($v->balance)){
					$v->balance = $balance;
					$v->save();
				}
			});
		});
		return true;
	}
	
	
	/**
	 * 开始转账，使用用户类型&钱包类型别名驼峰拼接的形式解析
	 * @param $name
	 * @param $arguments
	 * @return int
	 */
	public function __call($name, $arguments)
	{
		$out_user_id	= $arguments[0] ?? 0;
		$into_user_id	= $arguments[1] ?? 0;
		$amount			= $arguments[2];
		$reason			= $arguments[3];
		$parent_id		= $arguments[4] ?? 0;
		$detail			= $arguments[5];
		$remarks		= $arguments[6];

		$transfer_name = explode('_',snake_case($name));
		if(count($transfer_name) != 5){
			abort_500('转账 alias 拼接参数有误');
		}

		\Validator::make([
			'from_user_id'			=> $out_user_id,
			'to_user_id'			=> $into_user_id,
			'amount'				=> $amount,
			'reason'				=> $reason,
			'detail'				=> $detail,
			'remarks'				=> $remarks,
			'out_user_type'			=> $transfer_name[0],
			'out_purse_type'		=> $transfer_name[1],
			'into_user_type'		=> $transfer_name[3],
			'into_purse_type'		=> $transfer_name[4]
		],[
			'from_user_id'			=> 'required|integer|min:0',
			'to_user_id'			=> 'required|integer|min:0',
			'amount'				=> 'required|integer|min:1',
			'reason'				=> 'required|integer',
			'detail'				=> 'nullable|string',
			'remarks'				=> 'nullable|string',
			'out_user_type'		=> [
				'required',
				Rule::exists('fund_user_type','alias')->where('status',1),
			],
			'out_purse_type'	=> [
				'required',
				Rule::exists('fund_purse_type','alias')->where('status',1),
			],
			'into_user_type'		=> [
				'required',
				Rule::exists('fund_user_type','alias')->where('status',1),
			],
			'into_purse_type'	=> [
				'required',
				Rule::exists('fund_purse_type','alias')->where('status',1),
			],
		],[
			'from_user_id.required'		=> '转出用户ID参数必传',
			'from_user_id.integer'		=> '转出用户ID参数只能为正整数',
			'from_user_id.min'			=> '转出用户ID参数只能为正整数',
			'to_user_id.required'		=> '转入用户ID参数必传',
			'to_user_id.integer'		=> '转入用户ID参数只能为正整数',
			'to_user_id.min'			=> '转入用户ID参数只能为正整数',
			'amount.required'			=> '金额参数必传',
			'amount.integer'			=> '金额参数只能为正整数',
			'amount.min'				=> '金额参数只能为正整数',
			'reason.required'			=> 'reason 参数必传',
			'reason.integer'			=> 'reason 参数只能为数字',
			'detail.string'				=> '详情只能为字符串类型',
			'remarks.string'			=> '备注只能为字符串类型',
			'out_user_type.required'	=> '转出用户类型参数必传',
			'out_user_type.exists'		=> '转出用户类型不存在',
			'out_purse_type.required'	=> '转出钱包类型参数必传',
			'out_purse_type.exists'		=> '转出钱包类型不存在',
			'into_user_type.required'	=> '转入用户类型参数必传',
			'into_user_type.exists'		=> '转入用户类型不存在',
			'into_purse_type.required'	=> '转入钱包类型参数必传',
			'into_purse_type.exists'	=> '转入钱包类型不存在',
		])->validate();

		$out_user_type = $transfer_name[0];
		$out_user_type_id = FundUserType::where(['alias'=>$out_user_type])->value('id');
		$out_purse_type = $transfer_name[1];
		$out_purse_type_id = FundPurseType::where(['alias'=>$out_purse_type])->value('id');
		$into_user_type = $transfer_name[3];
		$into_user_type_id = FundUserType::where(['alias'=>$into_user_type])->value('id');
		$into_purse_type = $transfer_name[4];
		$into_purse_type_id = FundPurseType::where(['alias'=>$into_purse_type])->value('id');

		// 如果出账钱包或入账钱包为系统默认的三个钱包，就设置 user_id = 0;
		if($out_user_type == 'central' || $out_user_type == 'system'){
			$out_user_id = 0;
		}
		if($into_user_type == 'central' || $into_user_type == 'system'){
			$into_user_id = 0;
		}

		$out_purse = $this->userWalletDetail($out_user_id,$out_purse_type_id,$out_user_type_id);
		$into_purse = $this->userWalletDetail($into_user_id,$into_purse_type_id,$into_user_type_id);
		$transfer_id = $this->_transfer($out_purse->id,$into_purse->id,$amount,$reason,$parent_id,$detail,$remarks);
		return $transfer_id;
	}
	
	
	/**
	 * 转账暴露方法
	 * @param $out_user_id
	 * @param $into_user_id
	 * @param $amount
	 * @param $reason
	 * @param int $parent_id
	 * @param null|string $detail
	 * @param null|string $remarks
	 * @return int
	 */
	public function transfer(int $out_user_id,int $into_user_id,int $amount,int $reason,int $parent_id = 0,?string $detail = null,?string $remarks = null){
		\Validator::make([
			'out_user_id'			=> $out_user_id,
			'into_user_id'			=> $into_user_id,
			'amount'				=> $amount,
			'reason'				=> $reason,
			'detail'				=> $detail,
			'remarks'				=> $remarks
		],[
			'out_user_id'			=> 'required|integer|min:0',
			'into_user_id'			=> 'required|integer|min:0',
			'amount'				=> 'required|integer|min:1',
			'reason'				=> [
				'required',
				'integer',
				Rule::exists('fund_transfer_reason','reason')->where('status',1),
			],
			'detail'				=> 'nullable|string',
			'remarks'				=> 'nullable|string',
		],[
			'out_user_id.required'	=> '转出用户ID参数必传',
			'out_user_id.integer'	=> '转出用户ID参数只能为正整数',
			'out_user_id.min'		=> '转出用户ID参数只能为正整数',
			'into_user_id.required'	=> '转入用户ID参数必传',
			'into_user_id.integer'	=> '转入用户ID参数只能为正整数',
			'into_user_id.min'		=> '转入用户ID参数只能为正整数',
			'amount.required'		=> '金额参数必传',
			'amount.integer'		=> '金额参数只能为正整数',
			'amount.min'			=> '金额参数只能为正整数',
			'reason.required'		=> 'reason 参数必传',
			'reason.integer'		=> 'reason 参数只能为数字',
			'reason.exists'			=> 'reason 数据不存在',
			'detail.string'			=> '详情只能为字符串类型',
			'remarks.string'		=> '备注只能为字符串类型',
		])->validate();
		
		$reason_first = FundTransferReason::select(['out_user_type_id','out_purse_type_id','into_user_type_id','into_purse_type_id'])->where(['reason'=>$reason])->first();
		$out_user_type_id = $reason_first->out_user_type_id;
		$out_purse_type_id = $reason_first->out_purse_type_id;
		$into_user_type_id = $reason_first->into_user_type_id;
		$into_purse_type_id = $reason_first->into_purse_type_id;

		// 如果出账钱包或入账钱包为系统默认的三个钱包，就设置 user_id = 0;
		if($out_user_type_id == 1 || $out_user_type_id == 2){
			$out_user_id = 0;
		}
		if($into_user_type_id == 1 || $into_user_type_id == 2){
			$into_user_id = 0;
		}

		$out_purse = $this->userWalletDetail($out_user_id,$out_purse_type_id,$out_user_type_id);
		$into_purse = $this->userWalletDetail($into_user_id,$into_purse_type_id,$into_user_type_id);
		$transfer_id = $this->_transfer($out_purse->id,$into_purse->id,$amount,$reason,$parent_id,$detail,$remarks);
		return $transfer_id;
	}
	
	/**
	 * @param int $out_purse_id
	 * @param int $into_purse_id
	 * @param int $amount
	 * @param int $reason
	 * @param int $parent_id
	 * @param string|null $detail
	 * @param string|null $remarks
	 * @return mixed
	 * 转账核心方法
	 */
	private function _transfer(int $out_purse_id,int $into_purse_id,int $amount,int $reason,int $parent_id = 0,?string $detail = null,?string $remarks = null){
		// 出账钱包最大可用金额，如果超过了此金额，就不能转账
		$out_purse_balance = FundUserPurse::where(['id'=>$out_purse_id])->value(DB::raw('balance - freeze'));
		\Validator::make([
			'out_purse_id'		=> $out_purse_id,
			'into_purse_id'		=> $into_purse_id,
			'amount'			=> $amount,
			'reason'			=> $reason
		],[
			'out_purse_id'		=> [
				'required',
				'integer',
				Rule::exists('fund_user_purse','id'),
			],
			'into_purse_id'		=> [
				'required',
				'integer',
				Rule::exists('fund_user_purse','id'),
				'different:out_purse_id',	// 验证出账钱包id与进账钱包id是否不一样，一样会报错
			],
			'amount'			=> 'required|integer|min:1|max:'.$out_purse_balance,
			'reason'			=> [
				'required',
				'integer',
				Rule::exists('fund_transfer_reason','reason')->where('status',1),
			],
		],[
			'out_purse_id.required'			=> '转出钱包ID参数必传',
			'out_purse_id.integer'			=> '转出钱包ID参数类型错误',
			'out_purse_id.exists'			=> '转出钱包ID不存在',
			'into_purse_id.required'		=> '转入钱包ID参数必传',
			'into_purse_id.integer'			=> '转入钱包ID参数类型错误',
			'into_purse_id.exists'			=> '转入钱包ID不存在',
			'into_purse_id.different'		=> '转出钱包与转入钱包ID不能相同',
			'amount.required'				=> '转账金额参数必传',
			'amount.integer'				=> '转账金额参数类型错误',
			'amount.min'					=> '转账金额只能为正整数',
			'amount.max'					=> '转出钱包余额不足',
			'reason.required'				=> '转账原因代码参数必传',
			'reason.integer'				=> '转账原因代码参数类型错误',
			'reason.exists'					=> '转账原因代码不存在',
		])->validate();
		
		
		// 增加流水
		$out_purse = FundUserPurse::find($out_purse_id);
		$into_purse = FundUserPurse::find($into_purse_id);
		if($out_purse->status == 0){
			abort_500('转出钱包已被设置为禁用');
		}
		if($out_purse->status == 9){
			abort_500('转出钱包已被临时禁用');
		}
		if($into_purse->status == 0){
			abort_500('转入钱包已被设置为禁用');
		}
		if($into_purse->status == 9){
			abort_500('转入钱包已被临时禁用');
		}
		
		DB::beginTransaction();
		// 出账钱包扣款
		$var = FundUserPurse::where(['id'=>$out_purse_id])->decrement('balance',$amount);
		if(!$var){
			abort_500('转出钱包扣款失败');
		}
		// 进账钱包收款
		$var = FundUserPurse::where(['id'=>$into_purse_id])->increment('balance',$amount);
		if(!$var){
			abort_500('转入钱包收款失败');
		}
		
		$transfer_add = [
			'reason'			=> $reason,
			'amount'			=> $amount,
			
			'out_user_id'		=> $out_purse->user_id,
			'out_user_type_id'	=> $out_purse->user_type_id,
			'out_purse_type_id'	=> $out_purse->purse_type_id,
			'out_purse_id'		=> $out_purse_id,
			'out_balance'		=> $out_purse->balance - $amount,
			
			'into_user_id'		=> $into_purse->user_id,
			'into_user_type_id'	=> $into_purse->user_type_id,
			'into_purse_type_id'=> $into_purse->purse_type_id,
			'into_purse_id'		=> $into_purse_id,
			'into_balance'		=> $into_purse->balance + $amount,
			
			'parent_id'			=> $parent_id,
			'detail'			=> $detail,
			'remarks'			=> $remarks,
			'status'			=> 1,
		];
		
		$transfer_id = FundTransfer::create($transfer_add)->id;
		if(!$transfer_id){
			abort_500('转账记录添加失败');
		}
		DB::commit();
		return $transfer_id;
	}
	
	
	
	/**
	 * @param int $transfer_id
	 * @return mixed
	 * 根据转账id获取详情
	 */
	public function transferDetail(int $transfer_id){
		$return = FundTransfer::findOrFail($transfer_id);
		return $return;
	}
	
	
	/**
	 * @param int $transfer_id
	 * @param null|string $remarks
	 * @return mixed
	 * 钱包冲正，双路资金原路退回，冲正后结果可为负数，避免资金不足冲正失败
	 */
	public function untransfer(int $transfer_id,?string $remarks = '流水冲正，资金退回'){
		$detail = FundTransfer::findOrFail($transfer_id);
		
		if($detail->status != 1){
			abort_500('该数据已被处理过');
		}
		$out_purse_id = $detail->into_purse_id;	// 解析后需转出的钱包id
		$into_purse_id = $detail->out_purse_id;	// 解析后需转入的钱包id
		$amount = $detail->amount;
		
		DB::beginTransaction();
		// 出账钱包扣款
		$var = FundUserPurse::where(['id'=>$out_purse_id])->decrement('balance',$amount);
		if(!$var){
			abort_500('转出钱包扣款失败');
		}
		// 进账钱包收款
		$var = FundUserPurse::where(['id'=>$into_purse_id])->increment('balance',$amount);
		if(!$var){
			abort_500('转入钱包收款失败');
		}
		$detail->status = 2;
		$detail->remarks = $remarks;
		$return = $detail->save();
		DB::commit();
		return $return;
	}
	
	
	/**
	 * @param int $user_id
	 * @param int $user_type
	 * @return \Illuminate\Support\Collection
	 * 用户钱包
	 */
	public function userWallet(int $user_id,$user_type = 3){
		\Validator::make(['user_id'=>$user_id,'user_type'=>$user_type],[
			'user_id'		=> 'required|integer',
			'user_type'		=> [
				'required',
				'integer',
				Rule::exists('fund_user_type','id')->where('status',1),
			],
		],[
			'user_id.required'		=> '用户ID参数必传',
			'user_id.integer'		=> '用户ID参数类型错误',
			'user_type.required'	=> '用户类型参数必传',
			'user_type.integer'		=> '用户类型参数类型错误',
			'user_type.exists'		=> '用户类型不存在',
		])->validate();
		
		$wallet = collect([]);
		$purse_type = FundPurseType::where(['status'=>1])->pluck('id','alias');
		$purse_type->each(function($purse_type_id,$purse_type_alias) use ($user_id,$user_type,&$wallet){
			$wallet_detail = $this->userWalletDetail($user_id,$purse_type_id,$user_type);
			$wallet->put($purse_type_alias,$wallet_detail);
		});
		
		return $wallet;
	}
	
	/**
	 * @param int $user_id
	 * @param int $purse_type_id
	 * @param int $user_type
	 * @return mixed
	 * 获取用户下某一个钱包详情
	 */
	public function userWalletDetail(int $user_id,int $purse_type_id,int $user_type = 3){
		\Validator::make(['user_id'=>$user_id,'purse_type'=>$purse_type_id,'user_type'=>$user_type],[
			'user_id'		=> 'required|integer',
			'purse_type'	=> [
				'required',
				'integer',
				Rule::exists('fund_purse_type','id')->where('status',1),
			],
			'user_type'		=> [
				'required',
				'integer',
				Rule::exists('fund_user_type','id')->where('status',1),
			],
		],[
			'user_id.required'			=> '用户ID参数必传',
			'user_id.integral'			=> '用户ID参数类型错误',
			'purse_type.required'		=> '钱包类型ID参数必传',
			'purse_type.integer'		=> '钱包类型ID参数类型错误',
			'purse_type.exists'			=> '钱包类型不存在',
			'user_type.required'		=> '用户类型参数必传',
			'user_type.integer'			=> '用户类型参数类型错误',
			'user_type.exists'			=> '用户类型不存在',
		])->validate();
		
		// 如果是中央或系统，用户ID都是0
		if($user_type == 1 || $user_type == 2){
			$user_id = 0;
		}
		$FundUserPurse = FundUserPurse::firstOrCreate(['user_id'=>$user_id,'user_type_id'=>$user_type,'purse_type_id'=>$purse_type_id],['balance'=>0,'freeze'=>0,'remarks'=>null,'status'=>1]);
		return $FundUserPurse;
	}
	
	/**
	 * @param int $purse_id
	 * @return mixed
	 * 根据用户钱包 id 返回详情
	 */
	public function userPurseDetail(int $purse_id){
		$data = FundUserPurse::select(DB::raw('fund_user_purse.*,pt.name purse_type'))
			->leftJoin('fund_purse_type as pt','pt.id','=','fund_user_purse.purse_type_id')
			->where(['fund_user_purse.id'=>$purse_id,'fund_user_purse.status'=>1])
			->firstOrFail();
		return $data;
	}
	
	
	
	/**
	 * @return \Illuminate\Support\Collection
	 * 用户类型
	 */
	public function userType(){
		$return = collect([]);
		FundUserType::where(['status'=>1])->get()->each(function($v,$k) use (&$return){
			$return->put($v->alias,$v);
		});
		return $return;
	}
	
	/**
	 * @param int $type_id
	 * @return \Illuminate\Support\Collection
	 * 用户类型详情
	 */
	public function userTypeDetail(int $type_id){
		$return = FundUserType::findOrFail($type_id);
		return $return;
	}
	
	/**
	 * @return \Illuminate\Support\Collection
	 * 钱包类型
	 */
	public function purseType(){
		$return = collect([]);
		FundPurseType::where(['status'=>1])->get()->each(function($v,$k) use (&$return){
			$return->put($v->alias,$v);
		});
		return $return;
	}
	
	/**
	 * @param int $type_id
	 * @return \Illuminate\Support\Collection
	 * 用户类型详情
	 */
	public function purseTypeDetail(int $type_id){
		$return = FundPurseType::findOrFail($type_id);
		return $return;
	}
	
	
	/**
	 * @param int $purse_id
	 * @param int $amount
	 * @param null|string $remarks
	 * @return int
	 * 冻结用户金额
	 */
	public function freeze(int $purse_id,int $amount,?string $remarks = null){
		$id = $this->_freeze($purse_id,$amount,$remarks);
		return $id;
	}
	
	/**
	 * @param int $freeze_id
	 * @return bool
	 * 解冻用户金额
	 */
	public function unfreeze(int $freeze_id){
		$bool = $this->_unfreeze($freeze_id);
		return $bool;
	}
	
	/**
	 * @param int $purse_id
	 * @param int $amount
	 * @param null|string $remarks
	 * @return int
	 * 冻结用户钱包余额
	 */
	private function _freeze(int $purse_id,int $amount,?string $remarks = null){
		// 防多次点击
		$cache_key = 'Bank_freeze'.$purse_id.'_'.$amount;
		if(Cache::has($cache_key)){
			abort_500('钱包冻结请求频繁，请稍后再试');
		}
		Cache::add($cache_key,1,0.1);		// 6秒钟
		
		$purse = FundUserPurse::where(['status'=>1,'id'=>$purse_id])->firstOrFail();
		if($purse->balance - $purse->freeze < $amount){
			abort_500('账户余额不足');
		}
		DB::beginTransaction();
		$purse->freeze += $amount;
		$purse->save();
		$freeze_add = [
			'purse_id'		=> $purse_id,
			'amount'		=> $amount,
			'status'		=> 1,
			'remarks'		=> $remarks,
		];
		$id = FundFreeze::create($freeze_add)->id;
		DB::commit();
		return $id;
	}
	
	/**
	 * @param int $freeze_id		// fund_freeze 表 id
	 * @return bool
	 * 解冻用户资金
	 */
	private function _unfreeze(int $freeze_id){
		// 防多次点击
		$cache_key = 'Bank_unfreeze'.$freeze_id;
		if(Cache::has($cache_key)){
			abort_500('钱包解冻请求频繁，请稍后再试');
		}
		Cache::add($cache_key,1,0.1);		// 6秒钟
		
		$freeze = FundFreeze::findOrFail($freeze_id);
		$purse = FundUserPurse::where(['status'=>1,'id'=>$freeze->purse_id])->firstOrFail();
		
		if($freeze->status != 1){
			abort_500('冻结记录['.$freeze_id.']已被处理过');
		}
		DB::beginTransaction();
		// 更新钱包冻结资金，减掉对应资金
		$purse->freeze -= $freeze->amount;
		$purse->save();
		
		// 更新冻结历史数据，设为已冻结
		$freeze->status = 2;
		$bool = $freeze->save();
		DB::commit();
		return $bool;
	}
}
