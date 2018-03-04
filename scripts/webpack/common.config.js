const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const jsRule = require('./rules/jsRule')
const cssRule = require('./rules/cssRule')
const assetRule = require('./rules/assetRule')
const packageJson = require('../../package.json')

const extractCss = new ExtractTextPlugin('[name].css')

module.exports = {
  module: {
    rules: [
      jsRule,
      cssRule,
      assetRule,
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        VERSION: JSON.stringify(packageJson.version),
      },
    }),
    extractCss,
  ],
}
