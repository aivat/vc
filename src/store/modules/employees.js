const state = {
    countEmployees: 0,
    arrayEmployees: null,
    employees: [],
    newEmployee: '',
    id: null,
    surname: null,
    name: null,
    patronymic: null,
    patronymicTr: null,
    sex: null,
    position: null,
    snils: null,
    series: null,
    number: null,
    issued_by: null,
    date_of_issue: null,
    code: null,
    date_of_birth: null,
    place_of_birth: null,
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
    }),
    countCompleted: state => state.employees.reduce((count, employee) => {
        if ( employee.completed ) {
            count++
        }
        return count
    }, 0),
    getEmployeesCompleted: state => state.employees.filter((employee, i) => {
        return  employee.completed
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
        // commit('DECREMENT_COUNT')
    },
    completeEmployee({ commit }, id) {
        commit('COMPLETE_EMPLOYEE', id)
    },
    getEditEmployee({ commit }, id){
        // сохраняям в текущий стейт ранее внесеннго работника, чтобы открыть
        // для редактирования
        commit('GET_EDIT_EMPLOYEE', id)
    },
    setEmployee({ commit }, employee) {
        commit('SET_EMPLOYEE', { val: employee.value, ind: employee.index})
    },
    // setEmployeeSurname({ commit }, surname) {
    //     commit('SET_EMPLOYEE_SURNAME', surname)
    // },
    // setEmployeeName({ commit }, name) {
    //     commit('SET_EMPLOYEE_NAME', name)
    // },
    // setEmployeePatronymic({ commit }, name) {
    //     commit('SET_EMPLOYEE_PATRONYMIC', name)
    // },
    // setEmployeePatronymicTr({ commit }, name) {
    //     commit('SET_EMPLOYEE_PATRONYMICTR', name)
    // },
    initialiseStoreEmployeesFromLocalStorage({ commit }) {
        if (localStorage.getItem('employees')) {
            commit ('INITIALISE_STORE_EMPLOYEES_FROM_LOCAL_STORAGE', JSON.parse(localStorage.getItem('employees')))
        }
    },
    initialiseStoreCountFromLocalStorage({ commit }) {
        if (localStorage.getItem('countEmployees')) {
            commit ('INITIALISE_STORE_COUNT_FROM_LOCAL_STORAGE', localStorage.getItem('countEmployees'))
        }
    },
    resetComplete({ commit }) {
        commit('RESET_COMPLETE')
    }
}

