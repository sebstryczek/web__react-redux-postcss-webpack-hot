const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    //vendor: [],
    client: ['react-hot-loader/patch', './src/client/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].[hash].js',
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.(js?)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                camelCase: true,
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  ctx: {
                    autoprefixer: {
                      browsers: 'last 2 versions'
                    }
                  }
                }
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        output: {
          comments: false
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/client/template/index.html',
      favicon: './src/client/template/favicon.png'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'],
      minChunks: Infinity
    }),
    new ExtractTextPlugin({
      filename: 'css/styles.[contenthash].css',
      allChunks: true
    })
  ]
};