const { MOCK_USERS } = require('./mock-data')
const jwt = require('jsonwebtoken')

const ACCESS_TOKEN_SECRET = 'king-3 <^_^> king-admin'

function generateAccessToken(user) {
  console.log(`user:`, user)
  return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: '7d' })
}

function verifyAccessToken(request) {
  const authHeader = request?.headers?.authorization
  if (!authHeader?.startsWith('Bearer')) {
    return null
  }

  const token = authHeader.split(' ')[1]
  try {
    const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET)

    const username = decoded.username
    const user = MOCK_USERS.find((item) => item.username === username)
    if (!user) return null

    const { password: _pwd, ...userinfo } = user
    return userinfo
  } catch {
    return null
  }
}

module.exports = {
  generateAccessToken,
  verifyAccessToken
}
