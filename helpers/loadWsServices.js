
const fs = require('fs')
const path = require('path')
const modules = fs.readdirSync(path.join(__dirname, '../services'))

// Create Routes
const createRoute = app => {
  for (const mod of modules) {
    const loadModule = require(`../services/${mod}`)
    app.use(`/${mod}`, loadModule)
  }
}

module.exports = createRoute
