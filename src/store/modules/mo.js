import shopMO from '../../api/mo'

const state = {
    listMO: [],
    myMO: '',
    myMOInfo: '',
    myRole: ''
}

const getters = {
    getMO: state => state.listMO,
    getMyMO: state => state.myMO,
    getMyRole: state => state.role
}

// actions
const actions = {
  searchMO ({ commit }, inputMO) {
    shopMO.searchMO(
        inputMO,
        list => {
            console.log('list=', list)
            commit('setListMO', list)
        }
    )
  },
  setMO({ commit },  inputMO) {
    console.log('inputMO=', inputMO)
    shopMO.searchMO(
        inputMO,
        list => {
            // commit('setListMO', list)
            commit('setMO', inputMO)
            let oneMO = list[0]
            commit('setMyMOInfo', oneMO)
            // console.log('qasd=', qasd)
        }
    )
  },
  setRole({ commit },  inputRole) {
    commit('setRole', inputRole)
  },
  initialiseStoreMO({ commit }) {
    if(localStorage.getItem('myMO')) {
      commit ('setMOFromLocalStorage', localStorage.getItem('myMO'))
    }
  },
  initialiseStoreRole({ commit }) {
    if(localStorage.getItem('myRole')) {
      commit ('setRoleFromLocalStorage', localStorage.getItem('myRole'))
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
        state.myMO = inputMO
        localStorage.setItem('myMO', inputMO)
    },
    setMyMOInfo (state, inputMO) {
        state.myMOInfo = inputMO
        localStorage.setItem('myMOInfo', JSON.stringify(inputMO))
    },
    setRole (state, inputRole) {
        state.myRole = inputRole
        localStorage.setItem('myRole', inputRole)
    },
    setMOFromLocalStorage (state, storeMOFromLocalStorage) {
        state.myMO = storeMOFromLocalStorage
    },
    setRoleFromLocalStorage (state, storeRoleFromLocalStorage) {
        state.myRole = storeRoleFromLocalStorage
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}