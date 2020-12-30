/*
 * @Author: lts
 * @Date: 2020-12-30 10:11:37
 * @LastEditTime: 2020-12-30 10:29:32
 * @FilePath: \sale-achievement-admin\src\api\index.js
 */
import myAxios from './myAxios'
myAxios.defaults.baseURL = 'https://www.barteam.cn:2992'

//测试api
export const test = () => myAxios('api/v1/course')