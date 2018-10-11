
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














