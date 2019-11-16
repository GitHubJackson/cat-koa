const router = require('koa-router')()
const demoController = require('../controllers/demo')

router.prefix('/demo')

router.get('/test', demoController.test)
// 用 /demo/test 访问接口

module.exports = router
