// const demoModel = require('../models/Demo') 
// 打开这条注释，操作数据库，要记得先配置好数据库，否则会报错

/* 接口处理层 */
/**
 * @desc   test
 */
async function test(ctx, next) {
  ctx.body = 'this is a demo response!'
}

/**
 * @desc   查询
 */
async function getDemo(ctx, next) {
  const query = ctx.query || {}
  const res = await demoModel.getDemo(query)
  console.log('查询状态', res);
  ctx.body = res ? ctx.send(res, '查询成功') : ctx.sendError(-1, '查询失败')
}

/**
 * @desc   新增/更新
 */
async function updateDemo(ctx, next) {
  let { _id = '', ...query } = ctx.request.body // 根据是否有id判断是编辑还是新增
  if (_id) {
    let condition = { _id }
    const res = await demoModel.updateDemo(condition, query)
    console.log('更新状态', res);
    ctx.body = res ? ctx.send(res, '更新成功') : ctx.sendError(-1, '更新失败')
  } else {
    const res = await demoModel.createDemo(query)
    console.log('创建状态', res);
    ctx.body = res ? ctx.send(res, '创建成功') : ctx.sendError(-1, '创建失败')
  }
}

/**
 * @desc   删除
 */
async function delDemo(ctx, next) {
  const condition = ctx.request.body || {}
  const res = await demoModel.delDemo(condition)
  console.log('删除状态', res);
  ctx.body = res ? ctx.send(res, '删除成功') : ctx.sendError(-1, '删除失败')
}

module.exports = {
  getDemo,
  updateDemo,
  delDemo,
  test
}
