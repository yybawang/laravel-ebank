<template>
	<transition appear name="fade">
	<div class="welcome">
		<div class="mdui-toolbar mdui-color-teal">
			<i class="mdui-icon material-icons">visibility</i>
			<span>今日实时数据统计</span>
			<div class="mdui-toolbar-spacer"></div>
			<a class="mdui-btn mdui-ripple mdui-btn-icon" @click="today">
				<i class="mdui-icon material-icons">refresh</i>
			</a>
		</div>
		<div class="card-group mdui-p-t-2" v-if="sum_today">
			<div class="mdui-row-xs-2 mdui-row-sm-3 mdui-row-md-4 mdui-row-lg-5 mdui-row-xl-6">
				<div class="mdui-col" v-for="(val,key) of sum_today">
					<div class="mdui-card mdui-m-b-2 card">
						<div class="mdui-card-media">
							<div class="mdui-valign content-space">
								<i class="mdui-icon material-icons content-space-icon" :style="{color:val.backgroundColor}">{{val.icon}}</i>
							</div>
							<div class="mdui-card-media-covered mdui-card-media-covered-transparent">
								<div class="mdui-card-primary">
									<div class="mdui-card-primary-title mdui-text-color-red-300"><number-grow :value="val.sum"></number-grow></div>
									<div class="mdui-card-primary-subtitle mdui-text-color-black" v-text="val.name"></div>
									<div class="mdui-typo-caption mdui-typo-caption-opacity mdui-text-color-grey-700" v-text="val.title"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="mdui-toolbar mdui-color-indigo">
			<i class="mdui-icon material-icons">save</i>
			<span>昨日数据统计</span>
			<div class="mdui-toolbar-spacer"></div>
		</div>
		<div class="card-group mdui-p-t-2" v-if="sum_yesterday">
			<div class="mdui-row-xs-2 mdui-row-sm-3 mdui-row-md-4 mdui-row-lg-5 mdui-row-xl-6">
				<div class="mdui-col" v-for="(val,key) of sum_yesterday">
					<div class="mdui-card mdui-m-b-2 card">
						<div class="mdui-card-media">
							<div class="mdui-valign content-space">
								<i class="mdui-icon material-icons content-space-icon" :style="{color:val.backgroundColor}">{{val.icon}}</i>
							</div>
							<div class="mdui-card-media-covered mdui-card-media-covered-transparent">
								<div class="mdui-card-primary">
									<div class="mdui-card-primary-title mdui-text-color-red-300"><number-grow :value="val.sum"></number-grow></div>
									<div class="mdui-card-primary-subtitle mdui-text-color-black" v-text="val.name"></div>
									<div class="mdui-typo-caption mdui-typo-caption-opacity mdui-text-color-grey-700" v-text="val.title"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="order-notify">
			<div :class="{'mdui-toolbar':true, 'mdui-color-pink':order_notify.length > 0,'mdui-color-green':order_notify.length <= 0}">
				<a class="mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">error_outline</i></a>
				<span title="此数据为最新20条，详情请在订单管理中筛选查看，请及时处理">支付成功但未成功通知商户订单</span>
				<div class="mdui-toolbar-spacer"></div>
				<a class="mdui-btn mdui-ripple mdui-btn-icon" @click="order_unnotify">
					<i class="mdui-icon material-icons">refresh</i>
				</a>
			</div>
			<table class="mdui-table">
				<thead>
				<tr>
					<th>订单ID</th>
					<th>订单号</th>
					<th>金额(分)</th>
					<th>支付时间</th>
					<th>操作</th>
				</tr>
				</thead>
				<tbody>
				<template v-if="order_notify.length > 0">
				<tr v-for="(val,key) of order_notify">
					<td v-text="val.id"></td>
					<td v-text="val.order_no"></td>
					<td v-text="val.amount"></td>
					<td v-text="val.pay_time"></td>
					<td><a class="mdui-btn mdui-ripple mdui-color-pink" @click="notify(val.id)">手动通知</a></td>
				</tr>
				</template>
				<template v-else>
				<tr>
					<td colspan="5">
						<div class="mdui-p-y-2 mdui-valign order-notify-clear"><span class="mdui-m-r-1">服务正常工作中</span><i class="mdui-icon material-icons mdui-text-color-orange">sentiment_satisfied</i></div>
					</td>
				</tr>
				</template>
				</tbody>
			</table>
		</div>
	</div>
	</transition>
