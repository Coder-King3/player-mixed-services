const router = require('koa-router')()
const { result } = require('../../models')
async function delayer(time = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Player Mixed Services',
    address: 'https://player-mixed-services.vercel.app/'
  })
})

router.get('/welcome', async (ctx, next) => {
  ctx.body = result.success({
    url: ctx.url,
    message: `你好，你当前访问的接口是: ${ctx.url}`,
    params: ctx.query
  })
})

router.get('/multidata', async (ctx, next) => {
  ctx.body = result.success({
    banner: {
      context: {
        currentTime: 1538014774
      },
      isEnd: true,
      list: [
        {
          acm: '3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119',
          height: 390,
          height923: 390,
          image:
            'https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg',
          image923:
            'https://s10.mogucdn.com/mlcdn/c45406/180926_7d5c521e0aa3h38786lkakebkjlh8_750x390.jpg',
          link: 'https://act.mogujie.com/huanxin0001?acm=3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119',
          title: '焕新女装节',
          width: 750,
          width923: 750
        },
        {
          acm: '3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119',
          height: 390,
          height923: 390,
          image:
            'https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg',
          image923:
            'https://s10.mogucdn.com/mlcdn/c45406/180926_14l41d2ekghbeh771g3ghgll54224_750x390.jpg',
          link: 'https://act.mogujie.com/ruqiu00001?acm=3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119',
          title: '入秋穿搭指南',
          width: 750,
          width923: 750
        },
        {
          acm: '3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119',
          height: 390,
          height923: 390,
          image:
            'https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg',
          image923:
            'https://s10.mogucdn.com/mlcdn/c45406/180919_47iclhel8f4ld06hid21he98i93fc_750x390.jpg',
          link: 'https://act.mogujie.com/huanji001?acm=3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119',
          title: '秋季护肤大作战',
          width: 750,
          width923: 750
        },
        {
          acm: '3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119',
          height: 390,
          height923: 390,
          image:
            'https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg',
          image923:
            'https://s10.mogucdn.com/mlcdn/c45406/180917_0hgle1e2c350a57ekhbj4f10a6b03_750x390.jpg',
          link: 'https://act.mogujie.com/liuxing00001?acm=3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119',
          title: '流行抢先一步',
          width: 750,
          width923: 750
        }
      ],
      nextPage: 1
    },
    dKeyword: {
      context: {
        currentTime: 1538014774
      },
      isEnd: true,
      list: [
        {
          acm: '3.mce.2_10_1ag5u.6348.0.ccy5br4OlfK0P.pos_0-m_243725-sd_119',
          defaultKeyWord: '套装'
        }
      ],
      nextPage: 1
    },
    keywords: {
      context: {
        currentTime: 1538014774
      },
      isEnd: true,
      list: [
        {
          acm: '3.mce.2_10_185r2.5868.0.ccy5br4OlfK1Y.pos_0-m_190323-sd_119',
          is_red: '1',
          words: '连衣裙'
        },
        {
          acm: '3.mce.2_10_185r4.5868.0.ccy5br4OlfK1Z.pos_1-m_190324-sd_119',
          is_red: '0',
          words: '小白鞋'
        },
        {
          acm: '3.mce.2_10_185r6.5868.0.ccy5br4OlfK10.pos_2-m_190325-sd_119',
          is_red: '1',
          words: '省心套装'
        },
        {
          acm: '3.mce.2_10_185r8.5868.0.ccy5br4OlfK11.pos_3-m_190326-sd_119',
          is_red: '0',
          words: '碎花连衣裙'
        },
        {
          acm: '3.mce.2_10_185ra.5868.0.ccy5br4OlfK12.pos_4-m_190327-sd_119',
          is_red: '1',
          words: '明星同款'
        },
        {
          acm: '3.mce.2_10_185rc.5868.0.ccy5br4OlfK13.pos_5-m_190328-sd_119',
          is_red: '1',
          words: '高跟鞋'
        },
        {
          acm: '3.mce.2_10_185re.5868.0.ccy5br4OlfK14.pos_6-m_190329-sd_119',
          is_red: '0',
          words: '美妆'
        },
        {
          acm: '3.mce.2_10_185rg.5868.0.ccy5br4OlfK15.pos_7-m_190330-sd_119',
          is_red: '1',
          words: '墨镜'
        }
      ],
      nextPage: 1
    },
    recommend: {
      context: {
        currentTime: 1538014774
      },
      isEnd: true,
      list: [
        {
          acm: '3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119',
          image:
            'https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png',
          link: 'http://act.meilishuo.com/10dianlingquan?acm=3.mce.2_10_1dggc.13730.0.ccy5br4OlfK0U.pos_0-m_313898-sd_119',
          sort: 1,
          title: '十点抢券'
        },
        {
          acm: '3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119',
          image:
            'https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png',
          link: 'https://act.mogujie.com/tejiazhuanmai09?acm=3.mce.2_10_1dgge.13730.0.ccy5br4OlfK0V.pos_1-m_313899-sd_119',
          sort: 2,
          title: '好物特卖'
        },
        {
          acm: '3.mce.2_10_1b610.13730.0.ccy5br4OlfK0W.pos_2-m_260486-sd_119',
          image:
            'https://s10.mogucdn.com/mlcdn/c45406/180913_387kgl3j21ff29lh04181iek48a6h_225x225.png',
          link: 'http://act.meilishuo.com/neigouful001?acm=3.mce.2_10_1b610.13730.0.ccy5br4OlfK0W.pos_2-m_260486-sd_119',
          sort: 3,
          title: '内购福利'
        },
        {
          acm: '3.mce.2_10_1dggg.13730.0.ccy5br4OlfK0X.pos_3-m_313900-sd_119',
          image:
            'https://s10.mogucdn.com/mlcdn/c45406/180913_8d4e5adi8llg7c47lgh2291akiec7_225x225.png',
          link: 'http://act.meilishuo.com/wap/yxzc1?acm=3.mce.2_10_1dggg.13730.0.ccy5br4OlfK0X.pos_3-m_313900-sd_119',
          sort: 4,
          title: '初秋上新'
        }
      ],
      nextPage: 1
    }
  })
})

// Test
router.get('/testGet', async (ctx, next) => {
  ctx.body = result.success({
    url: ctx.url,
    message: `GET 接口测试: ${ctx.url}`,
    params: ctx.query,
    ctx
  })
})

router.post('/testPost', async (ctx, next) => {
  ctx.body = result.success({
    url: ctx.url,
    message: `POST 接口测试: ${ctx.url}`,
    params: ctx.data,
    ctx
  })
})

router.get('/testDelay', async (ctx, next) => {
  await delayer(3000)

  await next()

  ctx.body = result.success({
    url: ctx.url,
    message: `延迟接口测试: ${ctx.url}`,
    params: ctx.query,
    ctx
  })
})

router.get('/testGet/:name/:id', async (ctx, next) => {
  ctx.body = result.success({
    url: ctx.url,
    message: `GET 接口测试: ${ctx.url}`,
    params: ctx.query,
    ctx
  })
})

module.exports = router
