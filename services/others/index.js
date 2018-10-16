const express = require('express')
const router = express.Router()

router.ws('/', function (ws, req) {
  console.log('other connected', req)
  ws.on('message', function (msg) {
    // ws.send(msg)
    console.log(msg)
  })
})

module.exports = router
