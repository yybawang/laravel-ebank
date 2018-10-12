<template>
	<div class="sysinfo">
		<div class="mdui-typo">
			<blockquote class="blockquote_normal">此信息为 PHP 运行时服务器配置，如出现测试/生产环境不一致请及时统一，避免不必要的环境 BUG</blockquote>
		</div>
		<div class="mdui-table-fluid">
			<table class="mdui-table mdui-table-hoverable">
				<thead>
				<tr v-for="(val,key,index) of list"><td>{{Object.keys(list)[index]}}</td><td>{{val}}</td></tr>
				</thead>
			</table>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				list : [],
			};
		},
		mounted(){
			let t = this;
			t.$API.get('/index/sysinfo').then(function(data){
				t.list = data;
			});
		}
	}
</script>