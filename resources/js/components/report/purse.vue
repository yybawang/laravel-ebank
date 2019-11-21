<template>
	<div class="report_purse">
		<div class="mdui-typo" @keydown.enter="search(1)">
			<blockquote class="blockquote_normal">
				<p>注：钱包进出统计，根据转账流水以及第三方支付订单计算所得</p>
			</blockquote>
		</div>
		
		<div class="mdui-tab" mdui-tab>
			<a :href="'#tab_'+key" :class="{'mdui-btn':true,'mdui-ripple':true,'mdui-tab-active':key===0}" v-for="(name,id,key) of merchant" v-text="name" @click="tab_change(id)"></a>
		</div>
		
		<div class="mdui-table-fluid">
			<table class="mdui-table mdui-table-hoverable">
				<thead>
				<tr>
					<th></th>
					<th class="mdui-text-center" v-for="(name,id) of user_type">{{name}}</th>
				</tr>
				</thead>
				<tbody>
				
				<tr v-for="(purse_type_name,purse_type_id) of purse_type">
					<td>{{purse_type_name}}(分)</td>
					<td class="mdui-text-center" v-for="(user_type_name,user_type_id) of user_type">
						<a class="mdui-btn mdui-ripple mdui-text-color-orange" @click="detail(user_type_id,purse_type_id,'out')">出:{{list[user_type_id][purse_type_id].out}}</a>
						<a class="mdui-btn mdui-ripple mdui-text-color-green" @click="detail(user_type_id,purse_type_id,'into')">进:{{list[user_type_id][purse_type_id].into}}</a>
					</td>
				</tr>
				</tbody>
			</table>
		</div>
		<div class="mdui-dialog detail_dialog" style="max-width:none;">
			<div class="mdui-dialog-title">
				钱包流水详情
			</div>
			<div class="mdui-dialog-content" style="height:400px;">
				<div class="mdui-table-fluid">
					<table class="mdui-table mdui-table-hoverable">
						<thead>
						<tr>
							<th>#</th>
							<th>转账ID</th>
							<th>出/进账用户</th>
							<th>转账reason代码</th>
							<th>转账金额(分)</th>
							<th>行为名称</th>
							
							<th>创建时间</th>
						</tr>
						</thead>
						<tbody>
						
						<tr v-for="(val,key,index) of dialog_list.data">
							<td v-text="'#'+(key+1)"></td>
							<td v-text="val.id"></td>
							<td>{{val.out_user_id}}/{{val.into_user_id}}</td>
							<td v-text="val.reason"></td>
							<td v-text="val.amount"></td>
							<td v-text="dialog_reason[val.reason]"></td>
							
							<td v-text="val.created_at"></td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="mdui-dialog-actions">
				<pagination
						:pageInfo="{
						total:dialog_list.total,
						current:dialog_list.current_page,
						pagenum:dialog_list.per_page,
						page:dialog_list.last_page,
						pagegroup:5,
						skin:'#2196F3'
					}"
						@change="detail_search"
				></pagination>
				<a class="mdui-btn mdui-ripple" mdui-dialog-close>关闭</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				list : [],
				merchant : '',
				user_type : '',
				purse_type : '',
				dialog : '',
				dialog_list : [],
				dialog_reason : [],
				dialog_keyword : {
					page : 1,
					user_type_id : 0,
					purse_type_id : 0,
					type : '',
					reason : '',
				},
				keyword : {
					page : 1,
					merchant_id : 1,
				}
			}
		},
		methods : {
			detail(user_type_id,purse_type_id,type){
				this.dialog_keyword.page = 1;
				this.dialog_keyword.user_type_id = user_type_id;
				this.dialog_keyword.purse_type_id = purse_type_id;
				this.dialog_keyword.type = type;
				this.detail_init();
			},
			detail_search(page){
				this.dialog_keyword.page = page;
				this.detail_init();
			},
			detail_init(){
				let t = this;
				t.$API.get('/report/purse_detail',t.dialog_keyword).then(function(data){
					t.dialog_list = data.list;
					t.dialog_reason = data.reason;
					t.$nextTick(function(){
						t.dialog.open();
					});
				}).catch(function(msg){
					
				});
			},
			search(page){
				this.keyword.page = page;
				this.init();
			},
			tab_change(id){
				this.keyword.page = 1;
				this.keyword.merchant_id = id;
				this.init();
			},
			init(){
				let t = this;
				t.$API.get('/report/purse',t.keyword).then(function(data){
					t.list = data.list;
					t.merchant = data.merchant;
					t.user_type = data.user_type;
					t.purse_type = data.purse_type;
					t.$nextTick(function(){
						$('.mdui-tab').mutation();
					});
				}).catch(function(msg){
					
				});
			}
		},
		mounted(){
			let t = this;
			t.dialog = new mdui.Dialog('.detail_dialog',{history:false});
			t.init();
		}
	}
</script>
