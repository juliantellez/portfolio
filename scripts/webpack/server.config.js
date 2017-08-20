const fs = require('fs')

const config = require('../../app-config')

const nodeModules = fs.readdirSync('node_modules')
.reduce((modules, module) => {
  if (module === '.bin') {
    return modules
  }
  modules[module] = `commonjs ${module}`
  return modules
}, {})

const webpackConfig = {
  target: 'node',
  entry: {
    server: config.SERVER,
  },
  output: {
    filename: '[name].js',
    path: config.DEST,
    sourceMapFilename: '[file].map',
  },
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
    ],
  },
  externals: nodeModules,
}

exports.default = webpackConfig
