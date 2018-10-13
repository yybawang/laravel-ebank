<template>
	<div class="export">
		<div class="typo">
			<blockquote class="blockquote_normal">
				* 记得及时删除不必要的导出文件，避免服务器磁盘占用。删除后外链下载失效。
			</blockquote>
			<blockquote class="blockquote_normal">
				<p>
					操作名：<input class="mdui-textfield-input input_normal" type="text" v-model="keyword.name" />
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
					<th>任务名</th>
					<!--<th>文件名</th>-->
					<th>文件路径</th>
					<th>下载次数</th>
					<th>状态</th>
					<!--<th>备注</th>-->
					<th>创建时间</th>
					<th>完成时间</th>
					<th>操作</th>
				</tr>
				</thead>
				<tbody>
				
				<tr v-for="(val,key,index) in list.data">
					<td v-text="'#'+(key+1)"></td>
					<td v-text="val.id"></td>
					<td v-text="val.name"></td>
					<!--<td v-text="val.file_name"></td>-->
					<td v-text="val.file_path"></td>
					<td v-text="val.downloads"></td>
					<td v-html="exports_status[val.status]"></td>
					<!--<td v-text="val.remarks"></td>-->
					<td v-text="val.created_at"></td>
					<td v-text="val.complete_at"></td>
					<td>
						<div class="mdui-btn-group">
							<a class="mdui-btn mdui-ripple mdui-color-theme" v-if="val.status == 1" @click="download(val.id,val.file_path)">下载</a>
							<a class="mdui-btn mdui-ripple mdui-color-deep-orange" @click="del(val.id)">删除</a>
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
				keyword : {
					page : 1,
					name : '',
					date : [],
				},
				exports_status : [
					'执行中',
					'<span class="mdui-text-color-theme">执行完成</span>',
					'<span class="mdui-text-color-red">执行失败</span>',
				],
				interval : ''
			}
		},
		methods : {
			download(id,url){
				let t = this;
				t.$API.post('/export/increment',{id:id}).then(function(){
					// 下载量计数+1
				}).catch(function(msg){
					
				});
				location.href = url;
				return true;
			},
			del(id){
				let t = this;
				t.$API.delete('/export/index',{id:id}).then(function(data){
					mdui.alert('服务器文件已删除，外链失效','执行完成',function(){},{history:false,confirmText:'完成'});
					t.init();
				}).catch(function(msg){
					
				});
			},
			search(page){
				this.keyword.page = page;
				this.init();
			},
			init(){
				let t = this;
				t.$API.get('/export/index',t.keyword).then(function(data){
					t.list = data;
				}).catch(function(msg){
					
				});
			}
		},
		mounted(){
			let t = this;
			t.init();
			t.interval = setInterval(function(){
				t.init();
			},8000);
		},
		beforeDestroy(){
			let t = this;
			clearInterval(t.interval);
		}
	}
</script>