/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-09 18:07:16
 * @LastEditors: liang
 * @LastEditTime: 2020-07-24 09:25:49
 */
const paths = require('./paths');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common('development'), {
  output: {
    pathinfo: true,
    publicPath: paths.publicUrlOrPath
  },
  devtool: 'source-map'
});
