<template>
    <div class="mo">
        <input type="text" id="surname" v-model.trim="surname" placeholder="КУПЕР">
        <button @click="add">Добавить</button>
    </div>
</template>

<script>


export default {
    computed: {
        surname: {
            get () {
                return this.$store.state.employees.surname
            },
            set (value) {
                // this.checkForm(value, 'surname')     
                this.$store.dispatch('setEmployeeSurname', value.toUpperCase())
            }
        }
    },
    methods: {
            add(){
                this.$store.dispatch('addEmployee')
            }
    }
}
</script>

<style scoped>

</style>