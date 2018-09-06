import Vue from 'vue'
import Router from 'vue-router'
import AppHeader from '@/components/AppHeader'
import AppSearchMO from '@/components/AppSearchMO'
import AppChooseRole from '@/components/AppChooseRole'
import AppIndividual from '@/components/AppIndividual'
import AppPersonInCharge from '@/components/AppPersonInCharge'
import AppAuthRepresent from '@/components/AppAuthRepresent'
import AppDownload from '@/components/AppDownload'
import AppMO from '@/components/AppMO'
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
      name: 'two',
      component: AppChooseRole
    },
    {
      path: '/three',
      name: 'three',
      component: AppMO
    },
    {
      path: '/four',
      name: 'four',
      component: AppIndividual
    },
    {
      path: '/five',
      name: 'five',
      component: AppAuthRepresent
    },
    {
      path: '/six',
      name: 'six',
      component: AppDownload
    }
  ]
})
