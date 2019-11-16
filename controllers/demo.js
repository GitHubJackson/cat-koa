// const demoModel = require('../models/Demo') 
// 打开这条注释，操作数据库，要记得先配置好数据库，否则会报错

/* 接口处理层 */
// test
async function test(ctx, next) {
  ctx.body = 'this is a demo response!'
}
// 查询
async function getDemo(ctx, next) {
  const query = ctx.query || {}
  const res = await demoModel.getDemo(query)
  console.log('查询状态', res);
  ctx.body = res
}
// 新建
async function createDemo(ctx, next) {
  const query = ctx.request.body || {}
  const res = await demoModel.createDemo(query)
  console.log('添加状态', res);
}
// 更新
async function updateDemo(ctx, next) {
  const condition = ctx.request.body || {}
  const query = ctx.request.body || {}
  const res = await demoModel.createDemo(condition, query)
  console.log('更新状态', res);
}
// 删除
async function delDemo(ctx, next) {
  const condition = ctx.request.body || {}
  const res = await demoModel.delDemo(condition)
  console.log('删除状态', res);
}

module.exports = {
  getDemo,
  createDemo,
  updateDemo,
  delDemo,
  test
}
