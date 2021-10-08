const proxy = require('http-proxy-middleware');
module.exports = function(app) {
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