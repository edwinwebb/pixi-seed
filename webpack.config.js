var path = require('path');
var DEBUG = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
      index: './app/app.js'
    }, 
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build')
    }
};
