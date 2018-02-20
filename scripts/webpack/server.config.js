const fs = require('fs')
const merge = require('webpack-merge')

const postcssImport = require('postcss-import')
const postcssCssNext = require('postcss-cssnext')

const config = require('../../app-config')
const commonConfig = require('./common.config')

const nodeModules = fs
.readdirSync('node_modules')
.reduce((modules, module) => {
  if (module === '.bin') {
    return modules
  }
  modules[module] = `commonjs ${module}`
  return modules
}, {})

module.exports = merge(commonConfig, {
  entry: {
    server: config.SERVER,
  },
  output: {
    filename: '[name].js',
    path: config.DEST,
    sourceMapFilename: '[file].map',
  },
  target: 'node',
  devtool: 'source-map',
  externals: nodeModules,
})
