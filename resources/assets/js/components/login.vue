<template>
	<div class="login">
		<div class="frame">
			<div class="title"><h3>全球支付系统后台登录</h3></div>
			<div class="content">
				<form method="post" class="form" @keyup.enter="submit">
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
					<div class="input">
						<label>　　　</label><a class="mdui-btn mdui-ripple mdui-color-theme" @click="submit">登录</a>
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
			document.getElementById('name').focus()
		}
	}
</script>

<style>
	body {
		font-family:"微软雅黑,Microsoft Yahei";
		margin:0;
		background-size:100% 100%;
	}
	.frame {
		background-color:#FFF;
		padding:20px;
		max-width:30rem;
		margin:10% auto;
		border-radius: 5px;
	}
	.frame .input {
		padding:10px 0;
		overflow:hidden;
	}
	.frame .input > input {
		height:30px;
		line-height:30px;
		padding:0 4px;
	}
	.frame .input > input.input_text {
		width:200px;
	}
	.frame .input > .captcha_label {
		float:left;
	}
	.frame .input > input.captcha_input {
		width:100px;
		padding:0;
		float:left;
	}
	.frame .input > img.captcha_img {
		width:95px;
		height:30px;
		border:none;
		margin-left:5px;
		float:left;
	}
	.frame .input > label {
		height:30px;
		line-height:30px;
		text-align:center;
		padding:0 15px;
	}
	.frame [type=submit] {
		width:80px;
		height:30px;
		cursor:pointer;
	}
	.frame .tips {
		padding:10px 0;
		color:#E25A57;
	}
	.frame .login_footer {
		padding:10px 0;
		border-top:1px solid #CCC;
	}
</style>
