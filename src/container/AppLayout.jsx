import React from 'react';
import { Layout } from 'antd';
import AppSider from './AppSider';
import styled from 'styled-components';
import { RouteWithSubRoutes } from '@/router';
const { Header, Content, Sider } = Layout;
function AppLayout({ routes }) {
  const flatRoutes = () => {
    let routeArr = [];
    routes.forEach((route) => {
      if (route.sub) {
        routeArr = [...routeArr, ...route.sub];
      } else {
        routeArr = [...routeArr, route];
      }
    });
    return routeArr;
  };
  return (
    <Layout>
      <Sider>
        <AppSider />
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
          <Contain>
            <RouteWithSubRoutes routes={flatRoutes()} />
          </Contain>
        </Content>
      </Layout>
    </Layout>
  );
}
const Contain = styled.div`
  padding: 10px;
`;
export default AppLayout;
