const path = require('path');
module.exports = {
    target:"node",//服务端渲染配置项
    //入口
    entry:{
        app:path.join(__dirname,'../client/server-entry.js')
    },
    //出口
    output:{
        filename:'server-entry.js',
        path:path.join(__dirname,'../dist'),
        publicPath:'/public',//html引入的js前缀，可以在这里添加静态资源或者cdn
        libraryTarget:'commonjs2' //使用common规范
    },
    //loader
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.jsx$/,
                loader:'babel-loader'
            }
        ]
    }

}