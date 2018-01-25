const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Configurações Html-webpack-plugin
 */
const htmlWebpackPluginConfig = new htmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

/**
 * Configurações do Webpack
 */
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('docs'),
    filename: 'index.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: extractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  },

  plugins: [
    htmlWebpackPluginConfig,
    new extractTextPlugin('Todo.css', {
      allChunks: true
    })
  ]
};
