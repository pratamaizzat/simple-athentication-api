const ErrorHandlerException = require('../utils/exception')
/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const notFoundPage = (req, res, next) => {
  const err = new ErrorHandlerException(
    404,
    'Not Found',
    `Not found page -- ${req.originalUrl}`
  )
  res.status(404)
  next(err)
}

/**
 *
 * @param {import('express')} error
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    status: statusCode,
    statusText: error.statusText,
    message: error.message,
    // stack: process.env.NODE_ENV === 'production' ? '🎂' : error.stack,
    meta: error.meta || undefined,
  })
}

module.exports = {
  notFoundPage,
  errorHandler,
}
