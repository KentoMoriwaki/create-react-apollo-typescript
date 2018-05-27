import koa from "koa";

import router from "./router";

const app = new koa();
const PORT = 3000;

// koaBody is needed just for POST.
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);
