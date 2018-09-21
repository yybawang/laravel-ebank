<meta charset="UTF-8">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no">
<meta name="format-detection" content="email=no">
<meta name="viewport" content="width=device-width, initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<title>确认支付</title>
<div class="container bg-white">
		<script>
			//调用微信JS api 支付
			function jsApiCall()
			{
				WeixinJSBridge.invoke(
					'getBrandWCPayRequest',
					{!! $sign !!},
					function(res){
//				alert(res.err_code+res.err_desc+res.err_msg);
						// 成功
						// var c = confirm('已经支付完成？');
						var c = true;
						
						if(c && res.err_msg == "get_brand_wcpay_request:ok"){
							location.href = "{{$return_url.'1'}}";
						}else{
							location.href = "{{$return_url.'2'}}";
						}
					}
				);
			}
			
			function callpay_weixin()
			{
				if (typeof WeixinJSBridge == "undefined"){
					if( document.addEventListener ){
						document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
					}else if (document.attachEvent){
						document.attachEvent('WeixinJSBridgeReady', jsApiCall);
						document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
					}
				}else{
					jsApiCall();
				}
			}
			callpay_weixin();
		</script>
</div>