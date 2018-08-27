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
		// 在老的配置中查找出有值的，存到新配置里，可兼容新配置改动
		foreach($config_old as $k => $v){
			foreach($v as $k2 => $v2){
				data_set($config,$k.'.'.$k2.'.value',$v2['value']);
				data_set($config,$k.'.'.$k2.'.disabled',$v2['disabled'] ?? false);
			}
		}
		return $config;
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
		$config = config('pay');
		return $config;
	}
}