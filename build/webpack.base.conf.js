/**
 * Created by nangua on 16/10/31.
 */
 // nodejs 中的path模块
var path = require('path')
var ip = require('ip')
// 添加浏览器前缀的postcss插件
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
function postcss() {
    return [
        pxtorem({
            rootValue: 100,
            propWhiteList: [],
            replace: true,
            minPixelValue: 3
        }),
        // 添加浏览器前缀
        autoprefixer({ browsers: '> 1%' })
    ]
}
module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: {
        index: path.resolve(__dirname, '../app/myApp/index.js') // 对象里index这个key 名称会作为output里面 filename 的[name]输出.
    },
    // 输出配置
    output: {
        // 输出路径是 myProject/out/
        path: path.resolve(__dirname, '../out/js'),
        publicPath: '/', // 需要去了解下!
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    // 配置一些端口之类的
    devServer: {
        progress: true,
        host: ip.address(),
        port: 8888,
        colors: true,
        inline: true,
        // hot: true,
        contentBase: './src',
        displayErrorDetails: true
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            public: path.join(__dirname, '../app/myApp/public'),
            sdk: path.join(__dirname, '../app/myApp/sdk'),
            components: path.join(__dirname, '../app/myApp/components')
        }
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'  // vue文件 用 vue-loader加载
            },
            {
                test:/\.js$/,
                loader:'babel',
                exclude: /node_modules/
            },
            // gif|jpg|jpeg|png|bmp|svg|woff|woff2|eot|ttf这些模块使用url-loader加载
            { test: /\.(gif|jpg|jpeg|png|bmp|svg|woff|woff2|eot|ttf)$/,
                loader: 'url',
                query: {
                    // 小于8912字节的文件,返回dataurl
                    limit: 8,
                    // 生成的文件名,[name]为原始文件名,[hash:8]为根据文件内容生成8位md5值,[ext]为原始文件扩展名
                    name: 'resources/[name].[hash:8].[ext]'
                }
            },
            {test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    // 配置babel
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },
    // vue-loader配置
    vue: {
        // vue文件中的loader配置
        loaders: {
            // 使用babel-loader加载vue文件中的js部分,注意顺序是【右往左】!
            js: 'babel'
        },
        // // // postcss配置,把vue文件中的样式部分,做后续处理
        postcss: postcss,
        // // // 不使用默认的autoprefixer
        autoprefixer: false
    },
}