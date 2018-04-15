const express = require('express')
const ReactSSR = require('react-dom/server')// react服务端渲染SSR
const fs = require('fs')
const path = require('path');
const app = express();
const isDev = process.env.NODE_ENV === "development"
if(!isDev){
    const serverEntry = require('../dist/server-entry').default // 引入服务端入口文件 注意ESM export的使用require引入是放在default里面的
    const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')
    //处理静态文件
    app.use('/public', express.static(path.join(__dirname, '../dist')))
    app.get('*', function (req, res) {
        const appString = ReactSSR.renderToString(serverEntry);
        res.send(template.replace('<!--app-->', appString))
    })
}else{
    const devStatic = require('./util/dev-static')
    devStatic(app)
}
app.listen(3333, function () {
    console.log('server start at 3333')
})