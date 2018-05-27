import koaRouter from "koa-router";
import koaBody from "koa-bodyparser";
import { graphqlKoa, graphiqlKoa } from "apollo-server-koa";

import getRootHTML from "./lib/getRootHTML";
import schema from "./graphql";

const dev = process.env.NODE_ENV !== "production";

const router = new koaRouter();

router.get("/", async ctx => {
  ctx.body = await getRootHTML(dev);
});

router.use("/graphql", koaBody());
router.post("/graphql", graphqlKoa({ schema }));
router.get("/graphql", graphqlKoa({ schema }));
router.get("/graphiql", graphiqlKoa({ endpointURL: "/graphql" }));

export default router;
