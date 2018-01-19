const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  devtool: 'cheap-eval-source-map',
  resolve: { extensions: ['.js', '.jsx'] },
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
    hot: true
  },
  entry: {
    vendor: [],
    client: [
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
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true, camelCase: true, sourceMap: true } }
        ]
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
    })
  ]
};