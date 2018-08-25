<template>
    <div class="mo">
        <div class="container">
            <div class="mo-wrap">
                <div class="mo-h2" >
                    Введите данные сотрудника, кому необходимо получить электронную подпись
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
                            <p>
                                <label for="surname">Фамилия:</label>
                                <input class="in" type="text" id="surname" v-model.trim="surname">
                                <label> {{ surname }} </label>
                                <label v-show="error.surname">{{ error.surname }} </label>
                            </p>
                            <p>
                                <label for="name">Имя:</label>
                                <input class="in" type="text" id="name" v-model.trim="name">
                                <label> {{ name }} </label>
                                <label v-show="error.name">{{ error.name }} </label>
                            </p>
                            <p>
                                <label for="patronymic">Отчество:</label>
                                <input class="in" type="text" id="patronymic" v-model.trim="patronymic">
                                <label> {{ patronymic }} </label>
                                <label v-show="error.patronymic">{{ error.patronymic }} </label>
                            </p>
                            <p>
                                <label> Выберите пол:</label>
                                <input class="radio" type="radio" id="sex1" name="sex">   
                                <label for="sex1">Муж</label>
                                <input class="radio" type="radio" id="sex2" name="sex">   
                                <label for="sex2">Жен</label>
                            </p>
                            <p>
                                <label for="series">Серия:</label>
                                <input class="in" id="series" v-model.lazy="series" maxlength="4"> {{ series }}
                                <label v-show="error.series">{{ error.series }} </label>
                                <label for="number">Номер:</label>
                                <input class="in" type="text" id="number" maxlength="6">
                                <label v-show="error.number">{{ error.number }} </label>
                            </p>
                            <p>
                                <label for="issued_by">Кем выдан:</label>
                                <input class="in issued_by" type="text" id="issued_by" v-model="issued_by" > {{ issued_by }}
                                <label v-show="error.issued_by">{{ error.issued_by }} </label>
                                <label v-html="errorHTML"> </label>
                            </p>
                            <p>
                                <label for="date_of_issue">Дата выдачи</label>
                                <input class="in" type="month" id="date_of_issue"> 
                            </p>
                            <p>
                                <label for="code">Код подразделения</label>
                                <input class="in" type="number" id="code">
                            </p>
                            <p>
                                <label for="date_of_birth">Дата рождения</label>
                                <input class="in" type="date" id="date_of_birth">
                            </p>
                            <p>
                                <label for="place_of_birth">Место рождения</label>
                                <input class="in" type="text" id="place_of_birth">    
                            </p>
                            <p>
                                <label for="position">Должность</label>
                                <input class="in" type="text" id="position">    
                            </p>                                                                     
                        </div>
                    </div>

                    <div class="mo-body-link">
                        <!-- <router-link to="/four" > -->
                            <span @click="onward()">Далее</span>
                        <!-- </router-link> -->
                    </div>
                </div>
                <div class="mo-body-search">
                        <ul class="wrap" v-for="item in role" :key="item.id">
                            <li class="">tgtg
                                <!-- <input type="radio" :id="item.id" :value="item.name" v-model="picked">
                                <label :for="item.id">{{ item.name }} {{picked}}</label>
                                <div class="circle" v-bind:class="{ 'circle-active': item.name == picked ?  true : false }"></div> -->
                            </li>
                        </ul>
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
            },
            error: {
                surname: null,
                name: null,
                patronymic: null,
                sex: null,
                series: null,
                number: null,
                issued_by: null,
                date_of_issue: null,
                code: null,
                date_of_birth: null,
                place_of_birth: null,
                position: null
            },
            errorFalse: {
                surname: false ,
                name: false ,
                patronymic: false,
                sex: false,
                series: false,
                number: false,
                issued_by: false,
                date_of_issue: false,
                code: false,
                date_of_birth: false,
                place_of_birth: false,
                position: false                
            },
            errorHTML: ''
        }
    },
    computed: {
        surname: {
            get () {
                return this.$store.state.individual.individual.surname
            },
            set (value) {
                if ( this.checkForm(value) ) {
                    this.error.surname = false
                    this.$store.dispatch('setSurname', value.toUpperCase())
                }  else {
                    this.error.surname = 'Недопустимые символы, например, лишние пробелы и знаки ".,/"  и т.п.'
                }       
            }
        },
        name: {
            get () {
                return this.$store.state.individual.individual.name
            },
            set (value) {
                if ( this.checkForm(value) ) {
                   this.error.name = false
                   this.$store.dispatch('setName', value.toUpperCase())
                } else {
                    this.error.name = 'Недопустимые символы, например, лишние пробелы и знаки ".,/"  и т.п.' 
                }            
            }
        },
        patronymic: {
            get () {
                return this.$store.state.individual.individual.patronymic 
            },
            set (value) {
                if ( this.checkForm(value) ) {
                   this.error.patronymic = false
                    this.$store.dispatch('setPatronymic', value.toUpperCase())
                } else {
                    this.error.patronymic = 'Недопустимые символы, например, лишние пробелы и знаки ".,/"  и т.п.' 
                }    
            }
        },
        series: {
            get () {
                return this.$store.state.individual.individual.series 
            },
            set (value) {
                if ( this.chekSeries(value) ) {
                    this.error.series = false
                    this.$store.dispatch('setSeries', value.toUpperCase())
                } else {
                    // this.error.series = 'Недопустимые символы, например, буквы или '
                    this.$store.dispatch('setSeries', null)
                }    
            }
        },
        issued_by: {
            get () {
                return this.$store.state.individual.individual.issued_by 
            },
            set (value) {
                if ( this.chekIssuedBy(value) ) {
                    this.error.issued_by = false
                    this.$store.dispatch('setIssuedBy', value.toUpperCase())
                } else {
                    // this.error.series = 'Недопустимые символы, например, буквы или '
                    // this.$store.dispatch('setIssuedBy', null)
                }    
            }            
        }        
    },
    methods: {
        checkForm(value) {
            // сonsole.log('', value.indexOf(" ")) 
            let regex = /^[a-zA-Zа-яА-Я']+[a-zA-Zа-яА-Я']?$/
            console.log('value=',  value.match(regex))
            return value.match(regex) === null ? false : true
        },
        chekSeries(value) {
            if ( value.length != 4 ) {
                this.error.series = 'Серия паспорта состоит из 4 цифр'
                return false
            }
            let regex = /^[0-9]{4}?$/
            if ( value.match(regex) === null ) {
                this.error.series = 'Серия паспорта должны быть из цифр'
                return false
            } else return true        
        },
        chekIssuedBy(value) {
            let arr = value.toUpperCase().split(' ')
            console.log('arr=', arr)
            let arrFilter = arr.filter(function(item) {
                console.log(item );
                if (item == 'Р-ОН' ) {
                    console.log(item, 'Р-ОН');
                }
                return ( (item != 'Р-ОН' ) && (item != 'ОБЛ.') && (item != 'Р.') && (item != 'Р-НЕ')) 
            })
            console.log(arrFilter );
            let newArr = arrFilter.map(function(item, i) {
                console.log( i + ": " + item )
                if (~item.indexOf(".")) {
                    console.log( 'совпадение есть!' );
                    return '<span style="text-decoration: underline; color: red">' + item + '</span>'
                } 
                if (~item.indexOf("-")) {
                    console.log( 'совпадение есть!' );
                    return '<span style="text-decoration: underline; color: green">' + item + '</span>'
                }  else {
                    return '<span>' + item + '</span>'
                    console.log( 'совпадение нет' );
                }
            });
            this.errorHTML = newArr.join(' ')
            console.log('qw=e', this.errorHTML)
            return true
        },
        onward() {

            if ( JSON.stringify(this.errorFalse) === JSON.stringify(this.error) ) {
                this.$router.push('/four')
            } else {
                console.log('this.error=',this.error)
                console.log('this.errorTrue=',this.errorFalse)
                console.log('ошибка исправьте все ошибки')
            }
        }
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
.issued_by {
    width:  650px;
    /* height: 50px; */
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