const path = require('path')

const postcssImport = require('postcss-import')
const postcssCssNext = require('postcss-cssnext')
const extractTextPlugin = require('extract-text-webpack-plugin')

const cssGlobals = path.resolve(__dirname, '../../../app/styles/')

module.exports = {
  test: /\.css$/,
  exclude: /node_modules/,
  use: extractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]___[local]___[hash:base64:5]',
          camelCase: true,
          url: true,
          import: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          ident: 'postcss',
          plugins: [
            postcssImport({
              path: [
                cssGlobals,
              ],
            }),
            postcssCssNext(),
          ],
        },
      },
    ],
  }),
}
