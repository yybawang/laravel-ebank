<html>
<head>
	<meta charset="UTF-8">
	<meta charset="utf-8" />
	<meta http-equiv="content-type" name="keywords" content="" />
	<meta http-equiv="content-type" name="description" content="" />
	<meta name="viewport" content="width=device-width, initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
	<meta name="format-detection" content="telephone=no" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<script src="{{asset('js/jquery-3.2.1.min.js')}}"></script>
	<title>全球支付系统</title>
	<style>
		body {
			font-family:"微软雅黑,Microsoft Yahei";
			margin:0;
			background:url('{{asset('images/login_bg.png')}}') no-repeat fixed;
			background-size:100% 100%;
		}
		.frame {
			background-color:#FFF;
			padding:20px;
			width:520px;
			margin:10% auto;
			border-radius: 5px;
		}
		.frame .input {
			padding:10px 0;
			overflow:hidden;
		}
		.frame .input > input {
			height:30px;
			line-height:30px;
			padding:0 4px;
		}
		.frame .input > input.input_text {
			width:200px;
		}
		.frame .input > .captcha_label {
			float:left;
		}
		.frame .input > input.captcha_input {
			width:100px;
			padding:0;
			float:left;
		}
		.frame .input > img.captcha_img {
			width:95px;
			height:30px;
			border:none;
			margin-left:5px;
			float:left;
		}
		.frame .input > label {
			height:30px;
			line-height:30px;
			text-align:center;
			padding:0 15px;
		}
		.frame [type=submit] {
			width:80px;
			height:30px;
			cursor:pointer;
		}
		.frame .tips {
			padding:10px 0;
			color:#E25A57;
		}
		.frame .footer {
			padding:10px 0;
			border-top:1px solid #CCC;
		}
	</style>
</head>
<body>
<div class="frame">
	<div class="title"><h3>全球支付系统后台登录</h3></div>
	<div class="content">
		<form action="{{url('admin/login')}}" method="post" class="form">
			<div class="input">
				<label>登录名</label><input class="input_text" type="text" autocomplete="off" name="name" value="{{old('name')}}" id="name" />
			</div>
			<div class="input">
				<label>密　码</label><input class="input_text" type="password" name="password" />
			</div>
			<div class="input">
				<label class="captcha_label">验证码</label><input class="captcha_input" type="text" name="captcha" />
				<img src="{{captcha_src()}}" class="captcha_img" title="看不清？换一张">
			</div>
			<div class="input">
				<label>　　　</label><input class="submit" type="submit" value="登录" />
				<input type="hidden" name="_token" value="{{ csrf_token() }}">
			</div>
		</form>
	</div>
	<div class="tips">
	
	</div>
	<div class="footer">&copy; 2015 Global Pay Unit {{request()->server('HTTP_HOST')}} All rights reserved</div>
</div>
<script>
	document.getElementById('name').focus();
	$(function(){
		$('.form').submit(function(){
			var $t = $(this),action = $t.attr('action');
			tips('登录中...');
			$.post(action,$t.serialize(),function(data){
				if(data.status == 1){
					location.href = '/admin#'+(location.href.split('#')[1] || '');
				}else{
					recaptcha();
				}
				tips(data.message);
			},'json');
			return false;
		});
		
		function tips(message){
			$('.tips').html(message);
		}
		
		$('.captcha_img').click(function(){
			recaptcha();
		});
		function recaptcha(){
			var $t = $('.captcha_img'),src = $t.attr('src');
			var src0 = src.split('?')[0];
			src0 += '?'+Math.random();
			$t.attr('src',src0);
			$('[name=captcha]').val('').focus();
		}
	});
</script>
</body>
</html>

