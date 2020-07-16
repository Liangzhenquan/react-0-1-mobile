/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-09 11:03:40
 * @LastEditors: liang
 * @LastEditTime: 2020-07-16 13:11:55
 */
const paths = require('./paths.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const getClientEnvironment = require('./env');
const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));
module.exports = function (mode) {
  const isEnvDevelopment = mode === 'development';
  const isEnvProduction = mode === 'production';
  return {
    mode,
    entry: paths.appIndexJs,
    resolve: {
      alias: {
        '@': paths.appSrc
      },
      extensions: ['.js', '.jsx']
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        name: false
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          enforce: 'pre',
          loader: 'eslint-loader',
          options: {
            cache: false //缓存lint的结果
          }
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                '@babel/plugin-proposal-class-properties', //类组件支持
                '@babel/plugin-transform-runtime'
              ]
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: paths.appHtml
          }
        )
      ),
      new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
      new webpack.DefinePlugin(env.stringified)
    ]
  };
};
