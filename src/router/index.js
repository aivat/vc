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
import AppEmployees from '@/components/AppEmployees'
import AppEmployeesNew from '@/components/AppEmployeesNew'
import AppEdit from '@/components/AppEdit'

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
      component: AppMO
    },
    {
      path: '/three',
      name: 'three',
      component: AppAuthRepresent
    },
    // {
    //   path: '/four',
    //   name: 'four',
    //   component: AppIndividual
    // },
    // {
    //   path: '/five',
    //   name: 'five',
    //   component: AppAuthRepresent
    // },
    // {
    //   path: '/six',
    //   name: 'six',
    //   component: AppDownload
    // },
    {
      path: '/employees',
      component: AppEmployees,
    },
    {
      path: '/employees/:id/edit',
      name: 'edit',
      component: AppEdit
    },
    {
      path: '/employees/new',
      name: 'new',
      component: AppEdit
    }    
  ]
})
