const {
  verifyAccessToken,
  MOCK_MENUS,
  useResponseError,
  useResponseSuccess
} = require('../utils')

function createMenuRoutes(router) {
  router.get('/menu/all', (ctx, _next) => {
    const userinfo = verifyAccessToken(ctx.request)
    if (!userinfo) {
      ctx.status = 403
      ctx.body = useResponseError('Unauthorized Exception')
    }

    const menus =
      MOCK_MENUS.find((item) => item.username === userinfo?.username)?.menus ??
      []

    ctx.body = useResponseSuccess(menus)
  })
}

module.exports = { createMenuRoutes }
