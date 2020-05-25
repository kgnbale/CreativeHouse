<template>
  <div class="job-common">
    <div class="job-container">
      <div class="job-title">
        <div style="padding:1rem" class="j-content">
          <a href="" style="border:1px solid #e6e6e6;border-radius:50%;">
            <img
              src="./../../assets/images/recruit/01.jpg"
              alt=""
              style="border-radius:50%"
            />
          </a>
          <div class="job-info">
            <a href="" class="job-info-name">
              魔术师工作室
            </a>
            <div class="job-info-address">
              <i class="icon-locations"></i>
              <span>深圳市</span>
            </div>
          </div>
        </div>
      </div>
      <div class='job-label'>
         <div class='label-content'>
             <a class='label-item' @click='goToRecruitPage("交互")'>交互</a>
             <a class="label-item" @click='goToRecruitPage("视觉")'>视觉</a>
             <a class="label-item" @click='goToRecruitPage("多媒体")'>多媒体</a>
             <a class="label-item" @click='goToRecruitPage("UI")'>UI</a>
             <a class="label-item" @click='goToRecruitPage("UI开发")'>UI开发</a>
         </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    goToRecruitPage (keyWord) {
      this.$router.push({
        name: 'recruitPage',
        params: {
          keyWord
        }
      })
    }
  }

}
</script>
<style lang="less" scoped>
a {
  text-decoration: none;
  color: none;
}
.job-common {
  box-sizing: border-box;
  border: 1px solid #e6e6e6;
  width: 24%;
  margin-left:8px;
  margin-top:8px;
  .job-container {
    .job-title {
      border-bottom:1px solid #e6e6e6;
      .j-content {
        padding: 1rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .job-info {
          padding-left: 10px;
          .job-info-name {
            width: 56px;
            height: 56px;
            img {
              border-radius: 50%;
            }
          }
          .job-info-address {
            text-align: left;
            .icon-locations {
              font-size: 14px;
              display: inline-block;
              width: 10px;
              height: 10px;
              background: #ccc;
              border-radius: 50%;
            }
            span {
              font-size: 12px;
            }
          }
        }
      }
    }
    .job-label{
      .label-content{
        padding:20px 20px 12px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        .label-item{
          cursor: pointer;
          font-size:12px;
          padding:3px 14px;
          margin:0 4px 14px 4px;
          background:#f7f7f7;
          border-radius: 14px;

        }
      }
    }
  }
}
</style>
