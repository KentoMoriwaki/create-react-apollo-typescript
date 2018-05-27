import path from "path";
import fs from "mz/fs";
import koa from "koa";
import koaRouter from "koa-router"; // koa-router@next
import koaBody from "koa-bodyparser"; // koa-bodyparser@next
import { graphqlKoa, graphiqlKoa } from "apollo-server-koa";
import ejs from "ejs";

const router = new koaRouter();

const HTML_PATH = path.resolve(__dirname, "./index.ejs");

router.get("/", async (ctx, next) => {
  const body = await fs.readFile(HTML_PATH, "utf8");
  ctx.body = ejs.render(body);
});

router.get("/graphiql", graphiqlKoa({ endpointURL: "/graphql" }));

export default router;
