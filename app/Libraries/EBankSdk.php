<?php
namespace App\Libraries;


/**
 * 用户钱包接口类，涉及到查询余额，转账操作
 * 此为转账业务SDK封装，可复制到 ThinkPhp/CI等框架使用，纯原生代码，php 版本需 >= 7.1
 * 
 * Class EBankSdk
 * @author yybawang
 * @package App\Libraries
 */
class EBankSdk {
	
	
	public $transfer_param = [];	// 转账参数
	public $unified_param = [];		// 下单参数
	public $withdraw_param = [];	// 提现参数

	protected $appid = '';
	protected $secret = '';
	protected $url = '';
	
	public function __construct()
	{
		$this->appid = 'ebank10000';			// 必须配置，默认为中央系统本身，后台->接口商户管理
		$this->secret = '10000';				// 必须配置，默认为中央系统本身，接口秘钥
		$this->url = config('app.url').'/api/';	// 必须配置，ebank 部署地址，带 http:// 全地址，以 api/ 结尾
	}
	
	
	/*******************************************************************************************
	 *
	 *                                    用户钱包                                               *
	 *
	 *******************************************************************************************/
	
	/**
	 * 获取用户钱包列表
	 * 示例代码：
	 * 		$wallet = EBankSdk::wallet(1)->get();
	 * @param int $user_id
	 * @return Wallet
	 */
	public static function wallet(int $user_id){
		$Wallet = new Wallet($user_id);
		return $Wallet;
	}
	/**
	 * @param int $uid
	 * @param string $purse 如果传递则只返回这一个钱包，默认全部
	 * @param string $type 身份类型，对应 fund_user_type 表 alias 值
	 * @return array
	 */
	public function userPurse(int $uid, string $purse = '',string $type = 'user'){
		$url = $this->url . 'bank/user_wallet';
		$param = [
			'user_id'	=> $uid,
			'type'		=> $type,
		];
		$data = $this->_post($url,$param);
		if($purse){
			return $data[$purse];
		}
		return $data;
	}
	
	
	
	/*******************************************************************************************
	 *
	 *                                    用户转账                                               *
	 *
	 *******************************************************************************************/
	
	public static function transferAdd(int $reason){
		$transfer = new Transfer($reason);
		return $transfer;
	}
	
	
	/**
	 * 添加参数后开始转账，有时业务需求复杂，一条转账不能满足需求，所以这里做成多条一起转，避免数据错误后事务难回滚问题
	 * 示例代码：
	 * 		$transfer_ids = EBankSdk::transfer([
				EBankSdk::transferAdd(402030303)->from(1)->to(1)->amount(1100)->detail(''),
				EBankSdk::transferAdd(202030303)->from(1)->to(1)->amount(300)->detail(''),
			]);
	 * @param array $transfer_objs
	 * @param mixed $async 是否异步操作，进入队列处理，不用等待结果，返回值为空数组
	 * @return array 返回转账ID数组，无论一条还是多条，按请求顺序排序
	 */
	public static function transfer(array $transfer_objs,$async = false){
		$EBankSdk = new EBankSdk();
		$transfer_ids = $EBankSdk->_transfer($transfer_objs, $async);
		return $transfer_ids;
	}
	
	/**
	 * 单条转账操作，用户不复杂的简单转账
	 * 示例代码：
	 * 		EBankSdk::transferAdd(3020110301)->from(1)->to(1)->amount(10)->transfer();
	 * @param Transfer $transfer
	 * @param bool $async
	 * @return int|bool
	 */
	public function transferSingle(Transfer $transfer,$async = false){
		$transfer_ids = $this->_transfer([$transfer], $async);
		return $async ? true : array_shift($transfer_ids);
	}
	
	
	private function _transfer(array $transfer_objs,$async = false){
		$url = $this->url . 'bank/transfer';
		$alias = [];
		foreach($transfer_objs as $obj){
			$param = $obj->param;
			// 过滤金额，金额小于0，就不能调转账，金额错误
//			if($param['amount'] > 0){
				array_push($alias,$param);
//			}
		}
		
		$param = [
			'param'	=> $alias,
			'async'	=> $async ? 1 : 0,
		];
		$result = $this->_post($url,$param);
		$transfer_ids = $result['transfer_ids'];
		return $transfer_ids;
	}
	
	/**
	 * 流水冲正接口
	 * 示例代码：
	 * 		EBankSdk::unTransfer(59);
	 * @param int $transfer_id
	 * @param string $remarks
	 * @return int
	 */
	public static function unTransfer(int $transfer_id,$remarks = ''){
		$EBankSdk = new EBankSdk();
		$url = $EBankSdk->url . 'bank/untransfer';
		$param = [
			'transfer_id'	=> $transfer_id,
			'remarks'		=> $remarks,
		];
		
		$result = $EBankSdk->_post($url,$param);
		return $result['transfer_id'];
	}
	
	
	/*******************************************************************************************
	 *
	 *                                    资金冻结                                               *
	 *
	 *******************************************************************************************/
	
