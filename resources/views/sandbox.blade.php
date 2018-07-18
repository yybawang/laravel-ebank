<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<title>接口测试,模拟EBankSDK</title>
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
		.api_list > .title {
			padding:10px 0;
		}
		.api_list > .tab {
			padding-left:20px;
		}
		.api_list button {
			padding: 5px 5px;
		}
		.param_mock {
			display:none;
		}
	</style>
</head>
<body>
<table cellpadding="0" cellspacing="0" class="layout">
	<tr>
		<td class="left" style="border-right:1px solid #CCC;">
			<form action="{{url('sandbox/submit')}}" method="post" enctype="multipart/form-data" class="form">
				<table cellspacing="0" cellpadding="0" border="0" class="table_param">
					<tr><th width="80">商户名称</th>
						<td>
							<select name="ebank_appid">
								{{--<option value="">无商户--普通算签</option>--}}
								@foreach($merchant as $appid => $name)
								<option value="{{$appid}}">{{$name}}({{$appid}})</option>
								@endforeach
							</select>
						</td>
					</tr>
					<tr><th>sign</th><td><input type="text" name="ebank_sign" value="" /></td></tr>
					<tr><th>接口地址</th><td>api/<input type="text" name="url" value="bank/test_sign" style="width:167px;" /></td></tr>
					
					<tr class="api_lists">
						<th>
							API列表
						</th>
						<td class="api_list">
							<div class="title"><strong>资金操作</strong></div>
							<div class="tab"><a class="mock" tab="test_sign" url="bank/test_sign">测试签名</a></div>
							<div class="tab"><a class="mock" tab="user_wallet" url="bank/user_wallet">用户所有钱包列表</a></div>
							<div class="tab"><a class="mock" tab="central_wallet" url="bank/central_wallet">中央所有钱包列表</a></div>
							<div class="tab"><a class="mock" tab="system_wallet" url="bank/system_wallet">系统所有钱包列表</a></div>
							<div class="tab"><a class="mock" tab="user_type_wallet" url="bank/user_type_wallet">其他身份钱包列表</a></div>
							<div class="tab"><a class="mock" tab="user_type" url="bank/user_type">身份类型列表</a></div>
							<div class="tab"><a class="mock" tab="purse_type" url="bank/purse_type">钱包类型列表</a></div>
							<div class="tab"><a class="mock" tab="transfer" url="bank/transfer">钱包转账</a></div>
							<div class="tab"><a class="mock" tab="untransfer" url="bank/untransfer">钱包转账冲正</a></div>
							<div class="tab"><a class="mock" tab="freeze" url="bank/freeze">用户钱包冻结</a></div>
							<div class="tab"><a class="mock" tab="unfreeze" url="bank/unfreeze">用户钱包解冻</a></div>
							<div class="title"><strong>支付下单</strong></div>
							<div class="tab"><a class="mock" tab="unified" url="order/unified">统一下单</a></div>
							<div class="title"><strong>用户提现</strong></div>
							<div class="tab"><a class="mock" tab="withdraw_bank" url="withdraw/bank">银行卡提现</a></div>
						</td>
					</tr>
				</table>
				<table cellspacing="0" cellpadding="0" border="0" class="table_param table_param2">
					<tbody>
					<tr class="param_mock mock_user_wallet">
						<th></th>
						<td><input name="key[]" class="key" value="user_id" />：<input name="value[]" class="value" value="1" /></td>
					</tr>
					
					
					<tr class="param_mock mock_user_type_wallet">
						<th></th>
						<td><input name="key[]" class="key" value="user_type" />：<input name="value[]" class="value" value="central" /></td>
					</tr>
					
					
					<tr class="param_mock mock_transfer">
						<th></th>
						<td><input name="key[][param][]" class="key" value="from_user_id" />：<input name="value[][][from_user_id]" class="value" value="0" /></td>
					</tr>
					<tr class="param_mock mock_transfer">
						<th></th>
						<td><input name="key[][param][]" class="key" value="to_user_id" />：<input name="value[][][to_user_id]" class="value" value="1" /></td>
					</tr>
					<tr class="param_mock mock_transfer">
						<th></th>
						<td><input name="key[][param][]" class="key" value="amount" />：<input name="value[][][amount]" class="value" value="1" /></td>
					</tr>
					<tr class="param_mock mock_transfer">
						<th></th>
						<td><input name="key[][param][]" class="key" value="reason" />：<input name="value[][][reason]" class="value" value="" /></td>
					</tr>
					<tr class="param_mock mock_transfer">
						<th></th>
						<td><input name="key[][param][]" class="key" value="detail" />：<input name="value[][][detail]" class="value" value="沙盒测试" /></td>
					</tr>
					<tr class="param_mock mock_transfer">
						<th></th>
						<td><input name="key[][param][]" class="key" value="remarks" />：<input name="value[][][remarks]" class="value" value="" /></td>
					</tr>
					<tr class="param_mock mock_transfer">
						<th></th>
						<td><input name="key[]" class="key" value="async" />：<input name="value[]" class="value" value="0" /></td>
					</tr>
					
					
					<tr class="param_mock mock_untransfer">
						<th></th>
						<td><input name="key[]" class="key" value="transfer_id" />：<input name="value[]" class="value" value="" placeholder="转账ID" /></td>
					</tr>
					
					
					<tr class="param_mock mock_freeze">
						<th></th>
						<td><input name="key[]" class="key" value="purse_id" />：<input name="value[]" class="value" value="" placeholder="钱包ID" /></td>
					</tr>
					<tr class="param_mock mock_freeze">
						<th></th>
						<td><input name="key[]" class="key" value="amount" />：<input name="value[]" class="value" value="1" /></td>
					</tr>
					
					
					<tr class="param_mock mock_unfreeze">
						<th></th>
						<td><input name="key[]" class="key" value="freeze_id" />：<input name="value[]" class="value" value="" /></td>
					</tr>
					
					
					<tr class="param_mock mock_unified">
						<th></th>
						<td><input name="key[]" class="key" value="user_id" />：<input name="value[]" class="value" value="1" /></td>
					</tr>
					<tr class="param_mock mock_unified">
						<th></th>
						<td><input name="key[]" class="key" value="order_no" />：<input name="value[]" class="value unified_order_no" value="" /></td>
					</tr>
					<tr class="param_mock mock_unified">
						<th></th>
						<td><input name="key[]" class="key" value="product_name" />：<input name="value[]" class="value" value="调试商品1001" /></td>
					</tr>
					<tr class="param_mock mock_unified">
						<th></th>
						<td><input name="key[]" class="key" value="order_type" />：<input name="value[]" class="value" value="沙河调试" /></td>
					</tr>
					<tr class="param_mock mock_unified">
						<th></th>
						<td><input name="key[]" class="key" value="return_url" />：<input name="value[]" class="value" value="https://www.baidu.com" /></td>
					</tr>
					<tr class="param_mock mock_unified">
						<th></th>
						<td><input name="key[]" class="key" value="notify_url" />：<input name="value[]" class="value" value="https://www.baidu.com" /></td>
					</tr>
					<tr class="param_mock mock_unified">
						<th></th>
						<td><input name="key[]" class="key" value="pay_type_group" />：<input name="value[][wallet_cash]" class="value" value="1" /></td>
					</tr>
					<tr class="param_mock mock_unified">
						<th></th>
						<td><input name="key[]" class="key" value="openid" />：<input name="value[]" class="value" value="" /></td>
					</tr>
					
					
					<tr class="param_mock mock_withdraw_bank">
						<th></th>
						<td><input name="key[]" class="key" value="user_id" />：<input name="value[]" class="value" value="1" /></td>
					</tr>
					<tr class="param_mock mock_withdraw_bank">
						<th></th>
						<td><input name="key[]" class="key" value="amount" />：<input name="value[]" class="value" value="1" /></td>
					</tr>
					<tr class="param_mock mock_withdraw_bank">
						<th></th>
						<td><input name="key[]" class="key" value="fee" />：<input name="value[]" class="value" value="0" /></td>
					</tr>
					<tr class="param_mock mock_withdraw_bank">
						<th></th>
						<td><input name="key[]" class="key" value="purse" />：<input name="value[]" class="value" value="cash" /></td>
					</tr>
					<tr class="param_mock mock_withdraw_bank">
						<th></th>
						<td><input name="key[]" class="key" value="realname" />：<input name="value[]" class="value" value="张三" /></td>
					</tr>
					<tr class="param_mock mock_withdraw_bank">
						<th></th>
						<td><input name="key[]" class="key" value="bank_name" />：<input name="value[]" class="value" value="中国工商银行" /></td>
					</tr>
					<tr class="param_mock mock_withdraw_bank">
						<th></th>
						<td><input name="key[]" class="key" value="bank_no" />：<input name="value[]" class="value" value="88888888888" /></td>
					</tr>
					
					
					<tr>
						<th>扩展参数</th>
						<td><input name="key[]" class="key" value="" />：<input name="value[]" class="value" value="" /></td>
					</tr>
					<tr><th><a href="javascript:;" class="param_add">添加一个</a></th><td></td></tr>
					<tr><td colspan="2" align="center"><input type="submit" value="Test Run" /></td></tr>
					</tbody>
				</table>
			</form>
		</td>
		<td class="right">
			<pre></pre>
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
		$('.param_mock input').attr('disabled',true);
		$('.form').submit(function(){
			var $t = $(this),action = $t.attr('action'),post = $t.serialize();
			var $right = $('.right > pre');
			$.post(action,post,function(msg){
				$right.html(msg);
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
		
		$('.mock').click(function(){
			var $t = $(this),tab = $t.attr('tab'),url = $t.attr('url');
			$('[name=url]').val(url);
			$('.param_mock').hide().find('input').attr('disabled',true);
			$('.mock_'+tab).show().find('input').attr('disabled',false);
			$('.unified_order_no').val('sandbox'+Math.random()*1000000000);
		});
	});
	
	function log(log){
		var $log = $('.footer');
		$log.prepend('<span>'+log+'</span>');
	}
	function sign(sign){
		var $sign = $('[name=ebank_sign]');
		$sign.val(sign);
	}
</script>
</body>
</html>