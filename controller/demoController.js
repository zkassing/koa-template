const {testDemoService} = require('../services/demoService')

exports.testDemo = async (ctx, next) => {
  const id = ctx.params.id
  const demoData = await testDemoService(id)
  ctx.body = demoData
}