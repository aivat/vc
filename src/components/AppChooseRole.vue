<template>
    <div class="mo">
        <div class="container">
            <div class="mo-wrap">
                <header>
                    <div class="mo-body-link">
                        <router-link to="/" class="btn-link">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="48px" height="48px" viewBox="1 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                            <path d="M15.41,16.59L10.83,12l4.58-4.59L14,6l-6,6l6,6L15.41,16.59z"/>
                            <path fill="none" d="M0,0h24v24H0V0z"/>
                            </svg>
                        </router-link>
                    </div>
                    <div class="mo-h2" >
                        Выберите роль
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

                    <div class="individual">
                        <AppRules>
                            {{ rules }}
                        </AppRules>
                        <div class="individual-wrap">
                            <ul class="wrap" v-for="item in role" :key="item.id">
                                <li class="">
                                    <input type="radio" :id="item.id" :value="item.name" v-model="picked">
                                    <label :for="item.id">{{ item.name }}</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>      
            </div>
        </div>
    </div>
</template>

<script>
import AppRules from './AppRules'

export default {
    components: {
        AppRules
    },
    data () {
        return {
            role: {
                // 0: {
                //     id: "0",
                //     name: "Медицинский работник"
                // },
                1: {
                    id: "1",
                    name: "Программист"
                }
            },
            errorRole: null,
            rules: 'Выберите роль программиста, если вы технический специалист.'
        }
    },
    computed: {
        picked: {
            get () {
                return this.$store.state.mo.myRole
            },
            set (value) {
                this.chekRole(value)
                this.$store.dispatch('setRole', value)
            }
        }
    },
    methods: {
        chekRole(value) {
            if (value == 'Программист' || value == 'Медицинский работник') {
                this.errorRole = false
            } else {
                this.errorRole = 'Выберите роль'
            }
        },
        onward() {
            if ( this.errorRole === false ) {
                this.$router.push('/three')
            } else {
                this.rules = 'Выберите роль!'
                // console.log('this.error=',this.error)
                // console.log('this.errorTrue=',this.errorFalse)
                // console.log('ошибка исправьте все ошибки')
            }
        }
    },
    created () {
        this.$store.dispatch('initialiseStoreRole')
        this.chekRole(this.picked)
        this.$store.dispatch('setProgressValue', 32)
        
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
    font-weight: 700;
    font-size: 20px;
    text-align: center;
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

}
header {
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

/* ul {
     margin: 0;
    padding: 0;   
} */

li {
    list-style-type: none;
    /* display: flex;
    background-color: white;
    border-radius: 4px;
    margin-top: 10px;
box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
    cursor: pointer;
    transition: all .15s ease-out; */
}
/* li:hover:not(.active) {
    background-color: rgba(66, 133, 244, .9);
    color: white;
} */
.active {
    background-color: rgba(0,0,0,0.1);
    background-color: rgb(138, 200, 88);
    color: white;
}
.radio {
    /* display: none; */
}
/* label {
    width: 100%;
    cursor: pointer;
        padding: 15px;
} */
.individual {
    width: 100%;
}
.individual-h2 {
    position: relative;
    padding: 10px 0;
    margin-top: 10px;
    font-weight: 700;
    font-size: 16px;
    /* text-align: center;  */
    color:rgba(66, 133, 244, .9); 
    color: rgba(217, 48, 37, 1); 
    display: flex;
    align-items: center;
    border-bottom: 1px spolid 
}
.individual-h2:before {
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    -webkit-box-shadow: inset 0 -1px 0 0 rgba(100,121,143,0.122);
    box-shadow: inset 0 -1px 0 0 rgba(100,121,143,0.122);
    content: '';
    display: block;
    position: absolute;
}
.individual-h2:after {
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    -webkit-box-shadow: inset 0 1px 0 0 rgba(100,121,143,0.122);
    box-shadow: inset 0 1px 0 0 rgba(100,121,143,0.122);
    content: '';
    display: block;
    position: absolute;
}
.individual-h2>svg {
    fill: currentColor;
}
.rules-logo {
    color: rgba(189, 3, 3, 1);
    color: black;
}
.individual-wrap>p {
    margin: 0;
    margin: 10px 0;
}



.btn-link {
    display: block;
    width: 48px;
    height: 48px;
    color: rgba(66, 133, 244, 1);
    border-radius: 50%;
    background-color: rgba(66, 133, 244, .15);
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