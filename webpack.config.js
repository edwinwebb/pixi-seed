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
        },{
          test: /\.html$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'index.html'
            }
          }
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      compress: true,
      port: 8080
    },
    devtool : DEBUG ? 'cheap-module-source-map' : false,
};
