const query = require('../scripts/query')

exports.getArticlesModel = async (values) => {
  const _sql = "SELECT * FROM t_articles WHERE type_id = ?"
  return await query(_sql, values)
}