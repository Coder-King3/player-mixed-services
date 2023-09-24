const Router = require("koa-router");
const router = new Router();

router.get("/welcome", async (ctx, next) => {
  let url = ctx.url;

  ctx.body = {
    url,
    message: `你好，你当前访问的接口是: '/welcome' `,
  };
  // next();
});

function initMiddle(app) {
  async function globalMiddle(ctx, next) {
    ctx.response.body = `hello`;
    next();
  }
  app.use(globalMiddle);
}

function initRoute(app) {
  // 初始化中间件
  // initMiddle(app);
  // 注册路由
  app.use(router.routes());
}

module.exports = initRoute;
