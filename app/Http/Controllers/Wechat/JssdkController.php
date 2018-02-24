<?php
namespace App\Http\Controllers\Wechat;

use App\Http\Requests\BasicRequest;

/**
 * 微信公众号jssdk
 * Class JssdkController
 * @package App\Http\Controllers\Wechat
 */
class JssdkController extends CommonController {
	
	/**
	 * jssdk 算签，前端拿到之后注入微信浏览器
	 * @param BasicRequest $request
	 * @return array
	 */
	public function sign(BasicRequest $request){
		$app = app('wechat.official_account');
		$api = [
			'onMenuShareTimeline',
			'onMenuShareAppMessage',
			'onMenuShareQQ',
			'onMenuShareWeibo',
			'onMenuShareQZone',
			'startRecord',
			'stopRecord',
			'onVoiceRecordEnd',
			'playVoice',
			'pauseVoice',
			'stopVoice',
			'onVoicePlayEnd',
			'uploadVoice',
			'downloadVoice',
			'chooseImage',
			'previewImage',
			'uploadImage',
			'downloadImage',
			'translateVoice',
			'getNetworkType',
			'openLocation',
			'getLocation',
			'hideOptionMenu',
			'showOptionMenu',
			'hideMenuItems',
			'showMenuItems',
			'hideAllNonBaseMenuItem',
			'showAllNonBaseMenuItem',
			'closeWindow',
			'scanQRCode',
			'chooseWXPay',
			'openProductSpecificView',
			'addCard',
			'chooseCard',
			'openCard'
		];
		$sign = $app->jssdk->buildConfig($api, $debug = false, $beta = false, $json = false);
		return json_success('OK',$sign);
	}
}