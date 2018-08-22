<template>
    <div class="mo">
        <div class="container">
            <div class="mo-wrap">
                <div class="mo-h2" >
                    В поиске найдите свою медицинскую организацию
                </div>
                <div>
                    Мед оргнизации
                    <input v-model="message" placeholder="Введите МО">
                    <button @click="search(message)">Поиск</button>
                        <ul class="wrap" v-for="item in mo" :key="item.id" v-if="mo.length > 0">
                        <li class=""> id:<b>{{ item.id }}</b> {{ item.name }}</li>
                        </ul>
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
            message: ''
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
        mapState({
            mo: state => state.mo.listMO
        }),
    methods: {
        search(nameMO) {
          this.$store.dispatch('searchMO', nameMO)
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
    /* background-color: rgb(242, 245, 248); */
    /* padding: 10px; */
    /* margin-bottom: 15px; */
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