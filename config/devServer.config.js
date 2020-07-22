/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-09 13:12:16
 * @LastEditors: liang
 * @LastEditTime: 2020-07-20 17:20:32
 */
'use strict';

const path = require('path');
const paths = require('./paths');

module.exports = function (proxy, allowedHost) {
  return {
    compress: true,
    clientLogLevel: 'none',
    contentBase: paths.appPublic,
    contentBasePublicPath: paths.publicUrlOrPath,
    watchContentBase: true,
    hot: true,
    transportMode: 'ws',
    injectClient: false,
    quiet: true, //清理控制台
    overlay: false,
    proxy,
    public: allowedHost,
    publicPath: paths.publicUrlOrPath.slice(0, -1)
  };
};
