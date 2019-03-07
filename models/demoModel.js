const query = require('./query')

exports.getArticlesModel = async (values) => {
  // 查询对应的数据库
  const _sql = "SELECT * FROM t_articles WHERE type_id = ?"
  // 将获取到的结果返回给service
  return await query(_sql, values)
}