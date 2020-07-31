/*
 * @Description:
 * @Autor: liang
 * @Date: 2020-07-31 14:21:31
 * @LastEditors: liang
 * @LastEditTime: 2020-07-31 19:45:46
 */
module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    }
  }
};
