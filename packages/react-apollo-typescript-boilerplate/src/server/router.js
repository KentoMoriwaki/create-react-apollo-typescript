const path = require("path");
const fs = require("mz/fs");
const koa = require("koa");
const koaRouter = require("koa-router"); // koa-router@next
const koaBody = require("koa-bodyparser"); // koa-bodyparser@next
const { graphqlKoa, graphiqlKoa } = require("apollo-server-koa");
const ejs = require("ejs");

const router = new koaRouter();

const HTML_PATH = path.resolve(__dirname, "./index.ejs");

router.get("/", async (ctx, next) => {
  const body = await fs.readFile(HTML_PATH, "utf8");
  ctx.body = ejs.render(body);
  ctx.body = "Hhell";
});
router.get("/graphiql", graphiqlKoa({ endpointURL: "/graphql" }));

module.exports = router;
