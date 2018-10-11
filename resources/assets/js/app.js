
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import VueDatepickerLocal from 'vue-datepicker-local'

// Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('pagination', require('./components/pagination.vue'));
Vue.component('vue-datepicker-local',VueDatepickerLocal);

import App from './App.vue';
import router from './config/router.js'
window.router = router;
import './config/function.js'
import API from './config/api'

Vue.prototype.$API = API();

const app = new Vue({
    el: '#app',
	router,
	render: h => h(App)
});

// 单独实例化一个菜单VUE，用于路由链接
// const menu = new Vue({
// 	el: '#main-drawer',
// });
