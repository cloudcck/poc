const open = require('open');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);
const app = express();



app.use(express.static(__dirname+'./dist'));
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  fileName: 'bundle.js',
  publicpath: '/',
  status: {
    colors: true
  },
  historyApiFallback: true,
  noInfo: false,
  // display no info to console (only warnings and errors)

  quiet: false,
  // display nothing to the console
}));
app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}));


const port = 9000;
app.listen(port, () => {
  let url = `http://localhost:${port}`;
  console.log(`Example app listening ${url}`);
  open(url);
});