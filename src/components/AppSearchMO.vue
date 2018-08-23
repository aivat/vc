<template>
    <div class="mo">
        <div class="container">
            <div class="mo-wrap">
                <div class="mo-h2" >
                    В строке поиске найдите свою медицинскую организацию
                </div>
                <div class="mo-body">
                    <div class="mo-body-search">
                        Мед оргнизации
                        <input class="in-search" v-model="message" placeholder="Поиск медицинской организации">
                        <button @click="search(message)">Поиск</button>
                            <ul class="wrap" v-for="item in listMO" :key="item.id">
                                <li class="">
                                    <!-- {{ item.shortname }} -->
                                    <input type="radio" :id="item.id" :value="item.shortname" v-model="picked" name="dzen">
                                    <label :for="item.id">{{ item.shortname }} {{picked}}</label>
                                    <div class="circle" v-bind:class="{ 'circle-active': item.shortname == picked ?  true : false }"></div>
                                    <!-- <div> {{ picked2}} </div> -->
                                </li>
                            </ul>
                    </div>
                    <div class="mo-body-link">
                        <router-link to="/two">
                            <span :click="qwe()">Далее</span>
                        </router-link>
                    </div>
                </div>           
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    data () {
        return {
            message: '',
            picked: ''
        }
    },
    watch: {
        message(after, before) {
            if ( this.message.length > 1 ) {
                this.search(this.message);
            } 
            
        }
    },
    computed: 
    //     picked2: function () {
    //         return this.$store.state.getters.mo
    //     },
    //     mo() {
    //         // return this.$store.state.mo.listMO;
    //         return this.$store.state.listMO
    //     }
    // },
        mapState({
            listMO: state => state.mo.listMO
        }),

    methods: {
        search(nameMO) {
            console.log('message=', nameMO)
            this.$store.dispatch('searchMO', nameMO)
        },
        qwe() {
            this.$store.dispatch('setMO', this.picked)
        }
    },
    created () {
        this.$store.dispatch('initialiseStoreMO')
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