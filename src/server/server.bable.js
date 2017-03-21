require('babel-register');
// Pollyfill for features like generators https://babeljs.io/docs/usage/polyfill.
require('babel-polyfill');

// Server Driver Code, everything from here on can use all the super future features!
require('./server');