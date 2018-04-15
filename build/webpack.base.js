const path = require('path')
module.exports = {
  //loader
  module:{
    rules:[
      {
        enforce:'pre', //先提前进行代码检查
        test:/.(js|jsx)/,
        loader:'eslint-loader',
        exclude:[
          path.resolve(__dirname,'../node_modules')
        ]
      },
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
