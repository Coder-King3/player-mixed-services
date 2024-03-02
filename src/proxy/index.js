const koa2Proxy = require('./proxy')
const proxyOptions = require('./options')

function CreateProxy() {
  return function mountProxy(app) {
    app.use(koa2Proxy(proxyOptions))
  }
}

module.exports = CreateProxy
