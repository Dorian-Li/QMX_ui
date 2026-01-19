// 在此文件的模块顶层
import axios from 'axios'
import router from '../router/index'
import {Message} from "element-ui";

// 创建一个Axios实例
const request = axios.create({
  baseURL: 'http://10.23.230.165:7777/jinhaiyan/',
  timeout:5000,
});

// 在“请求拦截器”中为每个请求设置 Authorization 头
request.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('accessToken');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// 在“响应拦截器”中统一处理错误与跳转
request.interceptors.response.use(
  (response) => response,
  ({ response, message }) => {
    const { status, data } = response || {};
    const msg = (data && data.message) || message || '请求出错了';

    Message.error(msg);

    if (status === 401) {
      // token验证失败或者过期了，跳转到登录页
      sessionStorage.removeItem('accessToken');
      router.push({ name: 'login' });
    } else if (status === 403) {
      // 当前用户没有权限访问该资源，跳转到无权访问页
      router.push({ name: 'forbidden' });
    } else {
      // 其他错误，返回一个拒绝的 Promise
      return Promise.reject(response);
    }

    return Promise.reject(response);
  }
);

export default request;