<template>
	<div class="purse">
		<div class="mdui-typo">
			<blockquote class="blockquote_normal">
				<p>
					身份类型：
					<label class="mdui-checkbox" v-for="(name,id) of user_type" style="margin-right:2rem;">
						<input type="checkbox" :value="id" v-model="keyword.user_type_id" />
						<i class="mdui-checkbox-icon"></i>
						{{name}}
					</label>
				</p>
				<p>
					钱包类型：
					<label class="mdui-checkbox" v-for="(name,id) of purse_type" style="margin-right:2rem;">
						<input type="checkbox" :value="id" v-model="keyword.purse_type_id" />
						<i class="mdui-checkbox-icon"></i>
						{{name}}
					</label>
				</p>
				<p>
					<a class="mdui-btn mdui-ripple mdui-color-theme" @click="search(1)"><i class="mdui-icon mdui-icon-left material-icons">search</i>搜索</a>
				</p>
			</blockquote>
		</div>
		
		<div class="mdui-tab" mdui-tab>
			<a :href="'#tab_'+key" :class="{'mdui-btn':true,'mdui-ripple':true,'mdui-tab-active':key==0}" v-for="(name,id,key) of merchant" v-text="name" @click="tab_change(id)"></a>
		</div>
		
		<div class="mdui-table-fluid">
			<table class="mdui-table mdui-table-hoverable">
				<thead>
				<tr>
					<th>#</th>
					<th>钱包ID</th>
					<th>商户</th>
					<th>身份类型</th>
					<th>钱包类型</th>
					<th>总余额(分)</th>
					<th>冻结余额(分)</th>
					<th>可用余额(分)</th>
					<th>状态</th>
					<th>备注</th>
					<th>创建时间</th>
					<!--<th>操作</th>-->
				</tr>
				</thead>
				<tbody>
				
				<tr v-for="(val,key,index) of list.data">
					<td v-text="'#'+(key+1)"></td>
					<td v-text="val.id"></td>
					<td v-text="merchant[val.merchant_id]"></td>
					<td v-text="user_type[val.user_type_id]"></td>
					<td v-text="purse_type[val.purse_type_id]"></td>
					<td v-text="val.balance"></td>
					<td v-text="val.freeze"></td>
					<td v-text="val.balance - val.freeze"></td>
					<td v-text="val.status ? '启用' : '禁用'"></td>
					<td v-text="val.remarks"></td>
					<td v-text="val.created_at"></td>
					<!--<td>
						<div class="mdui-btn-group">
							<a class="mdui-btn mdui-ripple mdui-color-theme" @click="add(val.id)">修改</a>
							<a class="mdui-btn mdui-ripple mdui-color-deep-orange" @click="del(val.id)">删除</a>
						</div>
					</td>-->
				</tr>
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
				keyword : {
					page : 1,
					user_id : '',
					purse_type_id : [],
					user_type_id : [],
					merchant_id : 1,
				},
			};
		},
		methods : {
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
				t.$API.get('/purse/purse',t.keyword).then(function(data){
					t.list = data.list;
					t.merchant = data.merchant;
					t.purse_type = data.purse_type;
					t.user_type = data.user_type;
					t.$nextTick(function(){
						$('.mdui-tab').mutation();
					});
				});
			}
		},
		mounted(){
			let t = this;
			t.init();
		}
	}
</script>
