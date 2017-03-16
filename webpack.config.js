const webpack = require('webpack');
const path = require('path');

/*
** to do
** sourcemaps

*/

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',  /* TODO: why this is needed for webpack dev server to server dist from memory */
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader'
        // options: {
        //   presets: [
        //     ['es2015', { modules: false }]
        //   ]
        // }
      }]
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true
          }
        },
        'sass-loader'
      ]
    },
    {
      test: /\.(png|jpg)$/,
      use: [{
        loader: 'url-loader',
        options: { limit: 10000 } // Convert images < 10k to base64 strings
      }]
    }]
  },
  devtool: 'source-map'
};

module.exports = config;


        // test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        // loader: 'url-loader',
        // options: {
        //   limit: 10000
        // }