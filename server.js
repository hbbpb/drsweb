/*eslint no-console:0 */
'use strict'
const env = {
  port: 18080,
  release: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://drs-api.herokuapp.com',
        secure: false
      }
    }
  }
}
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')(env)

new WebpackDevServer(webpack(config), config.devServer)
  .listen(env.port, 'localhost', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('Listening at localhost:' + env.port)
    console.log('NODE_ENV: ' + process.env.NODE_ENV)
  })
