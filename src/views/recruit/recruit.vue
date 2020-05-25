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
        <JobLatest v-for='(item,index) in jobArr' :key='index' :job='item'></JobLatest>
      </div>
    </main>
  </div>
</template>

<script>
import JobActivity from './../../components/pubilc/job-activity'
import JobCommon from './../../components/pubilc/job-common'
import JobLatest from './../../components/pubilc/job-latest'
export default {
  name: 'recruit',
  components: {
    JobActivity,
    JobCommon,
    JobLatest
  },
  data () {
    return {
      jobArr: [
        {
          title: '23486-高级交互设计室13sfsdf',
          address: '深圳总部',
          stuff: '2',
          branch: 'CDG企业发展事业群',
          createTime: '2020-04-19',
          days: '4天前',
          jobImage: require('./../../assets/images/recruit/01.jpg')

        },
        {
          title: '测试名字2',
          address: '深圳',
          stuff: '1',
          branch: '百度IDG智能教师体验设计师',
          createTime: '2020-03-19',
          jobImage: require('./../../assets/images/recruit/02.jpg'),
          days: '14天前'
        },
        {
          title: '测试名字3',
          address: '重庆',
          stuff: '10',
          branch: '天美工作室3',
          createTime: '2019-04-19',
          jobImage: require('./../../assets/images/recruit/03.jpg'),
          days: '1个月前'
        },
        {
          title: '测试名字4',
          address: '上海',
          stuff: '20',
          branch: 'ISUX用户体验设计部',
          createTime: '2020-04-24',
          jobImage: require('./../../assets/images/recruit/04.jpg'),
          days: '2个月前'

        },
        {
          title: '测试名字5',
          address: '重庆',
          stuff: '30',
          branch: '天美工作室3',
          createTime: '2020-05-19',
          jobImage: require('./../../assets/images/recruit/03.jpg'),
          days: '半年前'
        },
        {
          title: '测试名字6',
          address: '杭州',
          stuff: '40',
          branch: 'FCC用户体验设计部',
          createTime: '2020-02-19',
          jobImage: require('./../../assets/images/recruit/02.jpg'),
          days: '1年前'
        },
        {
          title: '23486-高级交互设计室13sfsdf',
          address: '深圳总部',
          stuff: '2',
          branch: 'CDG企业发展事业群',
          createTime: '2020-04-19',
          jobImage: require('./../../assets/images/recruit/02.jpg'),
          days: '3个月前'

        },
        {
          title: '测试名字2',
          address: '深圳',
          stuff: '1',
          branch: '百度IDG智能教师体验设计师',
          createTime: '2020-03-19',
          jobImage: require('./../../assets/images/recruit/02.jpg'),
          days: '1天前'
        },
        {
          title: '测试名字3',
          address: '重庆',
          stuff: '10',
          branch: '天美工作室3',
          createTime: '2019-04-19',
          jobImage: require('./../../assets/images/recruit/04.jpg'),
          days: '1天前'
        },
        {
          title: '测试名字4',
          address: '上海',
          stuff: '20',
          branch: 'ISUX用户体验设计部',
          createTime: '2020-04-24',
          jobImage: require('./../../assets/images/recruit/01.jpg'),
          days: '1天前'

        },
        {
          title: '测试名字5',
          address: '重庆',
          stuff: '30',
          branch: '',
          createTime: '2020-05-19',
          jobImage: require('./../../assets/images/recruit/03.jpg'),
          days: '1天前'
        },
        {
          title: '测试名字6',
          address: '杭州',
          stuff: '40',
          branch: 'FCC用户体验设计部',
          createTime: '2020-02-19',
          jobImage: require('./../../assets/images/recruit/03.jpg'),
          days: '10天前'
        }

      ]
    }
  }
}
</script>

<style lang="less" scoped>
 .recruit{
   box-sizing: border-box;
   margin-bottom: 3.8rem;
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
     .middle-part{
       display: flex;
       justify-content: space-between;
       align-items: center;
       flex-wrap: wrap;
     }
   }
 }
</style>
