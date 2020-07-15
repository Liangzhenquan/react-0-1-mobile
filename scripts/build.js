/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-15 11:29:58
 * @LastEditors: liang
 * @LastEditTime: 2020-07-15 11:46:33
 */
"use strict";
const paths = require("../config/paths");
const fs = require("fs-extra");
const webpack = require("webpack");
const config = require("../config/webpack.prod.js");
const checkRequiredFiles = require("react-dev-utils/checkRequiredFiles");
// 确实模块让其崩溃
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}
const { checkBrowsers } = require("react-dev-utils/browsersHelper");
const isInteractive = process.stdout.isTTY;
checkBrowsers(paths.appPath, isInteractive).then(() => {
  fs.emptyDirSync(paths.appBuild);
  copyPublicFolder();
  return build();
});
function build() {
  console.log("生产环境打包中...");
  const compiler = webpack(config);
  // compiler.run();
}
function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: (file) => file !== paths.appHtml,
  });
}
