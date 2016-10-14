var webpack = require('webpack'),
  path = require('path'),
  configs;

configs = {
  devtool: 'source-map',
  context: __dirname + '/src',
  entry: {
    bundle: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './bundle.js'
    ]
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [

  ],
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg|otf|html?)$/,
        loader: 'file?name=[path][name].[ext]',
        exclude: [/fonts/, /malihu-custom-scrollbar-plugin/]
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(__dirname + '/src') === -1;
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}

module.exports = configs;
