const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash:7].buddle.js',
    chunkFilename: 'chunk[id].js?[chunkhash]',
  },
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, '../src/assets/images/')
    }
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
            plugins: ["syntax-dynamic-import"]
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', {
          loader: 'px2rem-loader',
          options: {
            remUnit: 40,
            remPrecision: 8
          }
        },],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 40,
              remPrecision: 8
            }
          },
          'sass-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: false, // webpack@2.x and newer
            },
          },
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'images/'
            }
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'font/'
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'i am fan',
      template: './src/index.html',
    }),
    new VueLoaderPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ],
}