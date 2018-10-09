const state = {
    countEmployees: 0,
    arrayEmployees: null,
    employees: [],
    newEmployee: '',
    id: null,
    surname: null,
    name: null,
    surnameHTML: null,
    nameHTML: null,
    completed: false  
}
const getters = {
    getEmployees: state => (searchEmployee) => state.employees.filter((employee, i) => {
        let FIO = employee.surname + ' ' + employee.name
        // let FIO = clone.surname + ' ' + clone.name
        let item = FIO.toLowerCase().indexOf(searchEmployee.toLowerCase())
        let clone = {}
        // for (let key in employee) {
        //     clone[key] = employee[key]
        //     if ( key == 'surname') {
        //         // employee.surname = '<b>' + employee.surname + '<b>'
        //         clone[key] = '<b>' + clone[key] + '<b>'
        //         console.log('clone[key]=', clone[key])
        //     }
        // }
        if ( item >= 0 ) {
            // this.$store.dispatch('getSearchEmployee', i)
   
            // console.log('Нашел в позиции item=', clone)
            return employee
            // return
        }
        // employees
    })
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
    getSearchEmployee({ commit }, idEmployee) {
        commit('GET_SEARCH_EMPLOYEE', idEmployee)
    },
    getEmployee({ commit }, employee) {
        commit('GET_EMPLOYEE', employee)
    },
    addEmployee({ commit }) {
        commit('ADD_EMPLOYEE')
        commit('INCREMENT_COUNT')
    },
    editEmployee({ commit }, id) {
        commit('EDIT_EMPLOYEE', id)
    },
    removeEmployee({ commit }, id) {
        commit('REMOVE_EMPLOYEE', id)
        commit('DECREMENT_COUNT')
    },
    completeEmployee({ commit }, id) {
        commit('COMPLETE_EMPLOYEE', id)
    },
    getEditEmployee({ commit }, id){
        // сохраняям в текущий стейт ранее внесеннго работника, чтобы открыть
        // для редактирования
            commit('GET_EDIT_EMPLOYEE', id)
    },
    setEmployeeSurname({ commit }, surname) {
        commit('SET_EMPLOYEE_SURNAME', surname)
    },
    setEmployeeName({ commit }, name) {
        commit('SET_EMPLOYEE_NAME', name)
    },
    initialiseStoreEmployeesFromLocalStorage({ commit }) {
        if (localStorage.getItem('employees')) {
            commit ('INITIALISE_STORE_EMPLOYEES_FROM_LOCAL_STORAGE', JSON.parse(localStorage.getItem('employees')))
        }
    }
}

const mutations = {
    GET_SEARCH_EMPLOYEE(state, id) {
        state.employees[id].surname = '<b>' + surnameHTML + '<b>'
    },
    GET_EDIT_EMPLOYEE(state, id) {
        state.surname =  state.employees[id].surname
        state.name = state.employees[id].name
    },
    GET_EMPLOYEE(state, employee) {
        state.newEmployee =  employee
    },
    ADD_EMPLOYEE(state) {
        state.employees.push({
            id: state.employees.length,
            surname: state.surname,
            name: state.name,
            surnameHTML: state.surname,
            nameHTML: state.name,
            completed: state.completed
        })
        localStorage.setItem('employees', JSON.stringify(state.employees))
        state.surname = null
        state.name = null
    },
    EDIT_EMPLOYEE(state, id) {
        state.employees[id].surname = state.surname
        state.employees[id].name = state.name,
        state.employees[id].surnameHTML = state.surname,
        state.employees[id].nameHTML = state.name,
        localStorage.setItem('employees', JSON.stringify(state.employees))
        state.surname = null
        state.name = null
    },
    REMOVE_EMPLOYEE(state, id) {
        let employees = state.employees
        employees.splice(id, 1)
        localStorage.setItem('employees', JSON.stringify(state.employees))
    },
    COMPLETE_EMPLOYEE(state, id) {
        state.employees[id].completed = !state.employees[id].completed
        localStorage.setItem('employees', JSON.stringify(state.employees))
    },
    SET_EMPLOYEE_SURNAME(state, surname) {
        state.surname = surname
    },
    SET_EMPLOYEE_NAME(state, name) {
        state.name = name
    },
    INCREMENT_COUNT(state) {
        state.countEmployees++
    },
    DECREMENT_COUNT(state) {
        state.countEmployees--
    },
    INITIALISE_STORE_EMPLOYEES_FROM_LOCAL_STORAGE(state, employees) {
        state.employees = employees
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
    getters,
    actions,
    mutations
  }