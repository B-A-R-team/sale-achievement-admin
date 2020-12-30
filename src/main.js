/*
 * @Author: lts
 * @Date: 2020-12-29 16:43:00
 * @LastEditTime: 2020-12-30 09:38:47
 * @FilePath: \sale-achievement-admin\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import 'ant-design-vue/dist/antd.less'

// 这个包是重置样式的
import 'normalize.css'

const app = createApp(App)
app.use(router)
app.config.productionTip = false;
app.use(Antd);
app.mount('#app')
