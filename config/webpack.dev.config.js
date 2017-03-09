var path = require('path');
var ip = require('ip');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var node_modules = path.resolve(__dirname, '../node_modules');
var dependencies = [];

var config = {
  devServer: {
    host: '0.0.0.0',
    port: 1991,
    compress: true,
    contentBase: path.resolve(__dirname, '../dist'),
  },
  devtool: "eval",
  resolve: { 
    alias: [], 
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: path.resolve(__dirname, '../src/app.jsx'),
    vendors: [
      "react",
      "react-dom",
      "react-redux",
      "react-router",
      "react-router-redux",
      "redux",
      "redux-thunk"
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', 'filename': 'vendors.js' }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/assets/index.html'),
      filename: 'index.html',
      chunks: ['vendors', 'app'],
    }),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: node_modules,
      query: {
        plugins: [
          ["module-alias", [
            { src: path.resolve(__dirname, '../app/assets'), expose: "assets" },
            { src: path.resolve(__dirname, '../app/components/containers'), expose: "containers" },
            { src: path.resolve(__dirname, '../app/components/presentationals'), expose: "presentationals" },
            { src: path.resolve(__dirname, '../app/components/views'), expose: "views" },
            { src: path.resolve(__dirname, '../app/components/core'), expose: "core" },
          ]],
        ],
      },
    }]
  },
};

dependencies.forEach(function(dependency) {
  var dependencyPath = path.resolve(node_modules, dependency);
  var dependencyName = dependency.split(path.sep)[0];

  config.resolve.alias[dependencyName] = dependencyPath;

  if(dependencyName != 'react-dom') {
    config.module.noParse.push(/dependencyPath/);
  }
});

module.exports = config;