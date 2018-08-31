const state = {
        // surname: null,
        // name: null,
        // patronymic: null,
        // series: null,
        // number: null,
        // issued_by: null,
        // date_of_issue: null,
        // position: null,
        authrepresent: {
            surname: null,
            name: null,
            patronymic: null,
            series: null,
            number: null,
            issued_by: null,
            date_of_issue: null,
            position: null            
        }
}

const getters = {
    getAuthRepresentSurname: state => state.surname
}

const actions = {
  setAuthRepresentSurname({ commit },  input) {
    commit('setAuthRepresentSurname', input)
  },
  setAuthRepresentName({ commit },  input) {
    commit('setAuthRepresentName', input)
  },
  setAuthRepresentPatronymic({ commit },  input) {
    commit('setAuthRepresentPatronymic', input)
  },
  setAuthRepresentSeries({ commit },  input) {
    commit('setAuthRepresentSeries', input)
  },
  setAuthRepresentNumber({ commit },  input) {
    commit('setAuthRepresentNumber', input)
  },
  setAuthRepresentIssuedBy({ commit },  input) {
    commit('setAuthRepresentIssuedBy', input)
  },
  setAuthRepresentDateOfIssue({ commit },  input) {
    commit('setAuthRepresentDateOfIssue', input)
  },
  setAuthRepresentPosition({ commit },  input) {
    commit('setAuthRepresentPosition', input)
  },
  initialiseStoreAuthRepresent({ commit }) {
    if(localStorage.getItem('authrepresent')) {
      commit ('setAuthRepresentFromLocalStorage', JSON.parse(localStorage.getItem('authrepresent')))
    }
  }    
}

// mutations
const mutations = {
    setAuthRepresentSurname (state, input) {
        state.authrepresent.surname = input
        localStorage.setItem('authrepresent', JSON.stringify(state.authrepresent))
    },
    setAuthRepresentName (state, input) {
        state.authrepresent.name = input
        localStorage.setItem('authrepresent', JSON.stringify(state.authrepresent))
    },
    setAuthRepresentPatronymic (state, input) {
        state.authrepresent.patronymic = input
        localStorage.setItem('authrepresent', JSON.stringify(state.authrepresent))
    },
    setAuthRepresentSeries (state, input) {
        state.authrepresent.series = input
        localStorage.setItem('authrepresent', JSON.stringify(state.authrepresent))
    },
    setAuthRepresentNumber (state, input) {
        state.authrepresent.number = input
        localStorage.setItem('authrepresent', JSON.stringify(state.authrepresent))
    },
    setAuthRepresentIssuedBy (state, input) {
        state.authrepresent.issued_by = input
        localStorage.setItem('authrepresent', JSON.stringify(state.authrepresent))
    },
    setAuthRepresentDateOfIssue (state, input) {
        state.authrepresent.date_of_issue = input
        localStorage.setItem('authrepresent', JSON.stringify(state.authrepresent))
    },
    setAuthRepresentPosition (state, input) {
        state.authrepresent.position = input
        localStorage.setItem('authrepresent', JSON.stringify(state.authrepresent))
    },
    setAuthRepresentFromLocalStorage (state, storeAuthRepresentFromLocalStorage) {
        state.authrepresent = storeAuthRepresentFromLocalStorage
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}