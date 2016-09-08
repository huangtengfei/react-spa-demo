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

## 系列文章

1. [使用 Webpack 和 ES6 进行 React 开发][1]
2. [React 入门][2]
3. [Redux 入门][3]
4. [Redux 进阶][4]


  [1]: https://github.com/huangtengfei/blog/issues/17
  [2]: https://github.com/huangtengfei/react-demo
  [3]: https://github.com/huangtengfei/redux-demo
  [4]: https://github.com/huangtengfei/redux-async-demo