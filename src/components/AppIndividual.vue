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
                                <input class="radio" type="radio" id="sex1" name="sex" v-model="sex" value="муж.">   
                                <label for="sex1">Муж</label>
                                <input class="radio" type="radio" id="sex2" name="sex" v-model="sex" value="жен.">   
                                <label for="sex2">Жен</label>
                            </p>
                            <p>
                                <label for="series">Серия:</label>
                                <input class="in" id="series" v-model.lazy="series" maxlength="4" placeholder="1234"> 
                                <label v-show="!error.series">{{ series }} </label>
                                <label v-show="error.series">{{ error.series }} </label>
                                <label for="number">Номер:</label>
                                <input class="in" type="text" v-model.lazy="number" id="number" maxlength="6" placeholder="123456">
                                <label v-show="!error.number">{{ number }}</label>
                                <label v-show="error.number">{{ error.number }} </label>
                            </p>
                            <p>
                                <label for="issued_by">Кем выдан:</label>
                                <input class="in issued_by" type="text" id="issued_by" v-model="issued_by" > 
                                <!-- <label v-show="!error.issued_by">{{ issued_by }}</label> -->
                                <!-- <label v-show="error.issued_by">{{ error.issued_by }} </label> -->
                                <label v-html="errorHTML_issued_by"> </label>
                            </p>
                            <p>
                                <label for="date_of_issue">Дата выдачи</label>
                                <input class="in" type="text" id="date_of_issue" v-model="date_of_issue" maxlength="10" placeholder="31.12.2018">
                                <label v-show="!error.date_of_issue">{{ date_of_issue }}</label>
                                <label v-show="error.date_of_issue">{{ error.date_of_issue }} </label>
                            </p>
                            <p>
                                <label for="code">Код подразделения</label>
                                <input class="in" type="text" id="code" v-model="code" maxlength="7" placeholder="502-123">
                                <label v-show="!error.code">{{ code }}</label>
                                <label v-show="error.code">{{ error.code }} </label>
                            </p>
                            <p>
                                <label for="date_of_birth">Дата рождения</label>
                                <input class="in" type="text" id="date_of_birth" v-model="date_of_birth" maxlength="10" placeholder="31.12.1991">
                                <label v-show="!error.date_of_birth">{{ date_of_birth }}</label>
                                <label v-show="error.date_of_birth">{{ error.date_of_birth }} </label>
                            </p>
                            <p>
                                <label for="place_of_birth">Место рождения</label>
                                <input class="in" type="text" id="place_of_birth" v-model="place_of_birth">
                                <label v-html="errorHTML_place_of_birth"> </label>    
                            </p>
                            <p>
                                <label for="position">Должность</label>
                                <input class="in" type="text" id="position" v-model="position">  
                                <label> {{ position }} </label> 
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
            errorHTML_issued_by: '',
            errorHTML_place_of_birth: ''
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
        number: {
            get () {
                return this.$store.state.individual.individual.number 
            },
            set (value) {
                if ( this.chekNumber(value) ) {
                    this.error.number = false
                    this.$store.dispatch('setNumber', value.toUpperCase())
                } else {
                    // this.error.series = 'Недопустимые символы, например, буквы или '
                    this.$store.dispatch('setNumber', null)
                }    
            }            
        },
        issued_by: {
            get () {
                return this.$store.state.individual.individual.issued_by 
            },
            set (value) {
                let qwe
                // ошибок нет придет false, ошибки есть придет true
                if ( qwe = this.chekIssuedBy(value) ) {
                    this.error.issued_by = true
                    this.$store.dispatch('setIssuedBy', value.toUpperCase())
                    this.errorHTML_issued_by = qwe
                } else {
                   this.$store.dispatch('setIssuedBy', value.toUpperCase())
                   this.error.issued_by = false
                   this.errorHTML_issued_by = null
                }  
                  
            }            
        },
        place_of_birth: {
            get () {
                return this.$store.state.individual.individual.place_of_birth 
            },
            set (value) {
                let qwe
                // ошибок нет придет false, ошибки есть придет true
                if ( qwe = this.chekIssuedBy(value) ) {
                    this.error.place_of_birth = true
                    this.$store.dispatch('setPlaceOfBirth', value.toUpperCase())
                    this.errorHTML_place_of_birth = qwe
                } else {
                   this.$store.dispatch('setPlaceOfBirth', value.toUpperCase())
                   this.error.place_of_birth = false
                   this.errorHTML_place_of_birth = null
                }  
                  
            }            
        },
        code: {
            get () {
                return this.$store.state.individual.individual.code
            },
            set (value) {
                if ( value.length == 3 ) {
                    value = value + '-'
                    // this.error.number = 'Номер паспорта состоит из 6 цифр'
                    this.$store.dispatch('setCode', value.toUpperCase())
                    // return false
                }
                this.$store.dispatch('setCode', value.toUpperCase())
                // if ( value.length == 7 ) {
                    if ( this.chekCode(value) ) {
                        this.error.code = false
                        // this.$store.dispatch('setCode', value.toUpperCase())
                    } else {
                        // this.$store.dispatch('setCode', null)
                        // this.error.series = 'Недопустимые символы, например, буквы или '
                    //    this.$store.dispatch('setCode', value.toUpperCase())
                    }
                // }
            }             
        },
        date_of_birth: {
            get () {
                return this.$store.state.individual.individual.date_of_birth
            },
            set (value) {
                if ( ( value.length == 2 ) || (value.length == 5)){
                    value = value + '.'
                    // this.error.number = 'Номер паспорта состоит из 6 цифр'
                    this.$store.dispatch('setDateOfBirth', value.toUpperCase())
                    // return false
                }
                this.$store.dispatch('setDateOfBirth', value.toUpperCase())
                // if ( value.length == 10 ) {
                    if ( this.chekDate(value) ) {
                        this.error.date_of_birth = false
                        
                    } else {
                        this.error.date_of_birth = 'Дата в формате "31.12.1991"'
                        // this.$store.dispatch('setCode', null)
                        // this.error.series = 'Недопустимые символы, например, буквы или '
                    //    this.$store.dispatch('setCode', value.toUpperCase())
                    }
                // }
            }             
        },
        date_of_issue: {
            get () {
                return this.$store.state.individual.individual.date_of_issue
            },
            set (value) {
                if ( ( value.length == 2 ) || (value.length == 5)){
                    value = value + '.'
                    // this.error.number = 'Номер паспорта состоит из 6 цифр'
                    this.$store.dispatch('setDateOfIssue', value.toUpperCase())
                    // return false
                }
                this.$store.dispatch('setDateOfIssue', value.toUpperCase())
                // if ( value.length == 10 ) {
                    if ( this.chekDate(value) ) {
                        this.error.date_of_issue = false
                        
                    } else {
                        this.error.date_of_issue = 'Дата в формате "31.12.1991"'
                        // this.$store.dispatch('setCode', null)
                        // this.error.series = 'Недопустимые символы, например, буквы или '
                    //    this.$store.dispatch('setCode', value.toUpperCase())
                    }
                // }
            }             
        },
        sex: {
            get () {
                return this.$store.state.individual.individual.sex
            },
            set (value) {
                this.$store.dispatch('setSex', value)
                this.error.sex = false
            }            
        },
        position: {
            get () {
                return this.$store.state.individual.individual.position
            },
            set (value) {
                this.$store.dispatch('setPosition', value)
                this.error.position = false
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
        chekNumber(value) {
            if ( value.length != 6 ) {
                this.error.number = 'Номер паспорта состоит из 6 цифр'
                return false
            }
            let regex = /^[0-9]{6}?$/
            if ( value.match(regex) === null ) {
                this.error.number = 'Номер паспорта должны быть из цифр'
                return false
            } else return true        
        },
        chekIssuedBy(value) {
            let err = false
            let arr = value.toUpperCase().split(' ')
            console.log('arr=', arr)
            let arrFilter = arr.filter(function(item) {
                console.log(item );
                if (item == 'Р-ОН' ) {
                    console.log(item, 'Р-ОН');
                }
                return ( (item != 'Р-ОН' ) && (item != 'ОБЛ.') && (item != 'Р.') && (item != 'Р-НЕ') && (item != 'Р-НА') && (item != 'С.') && (item != 'ПОС.') && (item != 'Г.') && (item != 'Р.')) 
            })
            console.log(arrFilter );
            let newArr = arrFilter.map( (item, i) =>{
                console.log( i + ": " + item )
                if (~item.indexOf(".")) {
                    console.log( 'совпадение есть!' );
                    err = true
                    this.error.issued_by = 'Ошибка! Надо писать как в паспорте без сокращений имен собственных'
                    return '<span style="text-decoration: underline; color: red">' + item + '</span>'
                } 
                if (~item.indexOf("-")) {
                    console.log( 'совпадение есть!' );
                    return '<span style="text-decoration: underline; color: green">' + item + '</span>'
                }  else {
                    // return '<span>' + item + '</span>'
                    console.log( 'совпадение нет' );
                }
            });
            // this.errorHTML = newArr.join(' ')
            if (err) {
                return newArr.join(' ')
            } else return false
            // console.log('qw=e', this.errorHTML)
            // return true
        },
        chekCode(value) {
            // if ( value.length == 3 ) {
            //     value = value + '-'
            //     // this.error.number = 'Номер паспорта состоит из 6 цифр'
            //     this.$store.dispatch('setCode', value.toUpperCase())
            //     // return false
            // }

            let regex = /^[0-9]{3}-[0-9]{3}?$/
            console.log('qwe=', value.match(regex))
            if ( value.match(regex) === null ) {
                this.error.code = 'Номер паспорта в формате 123-456'
                return false
            } else return true               
        },
        chekDate(value) {
            let regex = /^[0-3][0-9].[0-1][0-9].[0-9]{4}?$/
            // let regex = /^[0-9]{2}.[0-9]{2}.[0-9]{4}?$/
            console.log('qwe=', value.match(regex))
            if ( value.match(regex) === null ) {
                
                return false
            } else return true                
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