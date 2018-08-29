<template>
    <div class="mo">
        <div class="container">
            <div class="mo-wrap">
                <header>
                    <div class="mo-body-link">
                        <router-link to="/two" class="button-link">
                            Назад
                        </router-link>
                    </div>
                    <div class="mo-h2" >
                        Введите данные сотрудника, которому необходимо получить электронную подпись
                    </div>
                    <div class="mo-body-link">
                        <!-- <router-link to="/four" > -->
                            <span @click="onward()" class="button-link">Далее</span>
                        <!-- </router-link> -->
                    </div>
                </header>

                <div class="mo-body">

                    <div class="individual">
                        <div class="individual-h2">
                            <div class="rules-logo">Подсказка:&nbsp;</div>
                            <div class="rules">{{ rules }}</div>
                        </div>
                        <div class="individual-wrap">
                            <p>
                                <label for="surname" class="label-name" >Фамилия:</label>
                                <input class="in" type="text" id="surname" v-model.trim="surname" placeholder="КУПЕР">
                                <label class="label-show"> {{ surname }} </label>
                                <label class="label-error" v-show="error.surname">{{ error.surname }} </label>
                            </p>
                            <p>
                                <label for="name" class="label-name" >Имя:</label>
                                <input class="in" type="text" id="name" v-model.trim="name" placeholder="ДЕЙЛ">
                                <label class="label-show"> {{ name }} </label>
                                <label class="label-error" v-show="error.name">{{ error.name }} </label>
                            </p>
                            <p>
                                <label for="patronymic" class="label-name" >Отчество:</label>
                                <input class="in" type="text" id="patronymic" v-model.trim="patronymic" placeholder="ФЁДОРОВИЧ">
                                <label class="label-show"> {{ patronymic }} </label>
                                <label class="label-error" v-show="error.patronymic">{{ error.patronymic }} </label>
                            </p>
                            <p>
                                <label class="label-name"> Выберите пол:</label>
                                <input class="radio" type="radio" id="sex1" name="sex" v-model="sex" value="муж.">   
                                <label for="sex1">Муж</label>
                                <input class="radio" type="radio" id="sex2" name="sex" v-model="sex" value="жен.">   
                                <label for="sex2">Жен</label>
                            </p>
                            <p>
                                <label for="position" class="label-name">Должность:</label>
                                <input class="in position" type="text" id="position" v-model="position">  
                                <label class="label-show"> {{ position }} </label> 
                            </p>
                            <p>
                                <label for="snils" class="label-name">СНИЛС:</label>
                                <input class="in snils" type="text" id="snils" v-model="snils" maxlength="14" placeholder="111-222-333 44">  
                                <label class="label-show"> {{ snils }} </label>
                                <!-- <label v-show="error.snils.is"> {{ error.snils.is }} </label> -->
                                <label v-show="error.snils.is" class="label-error"> {{ error.snils.text }} </label>
                                <label v-show="!error.snils.is"> Все верно  </label>  
                            </p>     
                            <fieldset>
                                <legend>Паспорт</legend>
                                <p>
                                    <label for="series" class="label-name">Серия:</label>
                                    <input class="in series" id="series" v-model.lazy="series" maxlength="4" placeholder="1234"> 
                                    <label v-show="!error.series" class="label-show">{{ series }} </label>
                                    <label v-show="error.series" class="label-error">{{ error.series }} </label>
                                </p>
                                <p>
                                    <label for="number" class="label-name">Номер:</label>
                                    <input class="in number" type="text" v-model.lazy="number" id="number" maxlength="6" placeholder="123456">
                                    <label class="label-show" v-show="!error.number">{{ number }}</label>
                                    <label v-show="error.number" class="label-error">{{ error.number }} </label>
                                </p>
                                <p>
                                    <label for="issued_by" class="label-name">Кем выдан:</label>
                                    <input class="in issued_by" type="text" id="issued_by" v-model="issued_by" > 
                                    <!-- <label v-show="!error.issued_by">{{ issued_by }}</label> -->
                                    <!-- <label v-show="error.issued_by">{{ error.issued_by }} </label> -->
                                    <label v-html="errorHTML.issued_by"> </label>
                                </p>
                                <p>
                                    <label for="issued_by2" class="label-name"></label>
                                    <label class="label-show">{{ issued_by }}</label>
                                </p>
                                <p>
                                    <label for="date_of_issue" class="label-name">Дата выдачи:</label>
                                    <input class="in" type="text" id="date_of_issue" v-model="date_of_issue" maxlength="10" placeholder="31.12.2018">
                                    <label class="label-show" v-show="!error.date_of_issue">{{ date_of_issue }}</label>
                                    <label class="label-error" v-show="error.date_of_issue">{{ error.date_of_issue }} </label>
                                </p>
                                <p>
                                    <label for="code" class="label-name">Код подразделения:</label>
                                    <input class="in" type="text" id="code" v-model="code" maxlength="7" placeholder="502-123">
                                    <label class="label-show" v-show="!error.code">{{ code }}</label>
                                    <label class="label-error" v-show="error.code">{{ error.code }} </label>
                                </p>
                                <p>
                                    <label for="date_of_birth" class="label-name">Дата рождения:</label>
                                    <input class="in" type="text" id="date_of_birth" v-model="date_of_birth" maxlength="10" placeholder="31.12.1991">
                                    <label class="label-show" v-show="!error.date_of_birth">{{ date_of_birth }}</label>
                                    <label class="label-error" v-show="error.date_of_birth">{{ error.date_of_birth }} </label>
                                </p>
                                <p>
                                    <label for="place_of_birth" class="label-name">Место рождения:</label>
                                    <input class="in issued_by" type="text" id="place_of_birth" v-model="place_of_birth">
                                    <label v-html="errorHTML.place_of_birth"> </label>    
                                </p>
                                <p>
                                    <label for="place_of_birth" class="label-name"></label>
                                    <label class="label-show">{{ place_of_birth }}</label>    
                                </p>
                            </fieldset>                                                                   
                        </div>
                    </div>


                </div>
                <!-- <div class="mo-body-search">
                        <ul class="wrap" v-for="item in role" :key="item.id">
                            <li class="">tgtg
                                <input type="radio" :id="item.id" :value="item.name" v-model="picked">
                                <label :for="item.id">{{ item.name }} {{picked}}</label>
                                <div class="circle" v-bind:class="{ 'circle-active': item.name == picked ?  true : false }"></div>
                            </li>
                        </ul>
                </div>           -->
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
                position: null,
                snils: {
                    is: null,
                    text: null
                }
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
                position: false,
                snils: {
                    is: false,
                    text: null
                }              
            },
            errorHTML: {
                issued_by: '',
                place_of_birth: ''
            },
            rules: ' все поля форм заполняются строго как в документах. '
        }
    },
    computed: {
        surname: {
            get () {
                return this.$store.state.individual.individual.surname
            },
            set (value) {
                this.rules = 'если в паспорте в фамилии присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                this.checkForm(value, 'surname')
                // if ( this.checkFormTest(value, 'surname') ) {
                //     this.error.surname = false
                //     // this.$store.dispatch('setSurname', value.toUpperCase())
                // }  else {
                //     this.error.surname = 'Недопустимые символы, например, лишние пробелы и знаки ".,/"  и т.п.'
                // }       
                this.$store.dispatch('setSurname', value.toUpperCase())
            }
        },
        name: {
            get () {
                return this.$store.state.individual.individual.name
            },
            set (value) {
                this.rules = 'если в паспорте в имени присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                this.checkForm(value, 'name')        
            }
        },
        patronymic: {
            get () {
                return this.$store.state.individual.individual.patronymic 
            },
            set (value) {
                this.rules = 'если в паспорте в отчестве присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                this.checkForm(value, 'patronymic')  
            }
        },
        series: {
            get () {
                return this.$store.state.individual.individual.series 
            },
            set (value) {
                this.rules = 'серию и номер паспорта необходимо проверить на сайте МВД по списку недействительных российских паспортов'
                this.chekSeries(value)
                this.$store.dispatch('setSeries', value.toUpperCase())
            }
        },
        number: {
            get () {
                return this.$store.state.individual.individual.number 
            },
            set (value) {
                this.rules = 'серию и номер паспорта необходимо проверить на сайте МВД по списку недействительных российских паспортов'
                this.chekNumber(value)
                this.$store.dispatch('setNumber', value.toUpperCase())
            }            
        },
        issued_by: {
            get () {
                return this.$store.state.individual.individual.issued_by 
            },
            set (value) {
                this.rules = 'пишите кем выдан паспорт без сокращений имен собственных. Обращаем внимание, что "отдел" и "отделением" разные слова. Если слово подчеркнуто красным - значит ошибка в слове, зеленым - возможно ошибка. '
                let qwe
                this.chekIssuedBy(value, 'issued_by')
                // ошибок нет придет false, ошибки есть придет true
                // if ( qwe = this.chekIssuedBy(value) ) {
                //     this.error.issued_by = true
                //     this.$store.dispatch('setIssuedBy', value.toUpperCase())
                //     this.errorHTML_issued_by = qwe
                // } else {
                //    this.$store.dispatch('setIssuedBy', value.toUpperCase())
                //    this.error.issued_by = false
                //    this.errorHTML_issued_by = null
                // }  
                this.$store.dispatch('setIssuedBy', value.toUpperCase())
            }            
        },
        place_of_birth: {
            get () {
                return this.$store.state.individual.individual.place_of_birth 
            },
            set (value) {
                this.rules = 'пишите место рождения без сокращений имен собственных. Если слово подчеркнуто красным - значит ошибка в слове, зеленым - возможно ошибка. '
                // let qwe
                this.chekIssuedBy(value, 'place_of_birth')
                this.$store.dispatch('setPlaceOfBirth', value.toUpperCase())
                // ошибок нет придет false, ошибки есть придет true
                // if ( qwe = this.chekIssuedBy(value) ) {
                //     this.error.place_of_birth = true
                //     this.$store.dispatch('setPlaceOfBirth', value.toUpperCase())
                //     this.errorHTML_place_of_birth = qwe
                // } else {
                //    this.$store.dispatch('setPlaceOfBirth', value.toUpperCase())
                //    this.error.place_of_birth = false
                //    this.errorHTML_place_of_birth = null
                // }  
                  
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
        },
        snils: {
            get () {
                return this.$store.state.individual.individual.snils
            },
            set (value) {
                let snilsChek = this.chekSnils(value)
                console.log('snilsChek=', snilsChek)
                
                        if ( ( value.length == 3 ) || (value.length == 7)) {
                            value = value + '-'
                            // this.$store.dispatch('setSnils', value.toUpperCase())
                        }
                        if ( value.length == 11 ) {
                            value = value + ' '
                            // this.$store.dispatch('setSnils', value.toUpperCase())                     
                        }
                

                
                
                // ошибка нет false, ошибки есть true
                if ( !snilsChek) {
                    this.error.snils.is = false
                    this.error.snils.text = null
                    this.$store.dispatch('setSnils', value)
                } else {
                    this.error.snils.is = true
                    this.error.snils.text = snilsChek.text
                    this.$store.dispatch('setSnils', value)
                }
            }              
        }        
    },
    methods: {
        checkForm(value, index) {
            let regex = /^[a-zA-Zа-яА-Я']+[a-zA-Zа-яА-Я']?$/
            value.match(regex) === null ? this.error[index] = 'Недопустимые символы: лишние пробелы и символы ".,/"  и т.п.' : this.error[index] = false
        },
        chekSeries(value) {
            let regex = /^[0-9]{4}?$/

            if ( value.length != 4 ) {
                this.error.series = 'Серия паспорта состоит из 4 цифр'
            } 
            else if ( value.match(regex) === null ) {
                this.error.series = 'Серия паспорта должно состоять только из цифр'
            } 
            else {
                this.error.series = false    
            }
                
        },
        chekNumber(value) {
            let regex = /^[0-9]{6}?$/

            if ( value.length != 6 ) {
                this.error.number = 'Номер паспорта состоит из 6 цифр'
            }
            else if ( value.match(regex) === null ) {
                this.error.number = 'Номер паспорта должна состоять только из цифр'
            }
            else {
                this.error.number = false
            }       
        },
        chekIssuedBy(value, index) {
            let err = false
            let arr = value.toUpperCase().split(' ')
            let arrFilter = arr.filter(function(item) {
                console.log(item );
                if (item == 'Р-ОН' ) {
                    console.log(item, 'Р-ОН');
                }
                return ( (item != 'Р-ОН' ) && (item != 'ОБЛ.') && (item != 'Р.') && (item != 'Р-НЕ') && (item != 'Р-НА') && (item != 'С.') && (item != 'ПОС.') && (item != 'П.') && (item != 'Г.') && (item != 'ГОР.') && (item != 'Р.')) 
            })
            let newArr = arrFilter.map( (item, i) => {
                console.log( i + ": " + item )
                if (~item.indexOf(".")) {
                    err = true
                    return '<span style="text-decoration: underline; color: red">' + item + '</span>'
                } 
                if (~item.indexOf("-")) {
                    err = true
                    return '<span style="text-decoration: underline; color: green">' + item + '</span>'
                }  else {
                    console.log( 'совпадение нет' );
                }
            });
            if (err) {
                this.error[index] = true
                this.errorHTML[index] = newArr.join(' ')
            } else {
                this.error[index] = false
                this.errorHTML[index] = null
            }
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
        chekSnils(value) {
            let err = {
                type: '',
                text: ''
            }

            let regex = /^[0-9]{3}-[0-9]{3}-[0-9]{3} [0-9]{2}?$/
            console.log('qwe1=', value.match(regex))
            if ( value.match(regex) === null ) { 
                err.type = 0
                err.text = 'СНИЛС формата 111-111-111-11'   
            }
            let regex2 = /[a-zа-яё]/gi  
            console.log('qwe2=', value.match(regex2))
            if ( value.match(regex2) !== null ) { 
                err.type = 1
                err.text = 'В СНИЛСе не должны быть буквы'   
            }
             console.log('err=', err)
             console.log('err.type=', err.type)
            if ( err.type === '' ) {
                let regex3 = /\d{1,}/g
                let as = value.match(regex3).join('')
                if ( this.chekSnilsSum(as) ) {
                    return false
                } else {
                    err.type = 2
                    err.text = 'В СНИЛСе контрольная сумма неверна' 
                    return err
                }
            } else {
                console.log('return=', err)
                return err
            }
            
        },

        chekSnilsSum(value) {
            console.log('value=',value)
            let sum = 0
            let chekSum = '00'
            for (let i = 0; i < 9; i++ ) {
                sum = sum + (value[i] * (9 - i))
            }
            console.log('sum=',sum)
            if ( sum < 100 ) {
                chekSum = sum
            }
            if ( sum == 100 || sum == 101) {
                chekSum = '00'
            }
            if ( sum > 101 ) {
                chekSum = sum % 101
                if ( chekSum == 100 || chekSum == 101) {
                    chekSum = '00'
                }                
            }
            let chekSumValue = value.substring(9,11)
            console.log('chekSumValue=',chekSumValue)
            console.log('chekSum=',chekSum)
            if ( chekSumValue ==  chekSum) {
                return true
            } return false
        },
        submitQ(value) {
                // if ( this.snils.length < 5 ) {
                //     this.snils = this.snils.substring(0, 2)                    
                // }
                // if ( this.snils.length < 9 ) {
                //     this.snils = this.snils.substring(0, 6)                    
                // }                

                // if ( this.snils.length == 12 ) {
                //     this.snils = this.snils.substring(0, 10)                    
                // }
            // this.snils = ''
        },
        onward() {

            if ( JSON.stringify(this.errorFalse) === JSON.stringify(this.error) ) {
                this.$router.push('/four')
            } else {
                this.rules = 'исправьте все ошибки'
                console.log('this.error=',this.error)
                console.log('this.errorTrue=',this.errorFalse)
                console.log('ошибка исправьте все ошибки')
            }
        }
    },
    created () {
        this.$store.dispatch('initialiseStoreIndividual')
        this.checkForm(this.surname, 'surname')
        this.checkForm(this.name, 'name')
        this.checkForm(this.patronymic, 'patronymic')
         this.chekIssuedBy(this.issued_by, 'issued_by')
        this.chekIssuedBy(this.place_of_birth, 'place_of_birth')
        // this.surname.set(this.surname)
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
    padding: 10px 0;
    font-weight: 700;
    font-size: 16px;
    /* text-align: center;  */
    color:rgba(66, 133, 244, .9);  
    display: flex;
}
.rules-logo {
    color: rgba(189, 3, 3, 1);
    color: black;
}
.individual-wrap>p {
    margin: 0;
    margin: 10px 0;
}
.label-name {
    display: inline-block;
    width: 155px;
}

.in {
    border-radius: 4px;
    outline: 0;
    border: 1px solid rgb(212, 212, 212);
    font-size: 14px;
    padding: 5px 15px;
    font-weight: 400;
}

.in:focus {
    border: 1px solid rgb(117, 116, 116);
}

.label-error {
    color: red;
}
.label-show {
    font-weight: 700;
    margin-left: 10px;
}
.snils {
    width: 100px;
}

.position {
    width: 400px;
}

.series {
    width: 38px;
}
.number {
    width: 50px;
}
.issued_by {
    width: 700px;
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