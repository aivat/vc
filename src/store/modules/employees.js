const state = {
    countEmployees: 0,
    arrayEmployees: null
}

const actions = {
    initialiseStoreCountEmployees({ commit }) {
        if (localStorage.getItem('countEmployees')) {
            commit ('setCountEmployeesFromLocalStorage', localStorage.getItem('countEmployees'))
            commit ('setId', localStorage.getItem('countEmployees'))
        } else {
            commit ('setCountEmployeesFromLocalStorage', 0)
            commit ('setId', 0)
        }
    },
    addEmployeeslocalStorage({ commit, rootState }) {
        commit ('setEmployeeslocalStorage', rootState.individual.individual)
    }
}

const mutations = {
    setCountEmployeesFromLocalStorage(state, storeCountEmployeesFromLocalStorage) {
        state.countEmployees = storeCountEmployeesFromLocalStorage
        localStorage.setItem('countEmployees', storeCountEmployeesFromLocalStorage)
    },
    setEmployeeslocalStorage(state, inIndividual) {
        // state.arrayEmployees = inIndividual
        localStorage.setItem('Employees'+inIndividual.id, JSON.stringify(inIndividual))
        state.countEmployees = Number(state.countEmployees) + 1
        console.log('state.countEmployees=',state.countEmployees)
        localStorage.setItem('countEmployees', state.countEmployees)
    }
}

export default {
    state,
    actions,
    mutations
  }