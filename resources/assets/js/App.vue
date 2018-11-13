<template>
	<a-layout>
		<a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
			
			<a-menu
					theme="dark"
					mode="horizontal"
					:defaultSelectedKeys="['2']"
					:style="{ lineHeight: '64px' }"
			>
				<a-menu-item key="1">nav 1</a-menu-item>
				<a-menu-item key="2">nav 2</a-menu-item>
				<a-menu-item key="3">nav 3</a-menu-item>
			</a-menu>
		</a-layout-header>
		<a-layout-sider
				breakpoint="lg"
				collapsedWidth="0"
				:style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, paddingTop: '64px' }"
		>
			<a-menu theme="dark" mode="inline" :defaultSelectedKeys="['4']">
				<a-menu-item key="1">
					<a-icon type="user" />
					<span class="nav-text">nav 1</span>
				</a-menu-item>
				<a-menu-item key="2">
					<a-icon type="video-camera" />
					<span class="nav-text">nav 2</span>
				</a-menu-item>
				<a-menu-item key="3">
					<a-icon type="upload" />
					<span class="nav-text">nav 3</span>
				</a-menu-item>
				<a-menu-item key="4">
					<a-icon type="user" />
					<span class="nav-text">nav 4</span>
				</a-menu-item>
			</a-menu>
		</a-layout-sider>
		<a-layout>
			<a-layout-header :style="{ background: '#fff', padding: 0 }" />
			<a-layout-content :style="{ margin: '24px 16px 0' }">
				<div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
					content
				</div>
			</a-layout-content>
			<a-layout-footer style="textAlign: center">
				Ant Design ©2018 Created by Ant UED
			</a-layout-footer>
		</a-layout>
	</a-layout>
</template>
<script>
	
	export default {
		data(){
			return {
			
			}
		},
		mounted(){
		
		}
	}
</script>
