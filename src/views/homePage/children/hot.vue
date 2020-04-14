<template>
  <div class='c-works'>
    <div class='big c-work-part'>
      <c-workbig>
      </c-workbig>
      <cWork :image='getRandom'
             v-if='flag'></cWork>
      <cWork :image='getRandom'
             v-if='flag'></cWork>
    </div>

    <div class='c-work-part'
         v-for='(item,index) in imageList'
         :key='index'>
      <cWork v-for='(img,index2) in item'
             :key='index2'
             :image='img'
             @click.native='getDetail(img)'></cWork>
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
      // },
      flag: false,
      getRandom: null

    }
  },
  mounted () {
    this.$axios.get('../../../../static/test.json').then(res => {
      // this.getRandom =
      this.imageList = res.data.Response.reduce((acc, b, c) => {
        if (c * this.size <= res.data.Response.length) {
          acc.push(res.data.Response.slice(c * this.size, (c + 1) * this.size))
        }
        return acc
      }, [])
      this.$nextTick(() => {
        this.flag = true
        this.getRandom = this.imageList[0][1]
      })
    })
  },
  components: {
    cWorkbig,
    cWork
  },
  methods: {
    getDetail (item) {
      console.log(1231)
      this.$router.push({ name: 'detail' })
    }
  }
}
</script>

<style lang="less" scoped>
.c-works {
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
