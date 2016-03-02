var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'bundle.js',
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('main.css'),
  ],
};
