const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-eval-source-map',
  resolve: { extensions: ['.js', '.jsx'] },
  entry: {
    client: [
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      'babel-polyfill',
      './src/client/index.jsx'
    ]
  },
  output: {
    publicPath: '/',
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['css-hot-loader'].concat(
          ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              { loader: 'css-loader', options: { modules: true, camelCase: true, sourceMap: true } },
              { loader: 'postcss-loader' }
            ]
          })
        )
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/client/template/index.html',
      favicon: './src/client/template/favicon.png'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'],
      minChunks: Infinity
    }),
    new ExtractTextPlugin({ filename: 'styles.css', disable: false, allChunks: true }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => /node_modules/.test(module.resource)
    })
  ]
};