const router = require('koa-router')()
router.prefix('/admin-api')

const setupRoutes = require('./routes')
setupRoutes(router)

module.exports = router
