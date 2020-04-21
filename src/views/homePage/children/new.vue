<template>
  <div class="c-works-new">
    <div class="big c-work-part">
      <c-workbig> </c-workbig>
      <cWork :image="getRandom" v-if="flag"></cWork>
      <cWork :image="getRandom" v-if="flag"></cWork>
    </div>
    <div
      class="c-work-part"
      v-for="(item, index) in imageList"
      :key="index"
    >
      <cWork
        class=''
        v-for="(img, index2) in item"
        :key="index2"
        :image="img"
        @toDetail="toDetail"

      ></cWork>
    </div>
  </div>
</template>

<script>
import cWorkbig from '@/components/pubilc/worksBig.vue'
import cWork from '@/components/pubilc/works'
export default {
  data () {
    return {
      imageList: [],
      size: 5, // 每行显示的图片数量
      // getRandom: {
      //   name: 'haha',
      //   src: 'cover-12.jpeg'
      // }
      getRandom: null,
      flag: false
    }
  },
  mounted () {
    this.$axios.get('../../../../static/test2.json').then(res => {
      this.imageList = res.data.Response.reduce((acc, b, c) => {
        if (c * this.size <= res.data.Response.length) {
          acc.push(res.data.Response.slice(c * this.size, (c + 1) * this.size))
        }
        return acc
      }, [])
      this.flag = true
      this.getRandom = this.imageList[0][1]
    })
  },
  components: {
    cWorkbig,
    cWork
  },
  methods: {
    toDetail () {
      this.$router.push({
        name: 'detail'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.c-works-new {
  width: 80rem;
  margin: 0 auto;
  .c-work-part {
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
