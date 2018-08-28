// import shopMO from '../../api/mo'

const state = {
    individual: {
        surname: null,
        name: null,
        patronymic: null,
        sex: null,
        series: null,
        number: null,
        issued_by: null,
        date_of_issue: null,
        code: null,
        date_of_birth: null,
        place_of_birth: null,
        position: null,
        snils: null
    }
}

const getters = {
    getSurname: state => state.individual.surname
}

const actions = {
  setSurname({ commit },  input) {
    commit('setSurname', input)
  },
  setName({ commit },  input) {
    commit('setName', input)
  },
  setPatronymic({ commit },  input) {
    commit('setPatronymic', input)
  },
  setSex({ commit },  input) {
    commit('setSex', input)
  },
  setSeries({ commit },  input) {
    commit('setSeries', input)
  },
  setNumber({ commit },  input) {
    commit('setNumber', input)
  },
  setIssuedBy({ commit },  input) {
    commit('setIssuedBy', input)
  },
  setDateOfIssue({ commit },  input) {
    commit('setDateOfIssue', input)
  },
  setCode({ commit },  input) {
    commit('setCode', input)
  },
  setDateOfBirth({ commit },  input) {
    commit('setDateOfBirth', input)
  },
  setPlaceOfBirth({ commit },  input) {
    commit('setPlaceOfBirth', input)
  },
  setPosition({ commit },  input) {
    commit('setPosition', input)
  },
  setSnils({ commit },  input) {
    commit('setSnils', input)
  }
//   initialiseStoreRole({ commit }, state) {
//     if(localStorage.getItem('myRole')) {
//       commit ('setRoleFromLocalStorage', localStorage.getItem('myRole'))
//     }
//   }    
}

// mutations
const mutations = {
    setSurname (state, input) {
        state.individual.surname = input
        localStorage.setItem('individual', JSON.stringify(state.individual))
    },
    setName (state, input) {
        state.individual.name = input
        localStorage.setItem('individual', JSON.stringify(state.individual))
    },
    setPatronymic (state, input) {
        state.individual.patronymic = input
        localStorage.setItem('individual', JSON.stringify(state.individual))
    },
    setSex (state, input) {
        state.individual.sex = input
        localStorage.setItem('individual', JSON.stringify(state.individual))
    },
    setSeries (state, input) {
        state.individual.series = input
        localStorage.setItem('individual', JSON.stringify(state.individual))
    },
    setNumber (state, input) {
        state.individual.number = input
        localStorage.setItem('individual', JSON.stringify(state.individual))
    },
    setIssuedBy (state, input) {
        state.individual.issued_by = input
        localStorage.setItem('individual', JSON.stringify(state.individual))
    },
    setDateOfIssue (state, input) {
        state.individual.date_of_issue = input
        localStorage.setItem('individual', JSON.stringify(state.individual))
    },
    setCode (state, input) {
        state.individual.code = input
        localStorage.setItem('individual', JSON.stringify(state.individual))
    },
    setDateOfBirth (state, input) {
        state.individual.date_of_birth = input
        localStorage.setItem('individual', JSON.stringify(state.individual))
    },
    setPlaceOfBirth (state, input) {
        state.individual.place_of_birth = input
        localStorage.setItem('individual', JSON.stringify(state.individual))
    },
    setPosition (state, input) {
        state.individual.position = input
        localStorage.setItem('individual', JSON.stringify(state.individual))
    },
    setSnils (state, input) {
        state.individual.snils = input
        localStorage.setItem('individual', JSON.stringify(state.individual))
    }

    // setRoleFromLocalStorage (state, storeRoleFromLocalStorage) {
    //     state.myRole = storeRoleFromLocalStorage
    // }
}

export default {
  state,
  getters,
  actions,
  mutations
}