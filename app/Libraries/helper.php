<?php

/******************************************************** 后台使用部分 **************************************************/

/**
 * @param null $field	// 未指定获取全部
 * @return mixed
 * 获取后台登录用户对象，
 */
function admin_user($field = null){
	$uid = session('admin_uid');
	$user = \App\Models\FundAdmin::find($uid);
	return $user && $field ? $user->$field : $user;
}

/**
 * 初始化后台菜单
 */
function init_menu(){
	$menus = [];
	collect(app('routes')->getRoutes())->each(function($v,$k) use (&$menus){
		$name = $v->action['as'];
		if(stripos($name,'admin.') !== false){
			$explode = explode('.',$name);
			if($explode[2] == 'menu'){
				$menus[$explode[1]][$explode[3]] = str_replace('admin','',$v->uri);
			}
		}
	});
	return $menus;
}
























/******************************************************** 后台使用部分 **************************************************/


/**
 * @param $url
 * @param $post_data
 * @param array $options
 * @return bool|string
 */
function curl_post($url,$post_data,$options = []){
	$post_header = [
		'form_params'	=> $post_data,
		'verify'		=> __DIR__.'/cainfo.pem',
//		'debug'			=> true,
	];
	$post_header = array_merge($post_header,$options);
	$client = new GuzzleHttp\Client(['timeout' => 30]);
	$response = $client->post($url,$post_header);
	if($response->getStatusCode() == 200){
		return $response->getBody()->getContents();
	}else{
		return false;
	}
}

/**
 * @param $url
 * @return bool|string
 */
function curl_get($url){
	$client = new GuzzleHttp\Client(['timeout' => 30]);
	$response = $client->get($url);
	if($response->getStatusCode() == 200){
		return $response->getBody()->getContents();
	}else{
		return false;
	}
}






/******************************************************** 接口通用返回部分 **************************************************/

/**
 * @param string $data
 * 清楚数据内的null
 */
function clear_null(&$data = ''){
//	if($data instanceof stdClass){
	$data = json_decode(json_encode($data),true);
//	}
	if($data === null || $data === false){
		$data = '';
	}
	if(is_array($data) && !empty($data)){
		foreach($data as &$v){
			if($v === null || $v === false){
				$v = '';
			}else if(is_array($v)){
				clear_null($v);
			}else if(is_string($v) && stripos($v,'.') === 0){
//				$v = '0'.$v;
			}
		}
	}
}

/**
 * json API 返回成功
 * @param string $msg
 * @param array $data
 * @return array
 */
function json_success($msg = '',$data = []){
	$return = [
		'status'	=> '1',
		'message'	=> $msg,
		'data'		=> $data,
	];
	clear_null($return['data']);
	return $return;
}

/**
 * json API 返回失败
 * @param $msg
 * @param array $data
 * @return array
 */
function json_error($msg,$data = []){
	$msg = $msg ? : '服务器错误，请稍后重试';
	$return =  [
		'status'	=> '0',
		'message'	=> $msg,
		'data'		=> $data,
	];
	clear_null($return['data']);
	return $return;
}

/**
 * json API 返回需要登录
 * @param string $msg
 * @param array $data
 * @return array
 */
function json_login($msg = '',$data = []){
	$msg = $msg ? : '登录失效，请重新登录';
	$return =  [
		'status'	=> '2',
		'message'	=> $msg,
		'data'		=> $data,
	];
	clear_null($return['data']);
	return $return;
}

/**
 * json API 根据变量自动判断返回成功或失败
 * @param $var
 * @param string $error_msg
 * @param string $success_msg
 * @param array $data
 * @return array
 */
function json_return($var,$error_msg = '服务器错误，请稍后重试',$success_msg = '操作完成',$data = []){
	if($var === false || $var === null){
		return json_error($error_msg,$data);
	}else{
		return json_success($success_msg,$data);
	}
}

/**
 * 给http响应发送一个 404 未找到异常
 * @param null $message
 * @param false $var		// 判断变量是[假]才抛错
 */
function abort_404($message = null,$var = false){
	if(!$var) {
		abort(404, $message);
	}
}

/**
 * 给http响应发送一个 500 服务器异常
 * @param string $message
 * @param false $var		// 判断变量是[假]才抛错
 * @return bool
 */
function abort_500($message = '',$var = false){
	if(!$var){
		abort(500,$message);
//		throw new \App\Exceptions\ApiException($message);
	}
	return true;
}




/**
 * bug 邮件发送，收件人为数组配置
 * @param $msg
 * @return bool
 */
function bug_email(...$msg){
	$receives = config('basic.bug_receives');
	$url = request()->fullUrl();
	\Illuminate\Support\Facades\Mail::to($receives)->queue((new \App\Mail\Bug($url,config('database.connections'),$_GET,$_POST,$_REQUEST,$_SERVER,$_COOKIE,$_SESSION,$msg))->onQueue('email'));
	return true;
}

/**
 * bug 微信推送，收件人为数组配置
 * @param $title
 * @param array ...$msg
 */
function bug_wechat($title,...$msg){
	$reveives = collect(config('basic.bug_wechat'));
	$msgs = '';
	foreach($msg as $m){
		$msgs .= '<div><pre>'.print_r($m,true).'</pre></div>';

	}
	$reveives->each(function($v) use ($title,$msgs){
		curl_post($v,[
			'text'	=> $title,
			'desp'	=> $msgs
		]);
	});
}


/**
 * 时间戳格式化成国内日期格式
 * @param null $time
 * @return false|string
 */
function time2date($time = null){
	return date('Y-m-d H:i:s',$time ?? time());
}
function time2date_date($time = null){
	return date('Y-m-d',$time ?? time());
}


// 重定向并带post数据
function build_form($url,$post_data,$method = 'post'){
	$input_param = '';
	foreach($post_data as $k => $v){
		$input_param .= '<input type="hidden" name="'.$k.'" value="'.$v.'" />';
	}
	/**
	 * <meta charset="utf-8" />
	<meta http-equiv="content-type" name="keywords" content="" />
	<meta http-equiv="content-type" name="description" content="" />
	<meta name="viewport" content="width=device-width, initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
	<meta name="format-detection" content="telephone=no" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black" />
	 */
	$html = <<<EOT
<form method="$method" action="$url" id="form_to_ebank">
$input_param
<input type="submit" value="　" style="opacity:0" />
</form>
<script>document.getElementById('form_to_ebank').submit();</script>
EOT;
	$html = str_replace("\r\n",'',$html);
	$html = str_replace(PHP_EOL,'',$html);
	return $html;
}

/**
 * API 接口商户算签，返回签名字符串
 * @param array $param
 * @param string $secret
 * @return string
 */
function sign_merchant(array $param,string $secret){
	unset($param['ebank_sign']);
	ksort($param);
	$param2 = $param;
	$param2['ebank_secret'] = $secret;
	$sign = strtolower(md5(http_build_query($param2)));
	return $sign;
}
