var { demoModel } = require('../schemas/index');

/* 数据库操作函数 */

/**
 * @desc   查询
 */
async function getDemo(condition) {
  const res = await demoModel.find(condition)
  // const res = await demoModel.find(condition).populate('_otherModel') // 表关联查询
  return res
}

/**
 * @desc   新建
 */
async function createDemo(query) {
  const res = await demoModel.create(query)
  return res
}

/**
 * @desc   更新
 */
async function updateDemo(condition, query) {
  const res = await demoModel.update(condition, query)
  return res
}

/**
 * @desc   删除
 */
async function delDemo(condition) {
  const res = await demoModel.remove(condition)
  return res
}

module.exports = {
  getDemo,
  createDemo,
  updateDemo,
  delDemo
}
