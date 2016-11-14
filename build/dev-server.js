/**
 * Created by nangua on 16/10/31.
 */
 // 引入必要的模块
var express = require('express')
var webpack = require('webpack')
var ip = require('ip')
// dev环境下的配置
var config = require('./webpack.dev.conf')
// 打开浏览器
var opn = require('opn')
 // 创建一个express实例
var app = express()
// 调用webpack并把配置传递过去
var compiler = webpack(config)

// 使用 webpack-dev-middleware 中间件, 把compiler参数形式传到 dev-middleware fun里面.
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})
 // 使用 webpack-hot-middleware 中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler)

 // webpack插件，监听html文件改变事件
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        // 发布事件
        hotMiddleware.publish({action: 'reload'})
        cb()
    })
})


// 注册中间件
app.use(devMiddleware)
app.use(hotMiddleware)

// 监听 8888端口，开启服务器
app.listen(config.devServer.port, function (err) {
    console.log(config.devServer.host, config.devServer.port)
    if (err) {
        console.log(err)
        return
    }
    // 自动打开浏览器
    var uri = `http://${config.devServer.host}:${config.devServer.port}/dev/out-index.html`
    opn(uri,{app: 'google chrome'}) // 默认chrome打开
    console.log('Listening at'+ uri)
})