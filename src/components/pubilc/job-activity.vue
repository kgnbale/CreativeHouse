<template>
  <div class='job-activity'>
    <div class='j-a-title'>
      <h3>腾讯设计师招聘</h3>
      <p>
        <span>汇聚全腾讯300+设计师岗位</span>
        <span>应聘腾讯设计师-尽在原创馆</span>
      </p>
      <div class='check-design'>
         <button>了解腾讯设计</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
    .job-activity{
      background:#0069DB;
      width:24%;
      box-sizing: border-box;
      color:#fff;
       margin-left:8px;
       margin-top:8px;
      .j-a-title{
        padding:24px;
        text-align: left;
        h3{
         font-family: 'TencentSans-W7';

        }
        p{
          padding-top:16px;
          display: flex;
          flex-direction: column;
          span{
            font-size:12px;

          }
        }
        .check-design{
           margin-top:40px;
           button{
             border:none;
             color:#004ed2;
             width:110px;
             line-height: 32px;
           }
        }
      }
    }
</style>
