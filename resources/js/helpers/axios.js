import {showLoading, hideLoading, tips} from "./functions";
import axios from 'axios';

axios.defaults.baseURL = $EBANK_PATH;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'multipart/form-data;charset=UTF-8';
/**
 * 请求拦截
 */
axios.interceptors.request.use(function (config) {
    // 请求发起之前要做的事
    showLoading();
    // 实时带入 token，admin 接的 session
    config.params = Object.assign({}, config.params || {});

    return config;
}, function (error) {
    hideLoading();
    return Promise.reject(error);
});

/**
 * 响应拦截
 */
axios.interceptors.response.use(function (response){
    hideLoading();
    if (response.status === 200) {
        if(response.data.code !== 0){
            return Promise.reject(response.data.message);
        }
        return Promise.resolve(response.data.data);
    } else {
        // api 不会返回非 200 状态，所以肯定中间环节哪里有问题
        tips('oHo~ something was wrong', 'warning');
        return Promise.reject('oHo~ something was wrong');
    }
}, function (errors){
    hideLoading();
    if(errors.response.status === 401){
        // 不是未登录错误，就提示出来
        errors.response.data.message === 'Unauthenticated.' || tips(errors.response.data.message);
        return Promise.reject(errors.response.data.message);
    }
    if(errors.response.status === 422){
        let message = errors.response.data.message;
        if(errors.response.data.errors){
            message = Object.values(errors.response.data.errors).shift()[0];
        }
        tips(message, 'error');
        return Promise.reject(message);
    }
    if(errors.response.status === 404){
        tips('404 Not Found', 'error');
        return Promise.reject('404 Not Found');
    }
    let message = "Network error";
    if (errors.response) {
        message = errors.response.data.message;
    }else if (errors.request){
        message = "Request error";
    }
    tips(message, 'warning');
    return Promise.reject(message);
});

export {axios};
