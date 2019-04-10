var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;

var devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    main: './index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash:6].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: devMode ? [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ] : [
          'vue-style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024 * 5,
            name: 'media/[name].[hash:6].[ext]'
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minChunks: 1,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          filename: 'js/vendor.[hash:6].js'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Vue App',
      favicon: './public/favicon.ico',
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/style.[contenthash:6].css',
      chunkFilename: 'css/style.[contenthash:6].css'
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue']
  },
  devServer: {
    port: 8808,
    open: 'Google Chrome',
    hot: true
  },
};
