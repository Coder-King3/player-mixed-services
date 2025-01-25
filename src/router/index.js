const main = require('./main')
const users = require('./users')
const admin = require('./king-admin')

function CreateRouter() {
  const routes = [main, users, admin]
  return function mountRouter(app) {
    routes.forEach((route) => app.use(route.routes(), route.allowedMethods()))
  }
}

module.exports = CreateRouter
