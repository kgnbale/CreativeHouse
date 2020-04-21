<template>
  <div class="c-home-page">
    <header>
      <c-header @login="login"
                @register="register"
                ></c-header>
    </header>
    <div class="c-small-nav" >
      <div class="small-nav">
        <ul>
          <li @click="recommedWork"><span>首页推荐</span></li>
          <li @click="hotPopular"
              :class="{ gold: homeIndex === 'hotPage' }">
            <span>好评最多</span>
          </li>
          <li @click="lasetsWork"
              :class="{ gold: homeIndex === 'newPage' }">
            <span>最新作品</span>
          </li>
        </ul>
      </div>
    </div>
    <router-view ></router-view>
    <Login v-show="showLogin"></Login>
  </div>
</template>
<script>
import cHeader from '../../components/pubilc/c-head.vue'
import Login from '../../components/pubilc/login.vue'
// import cWorkbig from '../../components/pubilc/worksBig.vue'
// import cWork from '../../components/pubilc/works'
export default {
  data () {
    return {
      homeIndex: 'first',
      showLogin: false

    }
  },
  methods: {
    recommedWork () { },
    hotPopular () {
      console.log('hotPage')
      this.homeIndex = 'hotPage'
      this.$router.push({ name: 'hot' })
    },
    lasetsWork () {
      console.log('newPage')
      this.homeIndex = 'newPage'
      this.$router.push({ name: 'new' })
    },
    onSearch () { },
    login () {
      this.showLogin = true
    },
    register () { }
  },
  components: {
    cHeader,
    Login
    // cWorkbig,
    // cWork
  }
}
</script>
<style lang="less" scoped>
header {
  width: 100%;
  border-bottom: 1px solid rgb(236, 234, 234);
}
.c-home-page {
  position: relative;
  .c-small-nav {
    width: 100%;
    border-bottom: 1px solid rgb(236, 234, 234);
    .small-nav {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      width: 80rem;
      margin: 0 auto;
      ul {
        height: 3.7rem;
        line-height: 3.7rem;
        .gold {
          color: #d1b468;
        }
        li {
          display: inline-block;
          padding: 0 1rem;
          cursor: pointer;
          &:hover {
            color: #d1b468;
          }
        }
      }
    }
  }
  .c-works {
    width: 80rem;
    margin: 0 auto;

    .c-work-part {
      padding-top: 1rem;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
  }
}
</style>
