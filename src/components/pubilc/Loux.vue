<template>
  <div class="loux">
    <div class="loux-item-container">
      <div class="loux-part-left">
        <img src="./../../assets/images/Loux/Loux-01.png" alt="" />
      </div>
      <div class="loux-part-right">
        <div class="loux-item-info">
          <div>
            <p class="grey-color">2019 / WINTER</p>
            <p
              style="color:#333;font-size:30px;text-align:left;margin-top:10px"
            >
              CAMPUS 深圳大学站
            </p>
          </div>
          <div class="stuff">
            <div
              class="stuff-item"
              v-for="(item, index) in stuffList"
              :key="index"
            >
              <div class="charactor-img">
                <img :src="item.src" alt="头像" />
              </div>
              <div class="stuff-item-info">
                <h4>{{ item.name }}</h4>
                <p v-for="(i, index2) in item.rank" :key="index2" class="rank">
                  {{ i }}
                </p>
              </div>
            </div>
          </div>
          <div class="go-back-detail">
            <div class="time-line">
              <span>2019-12-21 / 深圳大学后海小区</span>
              <span>回顾详情 —></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Loux',
  data () {
    return {
      stuffList: []
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      this.stuffList = [
        {
          name: 'YUYU',
          rank: ['腾讯ISUX交互设计师'],
          src: require('./../../assets/images/Loux/yuyu.jpg')
        },
        {
          name: 'JAD',
          rank: ['腾讯QQ主设计师', '腾讯高级视觉设计师'],
          src: require('./../../assets/images/Loux/yuyu.jpg')
        },
        {
          name: 'XIAOMU',
          rank: ['玩具工作室主理人', '站酷推荐设计师'],
          src: require('./../../assets/images/Loux/yuyu.jpg')
        },
        {
          name: 'SITU',
          rank: ['腾讯乘车码设计师', '腾讯高级设计师'],
          src: require('./../../assets/images/Loux/yuyu.jpg')
        }
      ]
    },
    checkDetail () {}
  }
}
</script>

<style lang="less" scoped>
.loux {
  margin-top: 50px;
  background: #fff;
  position: relative;
  .loux-item-container {
    display: flex;
    height: 400px;
    .loux-part-left {
      min-width: 640px;
      height:400px;
      overflow: hidden;
      img {
        width:100%;
        height: 400px;
        transition: all 0.3s;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
    .loux-part-right {
      box-sizing: border-box;
      padding: 30px;
      .loux-item-info {
        .grey-color {
          font-size: 20px;
          color: #999;
          text-align: left;
        }
        .stuff {
          margin-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          .stuff-item {
            display: flex;
            width: 50%;
            justify-content: center;
            align-items: center;
            .charactor-img {
              margin-right: 10px;
              img {
                width: 5rem;
                height: 5rem;
              }
            }
            .stuff-item-info {
              text-align: left;
              .rank {
                width: 165px;
                font-size: 14px;
                color: #666;
                letter-spacing: 0.74px;
                line-height: 20px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              }
            }
          }
        }
        .go-back-detail {
          position: absolute;
          width: 496px;
          bottom: 0;
          border-top: 1px solid #ccc;
          line-height: 50px;
          margin-left: -30px;
          .time-line {
            padding: 0 30px;
            color: #666;
            letter-spacing: 0.85px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>
