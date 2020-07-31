/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-23 10:46:29
 * @LastEditors: liang
 * @LastEditTime: 2020-07-31 14:08:11
 */
// 路由注册
import { icons } from '@/utils/variable';
import NotFound from '@/views/error/NotFound';
import Test from '@/views/test';
export const router = [
  {
    path: '/404',
    exact: true,
    component: NotFound
  },
  {
    path: '/',
    exact: true,
    component: Test
  }
];
export const [menus] = router
  .filter((route) => route.children)
  .map((route) => route.children);
