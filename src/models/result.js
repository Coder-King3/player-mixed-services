/**
 * * 响应成功函数
 * @param {any} result
 * @param {object} object
 * @return {object}
 */
const success = (result, { message = 'Request success' } = {}) => {
  return {
    code: 0,
    data: result,
    message,
    type: 'success'
  }
}

/**
 * * 响应失败函数
 * @param {string} message
 * @param {object} object
 * @return {object}
 */
const error = (
  message = 'Request failed',
  { code = -1, result = null } = {}
) => {
  return {
    code,
    data: result,
    message,
    type: 'error'
  }
}

const result = {
  success,
  error
}

module.exports = result
