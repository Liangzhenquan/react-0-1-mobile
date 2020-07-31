/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-20 15:52:35
 * @LastEditors: liang
 * @LastEditTime: 2020-07-31 11:27:40
 */
import { theme } from '../package.json';
import styled, { createGlobalStyle } from 'styled-components';

export const Title = styled.div`
  color: ${(props) =>
    props.primary ? props.theme['primary-color'] : props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;

const GlobalStyle = createGlobalStyle`
<style type="text/css">
.icon {
   width: 1em;
   height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
.ant-layout.ant-layout-has-sider {
   height: 100vh;
}
.ant-layout-header {
   background: #fff;
}
.ant-layout-content {
   background: #fff;
   overflow-y: scroll;
}
.ant-layout-content >div {
   height: 100%;
}
</style>
`;
export { GlobalStyle, theme };
