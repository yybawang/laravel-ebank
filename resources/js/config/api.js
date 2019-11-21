/**
 * @package api
 * @author yybawang
 * @date 2018-11-13
 * @desc axios 自定封装
 */

import axios from "axios"
import router from "./router"
import Vue from "vue"

let token = document.head.querySelector('meta[name="csrf-token"]');
axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const url_prefix = APP_URL + "/admin";

/**
 * 请求拦截
 */
axios.interceptors.request.use(function (config) {
	// 一般在这个位置判断token是否存在
	Vue.prototype.loading();
	return config;
}, function (error) {
	return Promise.reject(error);
});

/**
 * 响应拦截
 */
axios.interceptors.response.use(function (response){
	Vue.prototype.loading(true);
	if (response.status === 200) {
		let data = response.data;
		if('1' === data.status){
			return Promise.resolve(data.data);
		}else if('0' === data.status){
			Vue.prototype.tips(data.message);
			return Promise.reject(data.message);
		}else{
			Vue.prototype.tips('失败，未正常接收 json');
			return Promise.reject('失败，未正常接收 json');
		}
	} else {
		// api 不会返回非 200 状态，所以肯定中间环节哪里有问题
		Vue.prototype.tips('oHo~ 网络开小差了');
		return Promise.reject('oHo~ 网络开小差了');
	}
}, function (errors){
	Vue.prototype.loading(true);
    if(errors.response.status === 401){
        // 不是未登录错误，就提示出来
        errors.response.data.message === 'Unauthenticated.' || Vue.prototype.tips(errors.response.data.message);
        // 存入验证前的网页，登录/注册后再跳回来
        localStorage.setItem('admin_auth_jump', location.hash.substr(1));
    
        router.push({path:'/login'});
        return Promise.reject(errors.response.data.message);
    }
    if(errors.response.status === 422){
        Vue.prototype.tips(errors.response.data.message, 'error');
        return Promise.reject(errors.response.data.message);
    }
    if(errors.response.status === 404){
        Vue.prototype.tips('404 Not Found', 'error');
        return Promise.reject('404 Not Found');
    }
    let message = "Network error";
    if (errors.response) {
        message = errors.response.data.message;
    }else if (errors.request){
        message = "Request error";
    }
    Vue.prototype.tips(message, 'warning');
    return Promise.reject(message);
});

/**
 * 发起 GET 请求
 * 获取资源，一个或多个
 * @param url
 * @param params
 * @returns {AxiosPromise<any>}
 */
const get = function(url,params){
	url = url_prefix + url;
	return axios.get(url,{
		params
	});
};

/**
 * 发起 POST 请求
 * 添加资源（与更新一起使用  updateOrCreate）
 * @param url
 * @param params
 * @returns {AxiosPromise<any>}
 */
const post = function(url,params){
	url = url_prefix + url;
	return axios.post(url,params);
};

/**
 * request a DEL
 * @param url
 * @param params
 * @returns {AxiosPromise}
 */
const del = function(url,params){
	url = url_prefix + url;
	return axios.delete(url,{params});
};

/**
 * 发起 PUT 请求
 * 更新资源
 * @param url
 * @param params
 * @returns {AxiosPromise<any>}
 */
const put = function(url,params){
	url = url_prefix + url;
	return axios.put(url,params);
};

const $API = {
	get,
	post,
	del,
	put
};

export default{
	install(Vue,options)
	{
		Vue.prototype.$API = $API;
	}
}
