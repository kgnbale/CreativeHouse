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
            <h2>原创作品版权保护</h2>
            <div><span>
                通过区块链技术为你的原创作品提供版权保护服务<br>
                构建高效智能的区块链版权保护服务生态
              </span></div>
          </div>
        </div>
        <div class='part-one-right'>

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

</style>
