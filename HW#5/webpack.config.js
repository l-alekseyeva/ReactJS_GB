const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'HW#5', 'src', 'client', 'app', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'HW#5', 'src', 'client', 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: path.join(__dirname, 'HW#5', 'src', 'client', 'app'),
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIndentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'HW#5', 'src', 'client', 'public'),
    compress: true,
    port: 8080
  }
};
