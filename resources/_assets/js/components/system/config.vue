<template>
	<div class="purse_user">
		<div class="typo">
			<blockquote class="blockquote_normal">
				<a class="mdui-btn mdui-ripple mdui-color-theme" @click="add(0)"><i class="mdui-icon mdui-icon-left material-icons">add</i>添加</a>
			</blockquote>
			<div class="mdui-divider"></div>
			<blockquote class="blockquote_normal">
				<p>
					键：<input class="mdui-textfield-input input_normal" type="text" v-model="keyword.key" />
				</p>
				<p>
					值：<input class="mdui-textfield-input input_normal" type="text" v-model="keyword.value" />
				</p>
				<p>
					日期筛选：<vue-datepicker-local v-model="keyword.date" clearable />
				</p>
				<a class="mdui-btn mdui-ripple mdui-color-theme" @click="search(1)"><i class="mdui-icon mdui-icon-left material-icons">search</i>搜索</a>
			</blockquote>
		</div>
		<div class="mdui-table-fluid">
			<table class="mdui-table mdui-table-hoverable">
				<thead>
				<tr>
					<th>#</th>
					<th>键</th>
					<th>值</th>
					<th>提示</th>
					<th>状态</th>
					<th>创建时间</th>
					<th>排序</th>
					<th>操作</th>
				</tr>
				</thead>
				<tbody>
				
				<tr v-for="(val,key,index) of list.data">
					<td v-text="'#'+(key+1)"></td>
					<td v-text="val.key"></td>
					<td v-text="val.value"></td>
					<td v-text="val.tips"></td>
					<td v-text="val.status ? '启用' : '禁用'"></td>
					<td v-text="val.created_at"></td>
					<td v-text="val.rank"></td>
					<!--<td>
						<div class="mdui-btn-group">
							<a class="mdui-btn mdui-ripple mdui-color-teal-400 mdui-text-color-white" @click="rank(val.id,-1)">上移</a>
							<a class="mdui-btn mdui-ripple mdui-color-cyan-500 mdui-text-color-white" @click="rank(val.id,1)">下移</a>
						</div>
					</td>-->
					<td>
						<div class="mdui-btn-group">
							<a class="mdui-btn mdui-ripple mdui-color-theme" @click="add(val.id)">修改</a>
							<a class="mdui-btn mdui-ripple mdui-color-deep-orange" @click="del(val.id)">删除</a>
						</div>
					</td>
				</tr>
				</tbody>
			</table>
		</div>
		
		<!--修改弹窗-->
		<div class="mdui-dialog dialog_add">
			<div class="mdui-dialog-title">
				系统配置新增/修改
			</div>
			<div class="mdui-dialog-content">
				<form>
					<div class="mdui-container">
						<div class="mdui-textfield">
							<label class="mdui-textfield-label">配置键名</label>
							<input class="mdui-textfield-input" type="text" v-model="form.key" />
						</div>
					</div>
					<div class="mdui-container">
						<div class="mdui-textfield">
							<label class="mdui-textfield-label">配置值</label>
							<input class="mdui-textfield-input" type="text" v-model="form.value" />
						</div>
					</div>
					<div class="mdui-container">
						<div class="mdui-textfield">
							<label class="mdui-textfield-label">提示</label>
							<input class="mdui-textfield-input" type="text" v-model="form.tips" />
						</div>
					</div>
					<div class="mdui-container">
						<div class="mdui-textfield">
							<label class="mdui-textfield-label">展示列表排序(小位数靠前)</label>
							<input class="mdui-textfield-input" type="text" v-model="form.rank" />
						</div>
					</div>
					<div class="mdui-container">
						<label class="mdui-radio">
							<input type="radio" name="status" v-model="form.status" value="1" :checked="!!form.status" />
							<i class="mdui-radio-icon"></i>
							启用
						</label>
					</div>
					<div class="mdui-container">
						<label class="mdui-radio">
							<input type="radio" name="status" v-model="form.status" value="0" :checked="!form.status" />
							<i class="mdui-radio-icon"></i>
							禁用
						</label>
					</div>
				</form>
			</div>
			<div class="mdui-dialog-actions">
				<a class="mdui-btn mdui-ripple" mdui-dialog-close>取消</a>
				<a class="mdui-btn mdui-ripple mdui-color-theme" @click="add_submit">提交</a>
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
				form : '',
				dialog : '',
				keyword : {
					page : 1,
					key : '',
					value : '',
					date : [],
				},
			};
		},
		methods : {
			add(id){
				let t = this;
				t.dialog.open();
				t.$API.get('/system/config/'+id).then(function(data){
					t.form = data;
				}).catch(function(msg){
					
				});
			},
			add_submit(){
				let t = this;
				t.$API.post('/system/config',t.form).then(function(){
					t.dialog.close();
					t.init();
				}).catch(function(msg){
					
				});
			},
			del(id){
				let t = this;
				mdui.confirm('删除后数据不可恢复，确认删除请点击【确定】按钮', '确认?', function(){
					t.$API.delete('/system/config',{id:id}).then(function(){
						t.init();
					}).catch(function(msg){
						
					});
				},function(){},{history:false,confirmText:'确定',cancelText:'取消'});
			},
			search(page){
				this.keyword.page = page;
				this.init();
			},
			rank(id,action){
				let t = this;
				tips('更新排序中...');
				t.$API.post('/system/config_rank',{id:id,action:action}).then(function(data){
					t.init();
				}).catch(function(msg){
					
				});
			},
			init(){
				let t = this;
				t.$API.get('/system/config',t.keyword).then(function(data){
					t.list = data.list;
				}).catch(function(msg){
					
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
