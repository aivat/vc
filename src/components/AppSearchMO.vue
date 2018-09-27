<template>
    <div class="mo">
        <div class="container">
            <div class="mo-wrap">
                <header>
                    <div class="mo-body-link">
                        <!-- <router-link to="/" class="btn-link">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="48px" height="48px" viewBox="1 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                            <path d="M15.41,16.59L10.83,12l4.58-4.59L14,6l-6,6l6,6L15.41,16.59z"/>
                            <path fill="none" d="M0,0h24v24H0V0z"/>
                            </svg>
                        </router-link> -->
                    </div>
                    <div class="mo-h2" >
                         В строке поиска найдите и выберите свою медицинскую организацию
                    </div>
                    <div class="mo-body-link">
                        <span @click="onward()" class="btn-link">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="48px" height="48px" viewBox="-1 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                            <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"/>
                            <path fill="none" d="M0,0h24v24H0V0z"/>
                            </svg>                                
                        </span>
                    </div>
                </header>
                <div class="mo-body">
                    <div class="mo-body-search">
                        <input class="in-search" v-model="message" placeholder="Введите название медицинской организации">
                        <button @click="search(message)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                                <path d="M0 0h24v24H0z" fill="none"/>
                            </svg>
                            Поиск
                        </button>

                    </div>
                    <ul class="wrap" >
                        <li class="" v-bind:class="{ 'active': item.shortname == picked2 ?  true : false }" v-for="item in listMO" :key="item.id">
                            <input class="radio" type="radio" :id="item.id" :value="item" v-model="picked2" name="dzen">
                            <label :for="item.id" v-html="item.shortname"></label>
                            <!-- <div class="circle" v-bind:class="{ 'circle-active': item.shortname == picked2 ?  true : false }"></div> -->
                        </li>
                    </ul>
                    <div class="mo-body-link">
                        <!-- <router-link to="/two" class="btn-link"> -->
                        <!-- <span @click="onward()" class="btn-link">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="48px" height="48px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                            <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"/>
                            <path fill="none" d="M0,0h24v24H0V0z"/>
                            </svg>
                        </span> -->
                        <!-- </router-link> -->
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
        },
        onward() {
            if ( this.picked2 != '' ) {
                this.$router.push('/two')
            } else {
                // this.rules = 'Выберите роль!'
                // console.log('this.error=',this.error)
                // console.log('this.errorTrue=',this.errorFalse)
                console.log('выберете МО')
            }
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
    padding-top: 15px;
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
    /* justify-content: space-between; */
    /* align-items: center; */
    /* justify-content: center;
    align-items: center; */
    flex-direction: column;
    width: 710px;
    align-self: center;
    margin-top: 20px;
}

.in-search {
    width: 560px;
    outline: 0;
    border-radius: 22px;
    /* border: 1px solid rgb(34, 34, 34); */
    border: 0;
    font-size: 16px;
    font-weight: 500;
    height: 44px;
    padding-left: 20px;
    /* padding: 5px 15px; */
    color: rgb(34, 34, 34);
    background-color: rgb(241, 243, 244);
    /* box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08); */
    margin-right: 15px;
    border: 1px solid rgba(0,0,0,.0);
    /* line-height: 40px; */
}
.in-search:hover {
    background-color: rgb(232,234,237);
}
.in-search:focus {
    border: 1px solid rgba(66, 133, 244, .9);
}
button {
    font-size: 16px;
    padding: 10px 15px;
    border-radius: 2px;
    border: 0;
    display: flex;
    align-items: center;
    /* box-shadow: 0 4px 4px 0 rgba(0,0,0,.14);  */
    outline: 0;
    color: rgb(34, 34, 34);
    color: white;
    cursor: pointer;
    border-radius: 24px;
    width: 110px;
    background-color: rgba(66, 133, 244, 1);
    /* justify-content: space-between; */
}
button svg {
    margin-right: 5px;
    fill: currentColor;
}
button:hover {
    background-color: rgba(66, 133, 244, .9);
}
button:active {
    background-color: rgba(0,0,0,0.08);
    background-color: rgba(66, 133, 244, .8);
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
.mo-body-search {
    display: flex;
}
ul {
    margin: 0;
    padding: 0;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.16), 0 0 0 0px rgba(0,0,0,0.08);
}
li:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
li {
    list-style-type: none;
    display: flex;
    /* background-color: white; */
    /* border-radius: 4px; */
    /* margin-top: 10px; */
/* box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
box-shadow: 0 1px 4px 0 rgba(0,0,0,.14); */
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
header {
    display: flex;
    justify-content: space-between;   
}
.mo-h2 {
    /* text-align: center; */
    padding: 10px 0;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
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