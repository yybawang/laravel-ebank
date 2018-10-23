<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Api\NotifyController;
use App\Libraries\Bank\EBank;
use App\Libraries\Bank\PayFieldsConfig;
use App\Libraries\EBankSdk;
use App\Http\Requests\BasicRequest;
use App\Jobs\Transfer;
use App\Libraries\ExportCsv;
use App\Mail\Bug;
use App\Models\FundAdmin;
use App\Models\FundFreeze;
use App\Models\FundMerchant;
use App\Models\FundPayConfig;
use App\Models\FundOrderPayment;
use App\Models\FundTransfer;
use App\Models\FundTransferReason;
use App\Models\FundUserPurse;
use App\Models\FundUserType;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class SandboxController extends Controller
{
	public function test(BasicRequest $request){
//		$s = $request->all();		// 会多个 s 参数
//		$s = email_bug('ssss','复古');
//		echo FundAdmin::md5('123456');
//		$bank = new EBankSdk();
//		$bank = new EBank();
//		$sdk = new EBankSdk();
//		$bank->initPurse();
		/**
		 * 转账多个，使用二维数组区分，可提前加入二维数组，最后统一转账，避免事务无法统一回滚问题
		 * 系统用户不必指定uid
		 */
//		$transfer = [
//			EBankSdk::transferAdd(3020110301)->from(1)->to(1)->amount(10),
//			EBankSdk::transferAdd(4030110201)->from(1)->to(1)->amount(10),
//		];
//		$s = EBankSdk::transfer($transfer);
//		$s = EBankSdk::transfer($transfer,true);	// 异步转账，无返回值
		
		// 单一转账，一条条转更方便，需求不复杂时使用
//		$s = EBankSdk::transferAdd(3020110301)->from(1)->to(1)->amount(10)->transfer(true);
		/**
		 * payType 方法可以多次调用，实现组合支付
		 */
//		$s =  EBankSdk::unified(1)->orderNo('10001434343'.rand(10000,99999))->orderType('测试订单')->productName('测试商品')->payType('wallet_cash',100)->returnUrl('http://return.com')->notifyUrl('http://ebank.thinkms.com')->param('openid','o7U3Bs-62euOeUsidmOEotkmUMag')->param('auth_code','101234567891234567')->pay();
		
		
		// 查看钱包
//		$s = EBankSdk::wallet(1)->get();
//		$s = EBankSdk::wallet(1)->purse('cash')->get();
//		$s = EBankSdk::wallet(1)->first('cash');
		
		// 转账冲正，传递 fund_transfer 表 id
//		$s = EBankSdk::unTransfer(57);
		
		// 冻结、解冻
//		$s = EBankSdk::freeze(1,100,'cash');
//		$s = EBankSdk::unfreeze(6);
		
		// 提现
//		$s = EBankSdk::withdraw(1)->amount(18)->account('dfdf@qq.com')->purse('cash')->realname('晏勇')->bankName('中国公账')->bankNo('333333')->bank();
		// 嵌套事务测试
//		DB::transaction(function(){
//			(new EBank())->transfer(1,0,1,100,1020110301);
//			(new EBank())->transfer(1,0,1,100,1020110301);
//			DB::beginTransaction();
//			(new EBank())->transfer(1,0,1,100,1020110301);
//			DB::beginTransaction();
//			(new EBank())->transfer(1,0,1,100,1020110301);
//			abort(500);
//		});
		dump($s);
	}
	
	
	public function index(BasicRequest $request){
		$merchant = FundMerchant::where(['status'=>1])->pluck('name','appid');
		return view('sandbox',['merchant'=>$merchant]);
	}
	
	public function submit(BasicRequest $request){
		$post = $request->all();
		$keys = $post['key'];
		$value = $post['value'];
		$curl_data = [];
		unset($post['key'],$post['value']);
		foreach($keys as $k=>$v){
			if(empty($v)) continue;
			if(is_array($v)){
				$v2 = array_shift($value[$k]);
				$post[array_keys($v)[0]][0][array_keys($v2)[0]] = array_shift($v2);
			}else{
				$post[$v] = $value[$k];
			}
		}
		$data = $curl_data = $post;
		unset($data['ebank_sign'],$data['url'],$curl_data['ebank_sign'],$curl_data['url']);
		ksort($data);
		$data2 = $data;
		// 查询API商户的秘钥
		if($secret = FundMerchant::where(['appid'=>$post['ebank_appid']])->value('secret')){
			$data2['ebank_secret'] = $secret;
		}
		
		$sign = $post['ebank_sign'] = strtolower(md5(http_build_query($data2)));	// sign 算法
		$curl_data['ebank_sign'] = $sign;
		$this->script_log('生成签名：'.$sign);
		// 设置sign
		$this->script_sign($sign);
		echo '<strong>发送的参数：</strong>',"\n";
		print_r($post);
		// 执行请求
		$sJson = $this->curlpost($curl_data);
		echo "\n",'<strong>返回源JSON：</strong>',"\n";
		print_r($sJson);
		
		$json = json_decode($sJson,true);
		echo "\n",'<br /><strong>格式化JSON：</strong>',"\n";
		print_r($json);
		
	}
	
	private function script_log($log){
		echo '<script type="text/javascript">log("'.$log.'");</script>';
	}
	
	private function script_sign($sign){
		echo '<script type="text/javascript">sign("'.$sign.'");</script>';
	}
	
	public function curlpost($array){
//		$post = http_build_query($array);
//		$_cmd = $array['_cmd'];
//		$controller = ucfirst(strstr($_cmd, '_', true));
//		$action = substr(strstr($_cmd, '_'), 1);
//		return redirect()->action($controller . 'Controller@' . $action, $array);
		$s = curl_post(url('api/'.request('url')),$array);
		return $s;


//		$post = http_build_query($array);
//		$ch = curl_init();
//
//		$url = $_SERVER['HTTP_HOST'];
//		curl_setopt($ch, CURLOPT_URL, $url);
////		curl_setopt($ch, CURLOPT_PORT, '5000');
//		curl_setopt($ch, CURLOPT_POST, 1);
//		curl_setopt($ch, CURLOPT_HEADER, 0);
//		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//		curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
//		$data = curl_exec($ch);
//		curl_close($ch);
//		return $data;
	}
}
