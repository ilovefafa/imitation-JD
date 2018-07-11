const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const webpack = require('webpack');
module.exports = {
  entry: {
    app: './src/index.js',
    // selfAdaption: './src/utils/selfAdaption.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].buddle.js',
  },
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, '../src/assets/images/')
    },
    extensions: [".js", ".json", ".vue"]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader?cacheDirectory=true',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', {
          loader: 'px2rem-loader',
          // options here
          options: {
            remUnit: 40,
            remPrecision: 8
          }
        },],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
          },
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 40,
              remPrecision: 8
            }
          },
          { loader: 'sass-loader' }
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: false, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'i am fan',
      template: './src/index.html',
    }),
    new VueLoaderPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ],
}