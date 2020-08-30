const Koa = require('koa');
const parameter = require("koa-parameter")
const bodyparser = require('koa-bodyparser')
const Router = require('koa-router');
const {to} = require('await-to-js')
const router = require('./routers')
const mongoose = require('./db')

let app = new Koa();
// let router = new Router();

// router.get('/', ctx => {
//     ctx.body = 'hello world';
// });
app.use(bodyparser())
app.use(router.routes())
app.use(parameter(app))

if (!module.parent) {
    app.listen(3000);
    console.log("app started at port 3000")
}

global.to = to

module.exports = app