</template>
<script>
	import NumberGrow from '../NumberGrow';
	export default {
		data(){
			return {
				sum_today : {
					today_unified_count : {
						"name": "支付订单数量",
						"sum": '',
						"icon": "trending_up",
						"title": "已支付并且有效的订单",
						"backgroundColor": "#F0AD4E"
					},
					today_unified_amount : {
						"name": "支付订单金额",
						"sum": '',
						"icon": "account_balance",
						"title": "已支付并且有效的订单",
						"backgroundColor": "#F0AD4E"
					},
					today_unified_un_pay_count : {
						"name": "待支付数量",
						"sum": '',
						"icon": "trending_up",
						"title": "未支付的新订单",
						"backgroundColor": "#F0AD4E"
					},
					today_unified_un_pay_amount : {
						"name": "待支付金额",
						"sum": '',
						"icon": "account_balance",
						"title": "未支付的新订单",
						"backgroundColor": "#F0AD4E"
					},
					today_withdraw_count : {
						"name": "提现数量",
						"sum": '',
						"icon": "trending_up",
						"title": "申请提现成功",
						"backgroundColor": "#00A98E"
					},
					today_withdraw_amount : {
						"name": "提现金额",
						"sum": '',
						"icon": "account_balance_wallet",
						"title": "申请提现成功",
						"backgroundColor": "#00A98E"
					},
					today_withdraw_un_count : {
						"name": "提现待处理数量",
						"sum": '',
						"icon": "trending_up",
						"title": "申请提现中",
						"backgroundColor": "#5CB85C"
					},
					today_withdraw_un_amount : {
						"name": "提现待处理金额",
						"sum": '',
						"icon": "account_balance_wallet",
						"title": "申请提现中",
						"backgroundColor": "#5CB85C"
					},
					today_new_user_count : {
						"name": "用户新增",
						"sum": '',
						"icon": "person",
						"title": "新钱包数据",
						"backgroundColor": "#337AB7"
					},
					today_transfer : {
						"name": "流水记录",
						"sum": '',
						"icon": "swap_horiz",
						"title": "有效转账记录",
						"backgroundColor": "#32C24D"
					},
					today_behavior_count : {
						"name": "接口调用",
						"sum": '',
						"icon": "check_circle",
						"title": "商户API请求次数",
						"backgroundColor": "#4CAF50"
					},
					today_behavior_error_count : {
						"name": "接口错误",
						"sum": '',
						"icon": "bug_report",
						"title": "商户API未成功返回",
						"backgroundColor": "#D9534F"
					},
		},
				sum_yesterday : {
					yesterday_unified_count : {
						"name": "支付订单数量",
						"sum": '',
						"icon": "trending_up",
						"title": "已支付并且有效的订单",
						"backgroundColor": "#F0AD4E"
					},
					yesterday_unified_amount : {
						"name": "支付订单金额",
						"sum": '',
						"icon": "account_balance",
						"title": "已支付并且有效的订单",
						"backgroundColor": "#F0AD4E"
					},
					yesterday_unified_un_pay_count : {
						"name": "待支付数量",
						"sum": '',
						"icon": "trending_up",
						"title": "未支付的新订单",
						"backgroundColor": "#F0AD4E"
					},
					yesterday_unified_un_pay_amount : {
						"name": "待支付金额",
						"sum": '',
						"icon": "account_balance",
						"title": "未支付的新订单",
						"backgroundColor": "#F0AD4E"
					},
					yesterday_withdraw_count : {
						"name": "提现数量",
						"sum": '',
						"icon": "trending_up",
						"title": "申请提现成功",
						"backgroundColor": "#00A98E"
					},
					yesterday_withdraw_amount : {
						"name": "提现金额",
						"sum": '',
						"icon": "account_balance_wallet",
						"title": "申请提现成功",
						"backgroundColor": "#00A98E"
					},
					yesterday_withdraw_un_count : {
						"name": "提现待处理数量",
						"sum": '',
						"icon": "trending_up",
						"title": "申请提现中",
						"backgroundColor": "#5CB85C"
					},
					yesterday_withdraw_un_amount : {
						"name": "提现待处理金额",
						"sum": '',
						"icon": "account_balance_wallet",
						"title": "申请提现中",
						"backgroundColor": "#5CB85C"
					},
					yesterday_new_user_count : {
						"name": "用户新增",
						"sum": '',
						"icon": "person",
						"title": "新钱包数据",
						"backgroundColor": "#337AB7"
					},
					yesterday_transfer : {
						"name": "流水记录",
						"sum": '',
						"icon": "swap_horiz",
						"title": "有效转账记录",
						"backgroundColor": "#32C24D"
					},
					yesterday_behavior_count : {
						"name": "接口调用",
						"sum": '',
						"icon": "check_circle",
						"title": "商户API请求次数",
						"backgroundColor": "#4CAF50"
					},
					yesterday_behavior_error_count : {
						"name": "接口错误",
						"sum": '',
						"icon": "bug_report",
						"title": "商户API未成功返回",
						"backgroundColor": "#D9534F"
					},
				},
				order_notify : [],
			}
		},
		methods : {
			order_unnotify(){
				let t = this;
				t.$API.get('/index/order_unnotify').then(function(data){
					t.order_notify = data;
				}).catch(function(msg){
					
				});
			},
			today(){
				let t = this;
				t.$API.get('/index/sum_today').then(function(data){
					for(let i in t.sum_today){
						t.sum_today[i].sum = data[i].sum;
					}
				}).catch(function(msg){
					
				});
			},
			yesterday(){
				let t = this;
				t.$API.get('/index/sum_yesterday').then(function(data){
					for(let i in t.sum_yesterday){
						t.sum_yesterday[i].sum = data[i].sum;
					}
				}).catch(function(msg){
					
				});
			},
			notify(id) {
				let t = this;
				mdui.confirm('请求重新进入通知队列，如果多次失败请检查队列(queue)服务配置，点击【确定】继续', '手动发起异步通知', function () {
					t.$API.post('/order/notify', {id: id}).then(function (data) {
						mdui.alert("已重新分发通知任务", function () {}, {history: false});
						t.order_unnotify();
					}).catch(function(msg){
						
					});
				}, function () {}, {history: false, confirmText: '确定', cancelText: '取消'});
			},
		},
		mounted(){
			this.today();
			this.yesterday();
			this.order_unnotify();
		},
		components: {
			NumberGrow
		}
	}
</script>
<style lang="scss" scoped>
	.card {
		min-width:180px;
	}
	.content-space {
		padding:0 0.5rem;
		height:7.3rem;
		text-align:right;
		justify-content: flex-end;
	}
	.content-space-icon {
		font-size:3rem;
	}
	
	.fade-enter-active{
		transition: opacity 1s;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
	.order-notify-clear {
		justify-content: center;
	}
</style>