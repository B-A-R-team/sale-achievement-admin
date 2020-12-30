/*
 * @Author: lts
 * @Date: 2020-12-29 23:47:57
 * @LastEditTime: 2020-12-29 23:55:18
 * @FilePath: \sale-achievement-admin\vue.config.js
 */
module.exports = {
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#1DA57A',
                        'link-color': '#1DA57A',
                        'border-radius-base': '2px',
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },
};