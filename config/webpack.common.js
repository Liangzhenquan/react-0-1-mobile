/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-09 11:03:40
 * @LastEditors: liang
 * @LastEditTime: 2020-07-17 13:44:00
 */
const paths = require('./paths.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getClientEnvironment = require('./env');
const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));
const cssRegex = /\.css$/;
const imageInlineSizeLimit = parseInt(
  process.env.IMAGE_INLINE_SIZE_LIMIT || '10000'
);
module.exports = function (mode) {
  const isEnvDevelopment = mode === 'development';
  const isEnvProduction = mode === 'production';
  const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
      isEnvDevelopment && require.resolve('style-loader'),
      isEnvProduction && {
        loader: MiniCssExtractPlugin.loader,
        options: paths.publicUrlOrPath.startsWith('.')
          ? { publicPath: '../../' }
          : {}
      },
      {
        loader: require.resolve('css-loader'),
        options: cssOptions
      }
    ];
    return loaders.filter(Boolean);
  };
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
          oneOf: [
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: require.resolve('url-loader'),
              options: {
                limit: imageInlineSizeLimit,
                name: 'static/media/[name].[hash:8].[ext]'
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
            },
            {
              test: cssRegex,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: false
              }),
              sideEffects: true
            },
            {
              loader: require.resolve('file-loader'),
              exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
              options: {
                name: 'static/media/[name].[hash:8].[ext]'
              }
            }
          ]
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
      new webpack.DefinePlugin(env.stringified),
      isEnvProduction &&
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash:8].css',
          chunkFilename: 'static/css/[name].[contenthash:8].chunk.css'
        })
    ].filter(Boolean)
  };
};
