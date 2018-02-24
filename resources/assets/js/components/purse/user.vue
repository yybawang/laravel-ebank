<template>
	<div class="purse_user">
		<div class="mdui-typo">
			<blockquote class="blockquote_normal">
				用户ID：<input class="mdui-textfield-input input_normal" type="text" v-model="keyword.user_id" />
				钱包类型：
				<label class="mdui-checkbox" v-for="(name,id) of purse_type" style="margin-right:2rem;">
					<input type="checkbox" :value="id" v-model="keyword.purse_type_id" />
					<i class="mdui-checkbox-icon"></i>
					{{name}}
				</label>
				<a class="mdui-btn mdui-ripple mdui-color-theme" @click="search(1)"><i class="mdui-icon mdui-icon-left material-icons">search</i>搜索</a>
			</blockquote>
		</div>
		<div class="mdui-table-fluid">
			<table class="mdui-table mdui-table-hoverable">
				<thead>
				<tr>
					<th>#</th>
					<th>钱包ID</th>
					<th>用户ID</th>
					<th>钱包类型</th>
					<th>总余额(分)</th>
					<th>冻结余额(分)</th>
					<th>可用余额(分)</th>
					<th>状态</th>
					<th>备注</th>
					<th>创建时间</th>
					<th>上次修改时间</th>
					<!--<th>操作</th>-->
				</tr>
				</thead>
				<tbody>
				
				<tr v-for="(val,key,index) of list.data">
					<td v-text="key+1"></td>
					<td v-text="val.id"></td>
					<td v-text="val.user_id"></td>
					<td v-text="purse_type[val.purse_type_id]"></td>
					<td v-text="val.balance"></td>
					<td v-text="val.freeze"></td>
					<td v-text="val.balance - val.freeze"></td>
					<td v-text="val.status ? '启用' : '禁用'"></td>
					<td v-text="val.remarks"></td>
					<td v-text="val.created_at"></td>
					<td v-text="val.updated_at"></td>
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
				keyword : {
					page : 1,
					user_id : '',
					purse_type_id : [],
				},
			};
		},
		methods : {
			search(page){
				this.keyword.page = page;
				this.init();
			},
			init(){
				let t = this;
				get('/purse/user',t.keyword,function(data){
					t.list = data.list;
					t.purse_type = data.purse_type;
				});
			}
		},
		mounted(){
			let t = this;
			t.init();
		}
	}
</script>