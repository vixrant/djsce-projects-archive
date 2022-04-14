const withCSS = require('@zeit/next-css');
require('dotenv').config();

module.exports = withCSS({
    cssModules: 0,
    assetPrefix: process.env.NODE_ENV === 'development' ? '' : "/nss",
    env: {
        NODE_ENV: process.env.NODE_ENV,
    },
})
