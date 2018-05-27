import path from "path";
import fs from "mz/fs";
import koa from "koa";
import koaRouter from "koa-router";
import koaBody from "koa-bodyparser";
import { graphqlKoa, graphiqlKoa } from "apollo-server-koa";
import ejs from "ejs";

const dev = process.env.NODE_ENV !== "production";

const HTML_PATH = path.resolve(__dirname, "./index.ejs");
const MANIFEST_PATH = path.resolve(__dirname, "../../dist/manifest.json");

let body = null;
let manifest = null;
async function getHTML(refresh = false) {
  if (!manifest || refresh) {
    const raw = await fs.readFile(MANIFEST_PATH, "utf8");
    manifest = JSON.parse(raw);
  }
  if (!body || refresh) {
    const raw = await fs.readFile(HTML_PATH, "utf8");
    body = ejs.render(raw, {
      mainJs: manifest["main.js"]
    });
  }
  return body;
}

const router = new koaRouter();

router.get("/", async (ctx, next) => {
  ctx.body = await getHTML(dev);
});

router.get("/graphiql", graphiqlKoa({ endpointURL: "/graphql" }));

export default router;
