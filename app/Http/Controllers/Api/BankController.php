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
use App\Libraries\Bank;
use App\Http\Requests\BasicRequest;
use App\Jobs\Transfer;
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
	 * 初始化数据，如果有转账流水就无法初始化了
	 * @param BasicRequest $request
	 * @return array
	 */
	public function init(BasicRequest $request){
		$balance = $request->input('balance',100000000000000);
		$bank = new Bank();
		$bool = $bank->init($balance);
		return json_return($bool,'初始化错误，请检查转账数据是否已存在','系统钱包数据初始化完成，启动资金'.number_format($balance / 100,2).'元');
	}
	
	/**
	 * 用户类型列表
	 * @return array
	 */
	public function user_type(){
		$bank = new Bank();
		$data = $bank->userType();
		return json_success('OK',$data);
	}
	
	/**
	 * 钱包类型列表
	 * @return array
	 */
	public function purse_type(){
		$bank = new Bank();
		$data = $bank->purseType();
		return json_success('OK',$data);
	}
	
	/**
	 * 获取用户类型下的所有钱包
	 * @param ApiUserTypeWalletRequest $request
	 * @return array
	 */
	public function user_type_wallet(ApiUserTypeWalletRequest $request){
		$user_type = $request->input('user_type');
		$bank = new Bank();
		$user_type_id = FundUserType::where(['alias'=>$user_type])->value('id');
		$data = $bank->userWallet(0,$user_type_id);
		return json_success('OK',$data);
	}
	
	/**
	 * 获取中央银行下的所有钱包
	 * @param BasicRequest $request
	 * @return array
	 */
	public function central_wallet(BasicRequest $request){
		$user_type = 'central';
		$bank = new Bank();
		$user_type_id = FundUserType::where(['alias'=>$user_type])->value('id');
		$data = $bank->userWallet(0,$user_type_id);
		return json_success('OK',$data);
	}
	
	/**
	 * 获取系统银行下的所有钱包
	 * @param BasicRequest $request
	 * @return array
	 */
	public function system_wallet(BasicRequest $request){
		$user_type = 'system';
		$bank = new Bank();
		$user_type_id = FundUserType::where(['alias'=>$user_type])->value('id');
		$data = $bank->userWallet(0,$user_type_id);
		return json_success('OK',$data);
	}
	
	/**
	 * 用户钱包列表
	 * @param ApiUserWalletRequest $request
	 * @return array
	 */
	public function user_wallet(ApiUserWalletRequest $request){
		$user_id = $request->input('user_id');
		$bank = new Bank();
		$data = $bank->userWallet($user_id);
		return json_success('OK',$data);
	}
	
	/**
	 * 根据钱包id获取钱包详情
	 * @param ApiPurseDetailRequest $request
	 * @return mixed
	 */
	public function purse_detail(ApiPurseDetailRequest $request){
		$purse_id = $request->input('purse_id');
		$bank = new Bank();
		$data = $bank->userPurseDetail($purse_id);
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
		$bank = new Bank();
		$freeze_id = $bank->freeze($purse_id,$amount,$remarks);
		return json_return($freeze_id,'','OK',['freeze_id'=>$freeze_id]);
	}
	
	/**
	 * 解冻用户资金
	 * @param ApiUnfreezeRequest $request
	 * @return array
	 */
	public function unfreeze(ApiUnfreezeRequest $request){
		$freeze_id = $request->input('freeze_id');
		$bank = new Bank();
		$bool = $bank->unfreeze($freeze_id);
		return json_return($bool,'','解冻成功',['freeze_id'=>$freeze_id]);
	}
	
	
	/**
	 * 转账通用方法，根据 transfer_alias 参数区分
	 * @param BasicRequest $request
	 * @return array
	 */
	public function transfer(BasicRequest $request){
		$bank = new Bank();
		$transfer_ids = [];
		$posts = $request->input('param');	// 二维数组，循环一次后才是真正的参数列表
		$async = $request->input('async');	// 是否是异步操作，异步操作无返回值
		if($async){
			Transfer::dispatch($posts)->onQueue('transfer');
		}else{
			DB::transaction(function() use (&$transfer_ids,$bank,$posts){
				$parent_id = 0;
				
				foreach($posts as $k => $post){
					$from_user_id = $post['from_user_id'] ?? 0;
					$to_user_id = $post['to_user_id'] ?? 0;
					$amount = $post['amount'];
					$reason = $post['reason'];
					$detail = $post['detail'];
					$remarks = $post['remarks'];
					$transfer_ids[] = $parent_id = $bank->transfer($from_user_id,$to_user_id,$amount,$reason,$parent_id,$detail,$remarks);
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
		$bank = new Bank();
		$transfer_id = $bank->untransfer($transfer_id,$remarks);
		return json_return($transfer_id,'','资金冲正处理成功',['transfer_id'=>$transfer_id]);
	}
	
	/**
	 * 转账详情
	 * @param ApiTransferDetailRequest $request
	 * @return array
	 */
	public function transfer_detail(ApiTransferDetailRequest $request){
		$transfer_id = $request->input('transfer_id');
		$bank = new Bank();
		$detail = $bank->transferDetail($transfer_id);
		return json_success('OK',$detail);
	}
}