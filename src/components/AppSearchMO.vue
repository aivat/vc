<template>
    <div class="mo">
        <div class="container">
            <div class="mo-wrap">
                <div class="mo-h2" >
                    В строке поиска найдите и выберите свою медицинскую организацию
                </div>
                <div class="mo-body">
                    <div class="mo-body-search">
                        <input class="in-search" v-model="message" placeholder="Поиск медицинской организации">
                        <button @click="search(message)">Поиск</button>
                            <ul class="wrap" v-for="item in listMO" :key="item.id">
                                <li class="" v-bind:class="{ 'active': item.shortname == picked2 ?  true : false }">
                                    <input class="radio" type="radio" :id="item.id" :value="item.shortname" v-model="picked2" name="dzen">
                                    <label :for="item.id">{{ item.shortname }}</label>
                                    <!-- <div class="circle" v-bind:class="{ 'circle-active': item.shortname == picked2 ?  true : false }"></div> -->
                                </li>
                            </ul>
                    </div>
                    <div class="mo-body-link">
                        <router-link to="/two" class="btn-link">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="48px" height="48px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                            <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"/>
                            <path fill="none" d="M0,0h24v24H0V0z"/>
                            </svg>
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
    computed: {
        picked2: {
            get () {
                return this.$store.state.mo.myMO
            },
            set (value) {
                console.log('value=', value)
                this.$store.dispatch('setMO', value)
            }
        },
        listMO() {
            return this.$store.state.mo.listMO
        } 
    },
        // mapState({
        //     listMO: state => state.mo.listMO,
        //     asd() {
        //         return this.picked
        //     }
        // }),

    methods: {
        search(nameMO) {
            console.log('message=', nameMO)
            this.$store.dispatch('searchMO', nameMO)
        },
        qwe() {
            // this.$store.dispatch('setMO', this.picked)
            // this.$store.dispatch('setMO', this.asd)
        }
    },
    created () {
        // this.$store.dispatch('initialiseStoreMO')
        this.$store.dispatch('setProgressValue', 16)
    }
}
</script>

<style scoped>

.mo {
    /* margin-top: 25px; */
    display: flex;
    /* background-color: rgb(242, 245, 248);
    background-color:#edeef0; */
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

.mo-h2 {
    /* text-align: center; */
    padding: 10px 0;
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
    width: 400px;
    outline: 0;
    border-radius: 2px;
    /* border: 1px solid rgb(34, 34, 34); */
    border: 0;
    font-size: 16px;
    font-weight: 500;
    height: 32px;
    padding: 5px 15px;
    color: rgb(34, 34, 34);
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
    margin-right: 15px;
    /* line-height: 40px; */
}

button {
    font-size: 16px;
    padding: 10px 15px;
    border-radius: 2px;
    border: 0;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
    outline: 0;
    color: rgb(34, 34, 34);
    cursor: pointer;
}

button:active {
    background-color: rgba(0,0,0,0.08)
}
.button-link {
    background-color: rgb(138, 200, 88);
    text-decoration: none;
    padding: 10px 15px;
    color: white;
    border-radius: 2px;
    display: block;
}

.button-link:hover {
    background-color: rgba(138, 200, 88, .85);
}

ul {
     margin: 0;
    padding: 0;   
}

li {
    list-style-type: none;
    display: flex;
    background-color: white;
    border-radius: 4px;
    margin-top: 10px;
box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
    cursor: pointer;
    transition: all .15s ease-out;
}
li:hover:not(.active) {
    background-color: rgba(66, 133, 244, .9);
    color: white;
}
.active {
    background-color: rgba(0,0,0,0.1);
    background-color: rgb(138, 200, 88);
    color: white;
}
.radio {
    display: none;
}
label {
    width: 100%;
    cursor: pointer;
        padding: 15px;
}
.btn-link {
    display: block;
    width: 48px;
    height: 48px;
    color: rgba(66, 133, 244, 1);
    border-radius: 50%;
    background-color: rgba(66, 133, 244, .2);
    transition: all .15s ease-out;
    cursor: pointer;
}
.btn-link:hover {
    color: white;
    background-color: rgba(66, 133, 244, 1);
}
.btn-link>svg {
    fill: currentColor;
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