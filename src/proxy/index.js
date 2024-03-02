const proxy = require('koa2-proxy-middleware')
const PROXY_CONFIG = require('./config')

function CreateProxy() {
  return function mountProxy(app) {
    app.use(proxy(PROXY_CONFIG))
  }
}

module.exports = CreateProxy
