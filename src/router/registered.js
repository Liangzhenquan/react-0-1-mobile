/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-23 10:46:29
 * @LastEditors: liang
 * @LastEditTime: 2020-07-24 17:21:07
 */
// 路由注册
import { icons } from '@/utils/variable';
import Login from '@/views/login';
import NotFound from '@/views/error/NotFound';

import AppLayout from '@/container/AppLayout';

import DashBoard from '@/views/home/dashboard/Dashboard';
import CampoList from '@/views/home/campList';
import User from '@/views/home/set/User';
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
        icon: icons.home,
        exact: true,
        component: DashBoard
      },
      {
        icon: icons.huo,
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
            component: CampoList
          }
        ]
      },
      {
        title: '系统设置',
        icon: icons.set,
        sub: [
          {
            path: '/user',
            title: '用户管理',
            component: User
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
