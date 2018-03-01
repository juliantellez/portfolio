const webpack = require('webpack')
const merge = require('webpack-merge')

const clientConfig = require('./client.config')
const uglifyJsPlugin = require('./plugins/uglify')
const compressionPlugin = require('./plugins/compression')

module.exports = merge(clientConfig, {
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    uglifyJsPlugin,
    compressionPlugin,
  ],
})