	/**
	 * 冻结用户钱包金额
	 * 示例代码：
	 * 		EBankSdk::freeze(1,100,'cash');
	 * @param int $uid
	 * @param int $amount
	 * @param string $purse_type
	 * @param string $user_type
	 * @return int
	 */
	public static function freeze(int $uid,int $amount,string $purse_type,string $user_type = 'user'){
		$EBankSdk = new EBankSdk();
		$url = $EBankSdk->url . 'bank/freeze';
		$purse_id = $EBankSdk->userPurse($uid,$purse_type,$user_type)['id'];
		$param = [
			'purse_id'	=> $purse_id,
			'amount'	=> $amount,
		];
		
		$data = $EBankSdk->_post($url,$param);
		return $data['freeze_id'];
	}
	
	/**
	 * 解冻用户钱包金额
	 * 示例代码：
	 * 		EBankSdk::unfreeze(6);
	 * @param $freeze_id
	 * @return mixed
	 */
	public static function unfreeze(int $freeze_id){
		$EBankSdk = new EBankSdk();
		$url = $EBankSdk->url . 'bank/unfreeze';
		$param = [
			'freeze_id'	=> $freeze_id,
		];
		$data = $EBankSdk->_post($url,$param);
		// 解冻返回原冻结ID
		return $data['freeze_id'];
	}
	
	
	
	
	
	
	
	
	/*******************************************************************************************
	*
	*                                    统一下单                                               *
	*
	*******************************************************************************************/
	
	public static function unified(int $user_id){
		$unified = new Unified($user_id);
		return $unified;
	} 
	
	/**
	 * 得到参数后最终下单
	 * 示例代码：
	 * 		$unified_param = EBankSdk::unified(1)->orderNo('10001434343'.rand(10000,99999))->orderType('测试订单')->productName('测试商品')->payType('wallet_cash',100)->returnUrl('http://return.com')->notifyUrl('http://ebank.thinkms.com')->param('openid','o7U3Bs-62euOeUsidmOEotkmUMag')->param('auth_code','101234567891234567')->pay();
	 * @param array $param
	 * @return mixed
	 */
	public function pay(array $param){
		$url = $this->url . 'order/unified';
		$data = $this->_post($url,$param);
		return $data;
	}
	
	
	
	/*******************************************************************************************
	 *
	 *                                    用户提现                                               *
	 *
	 *******************************************************************************************/
	
	public static function withdraw(int $user_id){
		$withdraw = new Withdraw($user_id);
		return $withdraw;
	}
	public function bank(array $param){
		$url = $this->url . 'withdraw/bank';
		$data = $this->_post($url,$param);
		return $data;
	}
	public function alipay(array $param){
		$url = $this->url . 'withdraw/alipay';
		$data = $this->_post($url,$param);
		return $data;
	}
	public function wechat(array $param){
		$url = $this->url . 'withdraw/wechat';
		$data = $this->_post($url,$param);
		return $data;
	}
	
	
	/**
	 * 加密算签，返回签名的字符串
	 * @param array $param
	 * @return string
	 */
	private function _sign(array $param){
		unset($param['ebank_sign']);
		ksort($param);
		$param2 = $param;
		$param2['ebank_secret'] = $this->secret;
		$param_string = http_build_query($param2);
		$sign = strtolower(md5($param_string));
		return $sign;
	}
	
	/**
	 * 商户算签，外部方便使用，如支付回调算签
	 * @param $param
	 * @return bool
	 */
	public function check_sign(array $param){
		$param['ebank_appid'] = $this->appid;
		$sign = $param['ebank_sign'];
		$sign_mine = $this->_sign($param);
		return strcmp($sign,$sign_mine) === 0 ? true : false;
	}
	
	private function _post(string $url,array $param){
		$param['ebank_appid'] = $this->appid;
		$param['ebank_sign'] = $this->_sign($param);
		$decode = $this->_curl_post($url,$param);
		if($decode['status'] != '1'){
			$this->_throw($decode['message']);
		}else{
			return $decode['data'];
		}
	}
	
	private function _curl_post($url,$param){
		$ch = curl_init(); //初始化curl
		curl_setopt($ch, CURLOPT_URL, $url);//设置链接
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);//设置是否返回信息
		curl_setopt($ch, CURLOPT_POST, 1);//设置为POST方式
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
//		curl_setopt($ch, CURLOPT_HTTPHEADER,['X-REQUESTED-WITH: XMLHTTPREQUEST']);		// 模拟 Ajax
		if(is_string($param)){
			curl_setopt($ch, CURLOPT_POSTFIELDS, $param);//POST数据
		}else{
			curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($param));//POST数据
		}
		$response = curl_exec($ch);//接收返回信息
		if(curl_errno($ch)){	//出错则显示错误信息
			$this->_throw(curl_error($ch) ?? 'curl 异常，未成功请求');
		}
		curl_close($ch); //关闭curl链接
		return json_decode($response,true);
	}
	
	/**
	 * @param null|string $message
	 * @throws \Exception
	 */
	private function _throw($message = ''){
		throw new \Exception($message ?: '接口错误，未返回json，未知异常',500);
	}
}

