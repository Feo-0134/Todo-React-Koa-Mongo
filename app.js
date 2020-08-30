const Koa = require('koa');
const Router = require('koa-router');
const mongoose = require('./db')

let app = new Koa();
let router = new Router();

router.get('/', ctx => {
    ctx.body = 'hello world';
});

app.use(router.routes());

if (!module.parent) {
    app.listen(3000);
 }

module.exports = app
