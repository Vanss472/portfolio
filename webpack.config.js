const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'build'),
  SRC: path.resolve(__dirname, 'source'),
  JS: path.resolve(__dirname, 'source/js'),
};

// Webpack configuration
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [path.join(paths.JS, 'index.js')],
  output: {
    path: paths.DIST,
    filename: 'js/app.bundle.js',
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        output: {
          comments: false, // remove all comments
        },
      }
    })],
  },
  stats: {
    children: true,
    errorDetails: true,
  },
  devServer: {
    open: true
  },
  // webpack is using html plugin
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.bundle.css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(paths.SRC, 'images'),
          to: path.join(paths.DIST, 'images')
        }
      ]
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
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i, // Images
        type: 'asset/resource',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { url: false }
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
              postcssOptions: {
                plugins: [
                  "autoprefixer",
                ]
              }
            }
          },
        ],
      }
    ],
  },
  // enable importing JS files
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
