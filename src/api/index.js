const express = require('express')
const WelcomeMessageResource = require('../resources/welcomeMessage')

const router = express.Router()

router.get('/', (req, res) => {
  const response = new WelcomeMessageResource()
  res.status(200).json(response)
})

module.exports = router
