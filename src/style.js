/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-20 15:52:35
 * @LastEditors: liang
 * @LastEditTime: 2020-07-23 16:12:03
 */
import { theme } from '../package.json';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
<style type="text/css">
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}
</style>
`;
export { GlobalStyle, theme };
