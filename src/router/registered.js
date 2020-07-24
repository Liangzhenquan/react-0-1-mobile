/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-23 10:46:29
 * @LastEditors: liang
 * @LastEditTime: 2020-07-24 10:46:04
 */
// 路由注册
import Login from '@/views/login';
import NotFound from '@/views/error/NotFound';

import Dashboard from '@/views/home/Dashboard';
export const router = [
  {
    path: '/login',
    exact: true,
    component: Login
  },
  {
    path: '/',
    requiresAuth: true,
    component: Dashboard
  },
  {
    path: '/404',
    exact: true,
    component: NotFound
  }
];
