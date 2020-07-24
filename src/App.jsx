/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-09 10:14:52
 * @LastEditors: liang
 * @LastEditTime: 2020-07-24 09:27:11
 */
import React from 'react';
import { message } from 'antd';
import ErrorBoundary from '@/components/ErrorBoundary';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './style';
import '@/assets/fonts/iconfont.js';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { router, RouteWithRoutes } from '@/router';
message.config({
  duration: 2,
  maxCount: 2
});
export default function App() {
  return (
    <ErrorBoundary>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            {router.map((route) => (
              <RouteWithRoutes {...route} key={route.path} />
            ))}
            <Route path="*">
              <Redirect to="/404" />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
