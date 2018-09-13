<template>
	<div class="sysinfo">
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