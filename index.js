/* 模块 */
const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const cors = require('koa2-cors')
const KoaStatic = require('koa-static')
const path = require('path')
const { PORT } = require('./config/global.config')

/* 挂载 */
app.use(cors())
app.use(KoaStatic(path.resolve() + '/public'))

/* 路由 */
const initRoute = require('./router/index')
initRoute(app, router)

/* 服务 */
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`)
})
