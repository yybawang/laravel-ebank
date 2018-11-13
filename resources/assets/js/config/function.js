/**
 * 公共方法类
 * @package function
 * @author yybawang
 * @date 2018-11-13
 */

import store from "./app.store";

/**
 * 弹窗文字提示
 * @param msg
 * @param color info,success,error,rgba(),[color class]
 */
const tips = function(msg,color){
	store.commit('snackBarShow',{
		message : msg,
		top : true,
		right : true,
		color : color,
		timeout : 3000,
	});
};

/**
 * 弹窗文字提示，手动隐藏
 */
const tips_hide = function(){
	store.commit('snackBarHide');
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
 * 加载窗
 * @param close
 */
const loading = function(close){
	// if(close){
	// 	$('.ajax_loading').addClass('mdui-hidden');
	// }else{
	// 	$('.ajax_loading').removeClass('mdui-hidden');
	// }
};


export default{
	install(Vue,options)
	{
		Vue.prototype.tips = tips;
		Vue.prototype.tips_hide = tips_hide;
		Vue.prototype.logger = logger;
		Vue.prototype.loading = loading;
	}
}











