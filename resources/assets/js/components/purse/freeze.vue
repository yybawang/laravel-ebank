<template>
	<div class="purse_freeze">
		<div class="mdui-typo">
			<blockquote class="blockquote_normal">
				<p>
					冻结ID：<input class="mdui-textfield-input input_normal" type="text" v-model="keyword.id" />
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
		<div class="mdui-table-fluid">
			<table class="mdui-table mdui-table-hoverable">
				<thead>
				<tr>
					<th>#</th>
					<th>ID</th>
					<th>钱包ID</th>
					<th>冻结余额(分)</th>
					<th>状态</th>
					<th>备注</th>
					<th>创建时间</th>
					<th>上次修改时间</th>
					<th>操作</th>
				</tr>
				</thead>
				<tbody>
				
				<tr v-for="(val,key,index) of list.data">
					<td v-text="'#'+(key+1)"></td>
					<td v-text="val.id"></td>
					<td v-text="val.purse_id"></td>
					<td v-text="val.amount"></td>
					<td v-text="status[val.status]"></td>
					<td v-text="val.remarks"></td>
					<td v-text="val.created_at"></td>
					<td v-text="val.updated_at"></td>
					<td>
						<div class="mdui-btn-group">
							<a class="mdui-btn mdui-ripple mdui-color-theme" v-if="val.status == 1" @click="unfreeze(val.id)">解冻</a>
						</div>
					</td>
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
					id : '',
				},
				status : [
					'无效状态0',
					'冻结中',
					'已解冻',
				]
			};
		},
		methods : {
			search(page){
				this.keyword.page = page;
				this.init();
			},
			unfreeze(id){
				let t = this;
				mdui.confirm('解冻此记录后可能造成业务匹配问题，点击【确定】继续','确认?',function(){
					post('/purse/unfreeze',{id:id},function(data){
						mdui.alert('已成功解冻并返还金额',function(){},{history:false});
						t.init();
					})
				},function(){},{history:false,confirmText:'确定',cancelText:'取消'});
				
			},
			init(){
				let t = this;
				get('/purse/freeze',t.keyword,function(data){
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