<template>
  <div class='c-work'
       @click='gotoDetail'>
    <div class='c-work-top'>
      <img :src="src"
           alt="">
    </div>
    <div class='c-work-bottom'>
      <p class='c-work-title'>
        {{title}}

      </p>
      <p class='c-pinglun'>
        <span>点赞 {{like}}</span>
        <span>观看次数 {{follow}}</span>
      </p>
      <p class='c-work-author'>
        <span class='author-name'>{{author}}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: Object,
      require: true
    },
    images: {
      type: Object
    }

  },
  computed: {
    title () {
      return this.image.title || ' PTX企鹅潮玩展2019'
    },
    like () {
      return this.image.like || 33
    },
    author () {
      return this.image.author || '测试名字'
    },
    follow () {
      return this.image.follow || 1000
    }

  },
  mounted () {
    this.initImage()
  },
  data () {
    return {
      src: null
    }
  },
  methods: {
    initImage () {
      this.src = require(`@/assets/images/${this.image.src}`)
    },
    gotoDetail () {
      this.$emit('toDetail')
    }
  }
}
</script>
<style lang="less" scoped>
.c-work {
  width: 18%;
  height: 15rem;
  text-align: left;
  .c-work-top {
    height: 10rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .c-work-bottom {
    height: 5rem;
    background: #fafafa;
    font-size: 13px;
    p {
      padding: 0.3rem;
      span {
        padding-right: 0.5rem;
      }
    }
    .c-pinglun {
      font-size: 10px;
      color: #9b9b9b;
    }
    .c-work-title {
      font-weight: bolder;
    }
    .c-work-author {
      font-size: 0.5rem;
      color: #333;
    }
  }
}
</style>
