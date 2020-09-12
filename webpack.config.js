const path = require('path');

module.exports = {
  entry: './js/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
  },
};