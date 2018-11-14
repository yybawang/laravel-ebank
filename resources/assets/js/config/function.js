/**
 * 公共方法类
 * @package function
 * @author yybawang
 * @date 2018-11-13
 */

/**
 * 弹窗文字提示
 * @param msg
 * @param type info,success,error,warning,warn,loading
 */
const tips = function(msg){
	mdui.snackbar({
		message : msg,
		position:'right-top',
		timeout : 3000,
		buttonText : 'Close',
	});
};


/**
 * 控制台日志
 * @param variable
 */
const logger = function(variable){
	console.info(typeof variable);
	console.log(variable);
};


/**
 * wait progress
 * @param close
 */
const loading = function(close){
	if(close){
		$('.ajax_loading').addClass('mdui-hidden');
	}else{
		$('.ajax_loading').removeClass('mdui-hidden');
	}
};


export default{
	install(Vue,options)
	{
		Vue.prototype.tips = tips;
		Vue.prototype.logger = logger;
		Vue.prototype.loading = loading;
	}
}











