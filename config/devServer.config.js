/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-09 13:12:16
 * @LastEditors: liang
 * @LastEditTime: 2020-07-15 10:55:33
 */
const path = require("path");
const paths = require("./paths");
module.exports = {
  contentBase: path.join(paths.appPath, "dist"),
  compress: true,
  hot: true,
  quiet: true, //清理控制台
};
