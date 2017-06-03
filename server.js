/*eslint no-console:0 */
'use strict'
const env = {
  port: 18080,
  release: true,
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    host: "0.0.0.0",
    proxy: {
      '/api': {
        target: 'https://drs-api.herokuapp.com',
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
