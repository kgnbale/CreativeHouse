<template>
   <div class='loading'>
      <div class='loading-parts' >
        <div class='loading-part'></div>
        <div class='loading-part'></div>
        <div class='loading-part'></div>
        <div class='loading-part'></div>
      </div>
    </div>
</template>
<script>
import { setInterval } from 'timers'
export default {
  name: 'loading',
  props: ['loading'],
  data () {
    return {
      animationFlag: true,
      timer: null
    }
  },
  watch: {
    loading (newV, oldV) {
      if (!newV) {
        this.animationFlag = false
      }
    }
  },
  mounted () {
    this.startAnimation()
  },
  methods: {
    startAnimation () {
      this.timer = setInterval(() => {
        [...document.querySelector('.loading-part')].forEach(item => {
          setTimeout(() => {

          })
        })
      })
    }
  }

}
</script>

<style lang="less" scoped>
      .loading{
         position: absolute;
         width:110px;
         height:110px;
         top:50%;
         left:50%;
         transform: translate(-50%,-50%);
        .loading-parts{
           display: flex;
           justify-content: space-between;
           align-items: center;
           align-content: flex-start; //
           flex-wrap: wrap;
          .loading-part{
            margin:0.4rem 0;
              width:50px;
              height:50px;
              background:rgba(0,0,0,.4)
          }
        }
      }
</style>
