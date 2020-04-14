<template>
  <div class='c-work-detail'>
    <div class='container'>
      <div class='left-part'>
        <div class='edit-image'
             v-for='(item,index) in authorInfo.imageList'
             :key='index'>
          <img :src="item.src"
               alt="">
        </div>
      </div>
      <div class='right-part'
           ref='rightScroll'>
        <div class='author-info'>
          <p class='author-info-left'></p>
          <p class='author-info-right'>
            <span class='author-name'>{{authorInfo.name}}</span>
            <span class='follow-me'>关注我</span>
          </p>
        </div>
        <div class='work-detail-overview'>
          <p class='work-title'>{{authorInfo.work.workTitle}}</p>
          <p class='work-fontType'><i class='iconfont'>&#xe601;</i>&nbsp;{{authorInfo.work.fontType}}</p>
          <p class='favorite-number'><i class="iconfont">&#xe6eb;</i>&nbsp;{{authorInfo.work.favoriteNum}}</p>
          <p class='favorite-browse'><i class="iconfont">&#xe69d;</i>&nbsp;{{authorInfo.work.browseNum}}</p>
          <p class='comment-num'><i class="iconfont">&#xe67d;</i>&nbsp;评论 {{authorInfo.work.commentNum}}</p>
          <p class='work-createTime'><i class="iconfont">&#xe735;</i>&nbsp;时间 {{authorInfo.work.createTime}}</p>
        </div>
        <div class='work-detail-like'>
          <span class='likeMe'>赞</span>
        </div>
        <div class='work-share'>
          <share-method></share-method>
        </div>
        <div class='work-comment'>
          <p class='comment'>评论</p>
          <div class='no-comment-title'
               v-show='commentNum ===0'>
            <div>
              首屏正在输入
            </div>
          </div>
          <p class='dot-bottom'></p>

          <p>
            <textarea name=""
                      id=""
                      cols="20"
                      rows="5"
                      placeholder="发表你对作品的看法">

             </textarea>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import shareMethod from './share-method.vue'

export default {
  components: {
    shareMethod
  },
  data () {
    return {
      // authorInfo: ;
      commentNum: 0
    }
  },
  computed: {
    authorInfo () {
      let obj = {}
      obj.imageList = []
      for (let i = 0; i < 5; i++) {
        obj.imageList[i] = {}
        obj.imageList[i].src = require(`../../assets/images/cover-${i + 1}.jpeg`)
      }
      console.log(obj.imageList)
      obj.name = '讨嫌'

      obj.work = {}
      obj.work.workTitle = '篮球足球'
      obj.work.fontType = '商业插画'
      obj.work.favoriteNum = 4
      obj.work.browseNum = 577
      obj.work.commentNum = 10
      obj.work.createTime = '2020-01-04'
      return obj
    }
  },
  created () {

  },
  mounted () {
    console.log(document.getElementsByClassName('left-part'))
  },
  methods: {
  }

}
</script>

<style lang="less" scoped>
button {
  outline: none;
  border: 1px solid transparent;
}
.c-work-detail {
  background: rgba(0, 0, 0, 0.3);
  overflow: hidden;
  .container {
    margin: 5rem 7rem;
    border: 2px solid #ccc;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border: 5px solid #eee;
    background: #fff;
    overflow: hidden;
    .left-part {
      display: inline-block;
      width: 80%;
      min-width: 400px;
      .edit-image {
        padding-top: 3rem;
        width: 100%;
        height: 80vh;
        img {
          width: 80%;
          height: 100%;
        }
      }
    }
    .right-part {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      display: inline-block;
      border: 1px solid #eee;
      margin-top: -1px;
      margin-right: -1px;
      width: 20%;
      .author-info {
        padding: 1rem;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .author-info-left {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          background: chocolate;
        }
        .author-info-right {
          flex-grow: 2;
          display: flex;
          height: 3.5rem;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0 1rem;
          .author-name {
            text-align: left;
            line-height: 1;
            width: 4rem;
            overflow: hidden;
            font-size: 20px;
            font-weight: bolder;
            padding-bottom: 0.5rem;
          }
          .follow-me {
            width: 3rem;
            background: #333;
            padding: 0.3rem 0.6rem;
            color: #fff;
            font-size: 12px;
          }
        }
      }
      .work-detail-overview {
        text-align: left;
        padding: 1.5rem;
        border-bottom: 1px solid #eee;
        p {
          font-size: 12px;
          line-height: 1.5;
          color: #999;
        }
        .work-title {
          font-size: 30px;
          font-weight: 800;
          color: #000;
        }
      }
      .work-detail-like {
        height: 250px;
        border-bottom: 1px solid #eee;
        .likeMe {
          display: block;
          margin: 20px;
          height: 30px;
          line-height: 30px;
          background: #333;
          color: #fff;
          font-size: 14px;
        }
      }
      .work-share {
        font-size: 14px;
      }
      .work-comment {
        padding: 1.5rem;
        position: relative;
        font-size: 12px;
        .comment {
          text-align: left;
          position: relative;
        }
        .no-comment-title {
          position: absolute;
          display: inline-block;
          top: -15px;
          left: 1.5rem;
          font-size: 0.8rem;
          width: 100px;
          height: 30px;
          line-height: 30px;
          background: #ecce80;
          color: #fff;
          transform: skewX(-20deg);
          div {
            display: inline-block;
            transform: skewX(20deg);
          }
        }
        .dot-bottom {
          position: absolute;
          border-width: 0 5px 5px 0;
          border-color: orange;
          // background: orange;
          top: 10px;
          left: 1.5rem;
          transform: rotate(45deg);
        }

        textarea {
          margin-top: 1rem;
          outline: none;
          border: 1px solid #ccc;
          resize: none;
          // text-indent: 1rem;
          font-size: 12px;
          box-sizing: border-box;
          padding: 0.5rem;
        }
      }
    }
  }
}
</style>
