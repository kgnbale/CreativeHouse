<template>
  <div class='c-head'>
    <div class='create-house-logo c-head-right'>
      <img src="@/assets/images/cover-8.png"
           alt="">
    </div>
    <div class='create-house-navList c-head-middle'>
      <ul>
        <li v-for='(item,index) in navList'
            :key='index'
            @click='goToNav(index)'>{{item.name}}</li>
      </ul>
    </div>
    <div class='create-house-register c-head-left'>
      <div class='onsearch'
           @click='onSearch'>
        搜索
      </div>
      <div class='c-register'>
        <span @click="$emit('login')">登录</span>
      </div>
      <div class='c-login'>
        <span @click="$emit('register')">注册</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showLogin: false,
      showRegister: false,
      navList: [{
        name: '首页'
      }, {
        name: '发现'
      }, {
        name: '活动'
      }, {
        name: '变现'
      }, {
        name: '招聘'
      }, {
        name: '版权存证'
      }, {
        name: 'IOUX'
      }]
    }
  },
  computed: {

  },
  methods: {
    goToNav (index) {
      let navigationObj = {
        '5': this.$router.push({
          name: 'trustsql'
        }),
        '4': this.$router.push({
          name: 'recruit'
        })
      }
      return navigationObj[index]
    },
    onSearch () { },
    login () {
      this.showLogin = true
    },
    register () {
      this.showRegister = true
    }
  }
}
</script>

<style lang="less" scoped>
.c-head {
  font-size: 15px;
  font-weight: bold;
  width: 80rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
  line-height: 5rem;
  // border-bottom: 1px solid rgb(236, 234, 234);
  li {
    list-style-type: none;
    display: inline-block;
    // padding: 1rem 0;
    margin: 0 1rem;
    cursor: pointer;
    &:hover {
      border-bottom: 2px solid #000;
    }
  }
  .create-house-navList {
    ul {
      height: 2rem;
      line-height: 2rem;
    }
  }
  .create-house-logo {
    display: flex;
    align-items: center;
    border-bottom: 2px solid #fff;
    img {
      position: absolute;
    }
  }
  .create-house-register {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    div {
      cursor: pointer;
      padding: 1rem;
      border-bottom: 2px solid #fff;
    }
  }
}
</style>
