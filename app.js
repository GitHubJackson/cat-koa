const Koa = require('koa')
const path = require('path')
const koaStatic = require('koa-static')
const cors = require('koa2-cors')
const bodyparser = require('koa-bodyparser')
const resHandler = require('./utils/resHandler')

const router = require('./routes')

const app = new Koa()
// middlewares
app.use(cors({
  origin: function (ctx) {
    // console.log(ctx.url)
    // if (ctx.url === '/api/upload') {
      return "*" // 允许来自所有域名请求
    // }
    // return 'http://localhost:3000'
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'], // 设置允许的HTTP请求类型
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
app.use(koaStatic(path.join(__dirname + './static')))
app.use(bodyparser())
app.use(resHandler()) // 统一处理接口返回信息

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(router.routes(), router.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
