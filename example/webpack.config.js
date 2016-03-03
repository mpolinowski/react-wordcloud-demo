var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: './App',
  output: {
    path: path.join(__dirname, 'dist/static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('App.css'),
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
      },
    ]
  },
  postcss: [autoprefixer({ browsers: ['last 3 versions'] })]
}

/**
 * Universal example. Should work outside of repo as well.
 * When inside repo, prefer src to compiled version.
 */
var src = path.join(__dirname, '..', 'src')
var srcNodeModules = path.join(__dirname, '..', 'node_modules')
var fs = require('fs')
if (fs.existsSync(src) && fs.existsSync(srcNodeModules)) {
  // Resolve to source
  module.exports.resolve = { alias: { 'react-wordcloud': src } }
  // Our root .babelrc needs this flag for CommonJS output
  process.env.BABEL_ENV = 'commonjs'

  // Compile component from source. Similar to /webpack.config.js
  module.exports.module.loaders.push(
    {
      test: /\.js$/,
      loaders: ['babel'],
      include: src
    }
  )
}

if (process.env.NODE_ENV  !== 'production') {
  module.exports.devtool = 'cheap-module-eval-source-map'
}
