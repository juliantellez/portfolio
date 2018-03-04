const fs = require('fs')
const merge = require('webpack-merge')

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
  target: 'node',
  devtool: 'cheap-module-source-map',
  entry: {
    server: config.SERVER,
  },
  output: {
    filename: '[name].js',
    path: config.DEST,
    sourceMapFilename: '[file].map',
  },
  externals: nodeModules,
})
