<template>
	<transition appear name="fade">
	<div class="welcome">
		<div class="card-group" v-if="list.length > 0">
			<div class="mdui-row-xs-2 mdui-row-sm-3 mdui-row-md-4 mdui-row-lg-5 mdui-row-xl-6">
				<div class="mdui-col" v-for="(val,key) of list">
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
			<div class="mdui-typo mdui-color-white">
				<blockquote class="mdui-p-y-2 mdui-m-b-1 blockquote_normal" title="此数据为最新20条，详情请在订单管理中查看">订单支付成功但未通知商户，等待处理/排错</blockquote>
			</div>
			<table class="mdui-table">
				<thead>
				<tr>
					<th>订单ID</th>
					<th>订单号</th>
					<th>金额(分)</th>
					<th>下单时间</th>
					<th>状态</th>
				</tr>
				</thead>
				<tbody>
				<tr v-for="(val,key) of order_notify">
					<td v-text="val.id"></td>
					<td v-text="val.order_no"></td>
					<td v-text="val.amount"></td>
					<td v-text="val.created_at"></td>
					<td>支付成功待通知</td>
				</tr>
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
				list : [
					{
						"name": "今日下单数量",
						"sum": '',
						"icon": "trending_up",
						"title": "已支付并且有效的订单",
						"backgroundColor": "#F0AD4E"
					},
					{
						"name": "今日下单金额",
						"sum": '',
						"icon": "account_balance",
						"title": "已支付并且有效的订单",
						"backgroundColor": "#F0AD4E"
					},
					{
						"name": "昨日下单数量",
						"sum": '',
						"icon": "trending_up",
						"title": "已支付并且有效的订单",
						"backgroundColor": "#F0AD4E"
					},
					{
						"name": "昨日下单金额",
						"sum": '',
						"icon": "account_balance",
						"title": "已支付并且有效的订单",
						"backgroundColor": "#F0AD4E"
					},
					{
						"name": "今日提现数量",
						"sum": '',
						"icon": "trending_up",
						"title": "申请提现成功",
						"backgroundColor": "#00A98E"
					},
					{
						"name": "今日提现金额",
						"sum": '',
						"icon": "account_balance_wallet",
						"title": "申请提现成功",
						"backgroundColor": "#00A98E"
					},
					{
						"name": "昨日提现数量",
						"sum": '',
						"icon": "trending_up",
						"title": "申请提现成功",
						"backgroundColor": "#00A98E"
					},
					{
						"name": "昨日提现金额",
						"sum": '',
						"icon": "account_balance_wallet",
						"title": "申请提现成功",
						"backgroundColor": "#00A98E"
					},
					{
						"name": "今日提现待处理",
						"sum": '',
						"icon": "account_balance_wallet",
						"title": "申请提现中",
						"backgroundColor": "#5CB85C"
					},
					{
						"name": "昨日提现待处理",
						"sum": '',
						"icon": "account_balance_wallet",
						"title": "申请提现中",
						"backgroundColor": "#5CB85C"
					},
					{
						"name": "今日用户新增",
						"sum": '',
						"icon": "account_circle",
						"title": "新钱包数据",
						"backgroundColor": "#337AB7"
					},
					{
						"name": "昨日用户新增",
						"sum": '',
						"icon": "account_circle",
						"title": "新钱包数据",
						"backgroundColor": "#337AB7"
					},
					{
						"name": "接口商户数量",
						"sum": '',
						"icon": "people",
						"title": "API接口商户",
						"backgroundColor": "#337AB7"
					},
					{
						"name": "今日流水记录",
						"sum": '',
						"icon": "swap_horiz",
						"title": "有效转账记录",
						"backgroundColor": "#32C24D"
					},
					{
						"name": "昨日流水记录",
						"sum": '',
						"icon": "swap_horiz",
						"title": "有效转账记录",
						"backgroundColor": "#32C24D"
					},
					{
						"name": "今日接口错误",
						"sum": '',
						"icon": "bug_report",
						"title": "商户API未成功返回",
						"backgroundColor": "#D9534F"
					}
				],
				order_notify : [],
			}
		},
		methods : {
			init(){
				let t = this;
				t.$API.get('/index/welcome').then(function(data){
					for(let i in data){
						t.list[i].sum = data[i].sum;
					}
				});
				t.$API.get('/index/order_unnotify').then(function(data){
					t.order_notify = data;
				})
			}
		},
		mounted(){
			this.init();
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
</style>