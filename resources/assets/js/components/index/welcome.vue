<template>
	<div class="welcome">
		<div class="card-group">
			<div class="mdui-row-xs-2 mdui-row-sm-3 mdui-row-md-4 mdui-row-lg-5 mdui-row-xl-6">
				<div class="mdui-col" v-for="(val,key) of list">
					<div class="mdui-card mdui-m-b-2 card">
						<div class="mdui-card-media">
							<div class="mdui-valign content-space" :style="{backgroundColor:val.backgroundColor}">
								<i class="mdui-icon material-icons mdui-text-color-grey-300 content-space-icon">{{val.icon}}</i>
							</div>
							<div class="mdui-card-media-covered mdui-card-media-covered-transparent">
								<div class="mdui-card-primary">
									<div class="mdui-card-primary-title" v-text="val.sum"></div>
									<div class="mdui-card-primary-subtitle" v-text="val.name"></div>
									<div class="mdui-typo-caption-opacity mdui-text-color-grey-700" v-text="val.title"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	
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
		}
	}
</script>
<style lang="scss" scoped>
	.card {
		min-width:180px;
	}
	.content-space {
		padding:0 0.5rem;
		height:7rem;
		text-align:right;
		justify-content: flex-end;
	}
	.content-space-icon {
		font-size:3rem;
	}
</style>