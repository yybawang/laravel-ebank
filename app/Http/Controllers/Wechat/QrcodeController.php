<?php
namespace App\Http\Controllers\Wechat;

use App\Http\Requests\BasicRequest;
use Illuminate\Support\Facades\Storage;

/**
 * 微信生成带参数二维码，此二维码微信扫一扫之后会跳到公众号的关注页，关注后会推送关注事件给服务器
 * Class QrcodeController
 * @package App\Http\Controllers\Wechat
 */
class QrcodeController extends CommonController {
	
	/**
	 * 获取永久二维码，一个公众号最多生成10万个
	 * @param BasicRequest $request
	 * @return array
	 */
	public function forever(BasicRequest $request){
		request()->validate([
			'key'	=> 'required'
		]);
		// 指定一个二维码参数，生成带参数二维码
		$key = $request->input('key');
		$app = app('wechat.official_account');
		$result = $app->qrcode->forever($key);
		$url = $app->qrcode->url($result['ticket']);
		
		$content = file_get_contents($url);
		$file_name = 'qrcode/qr_forever'.$key.'.png';
		Storage::put($file_name, $content);
		$url = Storage::url($file_name);
		return json_success('OK',['url'=>$url]);
	}
	
	/**
	 * 生成临时二维码，最大期限1个月
	 * @param BasicRequest $request
	 * @return array
	 */
	public function temporary(BasicRequest $request){
		request()->validate([
			'key'	=> 'required'
		]);
		// 指定一个二维码参数，生成带参数二维码
		$key = $request->input('key');
		$seconds = $request->input('seconds');
		$app = app('wechat.official_account');
		$result = $app->qrcode->temporary($key, $seconds ?? 3600 * 24 * 30);		// 单位秒，最大一个月
		$url = $app->qrcode->url($result['ticket']);
		
		$content = file_get_contents($url);
		$file_name = 'qrcode/qr_temporary_'.$key.'.png';
		Storage::put($file_name, $content);
		$url = Storage::url($file_name);
		return json_success('OK',['url'=>$url]);
	}
}