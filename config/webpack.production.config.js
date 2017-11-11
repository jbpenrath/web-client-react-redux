var path = require('path');
var webpack = require('webpack');
var poststylus = require('poststylus');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var node_modules = path.resolve(__dirname, '../node_modules');

var config = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: path.resolve(__dirname, '../src/app.jsx'),
    vendors: [
      "react",
      "react-dom",
      "react-redux",
      "react-router-dom",
      "react-router-redux",
      "redux",
      "redux-thunk",
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.css',  
      disable: false,
      allChunks: true 
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        comments: false
      }}),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
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
      use: 'babel-loader',
    }, {
        test: /\.(styl(us)?|css)$/,
        exclude: node_modules,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader', 
            use: [{
              loader: 'css-loader',
              options: {
                minimize: true,
              },
            }, {
              loader: 'stylus-loader',
              options: {
                use: [poststylus(['autoprefixer'])],
                preferPathResolver: 'webpack',
              },
            }],
          }),
      }, {
        test: /\.(jpe?g|png|gif|svg)$/,
        include: path.resolve(__dirname, '../src/assets/images'),
        use: 'file-loader?name=images/[hash].[ext]',
      }, {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: path.resolve(__dirname, '../src/assets/fonts'),
        use: 'file-loader?name=fonts/[hash].[ext]',
      }],
  },
};

module.exports = config;
