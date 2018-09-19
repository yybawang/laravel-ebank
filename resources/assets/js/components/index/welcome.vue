<template>
	<div class="welcome">
		<order-into ref="order_into"></order-into>
		<user-transfer ref="user_transfer"></user-transfer>
	</div>
</template>
<script>
	import orderInto from './order_into';
	import userTransfer from './user_transfer';
	
	export default {
		data(){
			return {
				
			}
		},
		mounted(){
			let t = this;
			window.onresize = function(){
				setTimeout(function(){
					for(let i in t.$refs){
						t.$refs[i].resize();
					}
				},200);
			};
		},
		components : {orderInto,userTransfer}
	}
</script>