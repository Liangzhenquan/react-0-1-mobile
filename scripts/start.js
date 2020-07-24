/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-09 13:32:18
 * @LastEditors: liang
 * @LastEditTime: 2020-07-24 15:37:53
 */

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../config/webpack.dev');
const createDevServerConfig = require('../config/devServer.config');
// const compiler = webpack(config);
const paths = require('../config/paths');
const {
  choosePort,
  createCompiler,
  prepareUrls
} = require('react-dev-utils/WebpackDevServerUtils');
const { checkBrowsers } = require('react-dev-utils/browsersHelper');
const openBrowser = require('react-dev-utils/openBrowser');
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 7000;
const HOST = process.env.HOST || '0.0.0.0';
const isInteractive = process.stdout.isTTY;
console.log('111', paths.appPath);
const { appPackageJson } = paths;
checkBrowsers(paths.appPath, isInteractive)
  .then(() => {
    return choosePort(HOST, DEFAULT_PORT);
  })
  .then((port) => {
    if (port === null) return;
    const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
    const urls = prepareUrls(protocol, HOST, port);
    const devSocket = {
      warnings: (warnings) =>
        server.sockWrite(server.sockets, 'warnings', warnings),
      errors: (errors) => server.sockWrite(server.sockets, 'errors', errors)
    };
    const appName = require(appPackageJson).name;
    const compiler = createCompiler({
      config,
      urls,
      appName,
      devSocket,
      webpack
    });
    const serverConfig = createDevServerConfig(
      require(paths.appPackageJson).proxy,
      urls.lanUrlForConfig
    );
    const server = new WebpackDevServer(compiler, serverConfig);
    server.listen(port, HOST, () => {
      console.log('服务启动中....');
      openBrowser(urls.localUrlForBrowser);
      [('SIGINT', 'SIGTERM')].forEach(function (sig) {
        process.on(sig, function () {
          server.close();
          process.exit();
        });
      });
    });
  })
  .catch((err) => {
    if (err && err.message) {
      console.log(err.message);
    }
    process.exit(1);
  });
