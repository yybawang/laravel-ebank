<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<title>接口测试</title>
	<meta content="text/html;charset=utf-8" http-equiv="content-type">
	<script src="{{asset('js/jquery-3.2.1.min.js')}}"></script>
	<style type="text/css">
		html,body,.layout {
			margin:0;
			padding:0;
			width:100%;
			height:100%;
			border:0;
			font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu;
			font-size:13px;
		}
		a {
			color:#3FAD67;
			cursor:pointer;
		}
		a:hover {
			color: #009509;
		}
		.layout .left {
			padding:20px 0;
			width:670px;
			height:80%;
			overflow-y:auto;
			vertical-align: top;
		}
		.layout .right {
			padding:15px;
			vertical-align: top;
			max-width: 300px;
		}
		input {
			height:25px;
			line-height:25px;
			width:192px;
			padding:0 4px;
		}
		input.key {
			width:60px;
		}
		input.value {
			width:140px;
		}
		select {
			height:31px;
			line-height:31px;
			width:204px;
		}
		input[type=submit] {
			cursor:pointer;
			height:40px;
			padding:0 20px;
			color:#3FAD67;
		}
		.table_param {
			float:left;
		}
		.table_param th {
			font-weight:normal;
			text-align:right;
			padding-right:5px;
			color:#5E9DD5;
		}
		.table_param td {
			padding:5px;
		}
		.table_param2 {
			margin-right:20px;
			float:right;
		}
		.table_param2 .param_del{
			text-align:right;
			padding-right:10px;
		}
		.footer {
			min-height:100px;
			max-height:100px;
			overflow-y:auto;
		}
		.footer > span {
			padding:0 10px;
			display:block;
			line-height:25px;
			border-bottom:1px dashed #CCC;
		}
	</style>
</head>
<body>
<table cellpadding="0" cellspacing="0" class="layout">
	<tr>
		<td class="left" style="border-right:1px solid #CCC;">
			<form action="{{url('sandbox/submit')}}" method="post" enctype="multipart/form-data" class="form">
				<table cellspacing="0" cellpadding="0" border="0" class="table_param">
					<tr><th width="80">商户名称</th><td>
							<select name="appid">
								<option value="">无商户--普通算签</option>
								@foreach($merchant as $appid => $name)
								<option value="{{$appid}}">{{$name}}({{$appid}})</option>
								@endforeach
							</select>
						</td>
					</tr>
					<tr><th>device</th><td><input type="text" name="ClientVersion" value="20180101" /></td></tr>
					<tr><th>ticket</th><td><input type="text" name="ticket" value="" /></td></tr>
					<tr><th>sign</th><td><input type="text" name="sign" value="" /></td></tr>
					<tr><th>接口地址</th><td>api/<input type="text" name="url" value="bank/test_sign" style="width:167px;" /></td></tr>
					
				</table>
				<table cellspacing="0" cellpadding="0" border="0" class="table_param table_param2">
					<tr><th>扩展参数</th><td><input name="key[]" class="key" />：<input name="value[]" class="value" /></td></tr>
					<tr><th><a href="javascript:;" class="param_add">添加一个</a></th><td></td></tr>
					<tr><td colspan="2" align="center"><input type="submit" value="Servive Test Run" /></td></tr>
				</table>
			</form>
		</td>
		<td class="right">
		
		</td>
	</tr>
	<tr>
		<td colspan="2" style="border-top:1px solid #CCC;">
			<div class="footer">
			
			</div>
		</td>
	</tr>
</table>
<script>
	$(function(){
		$('.form').submit(function(){
			var $t = $(this),action = $t.attr('action'),post = $t.serialize();
			var $right = $('.right'),cmd = $('[name=cmd]').val();
			$.post(action,post,function(msg){
				$right.html('<pre>'+msg+'</pre>');
			},'html');
			return false;
		});
		$('.param_add').click(function(){
			var $t = $(this),dom = '<tr><th class="param_del"><a class="param_del_a">X</a></th><td><input name="key[]" class="key" />：<input name="value[]" class="value" /></td></tr>';
			$t.closest('tr').before(dom);
			$t.closest('tr').siblings().eq(-2).find('input:eq(0)').focus();
		});
		
		$('.table_param2').on('click','.param_del',function(){
			$(this).closest('tr').remove();
		});
	});
	
	function log(log){
		var $log = $('.footer');
		$log.prepend('<span>'+log+'</span>');
	}
	function ticket(ticket){
		var $ticket = $('[name=ticket]');
		if(ticket){
			$ticket.val(ticket);
		}
	}
	function sign(sign){
		var $sign = $('[name=sign]');
		$sign.val(sign);
	}
	function right(text){
		var $right = $('.print_r');
		$right.append(text);
	}
</script>
</body>
</html>