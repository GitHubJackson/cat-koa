const router = require('koa-router')()
const controllers = require('../controllers')

router.prefix('/api')

router.get('/test', controllers.demo.test)
// 用 /demo/test 访问接口

module.exports = router
