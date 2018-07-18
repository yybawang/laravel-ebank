<template>
	<div class="rule_user">
		<div class="mdui-typo">
			<blockquote class="blockquote_normal">
				<a class="mdui-btn mdui-ripple mdui-color-theme" @click="add(0)"><i class="mdui-icon mdui-icon-left material-icons">add</i>添加</a>
			</blockquote>
			<div class="mdui-divider"></div>
			<blockquote class="blockquote_normal">
				登录名：<input class="mdui-textfield-input input_normal" type="text" v-model="keyword.name" />
				真实姓名：<input class="mdui-textfield-input input_normal" type="text" v-model="keyword.realname" />
				手机号码：<input class="mdui-textfield-input input_normal" type="text" v-model="keyword.mobile" />
				<a class="mdui-btn mdui-ripple mdui-color-theme" @click="search(1)"><i class="mdui-icon mdui-icon-left material-icons">search</i>搜索</a>
			</blockquote>
		</div>
		<div class="mdui-table-fluid">
			<table class="mdui-table mdui-table-hoverable">
				<thead>
				<tr>
					<th>#</th>
					<th>ID</th>
					<th>登录名</th>
					<th>真实姓名</th>
					<th>邮箱</th>
					<th>移动手机</th>
					<th>所属权限组</th>
					<th>状态</th>
					<th>备注</th>
					<th>最后登录时间</th>
					<th>创建时间</th>
					<th>修改时间</th>
					<th>操作</th>
				</tr>
				</thead>
				<tbody>
				
				<tr v-for="(val,key,index) in list.data">
					<td v-text="key+1"></td>
					<td v-text="val.id"></td>
					<td v-text="val.name"></td>
					<td v-text="val.realname"></td>
					<td v-text="val.email"></td>
					<td v-text="val.mobile"></td>
					<td v-text="group[val.group_id]"></td>
					<td v-text="val.status ? '启用' : '禁用'"></td>
					<td v-text="val.remarks"></td>
					<td v-text="val.last_login"></td>
					<td v-text="val.created_at"></td>
					<td v-text="val.updated_at"></td>
					<td>
						<div class="mdui-btn-group">
							<a class="mdui-btn mdui-ripple mdui-color-theme" @click="add(val.id)">修改</a>
							<a class="mdui-btn mdui-ripple mdui-color-deep-orange" v-if="val.id != 1" @click="del(val.id)">删除</a>
						</div>
					</td>
				</tr>
				</tbody>
			</table>
		</div>
		
		<!--修改弹窗-->
		<div class="mdui-dialog dialog_add">
			<div class="mdui-dialog-title">
				权限用户新增/修改
			</div>
			<div class="mdui-dialog-content">
				<form>
					<div class="mdui-container">
						选择权限组：
						<select class="mdui-select"  v-model="form.group_id">
							<option :value="key" v-for="(val,key) of group">{{val}}</option>
						</select>
					</div>
					<div class="mdui-container">
						<div class="mdui-textfield">
							<label class="mdui-textfield-label">登录名</label>
							<input class="mdui-textfield-input" type="text" v-model="form.name" />
						</div>
					</div>
					<div class="mdui-container">
						<div class="mdui-textfield">
							<label class="mdui-textfield-label">登录密码(不修改则不填)</label>
							<input class="mdui-textfield-input" type="password" v-model="form.password" />
						</div>
					</div>
					<div class="mdui-container">
						<div class="mdui-textfield">
							<label class="mdui-textfield-label">真实姓名</label>
							<input class="mdui-textfield-input" type="text" v-model="form.realname" />
						</div>
					</div>
					<div class="mdui-container">
						<div class="mdui-textfield">
							<label class="mdui-textfield-label">邮箱</label>
							<input class="mdui-textfield-input" type="text" v-model="form.email" />
						</div>
					</div>
					<div class="mdui-container">
						<div class="mdui-textfield">
							<label class="mdui-textfield-label">移动手机</label>
							<input class="mdui-textfield-input" type="text" v-model="form.mobile" />
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
					<div class="mdui-container">
						<div class="mdui-textfield">
							<label class="mdui-textfield-label">备注</label>
							<input class="mdui-textfield-input" type="text" v-model="form.remarks" />
						</div>
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
				group : '',
				form : '',
				dialog : '',
				keyword : {
					page : 1,
					name : '',
					realname : '',
					mobile : '',
				},
			};
		},
		methods : {
			add(id){
				let t = this;
				t.dialog.open();
				get('/rule/user_detail',{id:id},function(data){
					t.form = data;
				});
			},
			add_submit(){
				let t = this;
				post('/rule/user',t.form,function(){
					t.dialog.close();
					t.init();
				});
			},
			del(id){
				let t = this;
				mdui.confirm('删除后数据不可恢复，确认删除请点击【确定】按钮', '确认？', function(){
					del('/rule/user',{id:id},function(){
						t.init();
					});
				},function(){},{history:false,confirmText:'确定',cancelText:'取消'});
			},
			search(page){
				this.keyword.page = page;
				this.init();
			},
			init(){
				let t = this;
				get('/rule/user',t.keyword,function(data){
					t.list = data.list;
					t.group = data.group;
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