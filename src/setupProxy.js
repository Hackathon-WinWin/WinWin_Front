const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: '3.12.248.32:8000',
      changeOrigin: true,
    })
  );
};
