const {testDemoService} = require('../services/demoService')

exports.testDemo = async (ctx, next) => {
  // 获取动态路由中的id值
  const id = ctx.params.id
  // 将id值传入service
  const demoData = await testDemoService(id)
  // 将获取到的结果返回给前台 这一步相当于php的echo
  ctx.body = demoData
}