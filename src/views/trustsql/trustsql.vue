<template>
  <div class='trustsql'>
    <main>
      <section class='part-one'>
        <div class='part-one-left'>
          <div class='trustsql-logo'>
            <img src="./../../assets/images/trustsql/logo-01.png" alt="">
            <span>×</span>
            <span class='specific-font'>原创馆</span>
          </div>
          <div class='eye-catching'>
            <h1>原创作品版权保护</h1>
            <div class='describe-text'>
              <span>
                通过区块链技术为你的原创作品提供版权保护服务<br>
                构建高效智能的区块链版权保护服务生态
              </span>
            </div>
          </div>
          <div class='buttonList'>
            <div style='float:left'>
              <div class='upload-original-work'>上传原创</div>
              <div class='upload-used-work'>已有作品上链</div>
            </div>
          </div>
        </div>
        <div class='part-one-right'>
           <div>
              <img src="@/assets/images/trustsql/trustsql.png" alt="">
           </div>
        </div>
      </section>
      <section class="part-two"></section>
      <section class="part-three"></section>
      <section class="part-four"></section>
      <section class="part-five"></section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'trustsql',
  data () {
    return {

    }
  },
  mounted () {
    //  this.init()
    this.$emit('update:showNav', false)
  },
  methods: {
  }
}
</script>

<style lang="less">
    .trustsql{
      main{
        width:70%;
        margin:0 auto;
        .part-one{
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .part-one-left{
            min-width:450px;
            .trustsql-logo{
              img{
                vertical-align: middle;
              }
              .specific-font{
                font-weight: bold;
              }
            }
            .eye-catching{
              margin:1rem 0;
              h1{
                 font-size:70px;
                 font-weight: normal;
                 font-family: 'PingFangSC-Medium';
                 line-height: 5rem;
                 padding-bottom: 1rem;

              }
              .describe-text{
                font-size:20px;
                line-height: 1.7em;

              }
            }
            .buttonList{
              text-align: center;
              margin-left:0;
              margin:3rem 0;
              .upload-original-work{
                cursor: pointer;
                 width:200px;
                 line-height: 60px;
                 display: inline-block;
                 background:#000;
                 color:#fff;
                 margin-right:1rem

              }
              .upload-used-work{
                cursor: pointer;
                 width:200px;
                 line-height: 60px;
                 box-sizing: border-box;
                 border:2px solid #979797;
                 display: inline-block;
                 color:#000;
              }
            }
          }
        }
      }
    }
    @media screen and (max-width: 766px) {
        h1{
          font-size:50px !important;
        }
    }
</style>
