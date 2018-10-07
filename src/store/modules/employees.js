const state = {
    countEmployees: 0,
    arrayEmployees: null,
    employees: []
}

const actions = {
    initialiseStoreCountEmployees({ commit, state }) {
        if (state.countEmployees === 0) {
            if (localStorage.getItem('countEmployees')) {
                commit ('setCountEmployeesFromLocalStorage', localStorage.getItem('countEmployees'))
                commit ('setId', localStorage.getItem('countEmployees'))
                
            } else {
                commit ('setCountEmployeesFromLocalStorage', 0)
                commit ('setId', 0)
            }
        } else {
            commit ('setId', state.countEmployees)
        }
    },
    addEmployee({ commit, rootState }) {
        // в локалСторадж и стейт добавляем нового работника
        commit ('setEmployeesLocalStorage', rootState.individual.individual)
        commit ('setEmployeeState', rootState.individual.individual)
        // в локалСторадж и стейт устанавливаем количество работников - он равен последнему айди 
        commit ('incrementCountEmployees')
    },
    editEmployee({ commit, rootState }, idEmployee) {
        commit('editEmployeeState', { inInd: rootState.individual.individual, idEmployee: idEmployee })
        // { index: ind.index, val: ind.val }
        commit('editEmployeeLocalStorage',  { inInd: rootState.individual.individual, idEmployee: idEmployee })
        
        console.log(' rootState.individual.individual= ',  rootState.individual.individual)
        console.log(' idEmployee= ',  idEmployee)
    },
    initialiseStoreEmployeesFromlocalStorage({ commit, state }) {
        if ( state.employees.length != state.countEmployees ) {
            commit ('setEmployeesFromlocalStorage', state.countEmployees)
        }
    },
    addEmployeeInArray({ commit, rootState }) {
        commit ('setEmployeeInArray', rootState.individual.individual)
    },   
}

const mutations = {
    setCountEmployeesFromLocalStorage(state, storeCountEmployeesFromLocalStorage) {
        state.countEmployees = storeCountEmployeesFromLocalStorage
        localStorage.setItem('countEmployees', storeCountEmployeesFromLocalStorage)
    },
    setEmployeesLocalStorage(state, inIndividual) {
        // state.arrayEmployees = inIndividual
        localStorage.setItem('Employees'+inIndividual.id, JSON.stringify(inIndividual))
    },
    setEmployeeState(state, newEmployee) {
        state.employees.push(newEmployee) 
    },
    incrementCountEmployees (state) {
        state.countEmployees++
        localStorage.setItem('countEmployees', state.countEmployees)
    },
    setEmployeesFromlocalStorage(state, storeCountEmployeesFromLocalStorage) {
        for (let i = 0; i < storeCountEmployeesFromLocalStorage; i++) {
            state.employees.push(JSON.parse(localStorage.getItem('Employees' + i)))
        }
    },
    editEmployeeState( state, { inInd, idEmployee }) {
        console.log('idEmployee= ', idEmployee)
        console.log('cvfccbd как= ', state.employees[idEmployee])
        state.employees[idEmployee] = inInd
        console.log('cvfccbd как1= ', state.employees[idEmployee])
    },
    editEmployeeLocalStorage( state, { inInd, idEmployee }) {
        console.log('cvfccbd как3= ', inInd)
        console.log('idEmployee как3= ', idEmployee)
        localStorage.setItem('Employees'+idEmployee, JSON.stringify(inInd))
    }
}

export default {
    state,
    actions,
    mutations
  }