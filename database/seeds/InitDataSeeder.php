<?php

use App\Models\FundAdmin;
use App\Models\FundAdminGroup;
use App\Models\FundMerchant;
use App\Models\FundPurseType;
use App\Models\FundTransferReason;
use App\Models\FundUserType;
use Illuminate\Database\Seeder;

class InitDataSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		FundAdminGroup::create([
			'id'		=> 1,
			'name'		=> '系统管理组',
			'rule'		=> '',
			'status'	=> 1,
			'remarks'	=> '拥有最高权限',
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
			'remarks'	=> '系统保留商户',
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
			'name'				=> '提现成功',
			'out_user_type_id'	=> 3,
			'out_purse_type_id'	=> 1,
			'into_user_type_id'	=> 2,
			'into_purse_type_id'=> 1,
			'reason'			=> '10006',
			'status'			=> 1,
			'remarks'			=> '包含银行卡/支付宝/微信',
		]);
		
		FundUserType::create([
			'name'		=> '中央银行',
			'alias'		=> 'central',
			'status'	=> 1,
			'remarks'	=> '系统保留类型',
		]);
		FundUserType::create([
			'name'		=> '系统银行',
			'alias'		=> 'system',
			'status'	=> 1,
			'remarks'	=> '系统保留类型',
		]);
		FundUserType::create([
			'name'		=> '用户银行',
			'alias'		=> 'user',
			'status'	=> 1,
			'remarks'	=> '系统保留类型',
		]);
	}
}
