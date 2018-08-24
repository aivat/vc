<template>
    <div class="mo">
        <div class="container">
            <div class="mo-wrap">
                <div class="mo-h2" >
                    Выберите свою должность
                </div>
                <div class="mo-body">
                    <div class="mo-body-link">
                        <router-link to="/two">
                            Назад
                        </router-link>
                    </div>
                    <div class="individual">
                        <div class="individual-h2">Введите данные сотрудника, кому необходимо получить электронную подпись</div>
                        <div class="individual-wrap">
                            <label for="surname">Фамилия:</label>
                            <input class="in" type="text" id="surname">
                            <br>
                            <label for="name">Имя:</label>
                            <input class="in" type="text" id="name">
                            <br>
                            <label for="patronymic">Отчество:</label>
                            <input class="in" type="text" id="patronymic">
                            <br>
                            <label> Выберите пол:</label>
                            <input class="radio" type="radio" id="sex1" name="sex">   
                            <label for="sex1">Муж</label>
                            <input class="radio" type="radio" id="sex2" name="sex">   
                            <label for="sex2">Жен</label>
                            <br>
                            <label for="series">Серия:</label>
                            <input class="in" type="text" id="series">
                            <label for="number">Номер:</label>
                            <input class="in" type="text" id="number"> 
                            <br>
                            <label for="issued_by">Кем выдан:</label>
                            <input class="in" type="text" id="issued_by">
                            <br>
                            <label for="date_of_issue">Дата выдачи</label>
                            <input class="in" type="text" id="date_of_issue"> 
                            <br>
                            <label for="date_of_issue">Код подразделения</label>
                            <input class="in" type="text" id="date_of_issue">
                            <br>
                            <label for="date_of_birth">Дата рождения</label>
                            <input class="in" type="text" id="date_of_birth"> 
                            <br>
                            <label for="place_of_birth">Место рождения</label>
                            <input class="in" type="text" id="place_of_birth">                                                                           
                        </div>
                    </div>
                    <div class="mo-body-search">
                            <ul class="wrap" v-for="item in role" :key="item.id">
                                <li class="">
                                    <input type="radio" :id="item.id" :value="item.name" v-model="picked">
                                    <label :for="item.id">{{ item.name }} {{picked}}</label>
                                    <div class="circle" v-bind:class="{ 'circle-active': item.name == picked ?  true : false }"></div>
                                </li>
                            </ul>
                    </div>
                    <div class="mo-body-link">
                        <router-link to="/three">
                            Далее
                        </router-link>
                    </div>
                </div>           
            </div>
        </div>
    </div>
</template>

<script>
// import { mapState, mapActions } from 'vuex'
export default {
    data () {
        return {
            role: {
                0: {
                    id: "0",
                    name: "Медицинский работник"
                },
                1: {
                    id: "1",
                    name: "Программист"
                }
            }
        }
    },
    computed: {
        picked: {
            get () {
                return this.$store.state.mo.myRole
            },
            set (value) {
                this.$store.dispatch('setRole', value)
            }
        }
    },
    methods: {
    },
    created () {
        // this.$store.dispatch('initialiseStoreRole')
    }
}
</script>

<style scoped>

.mo {
    /* margin-top: 25px; */
    display: flex;
    background-color: rgb(242, 245, 248);
}

.container {
    width: 100%; 
}

.mo-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 25px;
    /* background-color: rgb(242, 245, 248); */
    /* padding: 10px; */
    /* margin-bottom: 15px; */
}
.circle {
    width: 48px;
    height: 48px;
    background-color: aqua;
}

.circle-active {
     background-color: red;
}

.mo-body {
    display: flex;
    justify-content: space-between;

}

.in-search {
    width: 300px;
}
@media (min-width: 1280px) {
    .mo {
        justify-content: center;
    }  

    .container {
        width: 1280px; 
    }  
}
</style>