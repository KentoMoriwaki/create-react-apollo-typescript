import path from "path";
import koa from "koa";
import koaStatic from "koa-static";

import router from "./router";

const app = new koa();
const PORT = process.env.PORT || 3000;

app.use(koaStatic(path.resolve(__dirname, "../../dist")));
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);
