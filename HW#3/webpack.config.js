const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'HW#3', 'src', 'client', 'app', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'HW#3', 'src', 'client', 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: path.join(__dirname, 'HW#3', 'src', 'client', 'app'),
        use: 'babel-loader'
      }
    ]
  }
};
