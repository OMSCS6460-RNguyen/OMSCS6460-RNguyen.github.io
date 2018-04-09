const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  devtool: 'source-maps',
  module: {
    rules: [
      {test: /\.js?/, use: 'babel-loader'},
      { test: /\.scss?/, use: ['style-loader', 'css-loader', 'sass-loader']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    })
  ]
}
