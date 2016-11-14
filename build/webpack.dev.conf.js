/**
 * Created by nangua on 16/11/1.
 */
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
var webpack = require('webpack');

// 引入基本配置
var config = require('./webpack.base.conf.js');

config.module.loaders.push({
    test: /\.styl/,
    loader: 'style!css!postcss!stylus' // 这里是styl文件 从后面开始往前处理!
})


config.plugins = [
    // 添加三个插件
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),


    new HtmlWebpackPlugin({
        filename: 'dev/out-index.html',
        template: path.resolve(__dirname, '../app/index/index.html'),
        inject: true
    }),
]

// 动态向入口配置中注入 webpack-hot-middleware/client
// var devClient = 'webpack-hot-middleware/client';
var devClient = './build/dev-client';
Object.keys(config.entry).forEach(function (name) {
    var extras = [devClient]
    config.entry[name] = extras.concat(config.entry[name])
})


// 输出
module.exports = config;