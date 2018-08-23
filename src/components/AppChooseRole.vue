<template>
    <div class="mo">
        <div class="container">
            <div class="mo-wrap">
                <div class="mo-h2" >
                    Выберите свою должность
                </div>
                <div class="mo-body">
                    <div class="mo-body-link">
                        <router-link to="/">
                            Назад
                        </router-link>
                    </div>
                    <div class="mo-body-search">
                            <ul class="wrap" v-for="item in role" :key="item.id">
                                <li class="">
                                    <input type="radio" :id="item.id" :value="item.name" v-model="picked" :change="chooseRole()">
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
            message: '',
            picked: '',
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
    methods: {
        chooseRole() {
            this.$store.dispatch('setRole', this.picked)
        }
    },
    created () {
        // this.$store.dispatch('getAllNews', 'economics')
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