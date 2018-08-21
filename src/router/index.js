import Vue from 'vue'
import Router from 'vue-router'
import AppHeader from '@/components/AppHeader'
import AppSearchMO from '@/components/AppSearchMO'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: AppSearchMO
    }
  ]
})
