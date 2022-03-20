const express = require('express')
const { notFoundPage, errorHandler } = require('./middlewares/errorMiddleware')
const WelcomeMessageResource = require('./resources/welcomeMessage')
const api = require('./api')

const app = express()

app.get('/', (req, res) => {
  const response = new WelcomeMessageResource()
  res.status(200).json(response)
})

app.use('/api/v1', api)
app.use(notFoundPage)
app.use(errorHandler)

module.exports = app
