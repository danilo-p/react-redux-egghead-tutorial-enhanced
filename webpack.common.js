const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const JsDocPlugin = require('jsdoc-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
  },
  module: {
    noParse: [/dtrace-provider$/, /safe-json-stringify$/, /mv/],
    loaders: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              camelCase: true,
            },
          },
          'stylus-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|ttf|woff|woff2|eot|svg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'dist/assets',
        },
      },
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },
      {
        test: /\.yml$/,
        use: [
          'json-loader',
          'yaml-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'src/index.pug',
    }),
    new JsDocPlugin(),
  ],
  node: {
    fs: 'empty',
  },
};
