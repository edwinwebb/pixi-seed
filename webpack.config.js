var path = require('path');
var DEBUG = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    index: ['./app/entry.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'index.html'
          }
        }
      },
      {
        test: /\.jpe?g$|\.svg$|\.png$/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.(shader|vert|frag|geom)$/i,
        use: 'raw-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 8080
  },
  devtool: DEBUG ? 'cheap-module-source-map' : false
};
