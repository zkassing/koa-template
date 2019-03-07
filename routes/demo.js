const {testDemo} = require('../controller/demoController')
module.exports = (router) => {
  router.get('/demo/:id', testDemo)
  router.get('/demo', async (ctx, next) => {
    ctx.body = {msg: '请求成功'}
  })
}