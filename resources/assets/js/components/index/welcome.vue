<template>
	<div class="welcome">
		<transition appear name="fade">
		<div class="card-group" v-if="list.length > 0">
			<div class="mdui-row-xs-2 mdui-row-sm-3 mdui-row-md-4 mdui-row-lg-5 mdui-row-xl-6">
				<div class="mdui-col" v-for="(val,key) of list">
					<div class="mdui-card mdui-m-b-2 card">
						<div class="mdui-card-media">
							<div class="mdui-valign content-space">
								<i class="mdui-icon material-icons content-space-icon" :style="{color:val.backgroundColor}">{{val.icon}}</i>
							</div>
							<div class="mdui-card-media-covered mdui-card-media-covered-transparent">
								<div class="mdui-card-primary">
									<div class="mdui-card-primary-title mdui-text-color-red-300"><number-grow :value="val.sum"></number-grow></div>
									<div class="mdui-card-primary-subtitle mdui-text-color-black" v-text="val.name"></div>
									<div class="mdui-typo-caption mdui-typo-caption-opacity mdui-text-color-grey-700" v-text="val.title"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</transition>
	</div>
</template>
<script>
	import NumberGrow from '../NumberGrow';
	export default {
		data(){
			return {
				list : [],
			}
		},
		methods : {
			init(){
				let t = this;
				t.$API.get('/index/welcome').then(function(data){
					t.list = data;
				});
			}
		},
		mounted(){
			this.init();
		},
		components: {
			NumberGrow
		}
	}
</script>
<style lang="scss" scoped>
	.card {
		min-width:180px;
	}
	.content-space {
		padding:0 0.5rem;
		height:7.3rem;
		text-align:right;
		justify-content: flex-end;
	}
	.content-space-icon {
		font-size:3rem;
	}
	
	.fade-enter-active, .fade-leave-active{
		transition: opacity 1s;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
</style>