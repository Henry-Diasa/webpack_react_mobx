const path = require('path');
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const baseConfig = require('./webpack.base')
const isDev = process.env.NODE_ENV ==='development'
const config = webpackMerge(baseConfig,{
    //入口
    entry:{
        app:path.join(__dirname,'../client/app.js')
    },
    //出口
    output:{
        filename:'[name].[hash].js',
        path:path.join(__dirname,'../dist'),
        publicPath:'http://localhost:8888/public/'//html引入的js前缀，可以在这里添加静态资源或者cdn
    },
    //插件
    plugins:[
        new  HtmlWebpackPlugin({// js文件引入html文件中
            template:path.join(__dirname,"../client/template.html")
        })
    ]
})
//开发环境配置
if(isDev){
    config.entry = {
        app:[
            'react-hot-loader/patch',
            path.join(__dirname,'../client/app.js')
        ]
    }
    config.devServer = {
        host:"0.0.0.0",
        port:"8888",
        contentBase:path.join(__dirname,'../dist'),
        hot:true, //hot module replacement
        overlay:{
            errors:true
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        publicPath:"/public/",
        historyApiFallback:{ // 防止浏览器输入不存在的路由，导致404直接跳转到index
            index:'/public/index.html'
        }
    }
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
}
module.exports = config
