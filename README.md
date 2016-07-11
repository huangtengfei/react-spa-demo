# React SPA Demo

这是基于 [Redux Demo](https://github.com/huangtengfei/redux-demo) 做的一个 Single Page Application 的 Demo。

## 安装 & 运行：

```
git clone https://github.com/huangtengfei/react-spa-demo.git
cd react-spa-demo
npm install
npm run dev
```

打开 http://localhost:8080 即可看到效果。

## 注意

为了支持 `react-router` 的 `browserHistory` 模式，需要设置 `webpack-dev-server` 的 `historyApiFallback` 为 `true`

形如：

```javascript
"scripts": {
  "dev": "webpack-dev-server --devtool eval --progress --colors --hot --content-base build --history-api-fallback"
}
```

或者：

```javascript
'webpack-dev-server': {
  options: {
    hot: true,
    port: 8000,
    webpack: webpackDevConfig,
    publicPath: '/assets/',
    contentBase: './<%= pkg.src %>/',
    historyApiFallback: true
  }
}
```

