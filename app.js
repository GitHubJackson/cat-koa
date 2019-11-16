const Koa = require('koa')
const app = new Koa()
const bodyparser = require('koa-bodyparser')

const demo = require('./routes/demo')

// middlewares
app.use(bodyparser())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(demo.routes(), demo.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
