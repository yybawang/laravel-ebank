<template>
	<div class="merchant">
		<div class="typo">
			<blockquote class="blockquote_normal">
				<a class="mdui-btn mdui-ripple mdui-color-theme" @click="add(0)"><i class="mdui-icon mdui-icon-left material-icons">add</i>添加</a>
			</blockquote>
			<div class="mdui-divider"></div>
			<blockquote class="blockquote_normal">
				<p>
					名称：<input class="mdui-textfield-input input_normal" type="text" v-model="keyword.name" />
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
					<th>ID</th>
					<th>支付渠道名称</th>
					<th>状态</th>
					<th>备注</th>
					<th>创建时间</th>
					<th>修改时间</th>
					<th>操作</th>
				</tr>
				</thead>
				<tbody>
				
				<tr v-for="(val,key,index) in list.data">
					<td v-text="'#'+(key+1)"></td>
					<td v-text="val.id"></td>
					<td v-text="val.name"></td>
					<td v-text="val.status ? '启用' : '禁用'"></td>
					<td v-text="val.remarks"></td>
					<td v-text="val.created_at"></td>
					<td v-text="val.updated_at"></td>
					<td>
						<div class="mdui-btn-group">
							<a class="mdui-btn mdui-ripple mdui-color-theme" @click="add(val.id)">修改</a>
							<a v-if="val.id > 1" class="mdui-btn mdui-ripple mdui-color-deep-orange" @click="del(val.id)">删除</a>
						</div>
					</td>
				</tr>
				</tbody>
			</table>
		</div>
		
		<!--修改弹窗-->
		<div class="mdui-dialog dialog_add">
			<div class="mdui-dialog-title">
				支付渠道新增/修改
			</div>
			<div class="mdui-dialog-content">
				<form>
					<div class="mdui-container">
						<div class="mdui-textfield">
							<label class="mdui-textfield-label">支付渠道名称</label>
							<input class="mdui-textfield-input" type="text" v-model="form.name" />
						</div>
					</div>
					<div class="mdui-container">
						<div class="mdui-tab" mdui-tab>
							<a :href="'#tab_'+key" :class="{'mdui-btn':true,'mdui-ripple':true,'mdui-tab-active':key==0}" v-for="(config,name,key) of form.pay_config" v-text="name" @click="tab_change(name)"></a>
						</div>
						<div class="mdui-divider"></div>
						<div class="payment_field" v-for="(val,key) of form.pay_config[pay_config_name]">
							<div :class="{'mdui-textfield':true,'mdui-textfield-has-bottom':true,'mdui-textfield-disabled':!!val.disabled}">
								<label class="mdui-textfield-label" v-text="val.field"></label>
								<input class="mdui-textfield-input" :disabled="!!val.disabled" type="text" v-model="val.value" />
								<span class="mdui-textfield-helper" v-text="val.description"></span>
							</div>
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
				form : {pay_config:''},
				dialog : '',
				pay_config_name : 'alipay',
				keyword : {
					page : 1,
					name : '',
					date : [],
				},
			};
		},
		methods : {
			add(id){
				let t = this;
				get('/pay/detail',{id:id},function(data){
					t.form = data;
					setTimeout(function(){
						$('.mdui-tab').mutation();
						t.dialog.open();
					},0);
				});
			},
			add_submit(){
				let t = this;
				post('/pay',t.form,function(){
					t.dialog.close();
					t.init();
				});
			},
			del(id){
				let t = this;
				mdui.confirm('删除后数据不可恢复，确认删除请点击【确定】按钮', '确认?', function(){
					del('/pay',{id:id},function(){
						t.init();
					});
				},function(){},{history:false,confirmText:'确定',cancelText:'取消'});
			},
			search(page){
				this.keyword.page = page;
				this.init();
			},
			tab_change(name){
				this.pay_config_name = name;
			},
			init(){
				let t = this;
				get('/pay',t.keyword,function(data){
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