<template>
	<div class="welcome">
		<div class="mdui-typo">
			<blockquote class="blockquote_normal">
				<p>注：仅统计[用户身份]的流水收入、支出，包括所有钱包</p>
			</blockquote>
		</div>
		<div id="statistics" style="width:100%;height:400px"></div>
	</div>
</template>
<script>
	let echarts = require('echarts/lib/echarts');
	// 引入柱状图
	require('echarts/lib/chart/bar');
	require('echarts/lib/chart/line');
	// 引入提示框和标题组件
	require('echarts/lib/component/tooltip');
	require('echarts/lib/component/title');
	require("echarts/lib/component/legendScroll");
	require("echarts/lib/component/dataZoom");
	require("echarts/lib/component/markPoint");
	require("echarts/lib/component/markLine");
	require("echarts/lib/component/toolbox");
	
	export default {
		data(){
			return {
				statistics : '',
			};
		},
		mounted(){
			let t = this;
			
			t.statistics = echarts.init(document.getElementById('statistics'));
			let order_options = {
				title : {
					left: 'center',
					text: '近期15天每日用户身份收入、支出金额统计',
					subtext: '按日划分，金额单位：分'
				},
				tooltip : {
					trigger: 'axis'
				},
				legend: {
					top : '60px',
					data: []
				},
				toolbox: {
					show : true,
					feature : {
						magicType : {show: true, type: ['line', 'bar']},
						saveAsImage : {show: true}
					}
				},
				grid : {
					top : '100px',
					containLabel: true
				},
				calculable : true,
				dataZoom: [
					{
						show: true,
						realtime: true,
						start: 60,
						end: 100
					},
					{
						type: 'inside',
						realtime: true,
						start: 60,
						end: 100
					}
				],
				xAxis : [
					{
						type : 'category',
						data : []
					}
				],
				yAxis : [
					{
						type : 'value'
					}
				],
				series : []
			};
			get('/user',{},function(data){
				let series_name = data.series;
				let statistics = data.statistics;
				for(let date in statistics.date){
					order_options.xAxis[0].data.push(statistics.date[date]);
				}
				// 基本信息变量
				let series_template = function(){
					return {
						name:'',
						type:'bar',
						data:[],
						markPoint : {
							data : [
								{type : 'max', name: '最大值'},
								{type : 'min', name: '最小值'}
							]
						},
						markLine : {
							data : [
								{type : 'average', name: '平均值'}
							]
						},
						label: {
							normal: {
								show: true,
								position: 'top'
							}
						}
					};
				};
				
				for(let type in statistics.amount){
					let series = series_template();
					series.name = series_name[type] || type;
					order_options.legend.data.push(series.name);
					for(let date in statistics.amount[type]){
						series.data.push(statistics.amount[type][date]);
					}
					order_options.series.push(series);
				}
				
				t.statistics.setOption(order_options);
			});
			
			window.onresize = function(){
				setTimeout(function(){
					t.statistics.resize();
				},200);
			};
		}
	}
</script>