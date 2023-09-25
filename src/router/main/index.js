const router = require('koa-router')()
console.log(`222-require('@models')`)
const { result } = require('@/models')
// const { result } = require('../../models')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Player Mixed Services',
    address: 'https://king-cms.onrender.com/'
  })
})

router.get('/welcome', async (ctx, next) => {
  ctx.body = result.success({
    url: ctx.url,
    message: `你好，你当前访问的接口是: ${ctx.url} `
  })
})

module.exports = router
