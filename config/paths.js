/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-09 11:33:49
 * @LastEditors: liang
 * @LastEditTime: 2020-07-15 11:46:07
 */
const path = require("path");
const fs = require("fs");
const appDirectory = fs.realpathSync(process.cwd()); //获取工程文件目录

const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
const resolveModule = (resolveFn, filePath) => resolveFn(`${filePath}.js`);
const getPublicUrlOrPath = require("react-dev-utils/getPublicUrlOrPath");
//以与webpack相同的顺序解析文件路径
const publicUrlOrPath = getPublicUrlOrPath(
  process.env.NODE_ENV === "development",
  require(resolveApp("package.json")).homepage,
  process.env.PUBLIC_URL
);
module.exports = {
  appPath: resolveApp("."),
  appSrc: resolveApp("src"),
  appBuild: resolveApp("dist"),
  appPublic: resolveApp("public"),
  appIndexJs: resolveModule(resolveApp, "src/index"),
  appHtml: resolveApp("public/index.html"),
  publicUrlOrPath,
};
