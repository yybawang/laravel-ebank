<template>
	<vue-datepicker-local v-model="date" :clearable="true" :format="format"></vue-datepicker-local>
</template>
<script>
	import VueDatepickerLocal from 'vue-datepicker-local'
	export default {
		props : {
			value: [Date, Array, String],
			time : {
				type : Boolean,
				default : false,
			}
		},
		watch :{
			value(val_new, val_old){
				this.date = val_new;
			},
			time(val_new, val_old){
				console.log(val_new);
				this.format = this.timeFormat(val_new);
			},
			date(val_new, val_old){
				for(let i in val_new){
					let tf = this.tf(val_new[i]);
					val_new[i] = this.time ? tf : tf.split(' ')[0];
				}
				this.$emit('input', val_new)
			}
		},
		data(){
			return {
				date : [],
				format: this.timeFormat(this.time),
				local: {
					dow: 1, // Monday is the first day of the week
					hourTip: '选择小时', // tip of select hour
					minuteTip: '选择分钟', // tip of select minute
					secondTip: '选择秒数', // tip of select second
					yearSuffix: '年', // format of head
					monthsHead: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'), // months of head
					months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'), // months of panel
					weeks: '一_二_三_四_五_六_日'.split('_'), // weeks
					cancelTip: '取消', // default text for cancel button
					submitTip: '确定' // default text for submit button
				}
			}
		},
		methods : {
			timeFormat(bool){
				if(bool){
					return "YYYY-MM-DD HH:mm:ss";
				}else{
					return "YYYY-MM-DD";
				}
			},
			tf (time = new Date()) {
				const year = time.getFullYear();
				const month = time.getMonth();
				const day = time.getDate();
				const hours24 = time.getHours();
				const hours = hours24 % 12 === 0 ? 12 : hours24 % 12;
				const minutes = time.getMinutes();
				const seconds = time.getSeconds();
				const milliseconds = time.getMilliseconds();
				const dd = t => ('0' + t).slice(-2);
				const map = {
					YYYY: year,
					MM: dd(month + 1),
					MMM: this.local.months[month],
					MMMM: this.local.monthsHead[month],
					M: month + 1,
					DD: dd(day),
					D: day,
					HH: dd(hours24),
					H: hours24,
					hh: dd(hours),
					h: hours,
					mm: dd(minutes),
					m: minutes,
					ss: dd(seconds),
					s: seconds,
					S: milliseconds
				};
				return map.YYYY + '-' + map.MM + '-' + map.DD + ' ' + map.hh + ':' + map.mm + ':' + map.ss;
			},
		},
		components : {
			VueDatepickerLocal
		},
	}
</script>
