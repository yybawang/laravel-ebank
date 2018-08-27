<template>
	<div class="transfer_index">
		<div class="typo">
			<blockquote class="blockquote_normal">
				<p>
					用户ID：<input class="mdui-textfield-input input_normal" type="text" v-model="keyword.user_id" />
				</p>
				<p>
					reason：<input class="mdui-textfield-input input_normal" type="text" v-model="keyword.reason" />
				</p>
				<p>
					日期筛选：<vue-datepicker-local v-model="keyword.date" clearable />
				<p>
					钱包类型：
					<label class="mdui-checkbox" v-for="(name,id) of purse_type" style="margin-right:2rem;">
						<input type="checkbox" :value="id" v-model="keyword.purse_type_id" />
						<i class="mdui-checkbox-icon"></i>
						{{name}}
					</label>
				</p>
				<p>
					身份类型：
					<label class="mdui-checkbox" v-for="(name,id) of user_type" style="margin-right:2rem;">
						<input type="checkbox" :value="id" v-model="keyword.user_type_id" />
						<i class="mdui-checkbox-icon"></i>
						{{name}}
					</label>
				</p>
				<a class="mdui-btn mdui-ripple mdui-color-theme" @click="search(1)"><i class="mdui-icon mdui-icon-left material-icons">search</i>搜索</a>
				<a class="mdui-btn mdui-ripple mdui-color-pink" @click="exports"><i class="mdui-icon mdui-icon-left material-icons">file_upload</i>导出</a>
			</blockquote>
		</div>
		
		<div class="mdui-tab" mdui-tab>
			<a :href="'#tab_'+key" :class="{'mdui-btn':true,'mdui-ripple':true,'mdui-tab-active':key==0}" v-for="(name,id,key) of merchant" v-text="name" @click="tab_change(id)"></a>
		</div>
		
		<div class="mdui-table-fluid table-data-fluid">
			<table class="mdui-table mdui-table-hoverable table-data">
				<thead>
				<tr>
					<th>#</th>
					<th>商户</th>
					<th>转账ID</th>
					<th>转账reason</th>
					<th>reason说明</th>
					<th>转账金额(分)</th>
					
					<!--<th>上级ID</th>-->
					<!--<th>详情</th>-->
					<th>创建时间</th>
					<th>备注</th>
					<th>操作</th>
				</tr>
				</thead>
				<tbody>
				
				<template v-for="(val,key,index) of list.data">
					
					<tr class="mdui-color-grey-200" @dblclick="val.more = !val.more">
						<td v-text="'#'+(key+1)"></td>
						<td v-html="merchant[val.merchant_id]"></td>
						<td v-text="val.id"></td>
						<td v-text="val.reason"></td>
						<td v-text="reason[val.reason]"></td>
						<td v-text="val.amount"></td>
						
						<!--<td v-text="val.parent_id"></td>-->
						<!--<td v-text="val.detail"></td>-->
						<td v-text="val.created_at"></td>
						<td v-text="val.remarks"></td>
						<td>
							<div class="mdui-btn-group">
								<a class="mdui-btn mdui-ripple mdui-color-theme" v-if="val.status == 1" @click.stop="untransfer(val.id,val.amount)">单笔冲正</a>
								<a class="mdui-btn" disabled v-if="val.status == 2" mdui-tooltip="{content:'此流水已不再具有参考价值，标记为废弃，仅做记录查询用途',delay:500}">已冲正</a>
							</div>
						</td>
					</tr>
					<tr v-show="val.more">
						<td class="mdui-text-color-deep-orange"></td>
						<td class="mdui-text-color-deep-orange">出账信息：</td>
						<td class="mdui-text-color-deep-orange">用户ID：<span v-text="val.out_user_id"></span></td>
						<td class="mdui-text-color-deep-orange" v-text="user_type[val.out_user_type_id]"></td>
						<td class="mdui-text-color-deep-orange" v-text="purse_type[val.out_purse_type_id]"></td>
						<td class="mdui-text-color-deep-orange">钱包ID：<span v-text="val.out_purse_id"></span></td>
						<td class="mdui-text-color-deep-orange" colspan="3">出账后余额(原)：<span v-text="val.out_balance"></span>(<span v-text="'+'+val.amount"></span>)</td>
					</tr>
					<tr v-show="val.more">
						<td class="mdui-text-color-teal"></td>
						<td class="mdui-text-color-teal">进账信息：</td>
						<td class="mdui-text-color-teal">用户ID：<span v-text="val.into_user_id"></span></td>
						<td class="mdui-text-color-teal" v-text="user_type[val.into_user_type_id]"></td>
						<td class="mdui-text-color-teal" v-text="purse_type[val.into_purse_type_id]"></td>
						<td class="mdui-text-color-teal">钱包ID：<span v-text="val.into_purse_id"></span></td>
						<td class="mdui-text-color-teal" colspan="3">进账后余额(原)：<span v-text="val.into_balance"></span>(<span v-text="'-'+val.amount"></span>)</td>
					</tr>
				</template>
				</tbody>
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
				purse_type : '',
				user_type : '',
				merchant : '',
				reason : '',
				keyword : {
					page : 1,
					export : 0,
					user_id : '',
					reason : '',
					purse_type_id : [],
					user_type_id : [],
					merchant_id : 1,
					date : [],
				},
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
			untransfer(id,amount) {
				let t = this;
				mdui.prompt('冲正此记录后可能造成业务匹配问题，对应的转账金额也会原路返还，知悉后请在下方输入【冲正原因】', '冲正金额(分)：'+amount, function (value) {
					if(value){
						post('/transfer/untransfer', {id: id,remarks:value}, function (data) {
							mdui.alert('已成功冲正并返还金额', function () {}, {history: false});
							t.init();
						})
					}
				}, function () {}, {history: false, confirmText: '确定', cancelText: '取消'});
			},
			tab_change(id){
				this.keyword.page = 1;
				this.keyword.merchant_id = id;
				this.init();
			},
			init(){
				let t = this;
				get('/transfer',t.keyword,function(data){
					t.list = data.list;
					t.purse_type = data.purse_type;
					t.user_type = data.user_type;
					t.merchant = data.merchant;
					t.reason = data.reason;
					if(t.keyword.export){
						mdui.alert('可在左侧【导出任务】菜单查看任务状态并下载文件','已放入导出任务',function(){},{history:false});
					}
					setTimeout(function(){
						$('.mdui-tab').mutation();
					},0);
				});
			}
		},
		mounted(){
			let t = this;
			t.init();
		}
	}
</script>
