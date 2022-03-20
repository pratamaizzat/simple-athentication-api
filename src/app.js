const express = require('express')
const { notFoundPage, errorHandler } = require('./middlewares/errorMiddleware')

const app = express()

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    statusText: 'OK',
    message: 'Welcome To Simple Authentication System',
  })
})
app.use(notFoundPage)
app.use(errorHandler)

module.exports = app
