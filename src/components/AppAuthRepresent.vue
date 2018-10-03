<template>
    <div class="mo">
        <div class="container">
            <div class="mo-wrap">
                <header>
                    <div class="mo-body-link">
                        <router-link to="/four" class="btn-link">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="48px" height="48px" viewBox="1 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                            <path d="M15.41,16.59L10.83,12l4.58-4.59L14,6l-6,6l6,6L15.41,16.59z"/>
                            <path fill="none" d="M0,0h24v24H0V0z"/>
                            </svg>
                        </router-link>
                    </div>
                    <div class="mo-h2" >
                        Введите данные уполномоченного представителя
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
                            <div class="wrap-item">
                                <label for="surname" class="label-name" >Фамилия:</label>
                                <input class="in" type="text" id="surname" v-model.trim="surname" placeholder="КУПЕР" v-bind:class="{ 'input-err': error.surname }" @focus="onFocus('surname')" >
                                <label class="label-show"> {{ surname }} </label>
                                <label class="label-error" v-show="error.surname">{{ errorText.surname }} </label>
                            </div>
                            <div class="wrap-item">
                                <label for="name" class="label-name" >Имя:</label>
                                <input class="in" type="text" id="name" v-model.trim="name" placeholder="ДЕЙЛ" v-bind:class="{ 'input-err': error.name }" @focus="onFocus('name')">
                                <label class="label-show"> {{ name }} </label>
                                <label class="label-error" v-show="error.name">{{ errorText.name }} </label>
                            </div>
                            <div class="wrap-item">
                                <label for="patronymic" class="label-name" >Отчество:</label>
                                <input class="in" type="text" id="patronymic" v-model.trim="patronymic" placeholder="ФЁДОРОВИЧ" v-bind:class="{ 'input-err': error.patronymic }" @focus="onFocus('patronymic')">
                                <label class="label-show"> {{ patronymic }} </label>
                                <label class="label-error" v-show="error.patronymic">{{ errorText.patronymic }} </label>
                            </div>
                            <div class="wrap-item">
                                <label for="position" class="label-name">Должность:</label>
                                <input class="in position" type="text" id="position" v-model="position" v-bind:class="{ 'input-err': error.position }" @focus="onFocus('position')">  
                                <label class="label-show"> {{ position }} </label>
                                <label class="label-error" v-show="error.position">{{ errorText.position }} </label>
                            </div>
                            <fieldset>
                                <legend>Паспорт</legend>
                                <p>
                                    <label for="series" class="label-name">Серия:</label>
                                    <input class="in series" id="series" v-model.lazy="series" maxlength="4" placeholder="1234" @focus="onFocus('series')" v-bind:class="{ 'input-err': error.series }"> 
                                    <label v-show="!error.series" class="label-show">{{ series }} </label>
                                    <label v-show="error.series" class="label-error">{{ errorText.series }} </label>
                                </p>
                                <p>
                                    <label for="number" class="label-name">Номер:</label>
                                    <input class="in number" type="text" v-model.lazy="number" id="number" maxlength="6" placeholder="123456" @focus="onFocus('number')" v-bind:class="{ 'input-err': error.number }">
                                    <label class="label-show" v-show="!error.number">{{ number }}</label>
                                    <label v-show="error.number" class="label-error">{{ errorText.number }} </label>
                                </p>
                                <p>
                                    <label for="issued_by" class="label-name">Кем выдан:</label>
                                    <input class="in issued_by" type="text" id="issued_by" v-model="issued_by" @focus="onFocus('issued_by')" v-bind:class="{ 'input-err': error.issued_by }"> 
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
                                    <input class="in" type="text" id="date_of_issue" v-model="date_of_issue" maxlength="10" placeholder="31.12.2018" @focus="onFocus('date_of_issue')" v-bind:class="{ 'input-err': error.date_of_issue }">
                                    <label class="label-show" v-show="!error.date_of_issue">{{ date_of_issue }}</label>
                                    <label class="label-error" v-show="error.date_of_issue">{{ errorText.date_of_issue }} </label>
                                </p>
                            </fieldset>                                                                   
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
            errorText: {
                surname: null,
                name: null,
                patronymic: null,
                series: null,
                number: null,
                issued_by: null,
                date_of_issue: null,
                position: null
            },
            error: {
                surname: null,
                name: null,
                patronymic: null,
                series: null,
                number: null,
                issued_by: null,
                date_of_issue: null,
                position: null
            },
            errorFalse: {
                surname: false ,
                name: false ,
                patronymic: false,
                series: false,
                number: false,
                issued_by: false,
                date_of_issue: false,
                position: false         
            },
            errorHTML: {
                issued_by: ''
            },
            rules: ' все поля форм заполняются строго как в документах. '
        }
    },
    computed: {
        surname: {
            get () {
                return this.$store.state.authrepresent.authrepresent.surname
            },
            set (value) {
                this.checkForm(value, 'surname')  
                this.$store.dispatch('setAuthRepresentSurname', value.toUpperCase())
            }
        },
        name: {
            get () {
                return this.$store.state.authrepresent.authrepresent.name
            },
            set (value) {
                this.checkForm(value, 'name') 
                this.$store.dispatch('setAuthRepresentName', value.toUpperCase()) 
            }
        },
        patronymic: {
            get () {
                return this.$store.state.authrepresent.authrepresent.patronymic 
            },
            set (value) {
                this.checkForm(value, 'patronymic')  
                this.$store.dispatch('setAuthRepresentPatronymic', value.toUpperCase())  
            }
        },
        series: {
            get () {
                return this.$store.state.authrepresent.authrepresent.series 
            },
            set (value) {
                this.chekSeries(value)
                this.$store.dispatch('setAuthRepresentSeries', value.toUpperCase())
            }
        },
        number: {
            get () {
                return this.$store.state.authrepresent.authrepresent.number 
            },
            set (value) {
                this.chekNumber(value)
                this.$store.dispatch('setAuthRepresentNumber', value.toUpperCase())
            }            
        },
        issued_by: {
            get () {
                return this.$store.state.authrepresent.authrepresent.issued_by 
            },
            set (value) {
                this.chekIssuedBy(value, 'issued_by')
                this.$store.dispatch('setAuthRepresentIssuedBy', value.toUpperCase())
            }            
        },
        date_of_issue: {
            get () {
                return this.$store.state.authrepresent.authrepresent.date_of_issue
            },
            set (value) {
                if ( ( value.length == 2 ) || (value.length == 5)){
                    value = value + '.'
                }
                this.chekDate(value, 'date_of_issue')
                this.$store.dispatch('setAuthRepresentDateOfIssue', value.toUpperCase())
            }             
        },
        position: {
            get () {
                return this.$store.state.authrepresent.authrepresent.position
            },
            set (value) {
                this.chekPosition(value)
                this.$store.dispatch('setAuthRepresentPosition', value)
            }              
        }    
    },
    methods: {
        onFocus(value) {
            switch (value) {
                case 'surname':
                    this.rules = 'если в паспорте в фамилии присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                    break
                case 'name':
                    this.rules = 'если в паспорте в имени присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                    break;
                case 'patronymic':
                    this.rules = 'если в паспорте в отчестве присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                    break
                case 'series':
                    this.rules = 'серию и номер паспорта необходимо проверить на сайте МВД по списку недействительных российских паспортов'
                    break
                case 'number':
                    this.rules = 'серию и номер паспорта необходимо проверить на сайте МВД по списку недействительных российских паспортов'
                    break
                case 'issued_by':
                    this.rules = 'пишите кем выдан паспорт без сокращений имен собственных. Обращаем внимание, что "отдел" и "отделением" разные слова. Если слово подчеркнуто красным - значит ошибка в слове, зеленым - возможно ошибка. '
                    break
                case 'date_of_issue':
                    this.rules = 'дата выдачи паспорта'
                    break
                case 'position':
                    this.rules = 'должность согласно штатному расписанию'
                    break
                default:
                    this.rules = 'Я таких значений не знаю'
            } 
        },
        checkForm(value, index) {
            let regex = /^[a-zA-Zа-яёА-ЯЁ']+-? ?[a-zA-Zа-яёА-ЯЁ']{0,} ?[a-zA-Zа-яёА-ЯЁ']{0,} ?[a-zA-Zа-яёА-ЯЁ']{0,}$/
            if ( value != null ) {
                if ( value.match(regex) === null ) {
                    this.errorText[index] = 'Недопустимые символы: лишние пробелы и символы ".,/"  и т.п.'
                    this.error[index] = true
                } else {
                    this.errorText[index] = null
                    this.error[index] = false
                }
            } else {
                this.error[index] = null
            }
        },
        chekSeries(value) {
            let regex = /^[0-9]{4}?$/
            if ( value != null ) {
                if ( value.length != 4 ) {
                    this.errorText.series = 'Серия паспорта состоит из 4 цифр'
                    this.error.series = true   
                } 
                else if ( value.match(regex) === null ) {
                    this.errorText.series = 'Серия паспорта должно состоять только из цифр'
                    this.error.series = true   
                } 
                else {
                    this.error.series = false    
                }
            } else {
                this.error.series = null
            }     
        },
        chekNumber(value) {
            let regex = /^[0-9]{6}?$/
            if ( value != null ) {
                if ( value.length != 6 ) {
                    this.errorText.number = 'Номер паспорта состоит из 6 цифр'
                    this.error.number = true
                }
                else if ( value.match(regex) === null ) {
                    this.errorText.number = 'Номер паспорта должна состоять только из цифр'
                    this.error.number = true
                }
                else {
                    this.error.number = false
                } 
            } else {
                this.error.number = null
            }    
        },
        chekIssuedBy(value, index) {
            if ( value != null ) {
                let err = false
                let errT = false
                let newArr = []
                console.log('newArr',newArr );
                let arr = value.toUpperCase().split(' ')
                let arrFilter = arr.filter(function(item) {
                    console.log(item );
                    if (item == 'Р-ОН' ) {
                        console.log(item, 'Р-ОН');
                    }
                    return ( (item != 'Р-ОН' ) && (item != 'ОБЛ.') && (item != 'СТ.') && (item != 'РЕСП.') && (item != 'Р.') && (item != 'Р-НЕ') && (item != 'Р-НА') && (item != 'С.') && (item != 'ПОС.') && (item != 'П.') && (item != 'Г.') && (item != 'ГОР.') && (item != 'Р.')) 
                })
                newArr = arrFilter.map( (item, i) => {
                    console.log( i + ": " + item )
                    if ( value == '' ) {
                        err = true
                        return '<span style="text-decoration: underline; color: red"> Заполните поле</span>'
                    }
                    if (~item.indexOf(".")) {
                        err = true
                        return '<span style="text-decoration: underline; color: red">' + item + '</span>'
                    } 
                    if (~item.indexOf("-")) {
                        errT = true
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
                if (errT) {
                    this.errorHTML[index] = newArr.join(' ')
                }
            } else {
                this.error[index] = null
            }    
        },
        chekCode(value) {
            if ( value != null ) {
                let regex = /^[0-9]{3}-[0-9]{3}?$/

                if ( value.match(regex) === null ) {
                    this.errorText.code = 'Номер паспорта в формате 123-456'
                    this.error.code = true
                } else {
                    this.error.code = false
                    this.errorText.code = null
                }
            } else {
                this.error.code = null
            }              
        },
        chekDate(value, index) {
            if ( value != null ) {
                let regex = /^[0-3][0-9].[0-1][0-9].[0-9]{4}?$/
                if ( value.match(regex) === null ) {
                    this.errorText[index] = 'Дата в формате "06.08.1991"'
                    this.error[index] = true
                } else {
                    this.errorText[index] = null
                    this.error[index] = false
                } 
            } else {
                this.error[index] = null
            }   
        },
        chekPosition(value) {
            if ( value != null ) {
                console.log('value=',value)
                if (value == '') {
                    console.log('pfikn=',value)
                    this.error.position = true
                    this.errorText.position = 'Укажите должность'                    
                } else {
                    this.error.position = false
                    this.errorText.position = null

                }
            } else {
                this.error.position = null
            }             
        },
        onward() {
            if ( JSON.stringify(this.errorFalse) === JSON.stringify(this.error) ) {
                this.$router.push('/six')
            } else {
                for ( let key in this.error) {
                    if (this.error[key] != false)
                        this.error[key] = true
                }
                this.rules = 'исправьте все ошибки'
                console.log('this.error=',this.error)
                console.log('this.errorTrue=',this.errorFalse)
                // console.log('ошибка исправьте все ошибки')
            }
        }
    },
    created () {
        this.$store.dispatch('setProgressValue', 82)
        this.$store.dispatch('initialiseStoreAuthRepresent')
        this.checkForm(this.surname, 'surname')
        this.checkForm(this.name, 'name')
        this.checkForm(this.patronymic, 'patronymic')
        this.chekSeries(this.series)
        this.chekNumber(this.number)
        this.chekIssuedBy(this.issued_by, 'issued_by')
        this.chekDate(this.date_of_issue, 'date_of_issue')
        this.chekPosition(this.position)
    }
}
</script>

<style scoped>

.mo {
    display: flex;
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
}

.mo-h2 {
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
.label-name {
    display: inline-block;
    width: 155px;
}

.in {
    border-radius: 6px;
    outline: 0;
    border: 1px solid rgb(212, 212, 212);
    font-size: 14px;
    padding: 5px 15px;
    font-weight: 400;
}

.in:focus:not(.input-err) {
    border: 1px solid rgb(117, 116, 116);
}
.input-err {
    border-color: rgb(241, 2, 2);
}

.label-error {
    color: red;
}
.label-show {
    font-weight: 700;
    /* margin-left: 10px; */
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
fieldset {
    font-weight: 600;
    border: 1px solid rgb(218, 220, 224);
    border-radius: 8px;
}
fieldset p {
    font-weight: 400;
}
.wrap-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
}
.wrap-item input {
    margin-right: 10px;
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