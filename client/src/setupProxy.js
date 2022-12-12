const { createProxyMiddleware } = require("http-proxy-middleware");
// import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      // 👇️ make sure to update your target
      target: "http://localhost:7777",
      // changeOrigin: true,
    })
  );
};
