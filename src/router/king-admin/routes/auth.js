const {
  generateAccessToken,
  verifyAccessToken,
  MOCK_USERS,
  MOCK_CODES,
  useResponseError,
  useResponseSuccess
} = require('../utils')
function createAuthRoutes(router) {
  router.get('/auth/login', (ctx, _next) => {
    const { username, password } = ctx.query
    if (!password || !username) {
      ctx.body = useResponseError('Username and password are required')
    }

    const findUser = MOCK_USERS.find(
      (item) => item.username === username && item.password === password
    )

    if (!findUser) {
      ctx.body = useResponseError('Username or password is incorrect.')
    }

    const accessToken = generateAccessToken(findUser)

    const { password: _pwd, ...userinfo } = findUser
    ctx.body = useResponseSuccess({
      ...userinfo,
      accessToken
    })
  })
  router.get('/auth/logout', (ctx, _next) => {
    const verify = verifyAccessToken(ctx.request)
    if (!verify) ctx.body = useResponseError('Invalid token')

    ctx.body = useResponseError('Token has been destroyed')
  })
  router.get('/auth/codes', (ctx, _next) => {
    const userinfo = verifyAccessToken(ctx.request)
    if (!userinfo) {
      ctx.status = 403
      ctx.body = useResponseError('Unauthorized Exception')
    }

    const codes =
      MOCK_CODES.find((item) => item.username === userinfo.username)?.codes ??
      []

    ctx.body = useResponseSuccess(codes)
  })
}

module.exports = { createAuthRoutes }
