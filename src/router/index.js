const main = require('./main')
const users = require('./users')

function CreateRouter() {
  const routes = [main, users]
  return function mountRouter(app) {
    routes.forEach((route) => app.use(route.routes(), route.allowedMethods()))
  }
}

module.exports = CreateRouter
