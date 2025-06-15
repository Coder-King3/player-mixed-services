const main = require('./main')
const users = require('./users')
const admin = require('./king-admin')
const images = require('./images')

function CreateRouter() {
  const routes = [main, users, admin, images]
  return function mountRouter(app) {
    routes.forEach((route) => app.use(route.routes(), route.allowedMethods()))
  }
}

module.exports = CreateRouter
