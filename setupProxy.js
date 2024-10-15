const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://dummyjson.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove /api prefix when forwarding the request
      },
    })
  );
};
