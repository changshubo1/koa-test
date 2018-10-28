const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'git 测试。3451';
});

app.listen(3451);