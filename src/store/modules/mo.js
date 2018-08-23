import shopMO from '../../api/mo'

const state = {
    listMO: [],
    mo: 'sd',
    role: 'qwe'
}

const getters = {
    getMO: state => state.listMO,
    mo: state => state.mo,
    role: state => state.role
}

// actions
const actions = {
  searchMO ({ commit }, inputMO) {
    shopMO.searchMO(
        inputMO,
        list => {
            commit('setListMO', list)
        }
    )
  },
  setMO({ commit },  inputMO) {
    commit('setMO', inputMO)

  },
  setRole({ commit },  inputRole) {
    commit('setRole', inputRole)
  },
  initialiseStoreMO({ commit }, state) {
    if(localStorage.getItem('mo')) {
      commit ('setMOFromLocalStorage', localStorage.getItem('mo'))
    }
  }  
}

// mutations
const mutations = {
    setListMO (state, listMO) {
        state.listMO = listMO
        // console.log('state2=', state.listMO[0].id)
    },
    setMO (state, inputMO) {
        state.mo = inputMO
        localStorage.setItem('mo', inputMO)
    },
    setRole (state, inputRole) {
        state.role = inputRole
    },
    setMOFromLocalStorage (state, storeMOFromLocalStorage) {
        state.mo = storeMOFromLocalStorage
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}