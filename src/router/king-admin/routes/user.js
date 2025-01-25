const {
  verifyAccessToken,
  useResponseError,
  useResponseSuccess
} = require('../utils')

function createUserRoutes(router) {
  router.get('/user/info', (ctx, _next) => {
    const userinfo = verifyAccessToken(ctx.request)
    if (!userinfo) {
      ctx.status = 403
      ctx.body = useResponseError('Unauthorized Exception')
    }

    ctx.body = useResponseSuccess(userinfo)
  })
}

module.exports = { createUserRoutes }
