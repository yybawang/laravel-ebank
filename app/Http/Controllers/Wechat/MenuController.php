<?php
namespace App\Http\Controllers\Wechat;

use App\Http\Requests\BasicRequest;

class MenuController extends CommonController {
	
	/**
	 * 获取当前菜单
	 * @param BasicRequest $request
	 * @return array
	 */
	public function get(BasicRequest $request){
		$app = app('wechat.official_account');
		$list = $app->menu->list();
		return json_success('OK',$list);
	}
	
	/**
	 * 重新设置菜单
	 * @param BasicRequest $request
	 * @return array
	 */
	public function set(BasicRequest $request){
		$app = app('wechat.official_account');
		$buttons = [
			[
				"type" => "view",
				"name" => "百度",
				"url"  => "http://www.baidu.com/"
			],
			[
				"name"       => "更多",
				"sub_button" => [
					[
						"type" => "view",
						"name" => "搜索",
						"url"  => "http://www.soso.com/"
					],
					[
						"type" => "view",
						"name" => "视频",
						"url"  => "http://v.qq.com/"
					],
					[
						"type" => "click",
						"name" => "赞一下我们",
						"key" => "V1001_GOOD"
					],
				],
			],
		];
		$app->menu->create($buttons);
		return json_success('OK');
	}
}