<template>
	<div class="welcome">
		<div id="order_into" style="width:100%;height:500px"></div>
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
				order_into : '',
			};
		},
		mounted(){
			let t = this;
			t.$emit('init');
			
			t.order_into = echarts.init(document.getElementById('order_into'));
			let order_options = {
				title : {
					left: 'center',
					text: '近期15天每日订单交易入账金额统计',
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
					top : '160px',
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
			get('/welcome',{},function(data){
				let payments = data.payments;
				let into = data.into;
				for(let date in into.date){
					order_options.xAxis[0].data.push(into.date[date]);
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
				
				for(let payment in into.amount){
					let series = series_template();
					series.name = payments[payment] || payment;
					order_options.legend.data.push(series.name);
					for(let date in into.amount[payment]){
						series.data.push(into.amount[payment][date]);
					}
					order_options.series.push(series);
				}
				
				t.order_into.setOption(order_options);
			});
			
			window.onresize = function(){
				setTimeout(function(){
					t.order_into.resize();
				},200);
			};
		}
	}
</script>