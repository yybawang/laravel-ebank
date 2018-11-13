/**
 * @package api
 * @author yybawang
 * @date 2018-11-13
 * @desc axios 自定封装
 */

import axios from "axios"
import md5 from "md5"
import router from "./router"
import func from "./function"

let token = document.head.querySelector('meta[name="csrf-token"]');
axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;

const url_prefix = APP_URL + "/admin";

/**
 * 请求拦截
 */
axios.interceptors.request.use(function (config) {
	// 一般在这个位置判断token是否存在
	console.log(config);
	return config;
}, function (error) {
	return Promise.reject(error);
});

/**
 * 响应拦截
 */
axios.interceptors.response.use(function (response){
	if (response.status === 200) {
		let data = response.data;
		if('1' === data.status){
			return Promise.resolve(response);
		}else if('0' === data.status){
			tips(data.message);
			return Promise.reject(message);
		}else if('2' === data.status){
			router.push({path:'/login'});
		}else{
			tips('失败，未正常接收 json');
			return Promise.resolve('失败，未正常接收 json');
		}
	} else {
		// api 不会返回非 200 状态，所以肯定中间环节哪里有问题
		func.tips('oHo~ 网络开小差了');
	}
}, function (errors){
	let message = "网络请求失败";
	if (errors.response) {
		message = errors.response.data.message;
		func.tips(errors.response.data.message);
	}else if (errors.request){
		message = "程序发起请求失败";
		func.tips(message);
	}else{
		func.tips(message);
	}
	return Promise.reject(message);
});

/**
 * 发起 GET 请求
 * 获取资源，一个或多个
 * @param url
 * @param params
 * @param success
 * @param error
 */
const get = function(url,params,success,error){
	url = url_prefix + url;
	func.loading();
	let ax = axios.get(url,{
		params
	});
	complete(ax,success,error);
};

/**
 * 发起 POST 请求
 * 添加资源（与更新一起使用  updateOrCreate）
 * @param url
 * @param params
 * @param success
 * @param error
 */
const post = function(url,params,success,error){
	url = url_prefix + url;
	func.loading();
	let ax = axios.post(url,params);
	complete(ax,success,error);
};

const del = function(url,params,success,error){
	url = url_prefix + url;
	func.loading();
	let ax = axios.delete(url,params);
	complete(ax,success,error);
};

/**
 * 发起 PUT 请求
 * 更新资源
 * @param url
 * @param params
 * @param success
 * @param error
 */
const put = function(url,params,success,error){
	url = url_prefix + url;
	func.loading();
	let ax = axios.put(url,params);
	complete(ax,success,error);
};

/**
 * 请求完成，判断结果逻辑，响应成功/失败
 * @param ax
 * @param success
 * @param error
 */
const complete = function(ax,success,error){
	if(typeof success !== 'function'){
		success = function(){};
	}
	if(typeof error !== 'function'){
		error = function(){};
	}
	
	ax.then(function(response){
		func.loading(true);
		success(response.data.data,response.data.message);
	}).catch(function(message){
		func.loading(true);
		error(message)
	})
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
