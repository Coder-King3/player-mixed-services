function registerRoute(router) {
  router.get('/welcome', async (ctx, next) => {
    let url = ctx.url
    ctx.body = {
      url,
      message: `你好，你当前访问的接口是: '/welcome' `
    }
    next()
  })
}

function initRoute(app, router) {
  /* 全局中间件 */
  app.use(function (ctx, next) {
    console.log(`requst: { url: '${ctx.url}' }`)
    next()
  })

  // 注册路由
  registerRoute(router)

  // 挂载路由
  app.use(router.routes())
}

module.exports = initRoute
