const k2c = require('koa2-connect')
const { createProxyMiddleware } = require('http-proxy-middleware')

const koa2Proxy = (proxyOptions) => {
  return async function (ctx, next) {
    const targets = proxyOptions || {}
    const { path } = ctx
    for (const route of Object.keys(targets)) {
      if (new RegExp(route).test(path)) {
        await k2c(createProxyMiddleware(targets[route]))(ctx, next)
        break
      }
    }
    await next()
  }
}

module.exports = koa2Proxy
