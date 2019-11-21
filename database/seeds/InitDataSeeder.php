<?php

use App\Models\FundAdmin;
use App\Models\FundAdminGroup;
use App\Models\FundConfig;
use App\Models\FundMerchant;
use App\Models\FundPayConfig;
use App\Models\FundPurseType;
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
			'rule'		=> [],
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
		
		$pay_config_id = FundPayConfig::create([
			'name'		=> '系统商户',
			'pay_config'=> [],
			'status'	=> 1,
			'remarks'	=> '初始支付配置',
		])->id;
		
		FundMerchant::create([
			'pay_config_id'	=> $pay_config_id,
			'name'		=> '系统商户',
			'appid'		=> 'ebank10000',
			'secret'	=> '10000',
			'status'	=> 1,
			'remarks'	=> '系统初始商户',
		]);
		
		FundPurseType::create([
			'name'		=> '现金钱包',
			'alias'		=> 'cash',
			'status'	=> 1,
			'remarks'	=> '支付入账默认钱包',
		]);
		FundPurseType::create([
			'name'		=> '提现钱包',
			'alias'		=> 'withdraw',
			'status'	=> 1,
			'remarks'	=> '提现出账金额统一存放',
		]);
		FundPurseType::create([
			'name'		=> '授信钱包',
			'alias'		=> 'credit',
			'status'	=> 1,
			'remarks'	=> '提前消费负债资金，正数表示用户负债款',
		]);
		
		
		FundUserType::create([
			'name'		=> '中央银行',
			'alias'		=> 'central',
			'status'	=> 1,
			'remarks'	=> '三方金额入账资金存放',
		]);
		FundUserType::create([
			'name'		=> '系统银行',
			'alias'		=> 'system',
			'status'	=> 1,
			'remarks'	=> '业务流水出入资金存放',
		]);
		FundUserType::create([
			'name'		=> '用户银行',
			'alias'		=> 'user',
			'status'	=> 1,
			'remarks'	=> '用户关联出入资金存放',
		]);
		
		// 填充配置
		FundConfig::create([
			'key'	=> 'project_name',
			'value'	=> 'EBank',
			'tips'	=> '项目名',
			'status'=> '1',
		]);
		FundConfig::create([
			'key'	=> 'github_show',
			'value'	=> '1',
			'tips'	=> '展示 github 链接',
			'status'=> '1',
		]);
	}
}