/**
 * 私有转账类
 * Class Transfer
 * @package App\Libraries
 */
class Transfer {
	public $param = [];
	
	// 设置转账行为标识 reason
	public function __construct(int $reason)
	{
		$this->param['reason'] = $reason;
	}
	// 设置出账用户ID
	public function from(int $uid){
		$this->param['from_user_id'] = $uid;
		return $this;
	}
	// 设置出账用户ID
	public function to(int $uid){
		$this->param['to_user_id'] = $uid;
		return $this;
	}
	// 设置转账金额
	public function amount(int $amount){
		$this->param['amount'] = $amount;
		return $this;
	}
	// 设置转账详情
	public function detail(string $detail){
		$this->param['detail'] = $detail;
		return $this;
	}
	// 设置转账备注
	public function remarks(string $remarks){
		$this->param['remarks'] = $remarks;
		return $this;
	}
	
	// 直接进行转账，成功后参数充值为空
	public function transfer($async = false){
		$EBankSdk = new EBankSdk();
		$transfer_id = $EBankSdk->transferSingle($this,$async);
		$this->param = [];
		return $transfer_id;
	}
}

/**
 * 私有下单类
 * Class Unified
 * @package App\Libraries
 */
class Unified {
	private $param = [];
	
	public function __construct(string $user_id)
	{
		$this->param['user_id'] = $user_id;
	}
	
	public function orderNo(string $order_no){
		$this->param['order_no'] = $order_no;
		return $this;
	}
	public function orderType(string $order_type){
		$this->param['order_type'] = $order_type;
		return $this;
	}
	public function productName(string $product_name){
		$this->param['product_name'] = $product_name;
		return $this;
	}
	public function payType(string $pay_type,int $amount){
		if($amount > 0){
			$this->param['pay_type_group'][$pay_type] = $amount;
		}
		return $this;
	}
	public function returnUrl(string $return_url){
		$this->param['return_url'] = $return_url;
		return $this;
	}
	public function notifyUrl(string $notify_url){
		$this->param['notify_url'] = $notify_url;
		return $this;
	}
	
	/**
	 * 扩展其他参数
	 */
	public function param(string $key,string $value){
		$this->param[$key] = $value;
		return $this;
	}
	
	public function pay(){
		$EBankSdk = new EBankSdk();
		return $EBankSdk->pay($this->param);
	}
}

/**
 * 私有提现类
 * Class Withdraw
 * @package App\Libraries
 */
class Withdraw {
	private $param = [];
	
	// 设置提现用户ID
	public function __construct(int $user_id)
	{
		$this->param['user_id'] = $user_id;
	}
	
	// 设置体现金额
	public function amount(int $amount){
		$this->param['amount'] = $amount;
		return $this;
	}
	// 设置提现手续费，不填为0
	public function fee(int $fee = 0){
		$this->param['fee'] = $fee;
		return $this;
	}
	// 设置出账钱包，purse_type 表的 alias 值
	public function purse(string $purse){
		$this->param['purse'] = $purse;
		return $this;
	}
	// 设置真实姓名
	public function realname(string $realname){
		$this->param['realname'] = $realname;
		return $this;
	}
	// 设置银行卡开户行：中国工商银行
	public function bankName(string $bank_name){
		$this->param['bank_name'] = $bank_name;
		return $this;
	}
	// 设置银行卡号
	public function bankNo(string $bank_no){
		$this->param['bank_no'] = $bank_no;
		return $this;
	}
	// 设置支付宝/微信账号
	public function account(string $account){
		$this->param['account'] = $account;
		return $this;
	}
	
	public function bank(){
		$EBankSdk = new EBankSdk();
		return $EBankSdk->bank($this->param);
	}
	public function alipay(){
		$EBankSdk = new EBankSdk();
		return $EBankSdk->alipay($this->param);
	}
	public function wechat(){
		$EBankSdk = new EBankSdk();
		return $EBankSdk->wechat($this->param);
	}
}

/**
 * 私有钱包获取类
 * Class Wallet
 * @package App\Libraries
 */
class Wallet {
	// 用户ID，非用户类传0
	private $user_id = 0;
	// 某身份类型 alias
	private $type = 'user';
	// 某个钱包 alias，不设置为所有钱包
	private $purse = '';
	
	public function __construct(int $user_id = 0) {
		$this->user_id = $user_id;
		return $this;
	}
	
	public function purse(string $purse){
		$this->purse = $purse;
		return $this;
	}
	
	public function type(string $type){
		$this->type = $type;
		return $this;
	}
	
	// 返回所有数据，也可指定 purse 返回某一条数据
	public function get(){
		$EBankSdk = new EBankSdk();
		return $EBankSdk->userPurse($this->user_id, $this->purse, $this->type);
	}
	
	// 返回指定一条数据
	public function first(string $purse = ''){
		if($purse){
			$this->purse($purse);
		}
		$EBankSdk = new EBankSdk();
		return $EBankSdk->userPurse($this->user_id, $this->purse, $this->type);
	}
}