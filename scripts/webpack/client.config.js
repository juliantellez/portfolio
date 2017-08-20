const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = require('../../app-config')

const extractCss = new ExtractTextPlugin('[name].css')

const webpackConfig = {
  entry: {
    images: config.IMAGES,
    client: config.CLIENT,
    styles: config.STYLES,
  },
  output: {
    filename: '[name].js',
    path: config.STATIC,
    sourceMapFilename: '[file].map',
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: config.SRC,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', {modules: false}],
              'stage-0',
              'react',
            ],
          },
        },
      },
      {
        enforce: 'pre',
        test: /\.scss$/,
        loader: 'import-glob',
      },
      {
        test: /\.scss$/,
        use: extractCss.extract({
          use: [
            {loader: 'css-loader'},
            {loader: 'autoprefixer-loader'},
            {loader: 'sass-loader'},
          ],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  plugins: [extractCss],
}

exports.default = webpackConfig
