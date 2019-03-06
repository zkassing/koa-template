const mysql = require('mysql')
const db = require('../config/db')
console.log(db)
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'kassing',
//   password: 'zhangkuan.123',
//   database: 'db_yuedu'
// })
const pool = mysql.createPool(db)

module.exports = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
        return false
      }
      connection.query(sql, values, (err, rows) => {
        if (err) {
          reject(err)
          return false
        }
        resolve(rows)
        connection.release()
      })

    })
  })
}
