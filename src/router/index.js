import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'homePage',
    redirect: '/hot',
    component: _ => import('../views/homePage/homePage'),
    children: [{
      path: 'hot',
      name: 'hot',
      component: _ => import('../views/homePage/children/hot')
    }, {
      path: 'new',
      name: 'new',
      component: _ => import('../views/homePage/children/new')
    }, {
      path: '/detail',
      name: 'detail',
      component: _ => import('../components/pubilc/work-detail')
    }, {
      path: 'trustsql',
      name: 'trustsql',
      component: _ => import('../views/trustsql/trustsql.vue')
    }, {
      path: 'recruit',
      name: 'recruit',
      component: _ => import('../views/recruit/recruit.vue')
    }
    ]
  }]
})
