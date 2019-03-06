const {getArticlesModel} = require('../models/demoModel')

exports.testDemoService = async (id) => {
  // 接收到controller传入的id并传入model
  const result = await getArticlesModel(id)
  // 将获取到的结果返回给controller
  return result
}