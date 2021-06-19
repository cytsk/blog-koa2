const router = require('koa-router')()

router.prefix('/user')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/admin', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router