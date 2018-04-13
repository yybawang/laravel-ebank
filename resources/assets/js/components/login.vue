<template>
	<div class="login">
		<div class="frame">
			<div class="title"><h3>全球支付系统后台登录</h3></div>
			<div class="content">
				<form method="post" class="form" @keydown.enter="submit">
					<div class="mdui-textfield mdui-textfield-floating-label">
						<i class="mdui-icon material-icons">account_circle</i>
						<label class="mdui-textfield-label">登录名</label>
						<input class="mdui-textfield-input" type="text" id="name" v-model="form.name" />
					</div>
					<div class="mdui-textfield mdui-textfield-floating-label">
						<i class="mdui-icon material-icons">lock</i>
						<label class="mdui-textfield-label">密　码</label>
						<input class="mdui-textfield-input" type="password" v-model="form.password" />
					</div>
					<div class="mdui-textfield">
						<a class="mdui-btn mdui-ripple mdui-color-theme submit" @click="submit">登录</a>
					</div>
				</form>
			</div>
			<div class="login_footer">&copy; 2015 Global Pay Unit {{domain}} All rights reserved</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				form: {
					name : '',
					password : '',
					captcha : '',
				},
				tips : '',
				domain : location.href.substring(7).split('/')[0],
			};
		},
		methods : {
			tips_message(message){
				this.tips = message;
			},
			submit(){
				let t = this;
				post('/login',this.form,function(data,message){
					tips(message);
					t.$router.push({path:'/welcome'});
				});
			}
		},
		mounted(){
			this.$emit('initClear');
			document.getElementById('name').focus()
		}
	}
</script>

<style>
	.frame {
		background-color:#FFF;
		padding:20px;
		max-width:30rem;
		margin:10% auto;
		border-radius: 5px;
	}
	.frame .submit {
		margin-left:3.5rem;
		cursor:pointer;
	}
	.frame .login_footer {
		padding:10px 0;
		border-top:1px solid #CCC;
	}
</style>
