const state = {
    value: 16
}

const actions = {
  setProgressValue ({ commit }, val) {
    commit('setProgressValue', val)
  }
}


const mutations = {
    setProgressValue(state, val) {
        state.value = val
    }
}

export default {
  state,
  actions,
  mutations
}