const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const buildPath = path.resolve(__dirname, 'build');
const modulesPath = path.resolve(__dirname, 'node_modules');

const config = {
  entry: [path.join(__dirname, '/src/App.js')],
  devtool: 'source-map',  // production sized devtool
  output: {
    path: buildPath,
    filename: 'app.js',
  },

  plugins: [
    new webpack.DefinePlugin({
      process_env: { NODE_ENV: 'production' },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),
    new webpack.NoErrorsPlugin(),
    new TransferWebpackPlugin([
      { from: '../www' },
    ], path.resolve(__dirname, 'src')
    ),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, // All .js files
        loaders: ['babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [modulesPath],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules',
        include: path.join(__dirname, '/src'),
      },
    ],
  },
};

module.exports = config;
