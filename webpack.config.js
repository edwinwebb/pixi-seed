var path = require('path');
var DEBUG = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
      index: ['./app/app.js']
    }, 
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
          }
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      compress: true,
      port: 8080
    }
};
