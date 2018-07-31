<template>
	<div class="purse_user">
		<div class="mdui-typo">
			<blockquote class="blockquote_normal">
				注：此行为数据只统计API模块接口，其他暂不列入范围内
			</blockquote>
			<blockquote class="blockquote_normal">
				匹配url：<input class="mdui-textfield-input input_normal" type="text" v-model="keyword.url" />
				<a class="mdui-btn mdui-ripple mdui-color-theme" @click="search(1)"><i class="mdui-icon mdui-icon-left material-icons">search</i>搜索</a>
			</blockquote>
		</div>
		<div class="mdui-table-fluid">
			<table class="mdui-table mdui-table-hoverable">
				<thead>
				<tr>
					<th>#</th>
					<th>Url</th>
					<th>执行时间(S)</th>
					<th>参数明细</th>
					<th>备注</th>
					<th>创建时间</th>
				</tr>
				</thead>
				<tbody>
				
				<tr v-for="(val,key,index) of list.data">
					<td v-text="'#'+(key+1)"></td>
					<td v-text="val.url"></td>
					<td v-text="val.execute_time"></td>
					<td><a class="mdui-btn mdui-ripple mdui-color-theme" @click="detail(val)">view</a></td>
					<td v-text="val.remarks"></td>
					<td v-text="val.created_at"></td>
				</tr>
				</tbody>
			</table>
		</div>
		
		<div class="mdui-dialog dialog_add">
			<div class="mdui-dialog-title">
				变量详情
			</div>
			<div class="mdui-dialog-content">
				<div class="mdui-typo">
					<template v-for="(val,key,index) of dialog_data">
						<code>{{key}}</code>
						<pre>{{val}}</pre>
					</template>
					
				</div>
			</div>
			<div class="mdui-dialog-actions">
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
				dialog : '',
				dialog_data : '',
				keyword : {
					page : 1,
					url : '',
				},
			};
		},
		methods : {
			search(page){
				this.keyword.page = page;
				this.init();
			},
			detail(val){
				let t = this;
				t.dialog_data = {
					'URI' : val.url,
					'$_GET' : val.$_GET,
					'$_POST' : val.$_POST,
					'$_REQUEST' : val.$_REQUEST,
					'$_SESSION' : val.$_SESSION,
					'$_COOKIE' : val.$_COOKIE,
					'$_SERVER' : val.$_SERVER,
					created_at : val.created_at,
				};
				setTimeout(function(){
					t.dialog.open();
				},0);
				
			},
			init(){
				let t = this;
				get('/system/behavior',t.keyword,function(data){
					t.list = data.list;
				});
			}
		},
		mounted(){
			let t = this;
			t.dialog = new mdui.Dialog('.dialog_add',{history:false});
			t.init();
		}
	}
</script>
