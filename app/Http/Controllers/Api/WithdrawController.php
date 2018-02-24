<?php
namespace App\Http\Controllers\Api;

use App\Http\Requests\BasicRequest;
use App\Libraries\Bank;
use App\Models\FundPurseType;
use App\Models\FundWithdraw;
use App\Models\FundWithdrawAlipay;
use App\Models\FundWithdrawWechat;
use Illuminate\Validation\Rule;

class WithdrawController extends CommonController {
	
	/**
	 * 银行卡提现
	 * @param BasicRequest $request
	 * @return array
	 */
	public function bank(BasicRequest $request){
		$post = request()->validate([
			'user_id'		=> 'required|integer|min:1',
			'amount'		=> 'required|integer|min:1',
			'fee'			=> 'integer|min:0',
			'purse'			=> [
				'required',
				Rule::exists('fund_purse_type','alias')->where('status',1),
			],
			'realname'		=> 'required',
			'bank_name'		=> 'required',
			'bank_no'		=> 'required',
		]);
		$post['pay_type']	= '银行卡提现';
		$post['amount_actual'] = $post['amount'] - $post['fee'];
		if($post['amount_actual'] <= 0){
			abort_500('计算错误，手续费大于提现金额');
		}
		
		$purse = $request->input('purse');
		$purse_id = FundPurseType::where(['alias'=>$purse,'status'=>1])->value('id');
		$bank = new Bank();
		$wallet = $bank->userWalletDetail($post['user_id'],$purse_id);
		$id = $bank->freeze($wallet->id,$post['amount']);
		$post['freeze_id']	= $id;
		$withdraw_id = FundWithdraw::create($post)->id;
		return json_return($withdraw_id,'','',['withdraw_id'=>$withdraw_id]);
	}
	
	/**
	 * 支付宝提现
	 * @param BasicRequest $request
	 * @return array
	 */
	public function alipay(BasicRequest $request){
		$post = request()->validate([
			'user_id'		=> 'required|integer|min:1',
			'amount'		=> 'required|integer|min:1',
			'fee'			=> 'integer|min:0',
			'purse'			=> [
				'required',
				Rule::exists('fund_purse_type','alias')->where('status',1),
			],
			'realname'		=> 'required',
			'account'		=> 'required',
		]);
		$post['pay_type']	= '支付宝提现';
		$post['amount_actual'] = $post['amount'] - $post['fee'];
		
		$purse = $request->input('purse');
		$purse_id = FundPurseType::where(['alias'=>$purse,'status'=>1])->value('id');
		$bank = new Bank();
		$wallet = $bank->userWalletDetail($post['user_id'],$purse_id);
		$id = $bank->freeze($wallet->id,$post['amount']);
		$post['freeze_id']	= $id;
		$withdraw_id = FundWithdrawAlipay::create($post)->id;
		return json_return($withdraw_id,'','',['withdraw_id'=>$withdraw_id]);
	}
	
	/**
	 * 微信提现
	 * @param BasicRequest $request
	 * @return array
	 */
	public function wechat(BasicRequest $request){
		$post = request()->validate([
			'user_id'		=> 'required|integer|min:1',
			'amount'		=> 'required|integer|min:1',
			'fee'			=> 'integer|min:0',
			'purse'			=> [
				'required',
				Rule::exists('fund_purse_type','alias')->where('status',1),
			],
			'realname'		=> 'required',
			'account'		=> 'required',
		]);
		$post['pay_type']	= '微信提现';
		$post['amount_actual'] = $post['amount'] - $post['fee'];
		
		$purse = $request->input('purse');
		$purse_id = FundPurseType::where(['alias'=>$purse,'status'=>1])->value('id');
		$bank = new Bank();
		$wallet = $bank->userWalletDetail($post['user_id'],$purse_id);
		$id = $bank->freeze($wallet->id,$post['amount']);
		$post['freeze_id']	= $id;
		$withdraw_id = FundWithdrawWechat::create($post)->id;
		return json_return($withdraw_id,'','',['withdraw_id'=>$withdraw_id]);
	}
}
