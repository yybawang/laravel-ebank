/**
 * 公共方法类
 * @package function
 * @author yybawang
 * @date 2018-11-13
 */

import {message} from "ant-design-vue";

/**
 * 弹窗文字提示
 * @param msg
 * @param type info,success,error,warning,warn,loading
 */
const tips = function(msg,type = 'info'){
	message[type](msg,4);
};


/**
 * 控制台日志
 * @param variable
 */
const logger = function(variable){
	console.info(typeof variable);
	console.log(variable);
};


export default{
	install(Vue,options)
	{
		Vue.prototype.tips = tips;
		Vue.prototype.logger = logger;
	}
}











