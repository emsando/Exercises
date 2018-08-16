const path = require('path');

const BUILD_DIR = path.join(__dirname, '/public');
const SRC_DIR = path.join(__dirname, '/src');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env'],
        },
      },
    ],
  },
};