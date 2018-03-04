const webpack = require('webpack')

module.exports = new webpack.optimize.UglifyJsPlugin({
  sourceMap: true,
  mangle: true,
  compress: {
    warnings: false, // Suppress uglification warnings
    pure_getters: true,
    unsafe: true,
    unsafe_comps: true,
    screw_ie8: true,
  },
  output: {
    comments: false,
  },
  exclude: [/\.min\.js$/gi], // skip pre-minified libs
})
