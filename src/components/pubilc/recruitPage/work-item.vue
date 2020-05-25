<template>
  <div class="work-item">
    <div class="work-item-container">
      <div class="container-title-info">
        <div class="part-left">
          <div class="work-title">{{ workInfo.title }}</div>
          <div class="work-label">
            <span v-for="(label, index) in workInfo.labels" :key="index">
              {{ label }}
            </span>
          </div>
        </div>
        <div class="part-right">
          <div class="team-info">
            <a href="">
              <img :src="workInfo.teamlogoSrc" alt="" />
            </a>
            <div class="team-data">
              <p>
                <span
                  v-for="(item, index2) in workInfo.teamData"
                  :key="index2"
                >
                  {{ item }} /
                </span>
              </p>
              <p class="team-name">
                {{ workInfo.teamName }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="work-data-info">
        <div class="data-info-left">
          <span><img src="./../../../assets/images/address.png" /><span>深圳</span></span>
          <span><img src="./../../../assets/images/stuff.png" /><span>3人</span></span>
          <span
            ><img src="./../../../assets/images/time-clock.png" /><span>16小时前</span></span
          >
        </div>
        <div class="data-info-right">
          <span>
            <img src="./../../../assets/images/favorite.png" alt="" />
            <span>收藏</span>
          </span>
          <span>
            <img src="./../../../assets/images/share.png" alt="">
            <span>分享</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'work-item',
  props: {
    workInfo: {
      type: Object,
      required: false
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.work-item {
  width: 973px;
  margin:16px;
  .work-item-container {
    border: 1px solid #e6e6e6;
    .container-title-info {
      padding: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e6e6e6;
      .part-left {
        text-align:left;
        .work-title {
          font-size: 24px;
          font-weight: bold;
        }
        .work-label {
          margin-top:8px;
          cursor: pointer;
          span {
            font-size: 12px;
            padding: 4px 10px;
            border-radius: 2rem;
            background: #f7f7f7;
            margin-right: 10px;
          }
        }
      }
      .part-right {
        text-align: left;
        width:250px;
        .team-info {
          display: flex;
          height: 61px;
          a {
            border: 1px solid #e6e6e6;
            border-radius: 50%;
            img {
              width: 59px;
              height: 59px;
              border-radius: 50%;
            }
          }
          .team-data {
            flex: 1;
            height: 100%;
            display: flex;
            margin-left: 8px;
            flex-direction: column;
            justify-content: space-evenly;
            p{
              &:nth-of-type(1){
                font-size:14px;
                color:#999;
              }
            }
            .team-name {
              margin-top: 4px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              width:120px;
              span {
                line-height: 20px;
              }
            }
          }
        }
      }
    }
    .work-data-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin:24px;
      .data-info-left {
        span{
          font-size:13px;
          margin-right:8px;
          img{
            vertical-align: middle;
          }
          span{
            vertical-align: middle;
            padding-left:4px;
          }
        }
      }
      .data-info-right {
        span{
          font-size:13px;
          img{
            vertical-align: middle;
          }
          span{
            vertical-align: middle;
            &:nth-of-type(1){
              padding-right:6px;
            }
          }
        }
      }
    }
  }
}
</style>
