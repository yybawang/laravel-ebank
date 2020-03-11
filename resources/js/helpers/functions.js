import dayjs from "dayjs";
import cogoToast from 'cogo-toast';
import {useLocation} from "react-router-dom";

/**
 * 全局顶部等待提示
 * @returns {boolean}
 */

function showLoading(){

}

function hideLoading(){

}

/**
 * 全局提示消息
 * @param message
 * @param type [info, success, warning, error]
 */
function tips(message, type = 'info') {
    let options = {
        position: 'top-center',
    };
    switch (type) {
        case 'succ':
        case 'success':
            cogoToast.success(message, options);
            break;
        case 'loading':
            cogoToast.loading(message, options);
            break;
        case 'warn':
        case 'warning':
            cogoToast.warn(message, options);
            break;
        case 'error':
            cogoToast.error(message, options);
            break;
        case 'info':
        default:
            cogoToast.info(message, options);
            break;
    }
    return true;
}


/**
 * A custom hook that builds on useLocation to parse
 * @returns {URLSearchParams}
 */
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

/**
 * 返回格式化 日期
 * @param date
 * @return {string}
 */
function date(date) {
    if(!date || !date instanceof Date){
        return '';
    }
    return dayjs(date).format('YYYY-MM-DD');
}

/**
 * 返回格式化 日期时间
 * @param date
 * @return {string}
 */
function  datetime(date) {
    if(!date || !date instanceof Date){
        return '';
    }
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
}


export {showLoading, hideLoading, tips, date, datetime, useQuery}
