<?php
/**
 * @Author 晏勇
 * @created_at	2017年11月8日14:16:26
 * @description 电子银行对外接口控制器
 */
namespace App\Http\Controllers\Api;

use App\Http\Requests\ApiFreezeRequest;
use App\Http\Requests\ApiPurseDetailRequest;
use App\Http\Requests\ApiReverseRequest;
use App\Http\Requests\ApiTransferDetailRequest;
use App\Http\Requests\ApiUnfreezeRequest;
use App\Http\Requests\ApiUserTypeWalletRequest;
use App\Http\Requests\ApiUserWalletRequest;
use App\Http\Requests\BasicRequest;
use App\Jobs\Transfer;
use App\Libraries\Bank\EBank;
use App\Models\FundMerchant;
use App\Models\FundUserType;
use Illuminate\Support\Facades\DB;

class BankController extends CommonController {
	
	/**
	 * 测试算签，API调试用
	 * @return array
	 */
	public function test_sign(){
		return json_success('验签通过');
	}
	
	/**
	 * 身份类型列表
	 * @return array
	 */
	public function user_type(){
		$EBank = new EBank();
		$data = $EBank->userType();
		return json_success('OK',$data);
	}
	
	/**
	 * 钱包类型列表
	 * @return array
	 */
	public function purse_type(){
		$EBank = new EBank();
		$data = $EBank->purseType();
		return json_success('OK',$data);
	}
	
	/**
	 * 获取身份类型下的所有钱包
	 * @param ApiUserTypeWalletRequest $request
	 * @return array
	 */
	public function user_type_wallet(ApiUserTypeWalletRequest $request){
		$user_type = $request->input('user_type');
		$EBank = new EBank();
		$user_type_id = FundUserType::where(['alias'=>$user_type])->value('id');
		$data = $EBank->userWallet(0,$user_type_id);
		return json_success('OK',$data);
	}
	
	/**
	 * 获取中央银行下的所有钱包
	 * @param BasicRequest $request
	 * @return array
	 */
	public function central_wallet(BasicRequest $request){
		$appid = $request->input('ebank_appid');
		$user_type = 'central';
		$merchant_id = FundMerchant::where(['appid'=>$appid])->value('id');
		$EBank = new EBank();
		$user_type_id = FundUserType::where(['alias'=>$user_type])->value('id');
		$data = $EBank->userWallet(0,$user_type_id,$merchant_id);
		return json_success('OK',$data);
	}
	
	/**
	 * 获取系统银行下的所有钱包
	 * @param BasicRequest $request
	 * @return array
	 */
	public function system_wallet(BasicRequest $request){
		$appid = $request->input('ebank_appid');
		$user_type = 'system';
		$merchant_id = FundMerchant::where(['appid'=>$appid])->value('id');
		$EBank = new EBank();
		$user_type_id = FundUserType::where(['alias'=>$user_type])->value('id');
		$data = $EBank->userWallet(0,$user_type_id,$merchant_id);
		return json_success('OK',$data);
	}
	
	/**
	 * 用户钱包列表
	 * @param ApiUserWalletRequest $request
	 * @return array
	 */
	public function user_wallet(ApiUserWalletRequest $request){
		$appid = $request->input('ebank_appid');
		$user_id = $request->input('user_id');
		$merchant_id = FundMerchant::where(['appid'=>$appid])->value('id');
		$EBank = new EBank();
		$data = $EBank->userWallet($user_id,3,$merchant_id);
		return json_success('OK',$data);
	}
	
	/**
	 * 根据钱包id获取钱包详情
	 * @param ApiPurseDetailRequest $request
	 * @return mixed
	 */
	public function purse_detail(ApiPurseDetailRequest $request){
		$purse_id = $request->input('purse_id');
		$EBank = new EBank();
		$data = $EBank->userPurseDetail($purse_id);
		return json_success('OK',$data);
	}
	
	
	/**
	 * 冻结用户资金
	 * @param ApiFreezeRequest $request
	 * @return array
	 */
	public function freeze(ApiFreezeRequest $request){
		$purse_id = $request->input('purse_id');
		$amount = $request->input('amount');
		$remarks = $request->input('remarks');
		$EBank = new EBank();
		$freeze_id = $EBank->freeze($purse_id,$amount,$remarks);
		return json_return($freeze_id,'','OK',['freeze_id'=>$freeze_id]);
	}
	
	/**
	 * 解冻用户资金
	 * @param ApiUnfreezeRequest $request
	 * @return array
	 */
	public function unfreeze(ApiUnfreezeRequest $request){
		$freeze_id = $request->input('freeze_id');
		$EBank = new EBank();
		$bool = $EBank->unfreeze($freeze_id);
		return json_return($bool,'','解冻成功',['freeze_id'=>$freeze_id]);
	}
	
	
	/**
	 * 转账通用方法，根据 transfer_alias 参数区分
	 * @param BasicRequest $request
	 * @return array
	 */
	public function transfer(BasicRequest $request){
		$EBank = new EBank();
		$transfer_ids = [];
		request()->validate([
			'param'		=> 'required|array',
			'async'		=> 'integer',
		]);
		$posts = $request->input('param');	// 二维数组，循环一次后才是真正的参数列表
		$async = $request->input('async');	// 是否是异步操作，异步操作无返回值
		$appid = $request->input('ebank_appid');	// 是否是异步操作，异步操作无返回值
		
		$merchant_id = FundMerchant::where(['appid' => $appid])->value('id');
		if($async){
			Transfer::dispatch($merchant_id,$posts)->onQueue(queue_name('transfer'));
		}else{
			DB::transaction(function() use (&$transfer_ids,$EBank,$posts,$merchant_id){
				$parent_id = 0;
				
				foreach($posts as $k => $post){
					$from_user_id = $post['from_user_id'] ?: 0;
					$to_user_id = $post['to_user_id'] ?: 0;
					$amount = $post['amount'] ?: 0;
					$reason = $post['reason'] ?: 0;
					$detail = $post['detail'];
					$remarks = $post['remarks'];
					$transfer_ids[] = $parent_id = $EBank->transfer($merchant_id,$from_user_id,$to_user_id,$amount,$reason,$parent_id,$detail,$remarks);
				}
			});
		}
		return json_success('转账成功',compact('transfer_ids'));
	}
	
	/**
	 * 钱包冲正，钱包回转
	 * @param ApiReverseRequest $request
	 * @return array
	 */
	public function untransfer(ApiReverseRequest $request){
		$transfer_id = $request->input('transfer_id');
		$remarks = $request->input('remarks');
		$EBank = new EBank();
		$transfer_id = $EBank->untransfer($transfer_id,$remarks);
		return json_return($transfer_id,'','资金冲正处理成功',['transfer_id'=>$transfer_id]);
	}
	
	/**
	 * 转账详情
	 * @param ApiTransferDetailRequest $request
	 * @return array
	 */
	public function transfer_detail(ApiTransferDetailRequest $request){
		$transfer_id = $request->input('transfer_id');
		$EBank = new EBank();
		$detail = $EBank->transferDetail($transfer_id);
		return json_success('OK',$detail);
	}
}