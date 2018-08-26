<?php
/**
 * Created by PhpStorm.
 * User: yybaw
 * Date: 2018-08-26
 * Time: 9:13 PM
 */

namespace App\Libraries\Bank;


class PayFieldsConfig
{
	/**
	 * 配置比对，如果配置有更新，就自动追加，删除，返回比对后的结果
	 * @param array $config_old
	 * @return array
	 */
	public function mergeConfig(array $config_old = []){
		$config = $this->getConfig();
		$sort = function($a, $b){
			return ($a < $b) ? -1 : 1;
		};
		// 在最新的配置中查找老数据，如果未找到老数据，则为新配置，需追加
		foreach($config as $k => $v){
			if(!array_key_exists($k,$config_old)){
				$config_old[$k] = $v;
			}
			$i = 0;
			foreach($v as $k2 => $v2){
				$v2['sort'] = $i;
				if(!array_key_exists($k2,$config_old[$k])){
					$config_old[$k][$k2] = $v2;
				}
				$i++;
			}
//			usort($config_old[$k],$sort);
//			array_map(function($v){
//				dd($v);
//			},$config_old[$k]);
		}
		// 在老的配置中查找新数据，如果未找到新数据，则为删除配置，需删除
		foreach($config_old as $k => $v){
			if(!array_key_exists($k,$config)){
				unset($config_old[$k]);
				continue;
			}
			foreach($v as $k2 => $v2){
				if(!array_key_exists($k2,$config[$k])){
					unset($config_old[$k][$k2]);
				}
			}
		}
		return $config_old;
	}
	
	/**
	 * 格式化商户的配置为支付标准格式
	 * @param array $config_merchant
	 * @return array
	 */
	public function parseConfig(array $config_merchant = []){
		$config = $this->mergeConfig($config_merchant);
		$config_parse = [];
		foreach($config as $k => $v){
			foreach($v as $k2 => $v2){
				$config_parse[$k][$v2['field']] = $v2['value'];
			}
		}
		return $config_parse;
	}
	
	/**
	 * 支付宝、微信、三方支付对接字段配置
	 * 已集成 laravel-pay 的支付宝、微信配置，其他支付渠道需扩展此配置方便后台编辑
	 */
	public function getConfig(){
		$config = [
			'alipay'	=> [
				'app_id' => [
					'description'	=> '支付宝分配的 appid',
					'value'			=> '',
				],
				'app_id2' => [
					'description'	=> '支付宝分配的 appid',
					'value'			=> '',
				],
				'ali_public_key' => [
					'description'	=> '阿里公共密钥，验证签名时使用，一行字符串，不包括 "--- PUBLIC KEY ---" 等前后内容',
					'value'			=> '',
				],
				'private_key' => [
					'description'	=> '自己的私钥，签名时使用，一行字符串，不包括 "--- PRIMARY KEY ---" 等前后内容',
					'value'			=> '',
				],
				'mode' => [
					'description'	=> '可选项，设置为 dev，将进入沙箱模式',
					'value'			=> '',
				],
				'return_url' => [
					'description'	=> '支付成功后同步通知地址，固定参数，此项目会二次分发',
					'value'			=> url('api/notify/alipay'),
					'disabled'		=> true,
				],
				'notify_url' => [
					'description'	=> '支付成功后异步通知地址，固定参数，此项目会二次分发',
					'value'			=> url('api/return/alipay'),
					'disabled'		=> true,
				],
			],
			'wechat'	=> [
				'app_id' => [
					'description'	=> '公众号 APPID',
					'value'			=> '',
				],
				'miniapp_id' => [
					'description'	=> '小程序 APPID',
					'value'			=> '',
				],
				'appid' => [
					'description'	=> 'APP 支付的 appid',
					'value'			=> '',
				],
				'mch_id' => [
					'description'	=> '微信支付分配的微信商户号',
					'value'			=> '',
				],
				'key' => [
					'description'	=> '微信支付分配的签名秘钥',
					'value'			=> '',
				],
				'cert_client' => [
					'description'	=> '客户端证书路径，退款、红包等需要用到。请填写绝对路径，linux 请确保权限问题。pem 格式。',
					'value'			=> '',
				],
				'cert_key' => [
					'description'	=> '客户端秘钥路径，退款、红包等需要用到。请填写绝对路径，linux 请确保权限问题。pem 格式。',
					'value'			=> '',
				],
				'mode' => [
					'description'	=> '可选项，设置为 dev，将进入沙箱模式',
					'value'			=> '',
				],
				'notify_url' => [
					'description'	=> '微信支付异步通知地址，固定参数，此项目会二次分发',
					'value'			=> url('api/notify/wechat'),
					'disabled'		=> true,
				],
			],
			// 其他渠道可修改此处
//			'tonglian'	=> [
//				
//			],
			// 其他支付方式，配置方式同上，但对接代码肯定得自己开发哦，在 App\Libraries\Bank\OrderPayments 里开发
			'other'	=> [
				'示例配置' => [
					'description'	=> '其他支付渠道需自己在 App\Libraries\Bank\OrderPayments 里开发',
					'value'			=> '需提前配置在 ' . __CLASS__ . '()->config() 方法中',
					'disabled'		=> true,
				],
			],
		];
		return $config;
	}
}