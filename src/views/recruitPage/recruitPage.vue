<template>
  <div class="recruitPage">
    <div class="left-part">
      <choose-workType :types="types" v-for='(types,index) in typeList' :key='index'></choose-workType>
    </div>
    <div class="right-part">
      <work-item
        :workInfo="workInfo"
        v-for="(workInfo, index) in workInfoList"
        :key="index"
      ></work-item>
    </div>
  </div>
</template>
<script>
import chooseWorkType from './../../components/pubilc/recruitPage/chooseType'
import workItem from './../../components/pubilc/recruitPage/work-item'
export default {
  name: 'recruitPage',
  components: {
    chooseWorkType,
    workItem
  },
  data () {
    return {
      typeList: [
        [
          {
            workId: '1',
            workTitle: 'UI'
          },
          {
            workId: '2',
            workTitle: '视觉'
          },
          {
            workId: '3',
            workTitle: '交互'
          },
          {
            workId: '4',
            workTitle: '特效'
          },
          {
            workId: '5',
            workTitle: '场景'
          },
          {
            workId: '6',
            workTitle: '角色'
          },
          {
            workId: '7',
            workTitle: '动画'
          },
          {
            workId: '8',
            workTitle: '3D'
          },
          {
            workId: '9',
            workTitle: '2D'
          },
          {
            workId: '10',
            workTitle: '原画'
          },
          {
            workId: '11',
            workTitle: '运营'
          },
          {
            workId: '12',
            workTitle: '多媒体'
          },
          {
            workId: '13',
            workTitle: '品牌'
          }
        ],
        [{
          workId: '1',
          workTitle: '深圳'
        },
        {
          workId: '2',
          workTitle: '北京'
        },
        {
          workId: '3',
          workTitle: '上海'
        },
        {
          workId: '4',
          workTitle: '成都'
        },
        {
          workId: '5',
          workTitle: '广州'
        },
        {
          workId: '6',
          workTitle: '武汉'
        },
        {
          workId: '7',
          workTitle: '昆明'
        },
        {
          workId: '8',
          workTitle: '杭州'
        },
        {
          workId: '9',
          workTitle: '美国'
        },
        {
          workId: '10',
          workTitle: '韩国'
        }
        ], [
          {
            workId: '1',
            workTitle: 'TEG'
          },
          {
            workId: '2',
            workTitle: 'WXG'
          },
          {
            workId: '3',
            workTitle: 'IEG'
          },
          {
            workId: '4',
            workTitle: 'PCG'
          },
          {
            workId: '5',
            workTitle: 'CSIG'
          },
          {
            workId: '6',
            workTitle: 'CDG'
          }
        ]
      ],

      workInfoList: [
        {
          title: '2D高级角色原画设计师',
          labels: ['本科及以上', '3年以上', '相关专业'],
          teamlogoSrc: require('./../../assets/images/tencent.png'),
          teamData: ['Tencent', 'IEG'],
          teamName: '天美J3工作室'
        },
        {
          title: '高级/资深界面设计师',
          labels: ['本科及以上', '2年以上', '相关专业'],
          teamlogoSrc: require('./../../assets/images/baidu.png'),
          teamData: [],
          teamName: '百度IDG智能驾驶'
        },
        {
          title: '视觉设计师',
          labels: ['本科及以上', '3年以上', '相关专业'],
          teamlogoSrc: require('./../../assets/images/Tao.png'),
          teamData: ['Tencent', 'IEG'],
          teamName: 'TAD社交广告设计'
        },
        {
          title: '2D高级角色原画设计师',
          labels: ['本科及以上', '3年以上', '相关专业'],
          teamlogoSrc: require('./../../assets/images/tencent.png'),
          teamData: ['Tencent', 'IEG'],
          teamName: '天美J3工作室'
        },
        {
          title: '高级/资深界面设计师',
          labels: ['本科及以上', '2年以上', '相关专业'],
          teamlogoSrc: require('./../../assets/images/baidu.png'),
          teamData: [],
          teamName: '百度IDG智能驾驶'
        },
        {
          title: '视觉设计师',
          labels: ['本科及以上', '3年以上', '相关专业'],
          teamlogoSrc: require('./../../assets/images/Tao.png'),
          teamData: ['Tencent', 'IEG'],
          teamName: 'TAD社交广告设计'
        },
        {
          title: '2D高级角色原画设计师',
          labels: ['本科及以上', '3年以上', '相关专业'],
          teamlogoSrc: require('./../../assets/images/tencent.png'),
          teamData: ['Tencent', 'IEG'],
          teamName: '天美J3工作室'
        },
        {
          title: '高级/资深界面设计师',
          labels: ['本科及以上', '2年以上', '相关专业'],
          teamlogoSrc: require('./../../assets/images/baidu.png'),
          teamData: [],
          teamName: '百度IDG智能驾驶'
        },
        {
          title: '视觉设计师',
          labels: ['本科及以上', '3年以上', '相关专业'],
          teamlogoSrc: require('./../../assets/images/Tao.png'),
          teamData: ['Tencent', 'IEG'],
          teamName: 'TAD社交广告设计'
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.recruitPage {
  display: flex;
  justify-content: space-between;
  align-items:flex-start;
  width: 1200px;
  margin: 0 auto;
  .left-part {
  }
  .right-part {
  }
}
</style>
