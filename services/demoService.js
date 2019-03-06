const {getArticlesModel} = require('../models/demoModel')

exports.testDemoService = async (id) => {
  const result = await getArticlesModel(id)
  return result
}