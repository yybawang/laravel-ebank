<?php

namespace App\Http\Controllers;

use App\Exceptions\ApiException;
use App\Http\Controllers\Api\NotifyController;
use App\Libraries\Bank\EBank;
use App\Libraries\BankSdk;
use App\Http\Requests\BasicRequest;
use App\Jobs\Transfer;
use App\Libraries\ExportCsv;
use App\Mail\Bug;
use App\Models\FundAdmin;
use App\Models\FundFreeze;
use App\Models\FundMerchant;
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
//		bug_email('ssss','复古');
//		echo FundAdmin::md5('123456');
//		$bank = new BankSdk();
		$bank = new EBank();
//		$bank->init();
//		$s = $bank->userPurseDetail(4);
//		$s = $bank->unfreeze(1);
		/**
		 * 转账多个，使用二维数组区分，可提前加入二维数组，最后统一转账，自动绑定先后(父子)关系
		 * 系统用户不必指定uid
		 */
		$transfer = [
			// 充值测试
			BankSdk::transfer_add(402030303)->from(1)->to(1)->amount(50000),
		];
//		$s = (new BankSdk())->transfer($transfer);
//		$s = (new BankSdk())->async()->transfer($transfer);
//		$s = (new Bank())->systemCashToUserCash(0,1,100,10001);
		/**
		 * payType 方法可以多次调用，实现组合支付
		 */
//		$s =  BankSdk::unified(1)->orderNo('10001434343'.rand(10000,99999))->orderType('测试订单')->productName('测试商品')->payType('wallet_cash',100)->returnUrl('http://return.com')->notifyUrl('http://ebank.thinkms.com')->param('openid','o7U3Bs-62euOeUsidmOEotkmUMag')->param('auth_code','101234567891234567')->pay();
		
//		$export = new ExportCsv();
//		$s = $export->name('导出流水测试')->data(FundTransfer::all())->save();
		
//		$s = BankSdk::withdraw(1)->amount(18)->account('dfdf@qq.com')->purse('cash')->realname('晏勇')->bankName('中国公账')->bankNo('333333')->bank();
		// 事务测试
//		DB::transaction(function(){
//			(new Bank())->transfer(0,0,100,20001);
//			DB::beginTransaction();
//			(new Bank())->transfer(0,0,100,20001);
//			DB::beginTransaction();
//			(new Bank())->transfer(0,0,100,20001);
//			abort(500);
//		});
//		$s  = [
//			'val'	=> null,
//			'keyf$3d'=> 'http://sss.com',
//			'key**'	=> 'lkjkfd& df ddd&',
//			'tow'	=> ['d'=>11,'s'=>222],
//		];
//		DB::listen(function($query){
//			dump($query->sql,$query->bindings);
//		});
//		$s = http_build_query($s);
//		$s = FundMerchant::where(['id' => 1])->first(['appid','secret']);
//		$s = FundUserPurse::where(['id'=>2])->update(['balance'=>99999999999901]);
//		$s = DB::update('update fund_user_purse set balance = 99999999999900 where id = 2');
//		$s = FundUserPurse::where(['id'=>2])->update(['balance'=>99999999999900]);
//		$s = curl_post(url('api/sms/content'),['mobile'=>'17099912460','content'=>'发送短信。。。']);
//		curl_post('http://sdfd1204545.com',['df'=>333]);
		dump($s);
	}
	
	
	public function index(BasicRequest $request){
		$merchant = FundMerchant::where(['status'=>1])->pluck('name','appid');
		return view('api.sandbox.index',['merchant'=>$merchant]);
	}
	
	public function submit(BasicRequest $request){
		$post = $request->all();
		$keys = $post['key'];
		$value = $post['value'];
		$curl_data = [];
		unset($post['key'],$post['value']);
		foreach($keys as $k=>$v){
			if(empty($v)) continue;
			$post[$v] = $value[$k];
		}
		$data = $curl_data = $post;
		unset($data['sign'],$data['url'],$curl_data['sign'],$curl_data['url']);
		ksort($data);
		$data2 = $data;
		// 查询API商户的秘钥
		if($secret = FundMerchant::where(['appid'=>$post['appid']])->value('secret')){
			$data2['secret'] = $secret;
		}
		
		$sign = $post['sign'] = strtolower(md5(http_build_query($data2)));	// sign 算法
		$curl_data['sign'] = $sign;
		$this->script_log('生成sign：'.$sign);
		// 设置sign
		$this->script_sign($sign);
		echo '发送的参数：';
		print_r($post);
		// 执行请求
		$sJson = $this->curlpost($curl_data);
		echo "\n".'返回源JSON：'."\n";
		print_r($sJson);
		
		$json = json_decode($sJson,true);
		echo "\n".'格式化JSON：'."\n";
		print_r($json);
		
		// 设置 token
		if($post['_cmd'] == 'user_login') $this->script_token($json['data']['ticket']);
	}
	
	private function script_log($log){
		$date = date('Y-m-d H:i:s');
		echo '<script type="text/javascript">log("'.$log.'----'.$date.'");</script>';
	}
	
	private function script_sign($sign){
		echo '<script type="text/javascript">sign("'.$sign.'");</script>';
	}
	private function script_token($ticket){
		echo '<script type="text/javascript">ticket("'.$ticket.'");</script>';
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
