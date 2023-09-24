const Router = require('koa-router')
const router = new Router()

router.get('/welcome', async (ctx, next) => {
  let url = ctx.url

  ctx.body = {
    url,
    message: `你好，你当前访问的接口是: '/welcome' `
  }
  next()
})

function initRoute(app) {
  // 注册路由
  app.use(router.routes())
}

module.exports = initRoute
