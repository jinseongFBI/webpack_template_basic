//import
const path=require('path')
const Htmlplugin = require('html-webpack-plugin')
const CopyPlugin=require('copy-webpack-plugin')

//export
module.exports = {
  //파서번들러!=웹팩 다르다.
  //파일을 읽어들이기 시작하느 진입점 설정
  entry:'./js/main.js',

  //결과물(번들)을 반환하는 설정
  output: {
    // path:path.resolve(__dirname,'dist'),
    // filename:'main.js',
    clean: true
  },
  module: {
    rules: [
      {//css or scss 
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {test: /\.js$/,
      use: [
        'babel-loader'
      ]}
    ]
  },
  //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new Htmlplugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        {from: 'static'}
      ]
    })
  ],
  devServer: {
    host: 'localhost'
  }
}
//다합쳐서 dist 로감