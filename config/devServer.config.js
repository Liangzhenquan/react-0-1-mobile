/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-09 13:12:16
 * @LastEditors: liang
 * @LastEditTime: 2020-07-17 16:52:38
 */
'use strict';

const path = require('path');
const paths = require('./paths');

module.exports = function (allowedHost) {
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
    public: allowedHost,
    publicPath: paths.publicUrlOrPath.slice(0, -1)
  };
};
