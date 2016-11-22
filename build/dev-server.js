/**
 * Created by nangua on 16/10/31.
 */
 // 引入必要的模块
var express = require('express')
var webpack = require('webpack')
var ip = require('ip')
var path =require('path')
var history = require('connect-history-api-fallback')
var url = require('url');
var proxy = require('proxy-middleware');
// dev环境下的配置
var config = require('./webpack.dev.conf')
// 打开浏览器
var opn = require('opn')
 // 创建一个express实例
var app = express()
// 调用webpack并把配置传递过去
var compiler = webpack(config)

// 不走 express中间件 服务器路由
app.use(history({
    index: '/home.html'
}))
// proxy 代理,以/api开头的都代理到 http://192.168.145.109:3000/
app.use('/api', proxy(url.parse('http://192.168.145.109:3000/')))
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

//
app.use(devMiddleware)
app.use(hotMiddleware)
// 托管项目中的静态资源
app.use(express.static(path.join(__dirname, '../app/myApp/public')));
// 监听 8888端口，开启服务器
app.listen(config.devServer.port, function (err) {
    console.log(config.devServer.host, config.devServer.port)
    if (err) {
        console.log(err)
        return
    }
    // 自动打开浏览器
    var uri = `http://${config.devServer.host}:${config.devServer.port}/home.html`
    opn(uri,{app: 'google chrome'}) // 默认chrome打开
    console.log('Listening at'+ uri)
})