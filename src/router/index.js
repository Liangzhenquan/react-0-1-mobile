/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-23 10:39:08
 * @LastEditors: liang
 * @LastEditTime: 2020-07-23 16:52:06
 */
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { router } from './registered';
// 路由守卫
function RouterGuard({ children, meta, ...props }) {
  React.useEffect(() => {
    if (meta) {
      if (meta.requiresAuth) {
        // props.history.replace('/login');
      }
    }
  }, []);
  return React.cloneElement(children, props);
}
// 一级路由
function RouteWithRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        <RouterGuard {...props} meta={route.meta} routes={route.children || []}>
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
export { RouteWithRoutes, RouteWithSubRoutes, router };
