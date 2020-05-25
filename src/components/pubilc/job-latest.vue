<template>
  <div class='job-latest'>
    <div class='job-latest-container'>
      <div style='padding:24px;border-bottom:1px solid #e6e6e6'>
        <div class='job-latest-title'>
          <span class='latest-title'>{{job.title}}</span>
          <span class='five-pointed-star'></span>
        </div>
        <div class='job-latest-address'>
          <span>
            <i></i>
            {{job.address}}
          </span>
          <span>
            <i></i>
            {{job.stuff}}人
          </span>
        </div>
      </div>
      <div class='job-branch'>
        <span class='job-branch-img'>
          <img :src='job.jobImage'
               alt="">
        </span>
        <span>
          {{job.branch}}
        </span>
        <div class='job-createTime'>
          {{job.days}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'job-latest',
  props: {
    job: {
      type: Object,
      required: true
    }
  }

}
</script>
<style lang="less" scoped>
.job-latest {
  width: 24%;
  border: 1px solid #e6e6e6;
  margin-left: 8px;
  margin-top: 8px;
  .job-latest-container {
    .job-latest-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .latest-title {
        font-size: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 80%;
        text-align: left;
      }
      .five-pointed-star {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: #ccc;
        border-radius: 50%;
      }
    }
    .job-latest-address {
      margin-top: 8px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      span {
        font-size: 13px;
        i {
          font-size: 14px;
          display: inline-block;
          width: 10px;
          height: 10px;
          background: #ccc;
          border-radius: 50%;
        }
        &:nth-of-type(1) {
          margin-right: 16px;
        }
      }
    }
    .job-branch {
      padding:24px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      span{
        font-size:14px;
        text-overflow: ellipsis;
        white-space:nowrap;
        overflow: hidden;
        &:nth-of-type(2){
          padding-right:2.5rem;
          padding-left:4px;
          flex-basis:6rem;
          text-align: left;
        }
      }
      .job-branch-img {
        img {
          width:24px;
          height:24px;
          border-radius: 50%;
          vertical-align: middle;
        }
      }
      .job-createTime {
        font-size:14px;
      }
    }
  }
}
</style>
