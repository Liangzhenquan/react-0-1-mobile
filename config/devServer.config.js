/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-09 13:12:16
 * @LastEditors: liang
 * @LastEditTime: 2020-07-23 17:23:36
 */
'use strict';

const paths = require('./paths');
const fs = require('fs');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const ignoredFiles = require('react-dev-utils/ignoredFiles');
const redirectServedPath = require('react-dev-utils/redirectServedPathMiddleware');
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
    watchOptions: {
      ignored: ignoredFiles(paths.appSrc)
    },
    historyApiFallback: {
      disableDotRule: true,
      index: paths.publicUrlOrPath
    },
    // inline: true, //缺少该配置，会出现路由错误
    // historyApiFallback: true, //缺少该配置，会出现路由错误
    publicPath: paths.publicUrlOrPath.slice(0, -1),
    before(app, server) {
      app.use(evalSourceMapMiddleware(server));
      app.use(errorOverlayMiddleware());

      if (fs.existsSync(paths.proxySetup)) {
        require(paths.proxySetup)(app);
      }
    },
    after(app) {
      app.use(redirectServedPath(paths.publicUrlOrPath));
      app.use(noopServiceWorkerMiddleware(paths.publicUrlOrPath));
    }
  };
};
