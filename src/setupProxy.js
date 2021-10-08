const proxy = require("http-proxy-middleware")

module.exports = function (app) {
  // /api 表示代理路径

  // target 表示目标服务器的地址

  app.use(
    '/api',
    proxy.createProxyMiddleware({
      target: 'http://127.0.1:3001',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  );
};
