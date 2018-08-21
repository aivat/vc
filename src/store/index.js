import Vue from 'vue'
import Vuex from 'vuex'

import mo from './modules/mo'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    mo
  },
  strict: debug
})