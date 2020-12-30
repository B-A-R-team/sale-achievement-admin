/*
 * @Author: lts
 * @Date: 2020-12-29 16:43:00
 * @LastEditTime: 2020-12-30 12:41:26
 * @FilePath: \sale-achievement-admin\src\router\index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'/staffInfo',
    children: [
      {
        path: '/staffInfo',
        name:'StaffInfo',
        component:() => import('../views/StaffInfo.vue')
      },
      {
        path: '/customers',
        name:'customers',
        component:() => import('../views/Customers.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
