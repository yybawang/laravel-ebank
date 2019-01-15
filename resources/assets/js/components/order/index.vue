<template>
	<div class="order_index">
		<div class="typo" @keydown.enter="search(1)">
			<blockquote class="blockquote_normal">
				<p>
					订单号：<input class="mdui-textfield-input input_normal" type="text" v-model="keyword.order_no" />
				</p>
				<p>
					下单用户ID：<input class="mdui-textfield-input input_normal" type="text" v-model="keyword.user_id" />
				</p>
				<p>
					日期筛选：<date-picker v-model="keyword.date"></date-picker>
				<p>
					商　　户：
					<label class="mdui-checkbox" v-for="(name,id) of merchant" style="margin-right:2rem;">
						<input type="checkbox" :value="id" v-model="keyword.merchant_id" />
						<i class="mdui-checkbox-icon"></i>
						{{name}}
					</label>
				</p>
				<p>
					订单类型：
					<label class="mdui-checkbox" v-for="(name,id) of order_type" style="margin-right:2rem;">
						<input type="checkbox" :value="name" v-model="keyword.order_type" />
						<i class="mdui-checkbox-icon"></i>
						{{name}}
					</label>
				</p>
				<p>
					订单状态：
					<label class="mdui-checkbox" v-for="(name,id) of pay_status" style="margin-right:2rem;">
						<input type="checkbox" :value="id" v-model="keyword.pay_status" />
						<i class="mdui-checkbox-icon"></i>
						{{name}}
					</label>
					<label class="mdui-checkbox" v-for="(name,id) of notify_status" style="margin-right:2rem;">
						<input type="checkbox" :value="id" v-model="keyword.notify_status" />
						<i class="mdui-checkbox-icon"></i>
						{{name}}
					</label>
					<label class="mdui-checkbox" v-for="(name,id) of refund_status" style="margin-right:2rem;">
						<input type="checkbox" :value="id" v-model="keyword.refund_status" />
						<i class="mdui-checkbox-icon"></i>
						{{name}}
					</label>
				</p>
				<p>
					支付类型：
					<label class="mdui-checkbox" v-for="(name,id) of payment" style="margin-right:2rem;">
						<input type="checkbox" :value="name" v-model="keyword.payment" />
						<i class="mdui-checkbox-icon"></i>
						{{payments[name] || name}}
					</label>
				</p>
				<a class="mdui-btn mdui-ripple mdui-color-theme" @click="search(1)"><i class="mdui-icon mdui-icon-left material-icons">search</i>搜索</a>
				<a class="mdui-btn mdui-ripple mdui-color-pink" @click="exports"><i class="mdui-icon mdui-icon-left material-icons">file_upload</i>导出</a>
			</blockquote>
			<blockquote class="blockquote_normal">
				支付金额统计(分)
				<p style="line-height:25px;"><span class="mdui-m-r-3" v-for="(amount,type) of amount_sum">{{payments[type] || type}}：{{amount}}</span></p>
			</blockquote>
		</div>
		<div class="mdui-table-fluid">
			<table class="mdui-table mdui-table-hoverable">
				<template v-for="(val,key,index) of list.data">
					<tbody>
					<tr class="mdui-color-grey-200">
						<td>订单金额(分)：<span style="color:#FE0016;" v-text="val.amount"></span></td>
						<td>订单号：<span style="color:#FF6A00;" v-text="val.order_no"></span></td>
						<td>商品名：<span style="color:#169320;" v-text="val.product_name"></span></td>
					</tr>
					<tr>
						<td>下单用户ID：<span v-text="val.user_id"></span></td>
						<td>同步返回地址：<span v-text="val.return_url"></span></td>
						<td>异步通知地址：<span v-text="val.notify_url"></span></td>
					</tr>
					<tr>
						<td>订单状态：<strong><span v-if="val.status" class=mdui-text-color-green>订单有效</span><span v-else class=mdui-text-color-grey>订单无效</span></strong>
						</td>
						<td>下单时间：<span v-text="val.created_at"></span></td>
						<td>下单商户：<span v-text="merchant[val.merchant_id]"></span></td>
					</tr>
					<tr>
						<td>支付状态：<strong><span v-if="val.pay_status" class=mdui-text-color-green>支付成功</span><span v-else class=mdui-text-color-grey>未支付</span></strong>
						</td>
						<td>支付时间：<span v-text="val.pay_time"></span></td>
						<td>
							<span v-for="(val2,key2) of val.payment">
								<span class="mdui-text-color-teal-400">{{payments[val2.type] || val2.type}}</span>
								<span class="mdui-text-color-red-500">「{{val2.amount}}」</span><span v-if="key2+1 < val.payment.length">、</span>
							</span>
						</td>
					</tr>
					<tr>
						<td>通知状态：<strong><span v-if="val.notify_status" class=mdui-text-color-green>通知成功</span><span v-else class=mdui-text-color-grey>未通知</span></strong></td>
						<td>通知时间：<span v-text="val.notify_time"></span></td>
						<td>备注：<span v-text="val.remarks"></span></td>
					</tr>
					<tr>
						<td>退款状态：<strong><span v-if="val.refund_status" class=mdui-text-color-red-500>已退款</span><span v-else class=mdui-text-color-grey>未退款</span></strong></td>
						<td>退款时间：<span v-text="val.refund_time"></span></td>
						<td>
							<a class="mdui-btn mdui-ripple mdui-color-blue-grey" v-if="val.status == 1 && val.pay_status == 0" @click="complete(val.id)">掉单补回</a>
							<a class="mdui-btn mdui-ripple mdui-color-theme" v-if="val.status == 1 && val.pay_status == 1 && val.refund_status == 0" @click="notify(val.id)">手动通知</a>
							<a class="mdui-btn mdui-ripple mdui-color-red" v-if="val.status == 1 && val.pay_status == 1 && val.refund_status == 0" @click="refund(val.id,val.amount)">订单退款</a>
						</td>
					</tr>
					</tbody>
				</template>
			</table>
		</div>
		
		<div class="mdui-color-white footer">
			<pagination
					:pageInfo="{
						total:list.total,
						current:list.current_page,
						pagenum:list.per_page,
						page:list.last_page,
						pagegroup:9,
						skin:'#2196F3'
					}"
					@change="search"
			></pagination>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				list : [],
				merchant : '',
				order_type : '',
				purse_type : '',
				user_type : '',
				payment : '',
				payments : '',
				amount_sum : '',
				keyword : {
					page : 1,
					export : 0,
					user_id : '',
					order_no : '',
					merchant_id : [],
					order_type : [],
					purse_type_id : [],
					user_type_id : [],
					pay_status : [],
					notify_status : [],
					refund_status : [],
					payment : [],
					date : []
				},
				pay_status : [
					'未支付',
					'支付成功'
				],
				notify_status : [
					'未通知',
					'通知成功'
				],
				refund_status : [
					'未退款',
					'退款成功'
				],
			};
		},
		methods : {
			search(page){
				this.keyword.page = page;
				this.keyword.export = 0;
				this.init();
			},
			exports(){
				this.keyword.export = 1;
				this.init();
			},
			complete(id){
				let t = this;
				mdui.confirm('手动标记为支付成功并分发通知，是否收到款项需财务核实，点击【确定】继续', '三方支付漏单/掉单补回', function () {
					t.$API.post('/order/complete', {id: id}).then(function (data) {
						mdui.alert("操作完成，订单标记为已支付", function () {}, {history: false});
						t.init();
					}).catch(function(msg){
						
					});
				}, function () {}, {history: false, confirmText: '确定', cancelText: '取消'});
			},
			notify(id) {
				let t = this;
				mdui.confirm('异步通知会影响商户对支付的响应，可能造成多次结算等问题，知悉后点击【确定】继续', '手动发起异步通知', function () {
					t.$API.post('/order/notify', {id: id}).then(function (data) {
						mdui.alert("已重新分发通知任务", function () {}, {history: false});
						t.init();
					}).catch(function(msg){
						
					});
				}, function () {}, {history: false, confirmText: '确定', cancelText: '取消'});
			},
			refund(id,amount) {
				let t = this;
				mdui.prompt('退款金额会返还到下单用户的现金钱包余额中，请在下方输入【退款金额】。注意：输入单位为分', '订单总金额(分)：'+amount, function (value) {
					if(value){
						t.$API.post('/order/refund', {id: id,amount:value}).then(function (data) {
							mdui.alert("退款成功，已完成系统到用户的转账操作，如产生奖励部分需手动冲正", function () {}, {history: false});
							t.init();
						}).catch(function(msg){
							
						});
					}
				}, function () {}, {history: false, confirmText: '确定', cancelText: '取消'});
			},
			init(){
				let t = this;
				t.$API.get('/order/index',t.keyword).then(function(data){
					t.list = data.list;
					t.merchant = data.merchant;
					t.purse_type = data.purse_type;
					t.user_type = data.user_type;
					t.order_type = data.order_type;
					t.payment = data.payment;
					t.payments = data.payments;
					t.amount_sum = data.amount_sum;
					if(t.keyword.export){
						mdui.alert('可在左侧【导出任务】菜单查看任务状态并下载文件','已放入导出任务',function(){},{history:false});
					}
				}).catch(function(msg){
					
				});
			}
		},
		mounted(){
			let t = this;
			t.init();
		}
	}
</script>
