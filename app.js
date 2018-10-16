const http = require('http')
const express = require('express')
const expressWs = require('express-ws')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const loadServices = require('./helpers/loadWsServices')

var app = express()
app.server = http.createServer(app)
expressWs(app, app.server)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
loadServices(app)

module.exports = app
