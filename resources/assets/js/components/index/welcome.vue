<template>
	<div>
		<div v-text="count"></div>
	</div>
</template>
<script>
	import store from "./welcome.store"
	
	export default {
		store,
		data() {
			return {
			
			}
		},
		computed : {
			count : () => {
				return this.$store.state.count;
			}
		},
		created(){
		
		}
	}
</script>