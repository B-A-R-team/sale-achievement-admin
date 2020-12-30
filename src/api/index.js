/*
 * @Author: Mengyu Xu
 * @Date: 2020-12-30 13:59:30
 * @LastEditTime: 2020-12-30 14:40:38
 * @FilePath: \admin\src\api\index.js
 */

import axios from 'axios';

import warnning from '../utils/warnning';

const request = axios.create({
  baseURL: 'https://www.barteam.cn:2992/api/v1/',
  timeout: 6000,
});

request.interceptors.request.use(
  (config) => {
    const token = window.sessionStorage.getItem('token') || '';
    if (token !== '') {
      config.headers.Authorization = token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

request.interceptors.response.use(
  (response) => {
    const { data: result } = response;

    if (result.code !== 200) {
      warnning('错误', result.message);
    }

    return result;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
