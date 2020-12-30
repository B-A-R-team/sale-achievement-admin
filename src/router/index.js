/*
 * @Author: lts
 * @Date: 2020-12-29 16:43:00
 * @LastEditTime: 2020-12-30 15:28:22
 * @FilePath: \sale-achievement-admin\src\router\index.js
 */
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login';
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
        component: () => import('../views/StaffInfo/StaffInfo.vue')
      },
      {
        path: '/customers',
        name: 'customers',
        component: () => import('../views/Customers/Customers.vue')
      }
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
  console.log(to, from)
  if (to.name === 'Login' && token) {
    return next({name:'Home'})
  }
  if (to.name !== 'Login' && !token) next({ name: 'Login' })
  // 如果用户未能验证身份，则 `next` 会被调用两次
  next()
})

export default router;
