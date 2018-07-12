
/**
 * 屏幕下方文字提示
 * @param msg
 */
let tips = function(msg){
	mdui.snackbar({
		message : msg,
		position:'right-top',
		timeout : 3000,
		buttonText : 'Close',
	});
};
window.tips = tips;

/**
 * 加载窗
 * @param close
 */
let loading = function(close){
	if(close){
		$('.ajax_loading').addClass('mdui-hidden');
	}else{
		$('.ajax_loading').removeClass('mdui-hidden');
	}
};
window.loading = loading;

/**
 * 控制台日志
 * @param variable
 */
let logs = function(variable){
	console.info(typeof variable);
	console.log(variable);
};
window.logs = logs;

let DatePickerFormat = function(time){
	try{
		const year = time.getFullYear();
		const month = time.getMonth();
		const day = time.getDate();
		const hours24 = time.getHours();
		const hours = hours24 % 12 === 0 ? 12 : hours24 % 12;
		const minutes = time.getMinutes();
		const seconds = time.getSeconds();
		const milliseconds = time.getMilliseconds();
		const dd = t => ('0' + t).slice(-2);
		return year+'-'+dd(month + 1)+'-'+dd(day);
	}catch(e) {
		return time;
	}
};
window.DatePickerFormat = DatePickerFormat;

















let ajax = function(url,post_data,success,error,method){
	if(!error){
		error = function(){
		
		};
	}
	if(!success){
		success = function(msg){
		
		};
	}
	let errors = function(msg){
		tips(msg);
	};
	// ajax 请求封装
	loading();
	axios({
		url : APP_URL+'/admin'+url,
		method : method,
		data : post_data,
	}).then(function(response){
		loading(true);
		let data = response.data;
		if('1' === data.status){
			success(data.data,data.message);
		}else if('0' === data.status){
			tips(data.message);
		}else if('2' === data.status){
			// tips(data.message);
			router.push({path:'/login'});
		}else{
			tips('失败，未正常接收 json 值');
		}
	}).catch(function(error_response){
		logs(error_response);
		// 返回非 json，404/500 等
		let status = error_response.response.status,message = '';
		loading(true);
		// 422 是参数验证失败返回状态
		if(status === 422){
			message = Object.values(error_response.response.data.errors)[0][0];
		}else{
			message = error_response.response.data.message;
		}
		errors('服务器错误，状态码：'+error_response.response.status+'<br/>参考信息：'+message+'<br/>exception:'+error_response.response.data.exception);
		error(message,error_response.response.data.data);
	})
};

/**
 * ajax 请求
 * @param url
 * @param post_data
 * @param success
 * @param error
 */
let post = function(url,post_data,success,error){
	ajax(url,post_data,success,error,'post');
};
window.post = post;

/**
 * ajax get请求
 * @param url
 * @param get_param
 * @param success
 * @param error
 */
let get = function(url,get_param,success,error){
	// let url_param = [];
	// mdui.JQ.each(get_param,function(k,v){
	// 	url_param.push(k+'='+v);
	// });
	if(get_param.date && get_param.date.length > 0){
		for(let i in get_param.date){
			get_param.date[i] = DatePickerFormat(get_param.date[i]);
		}
	}
	let url_param = $.param(get_param);
	ajax(url+'?'+url_param,get_param,success,error,'get');
};
window.get = get;

/**
 * ajax delete 请求
 * @param url
 * @param get_param
 * @param success
 * @param error
 */
let del = function(url,get_param,success,error){
	ajax(url,get_param,success,error,'delete');
};
window.del = del;

