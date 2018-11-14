<template>
	<div class="transfer_reason">
		<div class="mdui-typo">
			<blockquote class="blockquote_normal">
				<a class="mdui-btn mdui-ripple mdui-color-theme" @click="add(0)"><i class="mdui-icon mdui-icon-left material-icons">add</i>添加</a>
			</blockquote>
			<div class="mdui-divider"></div>
			<blockquote class="blockquote_normal">
				<p>
					reason：<input class="mdui-textfield-input input_normal" type="text" v-model="keyword.reason" />
				</p>
				<p>
					行为ID：<input class="mdui-textfield-input input_normal" type="text" v-model="keyword.id" />
				</p>
				<p>
					转账行为名称：<input class="mdui-textfield-input input_normal" type="text" v-model="keyword.name" />
				</p>
				<a class="mdui-btn mdui-ripple mdui-color-theme" @click="search(1)"><i class="mdui-icon mdui-icon-left material-icons">search</i>搜索</a>
			</blockquote>
		</div>
		
		<div class="mdui-tab" mdui-tab>
			<a :href="'#tab_'+key" :class="{'mdui-btn':true,'mdui-ripple':true,'mdui-tab-active':key===0}" v-for="(name,id,key) of merchant" v-text="name" @click="tab_change(id)"></a>
		</div>
		
		<div class="mdui-table-fluid">
			<table class="mdui-table mdui-table-hoverable">
				<thead>
				<tr>
					<th>#</th>
					<th>ID</th>
					<th>转账行为名称</th>
					<th>reason 代码</th>
					<th>出账关联</th>
					<th>进账关联</th>
					<th>状态</th>
					<th>备注</th>
					<th>创建时间</th>
					<th>操作</th>
				</tr>
				</thead>
				<tbody>
				<template v-for="(val,key) in list.data">
					<tr>
						<td><span v-text="'#'+(key+1)"></span></td>
						<td><span v-text="val.id"></span></td>
						<td><span v-text="val.name"></span></td>
						<td><span v-text="val.reason"></span></td>
						<td><span class="mdui-text-color-deep-orange" v-text="user_type[val.out_user_type_id] + '->' + purse_type[val.out_purse_type_id]"></span></td>
						<td><span class="mdui-text-color-teal" v-text="user_type[val.into_user_type_id] + '->' + purse_type[val.into_purse_type_id]"></span></td>
						<td><span v-text="val.status ? '启用' : '禁用'"></span></td>
						<td><span v-text="val.remarks"></span></td>
						<td><span v-text="val.created_at"></span></td>
						<td>
							<div class="mdui-btn-group">
								<a class="mdui-btn mdui-ripple mdui-color-theme" @click="add(val.id)">修改</a>
								<a class="mdui-btn mdui-ripple mdui-color-deep-orange" @click="del(val.id)">删除</a>
							</div>
						</td>
					</tr>
				</template>
				</tbody>
			</table>
		</div>
		
		<!--修改弹窗-->
		<div class="mdui-dialog dialog_add">
			<div class="mdui-dialog-title">
				转账 reason 新增/修改
			</div>
			<div class="mdui-dialog-content">
				<form>
					<div class="mdui-container">
						所属商户：
						<select class="mdui-select" v-model="form.merchant_id">
							<option :value="id" v-for="(name,id) of merchant">{{name}}</option>
						</select>
					</div>
					<div class="mdui-container">
						<div class="mdui-textfield">
							<label class="mdui-textfield-label">转账行为名称</label>
							<input class="mdui-textfield-input" type="text" v-model="form.name" placeholder="中文备注，用户查看流水时展示文案" />
						</div>
					</div>
					<div class="mdui-container mdui-p-y-2">
						出账身份类型：
						<select class="mdui-select" v-model="form.out_user_type_id">
							<option :value="id" v-for="(name,id) of user_type">{{name}}</option>
						</select>
						　　　　
						出账钱包类型：
						<select class="mdui-select" v-model="form.out_purse_type_id">
							<option :value="id" v-for="(name,id) of purse_type">{{name}}</option>
						</select>
					</div>
					<div class="mdui-container mdui-p-y-2">
						进账身份类型：
						<select class="mdui-select" v-model="form.into_user_type_id">
							<option :value="id" v-for="(name,id) of user_type">{{name}}</option>
						</select>
						　　　　
						进账钱包类型：
						<select class="mdui-select" v-model="form.into_purse_type_id">
							<option :value="id" v-for="(name,id) of purse_type">{{name}}</option>
						</select>
					</div>
					<div class="mdui-container">
						<div class="mdui-textfield">
							<label class="mdui-textfield-label">reason 代码</label>
							<input class="mdui-textfield-input" type="text" v-model="form.reason" placeholder="新增时自动生成" />
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
							<input class="mdui-textfield-input" type="text" v-model="form.remarks" placeholder="后台详细备注" />
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
				user_type : '',
				purse_type : '',
				merchant : '',
				form : '',
				max : 1000,		// 自动生成reason需要
				dialog : '',
				keyword : {
					page : 1,
					id : '',
					name : '',
					merchant_id : 1,
					reason : '',
				},
			};
		},
		watch : {
			'form.out_user_type_id' : function(n,old){
				this.add_purse_change();
			},
			'form.out_purse_type_id' : function(n,old){
				this.add_purse_change();
			},
			'form.into_user_type_id' : function(n,old){
				this.add_purse_change();
			},
			'form.into_purse_type_id' : function(n,old){
				this.add_purse_change();
			}
		},
		methods : {
			add(id){
				let t = this;
				t.dialog.open();
				t.$API.get('/reason/index/'+id).then(function(data){
					t.form = data.detail;
					t.max = data.max;
				}).catch(function(msg){
					
				});
			},
			add_submit(){
				let t = this;
				t.$API.post('/reason/index',t.form).then(function(){
					t.dialog.close();
					t.init();
				}).catch(function(msg){
					
				});
			},
			del(id){
				let t = this;
				mdui.confirm('删除后数据不可恢复，确认删除请点击【确定】按钮', '确认？', function(){
					t.$API.delete('/reason/index',{id:id}).then(function(){
						t.init();
					}).catch(function(msg){
						
					});
				},function(){},{history:false,confirmText:'确定',cancelText:'取消'});
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
			add_purse_change(){
				let form = this.form;
				if(!form.id && form.out_user_type_id && form.out_purse_type_id && form.into_user_type_id && form.into_purse_type_id){
					form.reason = this.max + '' + form.out_user_type_id.padStart(2,'0') + '' + form.out_purse_type_id.padStart(2,'0') + form.merchant_id + form.into_user_type_id.padStart(2,'0') + '' + form.into_purse_type_id.padStart(2,'0');
				}
			},
			init(){
				let t = this;
				t.$API.get('/reason/index',t.keyword).then(function(data){
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
			t.dialog = new mdui.Dialog('.dialog_add',{history:false});
			t.init();
		}
	}
</script>