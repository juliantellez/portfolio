const merge = require('webpack-merge')

const config = require('../../app-config')
const commonConfig = require('./common.config')

module.exports = merge(commonConfig, {
  devtool: 'cheap-module-source-map',
  entry: {
    images: config.IMAGES,
    client: config.CLIENT,
  },
  output: {
    filename: '[name].js',
    path: config.STATIC,
    sourceMapFilename: '[file].map',
  },
})
