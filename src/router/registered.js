/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-23 10:46:29
 * @LastEditors: liang
 * @LastEditTime: 2020-07-24 09:33:56
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
    component: Dashboard
  },
  {
    path: '/404',
    exact: true,
    component: NotFound
  }
];
