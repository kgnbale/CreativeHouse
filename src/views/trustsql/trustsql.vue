<template>
  <div class="trustsql">
    <main>
      <section class="part-one">
        <div class="part-one-left">
          <div class="trustsql-logo">
            <img src="./../../assets/images/trustsql/logo-01.png" alt="" />
            <span>×</span>
            <span class="specific-font">原创馆</span>
          </div>
          <div class="eye-catching">
            <h1>原创作品版权保护</h1>
            <div class="describe-text">
              <span>
                通过区块链技术为你的原创作品提供版权保护服务<br />
                构建高效智能的区块链版权保护服务生态
              </span>
            </div>
          </div>
          <div class="buttonList">
            <div style="float:left">
              <div class="upload-original-work">上传原创</div>
              <div class="upload-used-work">已有作品上链</div>
            </div>
          </div>
        </div>
        <div class="part-one-right">
          <div>
            <img src="@/assets/images/trustsql/trustsql.png" alt="" />
          </div>
        </div>
      </section>
      <section class="part-two">
        <LouxItem v-for="n in 10" :key="n" />
      </section>
      <section class="part-three"></section>
      <section class="part-four"></section>
      <section class="part-five"></section>
    </main>
  </div>
</template>

<script>
import LouxItem from './../../components/pubilc/Loux'
import { debounce } from './../../utils/utils'
export default {
  name: 'trustsql',
  data () {
    return {
      scrollTop: 0,
      targetDomArr: 0,
      currIndex: 1
    }
  },
  components: {
    LouxItem
  },
  watch: {
    scrollTop (newV, oldV) {
      this.rerender(newV)
    }
  },
  mounted () {
    this.$emit('update:showNav', false)
    this.getTargetDom('.loux')
    this.windowAddeventLister()
  },
  methods: {
    windowAddeventLister () {
      window.addEventListener(
        'scroll',
        e => {
          debounce(this.getScrollHeight(e), 5000)
        },
        false
      )
    },
    getTargetDom (target) {
      this.targetDomArr = document.querySelectorAll(target);
      [...document.querySelectorAll('.loux')].forEach(item => {
        item.style.opacity = '0'
      })
    },
    getScrollHeight (e) {
      this.scrollTop = parseInt(document.documentElement.scrollTop)
    },
    rerender (value) {
      let offsetTopArr = [...this.targetDomArr].map(item => item.offsetTop)
      let scrollTop = document.documentElement.scrollTop
      let clientHeight = parseInt(document.documentElement.clientHeight)
      let targetIndex = -1
      for (let i = 0; i < offsetTopArr.length - 1; i++) {
        if (
          parseInt(clientHeight) + scrollTop >= offsetTopArr[i] &&
          parseInt(clientHeight) + scrollTop <= offsetTopArr[i + 1] &&
          i !== offsetTopArr.length - 1
        ) {
          targetIndex = i
        } else {
          continue
        }
      }
      if (targetIndex === offsetTopArr.length - 2) {
        targetIndex = offsetTopArr.length - 1
      }
      for (let j = 0; j < [...this.targetDomArr].length; j++) {
        if ([...this.targetDomArr][j].style.opacity === '1') {
          continue
        } else if (j <= targetIndex) {
          [...this.targetDomArr][j].style.opacity = '1'
        }
      }
    }
  }
}
</script>

<style lang="less">
.trustsql {
  background: #f7f7f7;
  main {
    width: 1200px;
    margin: 0 auto;
    .part-one {
      text-align: left;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .part-one-left {
        min-width: 450px;
        .trustsql-logo {
          img {
            vertical-align: middle;
          }
          .specific-font {
            font-weight: bold;
          }
        }
        .eye-catching {
          margin: 1rem 0;
          h1 {
            font-size: 70px;
            font-weight: normal;
            font-family: "PingFangSC-Medium";
            line-height: 5rem;
            padding-bottom: 1rem;
          }
          .describe-text {
            font-size: 20px;
            line-height: 1.7em;
          }
        }
        .buttonList {
          text-align: center;
          margin-left: 0;
          margin: 3rem 0;
          .upload-original-work {
            cursor: pointer;
            width: 200px;
            line-height: 60px;
            display: inline-block;
            background: #000;
            color: #fff;
            margin-right: 1rem;
          }
          .upload-used-work {
            cursor: pointer;
            width: 200px;
            line-height: 60px;
            box-sizing: border-box;
            border: 2px solid #979797;
            display: inline-block;
            color: #000;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 766px) {
  h1 {
    font-size: 50px !important;
  }
}
.loux {
  transition: all 1s 0.3s;
}
</style>
