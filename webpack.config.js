const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin({
  filename: 'global.css',
  allChunks: true
});

/*
** to do
** sourcemaps
*/

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',  /* TODO: why this is needed for webpack dev server to server dist from memory */
    filename: '[name].bundle.js'
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
      exclude: /node_modules/,
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
      test: /\.css$/,
      //include: /node_modules/,
      include: [
        /node_modules/,
      ],

      loader: extractCSS.extract(['css-loader'])
    },

    {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: [{
        loader: 'url-loader',
        options: { limit: 10000 } // Convert images < 10k to base64 strings
      }]
    }]
  },
  plugins: [
    extractCSS,
  ],

  devtool: 'source-map'
};

module.exports = config;
