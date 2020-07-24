/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-23 10:46:29
 * @LastEditors: liang
 * @LastEditTime: 2020-07-24 15:25:33
 */
// 路由注册
import Login from '@/views/login';
import NotFound from '@/views/error/NotFound';

import AppLayout from '@/container/AppLayout';
import DashBoard from '@/views/home/dashboard/Dashboard';
export const router = [
  {
    path: '/login',
    exact: true,
    component: Login
  },
  {
    path: '/',
    requiresAuth: true,
    component: AppLayout,
    children: [
      {
        path: '/',
        title: '首页',
        component: DashBoard
      },
      {
        icon: 'set',
        title: '活动设置',
        sub: [
          {
            path: '/new',
            title: '创建活动',
            component: DashBoard
          },
          {
            path: '/camplist',
            title: '活动列表',
            component: DashBoard
          }
        ]
      }
    ]
  },
  {
    path: '/404',
    exact: true,
    component: NotFound
  }
];
export const [menus] = router
  .filter((route) => route.children)
  .map((route) => route.children);
