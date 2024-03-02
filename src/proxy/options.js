const proxyOptions = {
  '/airbnb-proxy-api': {
    target: 'http://codercba.com:1888/airbnb/api',
    changeOrigin: true,
    pathRewrite: {
      '^/airbnb-proxy-api': ''
    }
  }
}

module.exports = proxyOptions
