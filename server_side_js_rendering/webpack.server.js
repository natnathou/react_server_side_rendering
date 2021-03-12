const path = require('path');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base');
const { merge } = require('webpack-merge');

const config = {
  target: 'node',
  entry: './src/index.js',
  externals: [nodeExternals()],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
    ],
  },
};

module.exports = merge(baseConfig, config);
