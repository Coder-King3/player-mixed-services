/* Module */
const Koa = require('koa')
const app = new Koa()
const CreateMiddleware = require('./middleware')
const CreateRouter = require('./router')
const views = require('koa-views')
const json = require('koa-json')
const cors = require('koa2-cors')
const KoaStatic = require('koa-static')
const path = require('path')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const onerror = require('koa-onerror')

/* Mount */
app.use(bodyparser({ enableTypes: ['json', 'form', 'text'] }))
app.use(json())
app.use(logger())
app.use(KoaStatic(`${path.resolve()}/src/public`))
app.use(views(`${path.resolve()}/src/views`, { extension: 'pug' }))
app.use(cors())
onerror(app)

/* Middlewares */
const middleware = CreateMiddleware()
middleware(app)

/* Router */
const router = CreateRouter()
router(app)

/* handler */
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app