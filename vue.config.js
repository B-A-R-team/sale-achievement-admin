/*
 * @Author: lts
 * @Date: 2020-12-29 23:47:57
 * @LastEditTime: 2020-12-30 12:44:17
 * @FilePath: \admin\vue.config.js
 */
module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#67be79',
            'link-color': '#67be79',
            'border-radius-base': '2px',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
};
