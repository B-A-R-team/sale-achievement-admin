/*
 * @Author: lts
 * @Date: 2020-12-30 10:11:49
 * @LastEditTime: 2020-12-30 10:28:40
 * @FilePath: \sale-achievement-admin\src\api\myAxios.js
 */
import axios from 'axios';

import { message } from 'ant-design-vue';
// Add a request interceptor 阻截器
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
//   const timestamp = storageUtils.getTime();
//   if (Number(timestamp) < Date.now()) {
//     storageUtils.clearAll();
//   }
//   const token = storageUtils.getToken();
//   if (token) {
//     config.headers.Authorization = token;
//   }
  return config;
});
//响应拦截器
axios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.log(error);
    message.error('请求出错' + error.message);
    return new Promise(() => {});
  }
);
export default axios;

