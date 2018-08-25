import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default new VueRouter({
	saveScrollPosition: true,
	routes: [
		{
			path: '/',
			redirect : '/welcome',
		},
		{
			name: 'login',
			path: '/login',
			component: resolve => void(require(['../components/login.vue'], resolve))
		},
		{
			name: 'welcome',
			path: '/welcome',
			component: resolve => void(require(['../components/index/welcome.vue'], resolve))
		},
		{
			name: 'user_transfer',
			path: '/user_transfer',
			component: resolve => void(require(['../components/index/user_transfer.vue'], resolve))
		},
		{
			path: '/sysinfo',
			component: resolve => void(require(['../components/index/sysinfo.vue'], resolve))
		},
		{
			path: '/merchant/group',
			component: resolve => void(require(['../components/merchant/group.vue'], resolve))
		},
		{
			path: '/merchant',
			component: resolve => void(require(['../components/merchant/index.vue'], resolve))
		},
		{
			path: '/transfer',
			component: resolve => void(require(['../components/transfer/index.vue'], resolve))
		},
		{
			path: '/transfer/reason',
			component: resolve => void(require(['../components/transfer/reason.vue'], resolve))
		},
		{
			path: '/report/reason',
			component: resolve => void(require(['../components/report/reason.vue'], resolve))
		},
		{
			path: '/report/purse',
			component: resolve => void(require(['../components/report/purse.vue'], resolve))
		},
		{
			path: '/purse/purse',
			component: resolve => void(require(['../components/purse/purse.vue'], resolve))
		},
		{
			path: '/purse/user',
			component: resolve => void(require(['../components/purse/user.vue'], resolve))
		},
		{
			path: '/purse/freeze',
			component: resolve => void(require(['../components/purse/freeze.vue'], resolve))
		},
		{
			path: '/purse/user_type',
			component: resolve => void(require(['../components/purse/user_type.vue'], resolve))
		},
		{
			path: '/purse/purse_type',
			component: resolve => void(require(['../components/purse/purse_type.vue'], resolve))
		},
		{
			path: '/withdraw/bank',
			component: resolve => void(require(['../components/withdraw/bank.vue'], resolve))
		},
		{
			path: '/withdraw/alipay',
			component: resolve => void(require(['../components/withdraw/alipay.vue'], resolve))
		},
		{
			path: '/withdraw/wechat',
			component: resolve => void(require(['../components/withdraw/wechat.vue'], resolve))
		},
		{
			path: '/order',
			component: resolve => void(require(['../components/order/index.vue'], resolve))
		},
		{
			path: '/export',
			component: resolve => void(require(['../components/export/index.vue'], resolve))
		},
		{
			path: '/rule/user',
			component: resolve => void(require(['../components/rule/user.vue'], resolve))
		},
		{
			path: '/rule/group',
			component: resolve => void(require(['../components/rule/group.vue'], resolve))
		},
		{
			path: '/system/config',
			component: resolve => void(require(['../components/system/config.vue'], resolve))
		},
		{
			path: '/system/behavior',
			component: resolve => void(require(['../components/system/behavior.vue'], resolve))
		}
	]
});
