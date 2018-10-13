
let ajax = function(method,url,params,success,error){
	let errors = function(msg){
		tips(msg);
	};
	// ajax 请求封装
	loading();
	let params_get = params;
	if(method.toLowerCase() !== 'get'){
		params_get = {};
	}
	
	axios({
		url : APP_URL + "/admin" + url,
		method : method,
		data : {...params},
		params : {...params_get},
		responseType: 'json'
	}).then(function(response){
		loading(true);
		let data = response.data;
		if('1' === data.status){
			success(data.data);
		}else if('0' === data.status){
			tips(data.message);
			error(data.message);
		}else if('2' === data.status){
			// tips(data.message);
			router.push({path:'/login'});
		}else{
			tips('失败，未正常接收 json 值');
			error(data.message);
		}
	}).catch(function(error_response){
		loading(true);
		logs(error_response);
		// 返回非 json，404/500 等
		let status = error_response.response.status,message = '';
		// 422 是参数验证失败返回状态
		if(status === 422){
			message = Object.values(error_response.response.data.errors)[0][0];
		}else{
			message = error_response.response.data.message;
		}
		errors('服务器错误，状态码：'+error_response.response.status+'<br/>参考信息：'+message+'<br/>exception:'+error_response.response.data.exception);
		error(message);
	})
};


export default () => {
	const METHODS = ['get', 'post', 'put', 'delete']
	
	let handler = {
		get (target, property) {
			target[property] = (url, params = {}) => {
				return new Promise((resolve, reject) => {
					ajax(property.toLocaleUpperCase(),url,params,resolve,reject);
				});
			}
			return target[property]
		}
	}
	
	const API = new Proxy({}, handler)
	return API
}
