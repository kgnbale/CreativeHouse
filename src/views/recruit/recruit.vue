<template>
  <div class='recruit'>
    <main>
      <h4>热招团队</h4>
      <div class='top-part'>
        <JobActivity></JobActivity>
        <JobCommon v-for='n in 7' :key='n'></JobCommon>
      </div>
      <h4>最新岗位</h4>
      <div class='middle-part'>

      </div>
    </main>
  </div>
</template>

<script>
import JobActivity from './../../components/pubilc/job-activity'
import JobCommon from './../../components/pubilc/job-common'
export default {
  name: 'recruit',
  components: {
    JobActivity,
    JobCommon
  },
  data () {
    return {
      jobArr: [
        {
          title: '23486-高级交互设计室13sfsdf',
          address: '深圳总部',
          stuff: '2',
          branch: 'CDG企业发展事业群'

        },
        {
          title: '测试名字2',
          address: '深圳',
          stuff: '1',
          branch: '百度IDG智能教师体验设计师'
        },
        {
          title: '测试名字3',
          address: '重庆',
          stuff: '10',
          branch: '天美工作室3'
        },
        {
          title: '测试名字4',
          address: '上海',
          stuff: '20',
          branch: 'ISUX用户体验设计部'

        },
        {
          title: '测试名字5',
          address: '重庆',
          stuff: '30',
          branch: ''
        },
        {
          title: '测试名字6',
          address: '杭州',
          stuff: '40',
          branch: 'FCC用户体验设计部'
        }

      ]
    }
  }
}
</script>

<style lang="less" scoped>
 .recruit{
   box-sizing: border-box;
   main{
     width: 70rem;
     padding:0 30px;
    margin:0 auto;
     h4{
       margin-top:40px;
       margin-bottom:15px;
       text-align: left;
     }
     .top-part{
       display: flex;
       justify-content: space-between;
       align-items: center;
       flex-wrap: wrap;
     }
   }
 }
</style>
