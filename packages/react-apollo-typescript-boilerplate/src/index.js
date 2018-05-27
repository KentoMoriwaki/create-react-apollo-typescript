const path = require("path");
const serve = require("webpack-serve");

const router = require("./server/router");

const config = require(path.resolve(__dirname, `../webpack.config.js`));

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

serve({
  config: {
    ...config,
    mode
  },
  add(app, middleware, options) {
    middleware.webpack();
    middleware.content();

    app.use(router.routes());
    app.use(router.allowedMethods());
  }
});
