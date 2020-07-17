/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-09 13:12:16
 * @LastEditors: liang
 * @LastEditTime: 2020-07-17 11:00:13
 */
const path = require('path');
const paths = require('./paths');

module.exports = {
  contentBase: paths.appPath,
  contentBasePublicPath: paths.publicUrlOrPath,
  watchContentBase: true,
  compress: true,
  hot: true,
  quiet: true, //清理控制台
  publicPath: paths.publicUrlOrPath.slice(0, -1)
};
