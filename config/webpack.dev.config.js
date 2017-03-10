var path = require('path');
var ip = require('ip');
var webpack = require('webpack');
var poststylus = require('poststylus')
var HtmlWebpackPlugin = require('html-webpack-plugin');

var node_modules = path.resolve(__dirname, '../node_modules');
var dependencies = [];

var config = {
  devServer: {
    host: '0.0.0.0',
    port: 1991,
    contentBase: path.resolve(__dirname, '../dist'),
    compress: true,
  },
  devtool: "eval",
  resolve: { 
    alias: [], 
    extensions: ['.js', '.jsx'],
  },
  context: path.resolve(__dirname, '../src'),
  entry: {
    app: './app.jsx',
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
    rules: [{
      test: /\.jsx?$/,
      exclude: node_modules,
      use: [{
        loader: 'babel-loader',
        options: {
          plugins: [
            ["module-alias", [
              { src: path.resolve(__dirname, '../src/assets'), expose: "assets" },
              { src: path.resolve(__dirname, '../src/components/containers'), expose: "containers" },
              { src: path.resolve(__dirname, '../src/components/presentationals'), expose: "presentationals" },
              { src: path.resolve(__dirname, '../src/components/views'), expose: "views" },
              { src: path.resolve(__dirname, '../src/core'), expose: "core" },
              { src: path.resolve(__dirname, '../src/style'), expose: "style" },
            ]],
          ],
        },
      }],
    }, {
      test: /\.(styl(us)?|css)$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'stylus-loader',
          options: {
            use: [poststylus(['autoprefixer'])],
            preferPathResolver: 'webpack',
          }
        }
      ]
    }, {
      test: /\.(jpe?g|png|gif|svg)$/,
      include: path.resolve(__dirname, '../src/assets/images'),
      use: 'file-loader?name=images/[hash].[ext]',
    }, {
      test: /\.(eot|svg|ttf|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      include: path.resolve(__dirname, '../src/assets/fonts'),
      use: 'file-loader?name=fonts/[hash].[ext]',
    }],
  }
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
