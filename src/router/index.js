/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-23 10:39:08
 * @LastEditors: liang
 * @LastEditTime: 2020-07-24 17:46:26
 */
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { router, menus } from './registered';
import { cancelFetch } from '@/api/fetch';
// 路由守卫
function RouterGuard({ children, requiresAuth, ...props }) {
  // React.useEffect(() => {
  //   if (requiresAuth) {
  //     // props.history.replace('/login');
  //   }
  // }, []);
  if (JSON.stringify(cancelFetch) !== '{}') {
    Object.entries(cancelFetch).forEach(([key]) => {
      cancelFetch[key].abort();
    });
  }

  return React.cloneElement(children, props);
}
// 一级路由
function RouteWithRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        <RouterGuard
          {...props}
          requiresAuth={route.requiresAuth}
          routes={route.children || []}
        >
          <route.component />
        </RouterGuard>
      )}
    />
  );
}
// 二级路由
function RouteWithSubRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route) => (
        <RouteWithRoutes {...route} key={route.path} />
      ))}
      <Route path="*">
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
}
export { RouteWithRoutes, RouteWithSubRoutes, router, menus };
