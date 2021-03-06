import Vue from 'vue'
import Vuex from 'vuex'

import mo from './modules/mo'
import individual from './modules/individual'
import authrepresent from './modules/authrepresent'
import progress from './modules/progress'
import employees from './modules/employees'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    mo,
    individual,
    authrepresent,
    progress,
    employees
  },
  strict: debug
})