<template>
	<div class="rule_user">
		<div class="mdui-typo" @keydown.enter="search(1)">
			<blockquote class="blockquote_normal">
				<a class="mdui-btn mdui-ripple mdui-color-theme" @click="add(0)"><i class="mdui-icon mdui-icon-left material-icons">add</i>添加</a>
			</blockquote>
			<div class="mdui-divider"></div>
			<blockquote class="blockquote_normal">
				<p>
					账户名：<input class="mdui-textfield-input input_normal" type="text" v-model="keyword.account" />
				</p>
				<p>
					用户ID：<input class="mdui-textfield-input input_normal" type="text" v-model="keyword.user_id" />
				</p>
				<p>
					账户类型：
					<label class="mdui-checkbox" v-for="(type) of types" style="margin-right:2rem;">
						<input type="checkbox" :value="type.id" v-model="keyword.type" />
						<i class="mdui-checkbox-icon"></i>
						{{type.name}}
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
					<th>用户ID</th>
					<th>登录账户</th>
					<th>真实姓名</th>
					<th>移动手机</th>
					<th>账户类型</th>
					<th>固码数量</th>
					<th>状态</th>
					<th>备注</th>
					<th>创建时间</th>
					<th>操作</th>
				</tr>
				</thead>
				<tbody>
				
				<tr v-for="(val,key,index) in list.data">
					<td v-text="'#'+(key+1)"></td>
					<td v-text="val.id"></td>
					<td v-text="val.user_id"></td>
					<td v-text="val.account"></td>
					<td v-text="val.realname"></td>
					<td v-text="val.mobile"></td>
					<td v-text="type_name(val.type)"></td>
					<td v-text="val.qrcodes_count"></td>
					<td v-text="val.status ? '启用' : '禁用'"></td>
					<td v-text="val.remarks"></td>
					<td v-text="val.created_at"></td>
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
				权限用户新增/修改
			</div>
			<div class="mdui-dialog-content" @keydown.enter="add_submit">
				<form>
					<div class="mdui-container">
						选择商户：
						<select class="mdui-select"  v-model="form.merchant_id">
							<option :value="key" v-for="(val,key) of merchants">{{val}}</option>
						</select>
					</div>
					<div class="mdui-container">
						<div class="mdui-textfield">
							<label class="mdui-textfield-label">用户ID</label>
							<input class="mdui-textfield-input" type="number" v-model="form.user_id" />
							<span class="mdui-textfield-helper">如果在平台有注册，请提供此ID便于信息关联</span>
						</div>
					</div>
					<div class="mdui-container">
						<div class="mdui-textfield">
							<label class="mdui-textfield-label">登录账户名</label>
							<input class="mdui-textfield-input" type="text" v-model="form.account" />
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
							<label class="mdui-textfield-label">移动手机</label>
							<input class="mdui-textfield-input" type="text" v-model="form.mobile" />
						</div>
					</div>
					<div class="mdui-container">
						<label class="mdui-radio" v-for="(type) in types" style="margin-right:2rem;">
							<input type="radio" name="type" v-model="form.type" :value="type.id" :checked="form.type === type.id" />
							<i class="mdui-radio-icon"></i>
							{{type.name}}
						</label>
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
                types : [],
                merchants : [],
				group : '',
				form : '',
				dialog : '',
				keyword : {
					page : 1,
					account : '',
					user_id : '',
					type : [],
				},
			};
		},
		methods : {
            type_name(id){
                for(let i in this.types){
                    if(this.types[i].id === id){
                        return this.types[i].name;
					}
				}
			},
			add(id){
				let t = this;
				t.$API.get('/pay/collect/'+id).then(function(data){
					t.form = data;
                    t.$nextTick(function(){
                        $('.mdui-dialog').mutation();
                        t.dialog.open();
                    });
				}).catch(function(msg){
				
				});
			},
			add_submit(){
				let t = this;
				t.$API.post('/pay/collect',t.form).then(function(){
					t.dialog.close();
					t.init();
				}).catch(function(msg){
				
				});
			},
			del(id){
				let t = this;
				mdui.confirm('删除后数据不可恢复，确认删除请点击【确定】按钮', '确认？', function(){
					t.$API.del('/pay/collect',{id:id}).then(function(){
						t.init();
					}).catch(function(msg){
					
					});
				},function(){},{history:false,confirmText:'确定',cancelText:'取消'});
			},
			search(page){
				this.keyword.page = page;
				this.init();
			},
			init(){
				let t = this;
				t.$API.get('/pay/collect',t.keyword).then(function(data){
					t.list = data.list;
					t.types = data.types;
					t.merchants = data.merchants;
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
