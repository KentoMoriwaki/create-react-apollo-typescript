const path = require("path");
const fs = require("mz/fs");
const koa = require("koa");
const koaRouter = require("koa-router"); // koa-router@next
const koaBody = require("koa-bodyparser"); // koa-bodyparser@next
const { graphqlKoa, graphiqlKoa } = require("apollo-server-koa");
const ejs = require("ejs");
const serve = require("webpack-serve");

const config = require(path.resolve(__dirname, `../webpack.config.js`));

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

const router = new koaRouter();

const HTML_PATH = path.resolve(__dirname, "./server/index.ejs");

router.get("/", async (ctx, next) => {
  const body = await fs.readFile(HTML_PATH, "utf8");
  ctx.body = ejs.render(body);
});
router.get("/graphiql", graphiqlKoa({ endpointURL: "/graphql" }));

serve({
  config: {
    ...config,
    mode
  },
  add(app, middleware, options) {
    middleware.webpack();
    middleware.content();

    app.use(router.routes());
  }
});
