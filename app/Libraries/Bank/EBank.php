<?php
/**
 * 电子银行核心sdk类库单文件
 */
namespace App\Libraries\Bank;

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
 * 身份类型定死的三种类型，id 可以不固定
 * 1、中央银行
 * 2、系统银行
 * 3、用户银行
 * 可扩展其他类型，如商家
 *
 * 身份类型定死一种类型，id 可以不固定.
 * 1、现金
 */
class EBank {
	
	/**
	 * @param int $balance	// 一千万亿元
	 * @return bool
	 * 初始化数据，数据清空后可调用此方法重新生成系统钱包id
	 * 一层商户，一层
	 */
	public function initPurse(int $balance = 100000000000000000){
		$merchant = FundMerchant::active()->pluck('id');
		$user_type = FundUserType::active()->pluck('id');
		$merchant->each(function($merchant_id) use ($user_type,$balance){
			
			$user_type->each(function($purse_type_id) use ($merchant_id,$balance){
				
				$wallet = $this->userWallet(0,$purse_type_id,$merchant_id);
				
				$wallet->each(function($v) use ($merchant_id,$balance){
					if($v->balance <= 0){
						$v->merchant_id = $merchant_id;
						$v->balance = $balance;
						$v->save();
					}
				});
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
		$merchant_id	= $arguments[0];
		$out_user_id	= $arguments[1] ?? 0;
		$into_user_id	= $arguments[2] ?? 0;
		$amount			= $arguments[3];
		$detail			= $arguments[4];
		$reason_name	= $arguments[5];
		$flag			= $arguments[6];	// 业务逻辑组，系统本身只带固定几种，如果没有的话，会索引冲突

		$transfer_name = explode('_',snake_case($name));
		if(count($transfer_name) != 5){
			exception('转账 alias 拼接参数有误');
		}

		\Validator::make([
			'from_user_id'			=> $out_user_id,
			'to_user_id'			=> $into_user_id,
			'amount'				=> $amount,
			'detail'				=> $detail,
			'out_user_type'			=> $transfer_name[0],
			'out_purse_type'		=> $transfer_name[1],
			'into_user_type'		=> $transfer_name[3],
			'into_purse_type'		=> $transfer_name[4]
		],[
			'from_user_id'			=> 'required|integer|min:0',
			'to_user_id'			=> 'required|integer|min:0',
			'amount'				=> 'required|integer|min:1',
//			'reason'				=> 'required|integer',
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
			'out_user_type.required'	=> '转出身份类型参数必传',
			'out_user_type.exists'		=> '转出身份类型不存在',
			'out_purse_type.required'	=> '转出钱包类型参数必传',
			'out_purse_type.exists'		=> '转出钱包类型不存在',
			'into_user_type.required'	=> '转入身份类型参数必传',
			'into_user_type.exists'		=> '转入身份类型不存在',
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
		if($out_user_type === 'central' || $out_user_type === 'system'){
			$out_user_id = 0;
		}
		if($into_user_type === 'central' || $into_user_type === 'system'){
			$into_user_id = 0;
		}

		$out_purse = $this->userWalletDetail($out_user_id,$out_purse_type_id,$out_user_type_id,$merchant_id);
		$into_purse = $this->userWalletDetail($into_user_id,$into_purse_type_id,$into_user_type_id,$merchant_id);
		// 自动生成 reason，商户为系统商户(ID:1)，格式为：业务组+出账身份类型+出账钱包类型+商户ID+进账身份类型+进账钱包类型
		$reason = $flag.str_pad($out_user_type_id,2,'0',STR_PAD_LEFT).str_pad($out_purse_type_id,2,'0',STR_PAD_LEFT).$merchant_id.str_pad($into_user_type_id,2,'0',STR_PAD_LEFT).str_pad($into_purse_type_id,2,'0',STR_PAD_LEFT);
		FundTransferReason::firstOrCreate(['merchant_id'=>$merchant_id,'reason'=>$reason],[
			'name'				=> $reason_name ?? '钱包内部变动',
			'out_user_type_id'	=> $out_user_type_id,
			'out_purse_type_id'	=> $out_purse_type_id,
			'into_user_type_id'	=> $into_user_type_id,
			'into_purse_type_id'=> $into_purse_type_id,
			'status'			=> 1,
			'remarks'			=> '系统自动生成',
		]);
		$transfer_id = $this->_transfer($merchant_id,$out_purse->id,$into_purse->id,$amount,$reason,0,$detail);
		return $transfer_id;
	}
	
	
	/**
	 * 转账暴露方法
	 * @param int $merchant_id
	 * @param int $out_user_id
	 * @param int $into_user_id
	 * @param int $amount
	 * @param int $reason
	 * @param int $parent_id
	 * @param null|string $detail
	 * @param null|string $remarks
	 * @return mixed
	 */
	public function transfer(int $merchant_id,int $out_user_id,int $into_user_id,int $amount,int $reason,int $parent_id = 0,?string $detail = null,?string $remarks = null){
		\Validator::make([
			'merchant_id'			=> $merchant_id,
			'out_user_id'			=> $out_user_id,
			'into_user_id'			=> $into_user_id,
			'amount'				=> $amount,
			'reason'				=> $reason,
			'detail'				=> $detail,
			'remarks'				=> $remarks
		],[
			'merchant_id'			=> 'required|integer|min:1',
			'out_user_id'			=> 'required|integer|min:0',
			'into_user_id'			=> 'required|integer|min:0',
			'amount'				=> 'required|integer|min:1',
			'reason'				=> [
				'required',
				'integer',
//				Rule::exists('fund_transfer_reason','reason')->where('merchant_id',$merchant_id)->where('status',1),		// 底层已验证过
			],
		],[
			'merchant_id.required'	=> '转账商户参数必传',
			'merchant_id.integer'	=> '转账商户参数只能为正整数',
			'merchant_id.min'		=> '转账商户参数只能为正整数',
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
			'reason.exists'			=> 'reason 参数不存在',
		])->validate();
		
		$reason_first = FundTransferReason::select(['out_user_type_id','out_purse_type_id','into_user_type_id','into_purse_type_id'])->where(['merchant_id'=>$merchant_id,'reason'=>$reason])->firstOrFail();
		$out_user_type_id = $reason_first->out_user_type_id;
		$out_purse_type_id = $reason_first->out_purse_type_id;
		$into_user_type_id = $reason_first->into_user_type_id;
		$into_purse_type_id = $reason_first->into_purse_type_id;

		// 如果出账身份系统默认的两个，就设置 user_id = 0;
		if($out_user_type_id == 1 || $out_user_type_id == 2){
			$out_user_id = 0;
		}
		if($into_user_type_id == 1 || $into_user_type_id == 2){
			$into_user_id = 0;
		}
		// 如果转账身份类型为3，则必传用户ID
		if($out_user_type_id == 3 && $out_user_id <= 0 || $into_user_type_id == 3 && $into_user_id <= 0){
			exception('转账用户ID参数需大于0');
		}

		$out_purse = $this->userWalletDetail($out_user_id,$out_purse_type_id,$out_user_type_id,$merchant_id);
		$into_purse = $this->userWalletDetail($into_user_id,$into_purse_type_id,$into_user_type_id,$merchant_id);
		$transfer_id = $this->_transfer($merchant_id,$out_purse->id,$into_purse->id,$amount,$reason,$parent_id,$detail,$remarks);
		return $transfer_id;
	}
	
	/**
	 * @param int $merchant_id
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
	private function _transfer(int $merchant_id,int $out_purse_id,int $into_purse_id,int $amount,int $reason,int $parent_id = 0,?string $detail = null,?string $remarks = null){
		// 出账钱包最大可用金额，且扣减后的余额要 >= 0 ，如果超过了此金额，就不能转账
		$out_purse_balance = FundUserPurse::where(['id'=>$out_purse_id])->where(DB::raw('balance - freeze'),'>=',$amount)->value(DB::raw('balance - freeze'));
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
				Rule::exists('fund_transfer_reason','reason')->where('merchant_id',$merchant_id)->where('status',1),
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
			'reason.required'				=> 'reason 参数必传',
			'reason.integer'				=> 'reason 参数类型错误',
			'reason.exists'					=> 'reason 参数不存在',
		])->validate();
		
		$transfer_id = DB::transaction(function() use ($merchant_id,$out_purse_id,$into_purse_id,$amount,$parent_id,$reason,$detail,$remarks){
			// 悲观行锁，避免其他进程幻读
			$out_purse = FundUserPurse::lockForUpdate()->find($out_purse_id);
			$into_purse = FundUserPurse::lockForUpdate()->find($into_purse_id);
			
			if($out_purse->status == 0){
				exception('转出钱包已被设置为禁用');
			}
			if($into_purse->status == 0){
				exception('转入钱包已被设置为禁用');
			}
			
			// 出账钱包扣款
			$var = FundUserPurse::where(['id'=>$out_purse->id])->where(DB::raw('balance - freeze'),'>=',$amount)->update(['balance'=>DB::raw('balance - '.$amount)]);
			if(!$var){
				exception('转出钱包扣款失败，余额不足');
			}
			// 进账钱包收款
			FundUserPurse::where(['id'=>$into_purse->id])->increment('balance',$amount);
			
			// 增加流水
			
			$transfer_add = [
				'merchant_id'		=> $merchant_id,
				'reason'			=> $reason,
				'amount'			=> $amount,
				
				'out_user_id'		=> $out_purse->user_id,
				'out_user_type_id'	=> $out_purse->user_type_id,
				'out_purse_type_id'	=> $out_purse->purse_type_id,
				'out_purse_id'		=> $out_purse->id,
				'out_balance'		=> $out_purse->balance - $amount,
				
				'into_user_id'		=> $into_purse->user_id,
				'into_user_type_id'	=> $into_purse->user_type_id,
				'into_purse_type_id'=> $into_purse->purse_type_id,
				'into_purse_id'		=> $into_purse->id,
				'into_balance'		=> $into_purse->balance + $amount,
				
				'parent_id'			=> $parent_id,
				'detail'			=> $detail,
				'remarks'			=> $remarks,
				'status'			=> 1,
			];
			
			return FundTransfer::create($transfer_add)->id;
		});
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
	public function unTransfer(int $transfer_id,?string $remarks = '流水冲正，资金退回'){
		$bool = DB::transaction(function() use ($transfer_id, $remarks){
			$detail = FundTransfer::lockForUpdate()->findOrFail($transfer_id);
			
			if($detail->status != 1){
				exception('该数据已被处理过，无法冲正');
			}
			$out_purse_id = $detail->into_purse_id;	// 解析后需转出的钱包id
			$into_purse_id = $detail->out_purse_id;	// 解析后需转入的钱包id
			$amount = $detail->amount;
			// 出账钱包扣款
			$var = FundUserPurse::where(['id'=>$out_purse_id])->decrement('balance',$amount);
			if(!$var){
				exception('转出钱包扣款失败');
			}
			// 进账钱包收款
			$var = FundUserPurse::where(['id'=>$into_purse_id])->increment('balance',$amount);
			if(!$var){
				exception('转入钱包收款失败');
			}
			$detail->status = 2;
			$detail->remarks = $remarks;
			$ok = $detail->save();
			return $ok ? $transfer_id : false;
		});
		
		return $bool;
	}
	
	
	/**
	 * @param int $user_id
	 * @param int $user_type
	 * @param int $merchant_id
	 * @return \Illuminate\Support\Collection
	 * 用户钱包
	 */
	public function userWallet(int $user_id,int $user_type = 3,int $merchant_id = 1){
		\Validator::make(['user_id'=>$user_id,'user_type'=>$user_type,'merchant_id'=>$merchant_id],[
			'merchant_id'	=> 'required|integer|min:1',
			'user_id'		=> 'required|integer',
			'user_type'		=> [
				'required',
				'integer',
				Rule::exists('fund_user_type','id')->where('status',1),
			],
		],[
			'merchant_id.required'	=> '商户ID参数必传',
			'merchant_id.min'		=> '商户ID参数值有误',
			'user_id.required'		=> '用户ID参数必传',
			'user_id.integer'		=> '用户ID参数类型错误',
			'user_type.required'	=> '身份类型参数必传',
			'user_type.integer'		=> '身份类型参数类型错误',
			'user_type.exists'		=> '身份类型不存在',
		])->validate();
		
		$wallet = collect([]);
		$purse_type = FundPurseType::active()->pluck('id','alias');
		$purse_type->each(function($purse_type_id,$purse_type_alias) use ($user_id,$user_type,$merchant_id,&$wallet){
			$wallet_detail = $this->userWalletDetail($user_id,$purse_type_id,$user_type,$merchant_id);
			$wallet->put($purse_type_alias,$wallet_detail);
		});
		
		return $wallet;
	}
	
	/**
	 * @param int $user_id
	 * @param int $purse_type_id
	 * @param int $user_type
	 * @param int $merchant_id
	 * @return mixed
	 * 获取用户下某一个钱包详情
	 */
	public function userWalletDetail(int $user_id,int $purse_type_id,int $user_type = 3,int $merchant_id = 1){
		\Validator::make(['user_id'=>$user_id,'purse_type'=>$purse_type_id,'user_type'=>$user_type,'merchant_id'=>$merchant_id],[
			'merchant_id'	=> 'required|integer|min:1',
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
			'merchant_id.required'		=> '商户ID参数必传',
			'merchant_id.min'			=> '商户ID参数只能为正整数',
			'user_id.required'			=> '用户ID参数必传',
			'user_id.integer'			=> '用户ID参数类型错误',
			'purse_type.required'		=> '钱包类型ID参数必传',
			'purse_type.integer'		=> '钱包类型ID参数类型错误',
			'purse_type.exists'			=> '钱包类型不存在',
			'user_type.required'		=> '身份类型参数必传',
			'user_type.integer'			=> '身份类型参数类型错误',
			'user_type.exists'			=> '身份类型不存在',
		])->validate();
		
		// 如果是中央或系统，用户ID都是0
		if($user_type == 1 || $user_type == 2){
			$user_id = 0;
		}
		$FundUserPurse = FundUserPurse::firstOrCreate(['merchant_id'=>$merchant_id,'user_id'=>$user_id,'user_type_id'=>$user_type,'purse_type_id'=>$purse_type_id],['balance'=>0,'freeze'=>0,'remarks'=>null,'status'=>1]);
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
	 * 身份类型
	 */
	public function userType(){
		$return = collect([]);
		FundUserType::active()->get()->each(function($v,$k) use (&$return){
			$return->put($v->alias,$v);
		});
		return $return;
	}
	
	/**
	 * @param int $type_id
	 * @return \Illuminate\Support\Collection
	 * 身份类型详情
	 */
	public function userTypeDetail(int $type_id){
		$return = FundUserType::active()->findOrFail($type_id);
		return $return;
	}
	
	/**
	 * @return \Illuminate\Support\Collection
	 * 钱包类型
	 */
	public function purseType(){
		$return = collect([]);
		FundPurseType::active()->get()->each(function($v,$k) use (&$return){
			$return->put($v->alias,$v);
		});
		return $return;
	}
	
	/**
	 * @param int $type_id
	 * @return \Illuminate\Support\Collection
	 * 钱包类型详情
	 */
	public function purseTypeDetail(int $type_id){
		$return = FundPurseType::active()->findOrFail($type_id);
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
			exception('钱包冻结请求频繁，请稍后再试');
		}
		Cache::add($cache_key,1,0.1);		// 6秒钟
		
		$purse = FundUserPurse::active()->where(['id'=>$purse_id])->firstOrFail();
		if($purse->balance - $purse->freeze < $amount){
			exception('账户余额不足');
		}
		
		$id = DB::transaction(function() use ($amount,$purse,$purse_id,$remarks){
			$purse->freeze += $amount;
			$purse->save();
			
			$freeze_add = [
				'purse_id'		=> $purse_id,
				'amount'		=> $amount,
				'status'		=> 1,
				'remarks'		=> $remarks,
			];
			return FundFreeze::create($freeze_add)->id;
		});
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
			exception('钱包解冻请求频繁，请稍后再试');
		}
		Cache::add($cache_key,1,0.1);		// 6秒钟
		
		$freeze = FundFreeze::findOrFail($freeze_id);
		$purse = FundUserPurse::active()->where(['id'=>$freeze->purse_id])->firstOrFail();
		
		if($freeze->status != 1){
			exception('冻结记录['.$freeze_id.']已被处理过');
		}
		
		$bool = DB::transaction(function() use ($purse,$freeze){
			// 更新钱包冻结资金，减掉对应资金
			$purse->freeze -= $freeze->amount;
			$purse->save();
			
			// 更新冻结历史数据，设为已冻结
			$freeze->status = 2;
			return $freeze->save();
		});
		return $bool;
	}
}
