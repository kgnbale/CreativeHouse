<template>
  <div class="choose-work-type">
    <div class="container">
      <div class="type-title">
        <span>类型</span>
        <i class="arrows-up" @click='hiddenTypes'></i>
      </div>
      <div class="types" >
        <ul ref='typesUl'>
          <li class="types-item" v-for="(item, index) in types" :key="index">
            <span class="square"></span>
            <span class="name">{{ item.workTitle }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'chooseType',
  props: {
    types: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    hiddenTypes () {
      let typesUl = this.$refs.typesUl
      typesUl.style.maxHeight ? (typesUl.style.maxHeight === '0px' ? typesUl.style.maxHeight = '300px' : typesUl.style.maxHeight = '0px') : typesUl.style.maxHeight = '0px'
    }
  }
}
</script>

<style lang="less" scoped>
li {
  list-style: none;
}
.choose-work-type {
  width: 300px;
  text-align: left;
  .container {
    padding: 1rem;
    .type-title {
      padding-top: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid #e6e6e6;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .arrows-up {
        width: 0px;
        height: 0px;
        border-left: 5px solid transparent;
        /* 右透明 */
        border-right: 5px solid transparent;
        /*右透明 */
        border-bottom: 5px solid #2f2f2f;
        /* 定义底部颜色 */
        font-size: 0px;
        line-height: 0px;
        position: relative;
        top: 2px;
      }
    }
    .types {
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        transition: all .5s ease;
        .types-item {
          width: 33%;
          padding: 16px 0;
          .square {
            display: inline-block;
            width: 14px;
            height: 14px;
            border: 1px solid #ccc;
            border-radius: 1px;
            vertical-align: middle;
          }
          .name {
            cursor: pointer;
            vertical-align: middle;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
