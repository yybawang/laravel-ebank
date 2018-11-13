<template>
	<div class="number-grow-warp">
		<span ref="numberGrow" :data-time="time" class="number-grow" :data-value="value" v-text="number"></span>
	</div>
</template>

<script>
	export default {
		props: {
			time: {
				type: Number,
				default: 1
			},
			value: ''
		},
		data (){
			return {
				number : '--',
			}
		},
		watch : {
			value : function(n,o){
				this.numberGrow();
			}
		},
		methods: {
			numberGrow () {
				if(this.value === ''){
					return ;
				}
				let _this = this,point = _this.value.toString().split('.')[1] || 0,point_length = point.length;
				let step = ((_this.value * 10) / (_this.time * 1000));
				let start = 0;
				let t = setInterval(function () {
					start += step;
					if (start >= _this.value) {
						_this.number = _this.value;
						clearInterval(t);
						return
					}
					_this.number = start.toFixed(point_length).toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, '$1,')
				}, 10)
			}
		},
	}
</script>

<style>
	.number-grow-warp{
		transform: translateZ(0);
	}
</style>