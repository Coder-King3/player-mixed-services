const router = require('koa-router')()
const axios = require('axios')
const multer = require('@koa/multer')
const FormData = require('form-data')

// 配置文件上传中间件
const upload = multer()

router.prefix('/images-api')

// 用户信息接口
router.get('/myinfo', async (ctx, next) => {
  // 获取凭证
  const SESSDATA = ctx.cookies.get('SESSDATA')

  // 获取用户信息
  const url = 'https://api.bilibili.com/x/space/myinfo'
  try {
    const response = await axios({
      method: 'GET',
      url: url,
      headers: {
        Cookie: `SESSDATA=${SESSDATA}`
      }
    })
    ctx.body = response.data
  } catch (error) {
    ctx.body = {
      code: -1,
      message: error.message
    }
  }
})

// 图片上传接口
router.post('/upload', upload.single('file'), async (ctx, next) => {
  const SESSDATA = ctx.cookies.get('SESSDATA')
  const bili_jct = ctx.cookies.get('bili_jct')

  if (!ctx.file) {
    ctx.body = {
      code: -1,
      message: '没有接收到文件'
    }
    return
  }

  try {
    const formData = new FormData()
    formData.append('file', ctx.file.buffer, ctx.file.originalname)
    formData.append('csrf', bili_jct)
    formData.append('bucket', 'openplatform')

    const url = 'https://api.bilibili.com/x/upload/web/image'
    const result = await axios({
      method: 'POST',
      url: url,
      data: formData,
      headers: {
        ...formData.getHeaders(),
        Cookie: `bili_jct=${bili_jct}; SESSDATA=${SESSDATA};`
      }
    })

    ctx.body = result.data
  } catch (error) {
    ctx.body = {
      code: -1,
      message: error.message
    }
  }
})

module.exports = router
