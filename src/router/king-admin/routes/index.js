const { createAuthRoutes } = require('./auth')
const { createMenuRoutes } = require('./menu')
const { createUserRoutes } = require('./user')

function setupRoutes(router) {
  createAuthRoutes(router)
  createMenuRoutes(router)
  createUserRoutes(router)
}

module.exports = setupRoutes