const mutations = {

    GET_SEARCH_EMPLOYEE(state, id) {
        state.employees[id].surname = '<b>' + surnameHTML + '<b>'
    },
    GET_EDIT_EMPLOYEE(state, idEm) {
        // let employees = state.employees
        // employees.forEach((employee) => {
        //     if ( employee.id == idEm ) {
        //         state.surname = employee.surname
        //         state.name = employee.name
        //     }
        // })
        let employees = state.employees
        let idEdit = employees.findIndex((employee) => {
            return employee.id == idEm
        })
        state.id = state.employees[idEdit].id
        state.surname = state.employees[idEdit].surname
        state.name = state.employees[idEdit].name
        state.patronymic = state.employees[idEdit].patronymic
        state.patronymicTr = state.employees[idEdit].patronymicTr
        state.sex = state.employees[idEdit].sex
        state.position = state.employees[idEdit].position
        state.snils = state.employees[idEdit].snils
        state.series = state.employees[idEdit].series
        state.number = state.employees[idEdit].number
        state.issued_by = state.employees[idEdit].issued_by
        state.date_of_issue = state.employees[idEdit].date_of_issue
        state.code = state.employees[idEdit].code
        state.date_of_birth = state.employees[idEdit].date_of_birth
        state.place_of_birth = state.employees[idEdit].place_of_birth
        state.surname = state.employees[idEdit].surnameHTML
        state.name = state.employees[idEdit].nameHTML
        state.completed = state.employees[idEdit].completed
    },
    GET_EMPLOYEE(state, employee) {
        state.newEmployee =  employee
    },
    ADD_EMPLOYEE(state) {
        state.employees.push({
            id: state.countEmployees,
            surname: state.surname,
            name: state.name,
            patronymic: state.patronymic,
            patronymicTr: state.patronymicTr,
            sex: state.sex,
            position: state.position,
            snils: state.snils,
            series: state.series,
            number: state.number,
            issued_by: state.issued_by,
            date_of_issue: state.date_of_issue,
            code: state.code,
            date_of_birth: state.date_of_birth,
            place_of_birth: state.place_of_birth,
            surnameHTML: state.surname,
            nameHTML: state.name,
            completed: state.completed
        })
        localStorage.setItem('employees', JSON.stringify(state.employees))
        state.id = null
        state.surname = null
        state.name = null
        state.patronymic = null
        state.patronymicTr = null
        state.sex = null
        state.position = null
        state.snils = null
        state.series = null
        state.number = null
        state.issued_by = null
        state.date_of_issue = null
        state.code = null
        state.date_of_birth = null
        state.place_of_birth = null
        state.surname = null
        state.name = null
        state.completed = false
    },
    EDIT_EMPLOYEE(state, idEm) {
        let employees = state.employees
        let idEdit = employees.findIndex((employee) => {
            return employee.id == idEm
        })
        state.employees[idEdit].id = state.id
        state.employees[idEdit].surname = state.surname
        state.employees[idEdit].name = state.name
        state.employees[idEdit].patronymic = state.patronymic
        state.employees[idEdit].patronymicTr = state.patronymicTr
        state.employees[idEdit].sex = state.sex
        state.employees[idEdit].position = state.position
        state.employees[idEdit].snils = state.snils
        state.employees[idEdit].series = state.series
        state.employees[idEdit].number = state.number
        state.employees[idEdit].issued_by = state.issued_by
        state.employees[idEdit].date_of_issue = state.date_of_issue
        state.employees[idEdit].code = state.code
        state.employees[idEdit].date_of_birth = state.date_of_birth
        state.employees[idEdit].place_of_birth = state.place_of_birth
        state.employees[idEdit].surnameHTML = state.surname
        state.employees[idEdit].nameHTML = state.name
        state.employees[idEdit].completed = state.completed
        // state.employees[id].surnameHTML = state.surname,
        // state.employees[id].nameHTML = state.name,
        localStorage.setItem('employees', JSON.stringify(state.employees))
        state.surname = null
        state.name = null
        state.patronymic = null
        state.patronymicTr = null
        state.sex = null
        state.position = null
        state.snils = null
        state.series = null
        state.number = null
        state.issued_by = null
        state.date_of_issue = null
        state.code = null
        state.date_of_birth = null
        state.place_of_birth = null
        state.surname = null
        state.name = null
        state.completed = false
    },
    REMOVE_EMPLOYEE(state, idEm) {
        let employees = state.employees
        let idRemove = employees.findIndex((employee) => {
            return employee.id == idEm
        })
        employees.splice(idRemove, 1)
        localStorage.setItem('employees', JSON.stringify(state.employees))
    },
    COMPLETE_EMPLOYEE(state, idEm) {
        let employees = state.employees
        let idComplete = employees.findIndex((employee) => {
            return employee.id == idEm
        })
        state.employees[idComplete].completed = !state.employees[idComplete].completed
        localStorage.setItem('employees', JSON.stringify(state.employees))
    },
    SET_EMPLOYEE(state, employee) {
        state[employee.ind] = employee.val
    },
    // SET_EMPLOYEE_SURNAME(state, surname) {
    //     state.surname = surname
    // },
    // SET_EMPLOYEE_NAME(state, name) {
    //     state.name = name
    // },
    // SET_EMPLOYEE_PATRONYMIC(state, name) {
    //     state.Patronymic = name
    // },
    // SET_EMPLOYEE_PATRONYMICTR(state, name) {
    //     state.PatronymicTr = name
    // },
    INCREMENT_COUNT(state) {
        state.countEmployees++
        localStorage.setItem('countEmployees', state.countEmployees)
    },
    DECREMENT_COUNT(state) {
        state.countEmployees--
    },
    INITIALISE_STORE_EMPLOYEES_FROM_LOCAL_STORAGE(state, employees) {
        state.employees = employees
    },
    INITIALISE_STORE_COUNT_FROM_LOCAL_STORAGE(state, count) {
        state.countEmployees = +count
    },
    RESET_COMPLETE() {
        state.employees.forEach((employee) => {
            if ( employee.completed ) {
                employee.completed = false
            }
        })
        localStorage.setItem('employees', JSON.stringify(state.employees))
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