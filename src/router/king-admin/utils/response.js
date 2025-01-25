function useResponseSuccess(data) {
  return {
    code: 0,
    data,
    message: 'ok',
    type: 'success'
  }
}

function useResponseError(message) {
  return {
    code: -1,
    data: null,
    message,
    type: 'error'
  }
}

function pagination(pageNo, pageSize, array) {
  const offset = (pageNo - 1) * Number(pageSize)
  return offset + Number(pageSize) >= array.length
    ? array.slice(offset)
    : array.slice(offset, offset + Number(pageSize))
}

module.exports = {
  useResponseSuccess,
  useResponseError,
  pagination
}
