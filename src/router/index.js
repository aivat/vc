import Vue from 'vue'
import Router from 'vue-router'
import AppHeader from '@/components/AppHeader'
import AppSearchMO from '@/components/AppSearchMO'
import AppChooseRole from '@/components/AppChooseRole'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: AppSearchMO
    },
    {
      path: '/two',
      name: 'news',
      component: AppChooseRole
    }
  ]
})
