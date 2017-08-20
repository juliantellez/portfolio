const path = require('path')

const APP_PORT = 8080

const ENV = process.env.NODE_ENV || 'development'

const SRC = path.join(__dirname, 'app')
const IMAGES = path.join(SRC, 'images')
const STYLES = path.join(SRC, 'styles/main.scss')

const SERVER = path.join(SRC, 'scripts/server')
const CLIENT = path.join(SRC, 'scripts/client')

const DEST = path.join(__dirname, 'build')
const STATIC = path.join(DEST, '/static')

module.exports = {
  APP_PORT,
  ENV,
  SRC,
  SERVER,
  CLIENT,
  STYLES,
  IMAGES,
  DEST,
  STATIC,
}
