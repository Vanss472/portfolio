const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'build'),
  SRC: path.resolve(__dirname, 'source'),
  JS: path.resolve(__dirname, 'source/js'),
};

// Webpack configuration
module.exports = {
  devtool: 'inline-source-map',
  entry: [path.join(paths.JS, 'app.js')],
  output: {
    path: paths.DIST,
    filename: 'js/app.bundle.js',
  },
  devServer: {
    open: true
  },
  // webpack is using html plugin
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
    new ExtractTextPlugin('css/style.bundle.css'),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      output: {
        comments: false, // remove all comments
      },
    }),
  ],
  // webpack is using loader
  module: {
    rules: [
      // babel-loader for .js and .jsx files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        },
      },
      // https://github.com/webpack-contrib/extract-text-webpack-plugin
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer('last 2 versions')]
              }
            },
          ],
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: '/'
            }
          }
        ],
      },
    ],
  },
  // enable importing JS files
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
