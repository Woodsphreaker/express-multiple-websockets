const express = require('express')
const router = express.Router()
const clients = {}

router.ws('/', function (ws, req) {

  console.log('chat connected', req)
  ws.on('message', function (msg) {
    console.log(msg)
  })
})

module.exports = router
