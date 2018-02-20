module.exports = {
  test: /\.(png|svg|jpg|gif|ttf|eot|svg|woff|woff2|ico)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'images/',
      },
    },
  ],
}
