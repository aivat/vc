<template>
    <div class="mo">
        <input type="text" id="surname" v-model.trim="surname" placeholder="КУПЕР">
        <input type="text" id="name" v-model.trim="name" placeholder="ДЕЛЛ">
        <button @click="add" v-if="!isEdit">Добавить</button>
        <button @click="edit" v-if="isEdit">Сохранить</button>
    </div>
</template>

<script>


export default {
    computed: {
        isEdit() {
            return (this.$route.name == 'edit') ? true : false 
        },
        surname: {
            get () {
                return this.$store.state.employees.surname
            },
            set (value) {
                // this.checkForm(value, 'surname')     
                this.$store.dispatch('setEmployeeSurname', value.toUpperCase())
            }
        },
        name: {
            get () {
                return this.$store.state.employees.name
            },
            set (value) {
                // this.checkForm(value, 'surname')     
                this.$store.dispatch('setEmployeeName', value.toUpperCase())
            }
        },        
    },
    methods: {
            add(){
                this.$store.dispatch('addEmployee')
                this.$router.push('/employees')
            },
            edit(){
                this.$store.dispatch('editEmployee', this.$route.params.id)
                this.$router.push('/employees')
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