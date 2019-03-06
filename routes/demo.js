const {testDemo} = require('../controller/demoController')
module.exports = (router) => {
  router.get('/demo/:id', testDemo)
}