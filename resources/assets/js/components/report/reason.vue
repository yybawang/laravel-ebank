<template>
	<div class="report_reason">
		<div class="mdui-typo">
			<blockquote class="blockquote_normal">
				<p>注：reason 行为流水统计，根据实际成功的流水计算所得</p>
			</blockquote>
		</div>
		<div class="mdui-table-fluid">
			<table class="mdui-table mdui-table-hoverable">
				<thead>
				<tr>
					<th>#</th>
					<th>reason</th>
					<th>行为名称</th>
					<th>出账用户类型</th>
					<th>出账钱包类型</th>
					<th>进账用户类型</th>
					<th>进账钱包类型</th>
					<th>交易金额(分)</th>
					<th>备注</th>
					<th>操作</th>
				</tr>
				</thead>
				<tbody>
				
				<tr v-for="(val,key,index) in list.data">
					<td v-text="key+1"></td>
					<td v-text="val.reason"></td>
					<td v-text="val.reason_name"></td>
					<td v-text="user_type[val.out_user_type_id]"></td>
					<td v-text="purse_type[val.out_purse_type_id]"></td>
					<td v-text="user_type[val.into_user_type_id]"></td>
					<td v-text="purse_type[val.into_purse_type_id]"></td>
					<td v-text="val.amount"></td>
					<td v-text="val.reason_remarks"></td>
					<td>
						<div class="mdui-btn-group">
							<a class="mdui-btn mdui-ripple mdui-color-theme" @click="detail(val.reason)">详情</a>
						</div>
					</td>
				</tr>
				</tbody>
			</table>
		</div>
		
		<div class="mdui-dialog dialog_detail">
			<div class="mdui-dialog-title">
				reason 行为流水详情
			</div>
			<div class="mdui-dialog-content" style="height:400px;">
				<table class="mdui-table mdui-table-hoverable table-data">
					<thead>
					<tr>
						<th>#</th>
						<th>转账ID</th>
						<th>转账reason代码</th>
						<th>转账金额(分)</th>
						
						<th>出账用户ID</th>
						<th>出账钱包ID</th>
						<th>出账后余额(分)</th>
						
						<th>进账用户ID</th>
						<th>进账钱包ID</th>
						<th>进账后余额(分)</th>
						
						<th>上级ID</th>
						<th>详情</th>
						<th>备注</th>
						<th>创建时间</th>
					</tr>
					</thead>
					<tbody>
					
					<tr v-for="(val,key,index) of dialog_list.data">
						<td v-text="key+1"></td>
						<td v-text="val.id"></td>
						<td v-text="val.reason"></td>
						<td v-text="val.amount"></td>
						
						<td v-text="val.out_user_id"></td>
						<td v-text="val.out_purse_id"></td>
						<td v-text="val.out_balance"></td>
						
						<td v-text="val.into_user_id"></td>
						<td v-text="val.into_purse_id"></td>
						<td v-text="val.into_balance"></td>
						
						<td v-text="val.parent_id"></td>
						<td v-text="val.detail"></td>
						<td v-text="val.remarks"></td>
						<td v-text="val.created_at"></td>
					</tr>
					</tbody>
				</table>
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
				user_type : '',
				purse_type : '',
				dialog : '',
				dialog_list : [],
				dialog_keyword : {
					page : 1,
					reason : '',
				},
				keyword : {
					page : 1
				}
			}
		},
		methods : {
			detail(reason){
				this.dialog_keyword.page = 1;
				this.dialog_keyword.reason = reason;
				this.detail_init();
			},
			detail_search(page){
				this.dialog_keyword.page = page;
				this.detail_init();
			},
			detail_init(){
				let t = this;
				get('/report/reason_detail',t.dialog_keyword,function(data){
					t.dialog_list = data;
					setTimeout(function(){
						t.dialog.open();
					},0);
				});
			},
			search(page){
				this.keyword.page = page;
				this.init();
			},
			init(){
				let t = this;
				get('/report/reason',t.keyword,function(data){
					t.list = data.list;
					t.user_type = data.user_type;
					t.purse_type = data.purse_type;
				});
			}
		},
		mounted(){
			let t = this;
			t.dialog = new mdui.Dialog('.dialog_detail',{history:false});
			t.init();
		}
	}
</script>
