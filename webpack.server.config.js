const path = require('path');
const fs = require('fs');

//http://jlongster.com/Backend-Apps-with-Webpack--Part-I
const nodeModules = {};
fs.readdirSync('node_modules')
  .filter((x) => {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach((mod) => {
    nodeModules[mod] = 'commonjs ' + mod;
  });

const config = {
  entry: './server/server.js',
  output: {
    path: path.resolve(__dirname, 'server'),
    filename: 'server.bundle.js'
  },
  target: 'node',
  module: {
    rules: [{
      include: path.resolve(__dirname, 'server'),
      use: [{
        loader: 'babel-loader'
      }]
    }]
  },
  externals: nodeModules,
  node: {
    __dirname: true //http://stackoverflow.com/questions/36186696/webpack-bundled-express-app-fails-to-lookup-view
  }
};

module.exports = config;
//http://stackoverflow.com/questions/31102035/how-can-i-use-webpack-with-express