<template>
  <div class='login'>
    <div class='account-content'>
      <div class='logo'>
        <p>欢迎回来</p>
        <p>在原创馆 创见世界</p>
      </div>
      <div class='login-methods'>
        <div class="password-login"
             @click='chooseMethods(1)'>密码登录</div>
        <div class="text-login"
             @click='chooseMethods(2)'>短信登录</div>
      </div>
      <div class='password-login-info'
           v-if='approach === 1'>
        <p>
          <label for="phone">
            手机
          </label>
          <select name="phone"
                  id="">
            <option v-for='(item,index) in countries'
                    :key='index'
                    :selected="item.prefix === '86'"
                    :value='item.name'>+{{item.prefix}}</option>
          </select>
          <input type="text"
                 id='phone'>
        </p>
        <p>
          <label for='password'>
            密码
          </label>
          <input type='password'
                 name='password'>
        </p>
        <div class='forget-password '>忘记密码?</div>
        <div class='login-button'>
          <span>登录</span>
        </div>
      </div>
      <div class='text-login-info'
           v-else></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      approach: 1,
      countries: []
    }
  },
  mounted () {
    this.initCountry()
  },
  methods: {
    chooseMethods (value) {
      this.approach = value
    },
    initCountry () {
      this.countries = [
        {
          name: '美国',
          prefix: '11',
          id: 1,
          EngLishName: 'American',
          countryImage: ''
        },
        {
          name: '中国',
          prefix: '86',
          id: 2,
          EngLishName: 'China',
          countryImage: ''
        },
        {
          name: '俄罗斯',
          prefix: '32',
          id: 3,
          EngLishName: 'Russia',
          countryImage: ''
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
input,
select {
  outline: none;
  border: none;
  background: #f8f8f8;
}
.login {
  position: fixed;
  height: 490px;
  width: 360px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background: #f8f8f8;
  .account-content {
    padding: 2.5rem;
    .logo {
      p:nth-of-type(1) {
        font-weight: bold;
        font-size: 19px;
      }
      p:nth-of-type(2) {
        font-size: 12px;
        margin: 0.5rem 0;
      }
    }
    .login-methods {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1rem 0;
      border-bottom: 1px solid #eee;
      div {
        font-size: 13px;
        width: 50%;
        padding: 0.5rem;
        box-sizing: border-box;
        cursor: pointer;
        border-bottom: 1px solid #fff;
        &:hover {
          border-color: #000;
        }
      }
    }
    .password-login-info {
      padding-bottom: 0.3rem;
      p {
        text-align: left;
        color: #999;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #999;
        label {
          font-size: 12px;
        }
        select {
          color: #999;
        }
        &:nth-of-type(2) {
          margin: 2rem 0;
          margin-bottom: 0.5rem;
        }
      }
      .forget-password {
        float: right;
        font-size: 12px;
        color: #999;
        &::after {
          display: block;
          content: "";
          clear: both;
        }
      }
      .login-button {
        margin: 4rem 1rem;
        padding: 0.5rem 2rem;
        background: #ccc;
        border-radius: 2rem;
        color: #fff;
        font-size: 12px;
      }
    }
  }
}
</style>
