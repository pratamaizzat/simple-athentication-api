function ErrorHandlerException(status, statusText, message, meta) {
  const error = new Error(message)
  error.status = status
  error.statusText = statusText
  error.meta = meta

  return error
}

module.exports = ErrorHandlerException
