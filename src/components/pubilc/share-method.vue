<template>
  <div class='share-method'>
    <ul>
      <li><span>分享</span></li>
      <li v-for='(item,index) in shareMethods'
          :key='index'>
        <i class='iconfont'>{{item.content}}</i>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    share: {
      type: Object
    }
  },
  data () {
    return {
      shareMethods: []
    }
  },
  mounted () {
    this.loadMedhods()
  },
  methods: {
    loadMedhods () {
      this.shareMethods = [
        {
          id: '001',
          iconFontCode: '&#xe66a;',
          content: '\ue6eb'
        },
        {
          id: '002',
          iconFontCode: '&#xe600;',
          content: '\ue600'

        },
        {
          id: '003',
          iconFontCode: '&#xe882;',
          content: '\ue882'
        },
        {
          id: '004',
          iconFontCode: '&#xe6df;',
          content: '\ue6df'
        },
        {
          id: '005',
          iconFontCode: '&#xe647;',
          content: '\ue647'
        },
        {
          id: '006',
          iconFontCode: '&#xe87d;',
          content: '\ue87d'
        }
      ]
    }
  }

}
</script>
<style lang="less" scoped>
ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    list-style: none;
    color: #999;
  }
}
.share-method {
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
}
</style>
