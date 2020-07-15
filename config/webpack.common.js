/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-09 11:03:40
 * @LastEditors: liang
 * @LastEditTime: 2020-07-15 10:52:51
 */
const paths = require("./paths.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = function (mode) {
  const isEnvDevelopment = mode === "development";
  const isEnvProduction = mode === "production";
  return {
    mode,
    entry: paths.appIndexJs,
    resolve: {
      alias: {
        "@": paths.appSrc,
      },
      extensions: [".js", ".jsx"],
    },
    optimization: {
      splitChunks: {
        chunks: "all",
        name: false,
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: [
                "@babel/plugin-proposal-class-properties", //类组件支持
                "@babel/plugin-transform-runtime",
              ],
            },
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: paths.appHtml,
          }
        )
      ),
    ],
  };
};
