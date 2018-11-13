<template>
	<div>
		<router-view></router-view>
		<div @click="show()">sssssss</div>
		<v-snackbar
				v-model="snackBar.show"
				:right="snackBar.right"
				:timeout="snackBar.timeout"
				:top="snackBar.top"
		>
			{{ snackBar.message }}
			<v-btn color="pink" flat @click="hide()">{{snackBar.buttonText}}</v-btn>
		</v-snackbar>
	</div>
</template>
<script>
	import store from "./config/app.store";
	import {mapState} from "vuex";
	
	export default {
		store,
		data(){
			return {
			
			}
		},
		computed : {
			...mapState([
				'snackBar',
			])
		},
		methods : {
			show(){
				this.tips("松岛枫");
			},
			hide(){
				this.tips_hide();
			},
		},
		mounted(){
			let t = this;
		}
	}
</script>
