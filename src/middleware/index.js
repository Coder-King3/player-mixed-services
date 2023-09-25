// logger
async function logger(ctx, next) {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
}

function CreateMiddleware() {
  const middlewares = [logger]
  return function middleware(app) {
    middlewares.forEach((middle) => app.use(middle))
  }
}

module.exports = CreateMiddleware
