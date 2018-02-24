<?php
namespace App\Libraries;

class Jifudf {
	private $url = 'https://pays.jifuzf.com/payment-api-web';
	
	public function unified(){
		$url = $this->url.'/pay/unifiedOrderForMb';
		$param = [
			'tradeAmount'		=> '100',
			'bankName'			=> '中国工商银行',
			'bankAccountNo'		=> '6212263602058162728',
			'bankAccountName'	=> '晏勇',
			'outTradeNo'		=> '100001',
		];
		$result = $this->_post($url,$param);
		dd($result);
	}
	
	private function _sign($param){
		$param2 = [
			'signType'			=> 'md5',
			'distributorId'		=> '37540188000056773',
			'organizationCode'	=> '50000126',
			'version'			=> 'V1.0.0',
			'timestamp'			=> time().'000',
			'nonceStr'			=> rand('tdzd'.rand(10,99)),
		];
		$param = array_merge($param,$param2);
		unset($param['sign']);
		ksort($param);
		$param2 = [];
		foreach($param as $k => $v){
			$param2[] = $k . '=' . $v;
		}
		$param2['private_key'] = '81476FC78DBA3F5D6AE35645B7144A62';
		$param['sign'] = md5(implode('&',$param2));
		return $param;
	}
	
	private function _post($url,$param){
		$param = $this->_sign($param);
		$result = curl_post($url,[],['json'=>$param]);
		return $result;
	}
}