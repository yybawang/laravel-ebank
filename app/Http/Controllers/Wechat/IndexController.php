<?php
namespace App\Http\Controllers\Wechat;
use App\Http\Requests\BasicRequest;


/**
 * 微信控制器
 * Class IndexController
 * @package App\Http\Controllers\Wechat
 */
class IndexController extends CommonController {

	public function index(BasicRequest $request){
		$app = app('wechat.official_account');
		
		$app->server->push(function($message){
			return $this->message($message);
		});
		
		return $app->server->serve();
	}
	
	/**
	 * 消息/事件反馈，返回的字符串直接推送给用户
	 * @param $message
	 * @return mixed|string
	 */
	private function message($message){
		$return = '';
		/**
		 * $message['ToUserName']    接收方帐号（该公众号 ID）
		 * $message['FromUserName']  发送方帐号（OpenID, 代表用户的唯一标识）
		 * $message['CreateTime']    消息创建时间（时间戳）
		 * $message['MsgId']         消息 ID（64位整型）
		 * $message['Content']       文字消息内容
		 * $message['MsgType']       消息/事件类型
		 */
		switch ($message['MsgType']) {
			case 'event':
				$event = $message['Event'];		// unsubscribe 取关，subscribe 关注
				$event_key = $message['EventKey'];		// 如果是关注就会有自定义参数，自行解析
				$key = substr($event_key,8);
				if($event == 'subscribe' && $key){
					$return = $this->subscribe($message['FromUserName'],$key);
				}else{
//					$return = '收到事件消息';
				}
				break;
			case 'text':
//				$return = '收到文字消息';
				break;
			case 'image':
//				$return = '收到图片消息';
				break;
			case 'voice':
//				$return = '收到语音消息';
				break;
			case 'video':
//				$return = '收到视频消息';
				break;
			case 'location':
//				$return = '收到坐标消息';
				break;
			case 'link':
//				$return = '收到链接消息';
				break;
			default:
//				$return = '收到其它消息';
				break;
		}
		return $return;
	}
	
	/**
	 * 获取到关注事件，执行自定义操作
	 * @param $from_openid
	 * @param $key
	 * @return mixed
	 */
	private function subscribe($from_openid,$key){
		// 入库等操作，待编写
		
		
		$content = <<<EOT
欢迎关注[公司名]
回车换行
可使用[亲亲]中括号包起来发送emoji表情
EOT;

		return $content;
	}
}