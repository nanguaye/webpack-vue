var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();

// app.use('/api', proxy({target: 'http://www.example.org', changeOrigin: true}));
app.all('*',function (req, res) {
    console.log('接收到请求')
    res.header('Access-Control-Allow-Origin','*' )
    res.send({"name":"叶晨浩"});
});

app.listen(3000 ,function () {
    console.log('创建3000端口服务器并且开始监听....')
});
