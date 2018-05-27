const path = require("path");
const serve = require("webpack-serve");
const chokidar = require("chokidar");

const config = require(path.resolve(__dirname, `../webpack.config.js`));

const watcher = chokidar.watch(path.resolve(__dirname, "./server/*"));

// Watch server file changes
watcher.on("ready", () => {
  watcher.on("all", () => {
    console.log("Clearing /server/ module cache from server");
    Object.keys(require.cache).forEach(function(id) {
      if (/[\/\\]server[\/\\]/.test(id)) delete require.cache[id];
    });
  });
});

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

    app.use(async (ctx, next) => {
      const router = require("./server/router");
      await router.routes()(ctx, next);
      // await router.allowedMethods(ctx, next);
    });
  }
});
