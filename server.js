/*eslint no-console:0 */
'use strict'
var env = {
  port: process.env.PORT || 18080,
  release: true,
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'https://drs-api.herokuapp.com',
        secure: true,
        changeOrigin: true
      }
    }
  }
}
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')(env)

new WebpackDevServer(webpack(config), config.devServer)
  .listen(env.port, 'localhost', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('Listening at localhost:' + env.port)
  })
