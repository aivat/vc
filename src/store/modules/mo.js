import shopMO from '../../api/mo'

const state = {
    listMO: [],
    mo: ''
}

const getters = {
    getMO: state => state.listMO,
    dMO: state => state.mo
}

// actions
const actions = {
  searchMO ({ commit }, inputMO) {
    shopMO.searchMO(
        inputMO,
        listMO => {
            console.log('listMO=', listMO)
            commit('setMO', listMO)
        }
    )
    console.log('inputMO=', inputMO)
    
    // console.log('rootState.range.news=', rootState.range.news)
  }
//   getMO({ commit },  categoryValue) {
//     commit('setCategory', categoryValue)
//     console.log('categoryValue', categoryValue)
//   }
}

// mutations
const mutations = {
    setMO (state, listMO) {
        state.listMO = listMO
        console.log('state=', state.listMO)
    }
//   setCategory (state, categoryValue) {
//     state.category = categoryValue
//   }
}

export default {
  state,
  getters,
  actions,
  mutations
}