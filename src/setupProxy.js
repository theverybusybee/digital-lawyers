const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/backendAddress',
    createProxyMiddleware({
      target: 'https://client.we.vote',
      changeOrigin: true,
    })
  );
  app.use(
    '/nodeAddress',
    createProxyMiddleware({
      target: 'https://client.we.vote',
      changeOrigin: true,
    })
  );
  app.use(
    '/votingAuthService',
    createProxyMiddleware({
      target: 'https://client.we.vote',
      changeOrigin: true,
    })
  );
  app.use(
    '/keysAddress',
    createProxyMiddleware({
      target: 'https://client.we.vote',
      changeOrigin: true,
    })
  );
};