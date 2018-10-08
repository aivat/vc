<template>
    <div class="mo">
        <input type="text" id="surname" v-model.trim="surname" placeholder="КУПЕР">
        <button @click="add">Добавить</button>
        <button @click="edit">Сохранить</button>
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
            },
            edit(){
                this.$store.dispatch('editEmployee', this.$route.params.id)
            }
    },
    created() {
        if ( this.$route.name == 'edit') {
            this.$store.dispatch('getEditEmployee', this.$route.params.id)
                console.log(' пытаемся сохрнаиться ')
        }
    }
}
</script>

<style scoped>

</style>