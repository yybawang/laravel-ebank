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
			value: {
				type: Number,
				default: 0
			}
		},
		data (){
			return {
				number : 0,
			}
		},
		methods: {
			numberGrow (ele) {
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
		mounted () {
			this.numberGrow(this.$refs.numberGrow)
		}
	}
</script>

<style>
	.number-grow-warp{
		transform: translateZ(0);
	}
</style>