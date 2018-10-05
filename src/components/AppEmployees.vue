<template>
    <div>
        <header>
            Работники
        </header>
        <div class="search">
            <input placeholder="Начните вводить имя работника">
            <!-- <router-link to="/employees/new">
            Добавить сотрудника
            </router-link> -->
            <router-link :to="{ name: 'new' }">Добавить работника</router-link>
        </div>
        <div class="main">
            <ul>
                <li v-for="employee in employees" :key="employee.id">
                    <span>{{ employee.surname }}</span>
                    <button>Выбрать</button>
                
                    <router-link :to="{ name: 'edit', params: { id: employee.id }}">Изменить</router-link>
                    <button>Удалить</button>
                </li>
            </ul>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>3
export default {
    data () {
        return {
            employees: {
                0: {
                    id: '0',
                    surname: 'БАЙМЕШОВ',
                    name: 'АЙВАТ',
                    patronymic: 'САГИМБАЕВИЧ',
                    patronymicTr: '',
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
                },
                1: {
                    id: '1',
                    surname: 'ИСПАЕВ',
                    name: 'САМАТ',
                    patronymic: 'ИВАНОВИЧ',
                    patronymicTr: '',
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
                },                
                2: {
                    id: '3',
                    surname: 'ИСМАГАНБЕТОВА',
                    name: 'РАУЗА',
                    patronymic: 'ГАБДУЛХАЕВНА',
                    patronymicTr: '',
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
        }
    },
    created () {
        this.$store.dispatch('initialiseStoreCountEmployees')
    }
}
</script>

<style scoped>
</style>