<template>
  <div class="loginN" id="particlesN">
    <div class="entrancesLogo">
      <img src="/images/logo.png" />
    </div>
    <div class="entrances">
      <div class="btn" @click="goSystem('0')">
        <img src="~@/assets/logo/system-sd.png" />
        <p>水电缴费系统</p>
      </div>

      <div class="btn" @click="goSystem('1')">
        <img src="~@/assets/logo/system-nh.png" />
        <p>综合能效系统</p>
      </div>

      <div class="btn" @click="goSystem('2')">
        <img src="~@/assets/logo/system-ld.png" />
        <p>智能路灯系统</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'entrances',
  methods: {
    goSystem(type) {
      // 清除tarbar
      this.$store.state.tagsView.cachedViews = []
      this.$store.state.tagsView.visitedViews = []
      sessionStorage.setItem('loginType', type)
      sessionStorage.setItem('isSelectSystem', true)
      switch (type) {
        // 业务系统
        case '0':
          setTimeout(() => {
            this.$router.push('/index')
          }, 200)
          break
        // 能效系统
        case '1':
          setTimeout(() => {
            this.$router.push('/index')
          }, 200)
          break
        // 路灯系统
        case '2':
          setTimeout(() => {
            this.$router.push('/index')
          }, 200)
          break
        // 其它
        default:
          console.error('系统类型错误！')
      }
    }
  }
  // mounted() {
  //   let data = this.animateData;
  //   particlesJS("particlesN", data);
  // },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.loginN {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  // padding-top: 9%;
  position: relative;
  align-items: center;
  background-size: 100% 100%;
  /* 背景-entrancesBg */
  background-image: url('~@/assets/images/aurora.jpg');
}
.entrances {
  width: 750px;
  height: 350px;
  padding: 0 60px;
  z-index: 10;
  backdrop-filter: blur(10px) saturate(120%);
  background: rgba($color: white, $alpha: 0.15);
  box-shadow: -2px 0px 13px 1px rgba($color: black, $alpha: 0.3);
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .btn {
    padding: 10px;
    color: #ecf0f1;
    font-family: 'Pacifico', cursive;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.5s ease;
    img {
      height: 100px;
      width: 100px;
    }
    p {
      // margin: 13px 0 0 0;
      line-height: 0px;
      text-align: center;
      font-size: 16px;
      text-shadow: 0px 0px 5px black;
    }
  }
  .btn:hover {
    border-radius: 10px;
    // background: rgba($color: white, $alpha: 0.3);
    // box-shadow: 0px 2px 5px rgba($color: black, $alpha: 0.3);
    transform: translateY(-10px);
    transition: all 0.5s ease;
  }
}
.entrancesLogo {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;
  img {
    width: 160px;
  }
}
</style>
