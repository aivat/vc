import Vue from 'vue'
import Vuex from 'vuex'

import mo from './modules/mo'
import individual from './modules/individual'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    mo,
    individual
  },
  strict: debug
})