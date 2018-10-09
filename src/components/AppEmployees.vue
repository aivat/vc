<template>
    <div>
        <header>
            Работники
        </header>
        <div class="search">
            <input v-model="search" placeholder="Начните вводить имя работника">
            <router-link :to="{ name: 'new' }">Добавить работника</router-link>
        </div>
        <div class="main">
            <ul>
                <li v-for="(employee, index) in employeesDouble" :key="index">
                    <input type="radio" :id="index" :value="index" v-model="pickedEmployee" name="dzen">
                    <label :for="index" v-html="employee.surname + ' ' + employee.name"></label>
                    <p>{{pickedEmployee}}</p>
                    <button @click="complete(index)">{{ employee.completed == true ? 'Убрать' : 'Выбрать' }}</button>
                    <router-link :to="{ name: 'edit', params: { id: index }}">Изменить</router-link>
                    <button @click="removeEmployee(index)">Удалить</button>
                    <div class="no-active" v-bind:class="{ 'active': index == pickedEmployee ?  true : false }">
                        <button>Скачать заявление</button>
                        <button>Скачать дов-ть от орг-и</button>
                        <button>Скачать дов-ть от заявителя</button>
                        <button>Скачать согласие</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters} from 'vuex'
export default {
    data () {
        return {
            search: ''
        }
    },
    // watch: {
    //     search(after, before) {
    //         if ( this.search.length > 1 ) {
    //             this.searchEmployee(this.search)
    //         } 
    //     }
    // },
    computed: {
        employees() {
            return this.$store.state.employees.employees
        },
        employeesDouble() {
            return this.$store.getters.getEmployees(this.search)
        },
        pickedEmployee: {
            get () {
                return this.$store.state.individual.individual.id
            },
            set (value) {
                console.log('value=', value)
                this.$store.dispatch('setIndividual', value)
                this.$store.dispatch('setId', value)
                // this.message = value.shortname
                // this.isList = false
                // this.isPress = true
                // this.searchErr = false
            }            
        }
    },
    created () {
        // this.$store.dispatch('initialiseStoreCountEmployees')
        // this.$store.dispatch('initialiseStoreEmployeesFromlocalStorage')
        // this.$store.dispatch('initialiseStoreEmployeesFromLocalStorage')
    },
    methods: {
        removeEmployee(id) {
            this.$store.dispatch('removeEmployee',  id)
        },
        searchEmployee(req) {
            console.log('req=', req)
        },
        complete(id) {
            this.$store.dispatch('completeEmployee',  id)
        }
    }
}
</script>

<style scoped>
.no-active {
    display: none;
}
.active {
    display: block;
}
</style>