/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-09 18:07:16
 * @LastEditors: liang
 * @LastEditTime: 2020-07-10 18:31:44
 */
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
module.exports = merge(common("development"), {
  output: {
    path: undefined,
    pathinfo: true,
    filename: "static/js/bundle.js",
    chunkFilename: "static/js/[name].chunk.js",
  },
  devtool: "source-map",
});
