const merge = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const config = require('./client.config')

const webpackAnalyzerConfig = merge(config, {
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: true,
    }),
  ],
})

module.exports = webpackAnalyzerConfig
