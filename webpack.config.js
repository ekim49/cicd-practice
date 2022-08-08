const path = require('path');

module.exports = {
  mode: 'none',
  entry: './my-agora-states-client/src/App.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'code.bundle.js',
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
  optimization: { minimizer: [] },
};