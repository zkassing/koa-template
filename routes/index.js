const users = require('./users')
const demo = require('./demo')
module.exports =  (router) => {
  users(router)
  demo(router)
}
