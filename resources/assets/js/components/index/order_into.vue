<template>
	<div id="order_into" class="mdui-color-white" style="width:100%;height:500px"></div>
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
				chart : '',
			};
		},
		methods : {
			resize(){
				this.chart.resize();
			}
		},
		mounted(){
			let t = this;
			
			t.chart = echarts.init(document.getElementById('order_into'));
			let order_options = {
				title : {
					left: 'center',
					text: '',
					subtext: '按日划分，金额单位：分'
				},
				tooltip : {
					trigger: 'axis'
				},
				legend: {
					// type: 'scroll',
					top : '60px',
					// orient: 'vertical',
					// right:'0',
					// bottom:'10px',
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
					top : '180px',
					containLabel: true
				},
				calculable : true,
				dataZoom: [
					{
						show: true,
						type: 'inside',
						realtime: true,
						start: 80,
						end: 100,
						zoomOnMouseWheel : false,
					},{}
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
			t.$API.get('/welcome').then(function(data){
				let payments = data.payments;
				let into = data.into;
				order_options.xAxis[0].data = data.columns;
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
				
				for(let payment in data.rows){
					let series = series_template();
					series.name = payments[payment] || payment;
					order_options.legend.data.push(series.name);
					series.data = Object.values(data.rows[payment]);
					order_options.series.push(series);
				}
				order_options.title.text = '近期 '+data.days+' 天每日订单交易入账金额统计';
				t.chart.setOption(order_options);
			});
		}
	}
</script>