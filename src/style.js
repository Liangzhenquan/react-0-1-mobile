/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-20 15:52:35
 * @LastEditors: liang
 * @LastEditTime: 2020-07-31 19:00:43
 */
import { theme } from '../package.json';
import styled, { createGlobalStyle } from 'styled-components';

// export const Title = styled.div``;

const GlobalStyle = createGlobalStyle`
html {
   font-size: 50px;
   color: #333;
}
body {
   font-size: 12px;
}
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
