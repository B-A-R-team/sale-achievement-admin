/*
 * @Author: lts
 * @Date: 2020-12-29 16:43:00
 * @LastEditTime: 2021-01-01 10:25:23
 * @FilePath: \sale-achievement-admin\src\router\index.js
 */
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login';
import StaffInfo from '../views/StaffInfo/StaffInfo.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/staffInfo',
    children: [
      {
        path: '/staffInfo',
        name: 'StaffInfo',
        component: StaffInfo
      },
      {
        path: '/customers',
        name: 'customers',
        component: () => import('../views/Customers'),
      },
      {
        path: '/customers/:id',
        name: 'customerInfo',
        component: () => import('../views/Customers/CustomerInfo'),
      },
      {
        path: '/course',
        name: 'course',
        component: () => import('../views/Course'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token')
  if (to.name === 'Login' && token) {
    return next({ name: 'Home' });
  }
  if (to.name !== 'Login' && !token) next({ name: 'Login' });
  // 如果用户未能验证身份，则 `next` 会被调用两次
  next();
});

export default router;
