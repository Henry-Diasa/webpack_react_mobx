const path = require('path');
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')
module.exports = webpackMerge(baseConfig,{
    target:"node",//服务端渲染配置项
    //入口
    entry:{
        app:path.join(__dirname,'../client/server-entry.js')
    },
    //出口
    output:{
        filename:'server-entry.js',
        path:path.join(__dirname,'../dist'),
        publicPath:'/public/',//html引入的js前缀，可以在这里添加静态资源或者cdn
        libraryTarget:'commonjs2' //使用common规范
    }

})
