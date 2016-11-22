/**
 * Created by nangua on 16/11/2.
 */
// 引入webpack,插件
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path');
var webpack = require('webpack');

// 引入base 基本配置文件
var config = require('./webpack.base.conf')
config.vue = {
    loaders: {
        stylus: ExtractTextPlugin.extract("css!stylus")
    }
}
config.plugins = [
    // 提取css为单文件
    new ExtractTextPlugin("../[name].[contenthash].css"),

    new HtmlWebpackPlugin({
        filename: '../out-myApp.html',
        template: path.resolve(__dirname, '../app/myApp/myApp.html'),
        inject: true
    })
];

module.exports = config