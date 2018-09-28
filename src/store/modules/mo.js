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
  searchMO ({ commit, state }, inputMO) {
    shopMO.searchMO(
        inputMO,
        list => {
            console.log('list=', list)
            commit('setListMO', list)
            // commit('editSearchMo',  { listLpu: list, inputMO: inputMO })
        }
    )   
  },
  setMO({ commit },  inputMO) {
    console.log('inputMO=', inputMO)
    commit('setMO', inputMO.shortname)
    inputMO.data_power_of_attorney = ''
    inputMO.email = ''
    commit('setMyMOInfo', inputMO)
    // shopMO.searchMO(
    //     inputMO,
    //     list => {
    //         commit('setMO', inputMO)
    //         let oneMO = list[0]
    //         oneMO.data_power_of_attorney = ''
    //         oneMO.email = ''
    //         commit('setMyMOInfo', oneMO)
    //     }
    // )
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
  },
  initialiseStoreMyMOInfo({ commit }) {
    if(localStorage.getItem('myMOInfo')) {
      commit ('setMyMOInfoFromLocalStorage', JSON.parse(localStorage.getItem('myMOInfo')))
    }
  },
  setMyMOInformation({ commit }, ind) {
      console.log('qwe=', ind)
    commit('setMyMOInformation', { index: ind.index, val: ind.val })
  }
}

// mutations
const mutations = {
    editSearchMo(state, {listLpu, inputMO}) {
        
        listLpu.forEach(function(item, i, arr) {
            let lpu = item.shortname.toLowerCase().indexOf(inputMO.toLowerCase())
            if ( lpu >=0 ) {
                Object.keys(item).forEach(it => {
                    if ( it == 'shortname' ) {
                        // item['shortname'] = item['shortname'][lpu].toLowerCase()
                        
                        let len = item.shortname.length
                        let nameTempStart = item.shortname.substring(0, lpu).toUpperCase()
                        console.log(' nameTempStart=',  nameTempStart)
                        let nameTemp = item.shortname.substring(lpu, lpu+inputMO.length).toLowerCase()
                        console.log(' nameTemp=',  nameTemp)
                        let nameTempEnd = item.shortname.substring(lpu+inputMO.length, len).toUpperCase()
                        console.log(' nameTempEnd=',  nameTempEnd)
                        
                        let shortnameSearch = nameTempStart + nameTemp + nameTempEnd
                        console.log(' mo.length=',  inputMO.length)
                        console.log(' shortnameSearch=',  shortnameSearch)
                        item[it] = ''
                        // state.listMO[index].shortname = val
                        // commit('editSearchMo',  { index: i, val: shortnameSearch })
                        item[it] = nameTempStart + '<em>' + nameTemp + '</em>' + nameTempEnd
                      }                
                })
            }
        })
        state.listMO = listLpu
    },
    setMyMOInformation(state, {index, val}) {
        console.log('bal=', val)
        console.log('state.myMOInfo[index]', state.myMOInfo[index])
        state.myMOInfo[index] = val
        localStorage.setItem('myMOInfo', JSON.stringify(state.myMOInfo))
    },
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
    },
    setMyMOInfoFromLocalStorage (state, storeMyMOInfoFromLocalStorage) {
        state.myMOInfo = storeMyMOInfoFromLocalStorage
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}