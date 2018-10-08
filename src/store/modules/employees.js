const state = {
    countEmployees: 0,
    arrayEmployees: null,
    employees: [],
    newEmployee: '',
    id: null,
    surname: null,
    name: 'fdf'
}

const actions = {
    // initialiseStoreCountEmployees({ commit, state }) {
    //     if (state.countEmployees === 0) {
    //         if (localStorage.getItem('countEmployees')) {
    //             commit ('setCountEmployeesFromLocalStorage', localStorage.getItem('countEmployees'))
    //             commit ('setId', localStorage.getItem('countEmployees'))
                
    //         } else {
    //             commit ('setCountEmployeesFromLocalStorage', 0)
    //             commit ('setId', 0)
    //         }
    //     } else {
    //         commit ('setId', state.countEmployees)
    //     }
    // },
    // addEmployee({ commit, state, rootState }, employee) {
    //     // в локалСторадж и стейт добавляем нового работника
    //     // let clone = {}; // новый пустой объект

    //     // скопируем в него все свойства user
    //     // for (var key in rootState.individual.individual) {
    //     //     clone[key] = rootState.individual.individual[key];
    //     // }
        
    //     employee.id = state.countEmployees
    //     console.log('employee', employee)
    //     commit ('setEmployeesLocalStorage', employee)
    //     commit ('setEmployeeState', employee)
    //     // в локалСторадж и стейт устанавливаем количество работников - он равен последнему айди 
    //     commit ('incrementCountEmployees')
    // },
    // editEmployee({ commit, rootState }, idEmployee) {
    //     let clone = {}; // новый пустой объект

    //     // скопируем в него все свойства user
    //     for (var key in rootState.individual.individual) {
    //         clone[key] = rootState.individual.individual[key];
    //     }
    //     commit('editEmployeeState', { inInd: clone, idEmployee: idEmployee })
    //     // { index: ind.index, val: ind.val }
    //     commit('editEmployeeLocalStorage',  { inInd: clone, idEmployee: idEmployee })
        
    //     console.log(' rootState.individual.individual= ',  clone)
    //     console.log(' idEmployee= ',  idEmployee)
    // },
    // initialiseStoreEmployeesFromlocalStorage({ commit, state }) {
    //     if ( state.employees.length != state.countEmployees ) {
    //         commit ('setEmployeesFromlocalStorage', state.countEmployees)
    //     }
    // },
    // addEmployeeInArray({ commit, rootState }) {
    //     commit ('setEmployeeInArray', rootState.individual.individual)
    // },   
    // initialiseStoreEmployees({ commit }, id) {
    //     console.log('id=', id)
    //     let asd = 'Employees'+id
       
    //     console.log('asd=', asd)
    //   if(localStorage.getItem('Employees'+id)) {
    //     commit ('setIndividualFromLocalStorage', JSON.parse(localStorage.getItem('Employees'+id)))
    //   }
    // }
    getEmployee({ commit }, employee){
        commit('GET_EMPLOYEE', employee)
    },
    addEmployee({ commit }){
        commit('ADD_EMPLOYEE')
    },
    setEmployeeSurname({ commit }, surname){
        commit('SET_EMPLOYEE_SURNAME', surname)
    },    
}

const mutations = {
    GET_EMPLOYEE(state, employee){
        state.newEmployee =  employee
    },
    ADD_EMPLOYEE(state){
        state.employees.push({
            surname: state.surname,
            name: state.name,
            completed: false
        })
    },
    SET_EMPLOYEE_SURNAME(state, surname){
        state.surname = surname
    }
    // setIndividualFromLocalStorage (state, storeIndividualFromLocalStorage) {
    //     state.individual = storeIndividualFromLocalStorage
    // },
    // setCountEmployeesFromLocalStorage(state, storeCountEmployeesFromLocalStorage) {
    //     state.countEmployees = storeCountEmployeesFromLocalStorage
    //     localStorage.setItem('countEmployees', storeCountEmployeesFromLocalStorage)
    // },
    // setEmployeesLocalStorage(state, inIndividual) {
    //     // state.arrayEmployees = inIndividual
    //     localStorage.setItem('Employees'+inIndividual.id, JSON.stringify(inIndividual))
    // },
    // setEmployeeState(state, newEmployee) {
    //     state.employees.push(newEmployee) 
    // },
    // incrementCountEmployees (state) {
    //     state.countEmployees++
    //     localStorage.setItem('countEmployees', state.countEmployees)
    // },
    // setEmployeesFromlocalStorage(state, storeCountEmployeesFromLocalStorage) {
    //     for (let i = 0; i < storeCountEmployeesFromLocalStorage; i++) {
    //         state.employees.push(JSON.parse(localStorage.getItem('Employees' + i)))
    //     }
    // },
    // editEmployeeState( state, { inInd, idEmployee }) {
    //     console.log('idEmployee= ', idEmployee)
    //     console.log('cvfccbd как= ', state.employees[idEmployee])
    //     state.employees[idEmployee] = inInd
    //     console.log('cvfccbd как1= ', state.employees[idEmployee])
    // },
    // editEmployeeLocalStorage( state, { inInd, idEmployee }) {
    //     console.log('cvfccbd как3= ', inInd)
    //     console.log('idEmployee как3= ', idEmployee)
    //     localStorage.setItem('Employees'+idEmployee, JSON.stringify(inInd))
    // }
}

export default {
    state,
    actions,
    mutations
  }