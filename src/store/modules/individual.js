// import shopMO from '../../api/mo'

const state = {
    individual: {
        id: null,
        surname: null,
        name: null,
        patronymic: null,
        patronymicTr: null,
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
  setIndividual({ commit, rootState },  idEm ) {
    let employees = rootState.employees.employees
    let idEdit = employees.findIndex((employee) => {
        return employee.id == idEm
    })
    commit('setId', rootState.employees.employees[idEdit].id)
    commit('setSurname', rootState.employees.employees[idEdit].surname)
    commit('setName', rootState.employees.employees[idEdit].name)

    commit('setName', rootState.employees.employees[idEdit].name)
    commit('setPatronymic', rootState.employees.employees[idEdit].patronymic)
    commit('setPatronymicTr', rootState.employees.employees[idEdit].patronymicTr)
    commit('setPosition', rootState.employees.employees[idEdit].position)
    commit('setSnils', rootState.employees.employees[idEdit].snils)

    commit('setSex', rootState.employees.employees[idEdit].sex)
    commit('setSeries', rootState.employees.employees[idEdit].series)
    commit('setNumber', rootState.employees.employees[idEdit].number)
    commit('setIssuedBy', rootState.employees.employees[idEdit].issued_by)
    commit('setDateOfIssue', rootState.employees.employees[idEdit].date_of_issue)
    commit('setCode', rootState.employees.employees[idEdit].code)
    commit('setDateOfBirth', rootState.employees.employees[idEdit].date_of_birth)
    commit('setPlaceOfBirth', rootState.employees.employees[idEdit].place_of_birth)
    commit('setName', rootState.employees.employees[idEdit].name)
  },
  setId({ commit },  input) {
    commit('setId', input)
  },
  setSurname({ commit },  input) {
    commit('setSurname', input)
  },
  setName({ commit },  input) {
    commit('setName', input)
  },
  setPatronymic({ commit },  input) {
    commit('setPatronymic', input)
  },
  setPatronymicTr({ commit },  input) {
    commit('setPatronymicTr', input)
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
  },
  initialiseStoreIndividual({ commit }) {
    if(localStorage.getItem('individual')) {
      commit ('setIndividualFromLocalStorage', JSON.parse(localStorage.getItem('individual')))
    }
  },

  setClearIndividual({ commit }) {
    commit('setClearIndividual')
  }
}

// mutations
const mutations = {
    setIndividualFromLocalStorage(state, ind) {
      state.individual = ind
    },
    setClearIndividual(state) {
        // if(localStorage.getItem('individual')) {
        //     localStorage.removeItem('individual');
        // }
        // state.individual.id = null
        state.individual.surname = null
        state.individual.name = null
        state.individual.patronymic = null
        state.individual.patronymicTr = null
        state.individual.sex = null
        state.individual.series = null
        state.individual.number = null
        state.individual.issued_by = null
        state.individual.date_of_issue = null
        state.individual.code = null
        state.individual.date_of_birth = null
        state.individual.place_of_birth = null
        state.individual.position = null
        state.individual.snils = null
        localStorage.setItem('individual', JSON.stringify(state.individual))
    },
    setId (state, input) {
        state.individual.id = input
        console.log('ind')
        localStorage.setItem('individual', JSON.stringify(state.individual))
    },
    setSurname (state, input) {
        state.individual.surname = input
        console.log('ind')
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
    setPatronymicTr (state, input) {
        state.individual.patronymicTr = input
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
    },

}

export default {
  state,
  getters,
  actions,
  mutations
}