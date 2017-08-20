const path = require('path')

const APP_PORT = 8080

const ENV = process.env.NODE_ENV || 'development'

const SRC = path.join(__dirname, 'app')
const SERVER = path.join(SRC, '/scripts/server')

const DEST = path.join(__dirname, 'build')
const STATIC = path.join(DEST, '/static')

module.exports = {
  APP_PORT,
  ENV,
  SRC,
  SERVER,
  DEST,
  STATIC,
}
