<template>
    <div class="mo">
        <div class="container">
            <div class="mo-wrap">
                <header>
                    <div class="mo-body-link">
                        <router-link to="/three" class="btn-link">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="48px" height="48px" viewBox="1 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                            <path d="M15.41,16.59L10.83,12l4.58-4.59L14,6l-6,6l6,6L15.41,16.59z"/>
                            <path fill="none" d="M0,0h24v24H0V0z"/>
                            </svg>
                        </router-link>
                    </div>
                    <div class="mo-h2" >
                        Введите данные сотрудника, которому необходимо получить электронную подпись
                    </div>
                    <div class="mo-body-link">
                        <!-- <router-link to="/four" > -->
                            <span @click="onward()" class="btn-link">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    width="48px" height="48px" viewBox="-1 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                                <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"/>
                                <path fill="none" d="M0,0h24v24H0V0z"/>
                                </svg>                                
                            </span>
                        <!-- </router-link> -->
                    </div>
                </header>

                <div class="mo-body">

                    <div class="individual">
                        <div class="individual-h2">
                            <div class="rules-left">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <circle cx="12" cy="19" r="2"/>
                                    <path d="M10 3h4v12h-4z"/>
                                    <path fill="none" d="M0 0h24v24H0z"/>
                                </svg>
                                <div class="rules-logo">Подсказка:&nbsp;</div>
                            </div>
                            <div class="rules">{{ rules }}</div>
                        </div>
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
                                <label for="patronymicTr" class="label-name" >Доп. поле для отчества:</label>
                                <input class="in" :class="{ activeInput: readOnlyPatronymicTr, 'input-err': error.patronymicTr }" type="text" id="patronymicTr" v-model.trim="patronymicTr" placeholder="КЫЗЫ/АГЛЫ и т.п." :readonly="readOnlyPatronymicTr" >
                                <div class="edit" @click="addPatrTr()">{{ readOnlyPatronymicTr ? 'Добавить к отчеству' : 'Не включать' }}</div>
                                <!-- <div class="edit" @click="readOnlyPatronymicTr = !readOnlyPatronymicTr">Выключить</div> -->
                                <label class="label-error" v-show="error.patronymicTr">{{ errorText.patronymicTr }} </label>
                            </div>
                            <div class="wrap-item">
                                <label class="label-name"> Выберите пол:</label>
                                <input class="radio" type="radio" id="sex1" name="sex" v-model="sex" value="муж.">   
                                <label for="sex1">Муж</label>
                                <input class="radio" type="radio" id="sex2" name="sex" v-model="sex" value="жен.">   
                                <label for="sex2">Жен</label>
                                <label class="label-error" v-show="error.sex">{{ errorText.sex }} </label>
                            </div>
                            <div class="wrap-item">
                                <label for="position" class="label-name">Должность:</label>
                                <input class="in position" type="text" id="position" v-model="position" v-bind:class="{ 'input-err': error.position }" @focus="onFocus('position')">  
                                <label class="label-show"> {{ position }} </label>
                                <label class="label-error" v-show="error.position">{{ errorText.position }} </label>
                            </div>
                            <div class="wrap-item">
                                <label for="snils" class="label-name">СНИЛС:</label>
                                <input class="in snils" type="text" id="snils" v-model="snils" maxlength="14" placeholder="111-222-333 44" @focus="onFocus('snils')" v-bind:class="{ 'input-err': error.snils }">  
                                <label class="label-show"> {{ snils }} </label>
                                <!-- <label v-show="error.snils.is"> {{ error.snils.is }} </label> -->
                                <label v-show="error.snils" class="label-error"> {{ errorText.snils }} </label>
                                <!-- <label v-show="!error.snils.is" class="label-show"> Все верно  </label>   -->
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
                                <p>
                                    <label for="code" class="label-name">Код подразделения:</label>
                                    <input class="in" type="text" id="code" v-model="code" maxlength="7" placeholder="502-123" @focus="onFocus('code')" v-bind:class="{ 'input-err': error.code }">
                                    <label class="label-show" v-show="!error.code">{{ code }}</label>
                                    <label class="label-error" v-show="error.code">{{ errorText.code }} </label>
                                </p>
                                <p>
                                    <label for="date_of_birth" class="label-name">Дата рождения:</label>
                                    <input class="in" type="text" id="date_of_birth" v-model="date_of_birth" maxlength="10" placeholder="31.12.1991" @focus="onFocus('date_of_birth')" v-bind:class="{ 'input-err': error.date_of_birth }">
                                    <label class="label-show" v-show="!error.date_of_birth">{{ date_of_birth }}</label>
                                    <label class="label-error" v-show="error.date_of_birth">{{ errorText.date_of_birth }} </label>
                                </p>
                                <p>
                                    <label for="place_of_birth" class="label-name">Место рождения:</label>
                                    <input class="in issued_by" type="text" id="place_of_birth" v-model="place_of_birth" @focus="onFocus('place_of_birth')" v-bind:class="{ 'input-err': error.place_of_birth }">
                                    <label v-html="errorHTML.place_of_birth"> </label>    
                                </p>
                                <p>
                                    <label for="place_of_birth" class="label-name"></label>
                                    <label class="label-show">{{ place_of_birth }}</label>    
                                </p>
                            </fieldset>
                            <div class="btn-wrap">
                                <button class="btn-clear" @click="clearInd()">Очистить поля</button>
                            </div>                                                                      
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
            readOnlyPatronymicTr: true,
            errorText: {
                surname: null,
                name: null,
                patronymic: null,
                patronymicTr: null,
                sex: null,
                series: null,
                number: null,
                issued_by: null,
                date_of_issue: null,
                code: null,
                date_of_birth: null,
                place_of_birth: null,
                position: null,
                snils: null
            },
            error: {
                surname: null,
                name: null,
                patronymic: null,
                patronymicTr: false,
                sex: null,
                series: null,
                number: null,
                issued_by: null,
                date_of_issue: null,
                code: null,
                date_of_birth: null,
                place_of_birth: null,
                position: null,
                snils: null
            },
            errorFalse: {
                surname: false ,
                name: false ,
                patronymic: false,
                patronymicTr: false,
                sex: false,
                series: false,
                number: false,
                issued_by: false,
                date_of_issue: false,
                code: false,
                date_of_birth: false,
                place_of_birth: false,
                position: false,
                snils: false         
            },
            errorHTML: {
                issued_by: '',
                place_of_birth: ''
            },
            rules: ' все поля форм заполняются строго как в документах. '
        }
    },
    directives: {
        focus: {
            // определение директивы
                inserted: function (el) {
                el.focus()
            }
        }
    },
    computed: {
        surname: {
            get () {
                return this.$store.state.individual.individual.surname
            },
            set (value) {
                // this.rules = 'если в паспорте в фамилии присутствует буква "Ё", то необходимо писать именно букву "Ё"'
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
                // this.rules = 'если в паспорте в имени присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                this.checkForm(value, 'name')    
                this.$store.dispatch('setName', value.toUpperCase())    
            }
        },
        patronymic: {
            get () {
                return this.$store.state.individual.individual.patronymic 
            },
            set (value) {
                // this.rules = 'если в паспорте в отчестве присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                this.checkForm(value, 'patronymic')
                this.$store.dispatch('setPatronymic', value.toUpperCase())  
            }
        },
        patronymicTr: {
            get () {
                return this.$store.state.individual.individual.patronymicTr 
            },
            set (value) {
                // this.rules = 'если в паспорте в отчестве присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                // if (!this.readOnlyPatronymicTr) {
                    this.checkForm(value, 'patronymicTr')
                    this.$store.dispatch('setPatronymicTr', value.toUpperCase())  
                // }
                
                // this.$store.dispatch('setPatronymic', value.toUpperCase())  
            }            
        },
        series: {
            get () {
                return this.$store.state.individual.individual.series 
            },
            set (value) {
                // this.rules = 'серию и номер паспорта необходимо проверить на сайте МВД по списку недействительных российских паспортов'
                this.chekSeries(value)
                this.$store.dispatch('setSeries', value.toUpperCase())
            }
        },
        number: {
            get () {
                return this.$store.state.individual.individual.number 
            },
            set (value) {
                // this.rules = 'серию и номер паспорта необходимо проверить на сайте МВД по списку недействительных российских паспортов'
                this.chekNumber(value)
                this.$store.dispatch('setNumber', value.toUpperCase())
            }            
        },
        issued_by: {
            get () {
                return this.$store.state.individual.individual.issued_by 
            },
            set (value) {
                // this.rules = 'пишите кем выдан паспорт без сокращений имен собственных. Обращаем внимание, что "отдел" и "отделением" разные слова. Если слово подчеркнуто красным - значит ошибка в слове, зеленым - возможно ошибка. '
                this.chekIssuedBy(value, 'issued_by')
                this.$store.dispatch('setIssuedBy', value.toUpperCase())
            }            
        },
        place_of_birth: {
            get () {
                return this.$store.state.individual.individual.place_of_birth 
            },
            set (value) {
                // this.rules = 'пишите место рождения без сокращений имен собственных. Если слово подчеркнуто красным - значит ошибка в слове, зеленым - возможно ошибка. '
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
                }
                this.chekCode(value)
                this.$store.dispatch('setCode', value.toUpperCase())

            }             
        },
        date_of_birth: {
            get () {
                return this.$store.state.individual.individual.date_of_birth
            },
            set (value) {
                if ( ( value.length == 2 ) || (value.length == 5)){
                    value = value + '.'
                }
                this.chekDate(value, 'date_of_birth')
                this.$store.dispatch('setDateOfBirth', value.toUpperCase())
            }             
        },
        date_of_issue: {
            get () {
                return this.$store.state.individual.individual.date_of_issue
            },
            set (value) {
                if ( ( value.length == 2 ) || (value.length == 5)){
                    value = value + '.'
                }
                this.chekDate(value, 'date_of_issue')
                this.$store.dispatch('setDateOfIssue', value.toUpperCase())
            }             
        },
        sex: {
            get () {
                return this.$store.state.individual.individual.sex
            },
            set (value) {
                this.chekSex(value)
                this.$store.dispatch('setSex', value)
            }            
        },
        position: {
            get () {
                return this.$store.state.individual.individual.position
            },
            set (value) {
                this.chekPosition(value)
                this.$store.dispatch('setPosition', value)
            }              
        },
        snils: {
            get () {
                return this.$store.state.individual.individual.snils
            },
            set (value) {
                // let snilsChek = this.chekSnils(value)
                
                // console.log('snilsChek=', snilsChek)
                
                if ( ( value.length == 3 ) || (value.length == 7)) {
                    value = value + '-'
                }
                if ( value.length == 11 ) {
                    value = value + ' '
                }
                this.chekSnils(value)
                this.$store.dispatch('setSnils', value)

            }              
        }        
    },
    methods: {
        onFocus(value) {
            console.log('edfefrf')
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
                case 'sex':
                    this.rules = ''
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
                case 'code':
                    this.rules = 'код подразделения'
                    break
                case 'date_of_birth':
                    this.rules = 'дата рождения'
                    break
                case 'place_of_birth':
                    this.rules = 'пишите место рождения без сокращений имен собственных. Если слово подчеркнуто красным - значит ошибка в слове, зеленым - возможно ошибка.'
                    break
                case 'position':
                    this.rules = 'должность согласно штатному расписанию'
                    break
                case 'snils':
                    this.rules = 'СНИЛС'
                    break
                default:
                    alert( 'Я таких значений не знаю' );
            } 

        },
        addPatrTr() {
            if (!this.readOnlyPatronymicTr) {
                this.error.patronymicTr = false
                this.$store.dispatch('setPatronymicTr', null)  
            } else {
                this.error.patronymicTr = null
            }
            this.readOnlyPatronymicTr = !this.readOnlyPatronymicTr
        },
        clearInd() {
            this.$store.dispatch('setClearIndividual')
            // this.checkForm(this.surname, 'surname')
            this.error.surname = null
            this.error.name = null
            this.error.patronymic = null
            this.error.sex = null
            this.error.series = null
            this.error.number = null
            this.error.issued_by = null
            this.error.date_of_issue = null
            this.error.date_of_birth = null
            this.error.place_of_birth = null
            this.error.code = null
            this.error.position = null
            this.error.snils = null
        },
        checkForm(value, index) {
            let regex = /^[a-zA-Zа-яёА-ЯЁ']+-? ?[a-zA-Zа-яёА-ЯЁ']{0,} ?[a-zA-Zа-яёА-ЯЁ']{0,} ?[a-zA-Zа-яёА-ЯЁ']{0,}$/
            if ( value != null ) {
                // value.match(regex) === null ? this.error[index] = 'Недопустимые символы: лишние пробелы и символы ".,/"  и т.п.' : this.error[index] = false
                
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
                    return ( (item != 'Р-ОН' ) && (item != 'ОБЛ.') && (item != 'Р.') && (item != 'Р-НЕ') && (item != 'Р-НА') && (item != 'С.') && (item != 'ПОС.') && (item != 'П.') && (item != 'Г.') && (item != 'ГОР.') && (item != 'Р.')) 
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
        chekSnils(value) {
            if ( value != null ) {
                let regex = /^[0-9]{3}-[0-9]{3}-[0-9]{3} [0-9]{2}?$/

                if ( value.match(regex) === null ) { 
                    this.error.snils = true
                    this.errorText.snils = 'СНИЛС формата 111-111-111-11'   
                }
                else  {
                    let regex3 = /\d{1,}/g
                    let as = value.match(regex3).join('')
                    if ( !this.chekSnilsSum(as) ) {
        
                        this.error.snils = true
                        this.errorText.snils = 'В СНИЛСе контрольная сумма неверна'
                    } else {
                        this.error.snils = false
                        this.errorText.snils = null
                    }
                }
            } else {
                this.error.snils = null
                this.errorText.snils = null
            }    
        },
        chekSex(value) {
            if ( value != null ) {
                if (value == 'муж.' || value == 'жен.') {
                    this.error.sex = false
                    this.errorText.sex = null
                } else {
                    this.error.sex = true
                    this.errorText.sex = 'Укажите пол'
                }
            } else {
                this.error.sex = null
                this.errorText.sex = 'Укажите пол'
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
        chekSnilsSum(value) {
            let sum = 0
            let chekSum = '00'
            for (let i = 0; i < 9; i++ ) {
                sum = sum + (value[i] * (9 - i))
            }
            // console.log('sum=',sum)
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
            // console.log('chekSumValue=',chekSumValue)
            // console.log('chekSum=',chekSum)
            if ( chekSumValue ==  chekSum) {
                return true
            } return false
        },
        onward() {
            if ( JSON.stringify(this.errorFalse) === JSON.stringify(this.error) ) {
                this.$router.push('/five')
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
        this.$store.dispatch('setProgressValue', 65)
        this.$store.dispatch('initialiseStoreIndividual')
        this.checkForm(this.surname, 'surname')
        this.checkForm(this.name, 'name')
        this.checkForm(this.patronymic, 'patronymic')
        // this.checkForm(this.patronymicTr, 'patronymicTr')
          
        this.chekSeries(this.series)
        this.chekNumber(this.number)
        this.chekIssuedBy(this.issued_by, 'issued_by')
        this.chekIssuedBy(this.place_of_birth, 'place_of_birth')
        this.chekCode(this.code)
        this.chekDate(this.date_of_birth, 'date_of_birth')
        this.chekDate(this.date_of_issue, 'date_of_issue')
        this.chekSnils(this.snils)
        this.chekSex(this.sex)
        this.chekPosition(this.position)

        this.$store.dispatch('setPatronymicTr', null)

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
    position: relative;
    padding: 10px 0;
    margin-top: 10px;
    font-weight: 700;
    font-size: 16px;
    /* text-align: center;  */
    color:rgba(66, 133, 244, .9); 
    color: rgba(217, 48, 37, 1); 
    display: flex;
    /* align-items: center; */
    /* border-bottom: 1px solid;  */
    align-items: flex-start;
    transition: all 1s ease-in; 
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
.rules {
    transition: all 1s ease-in; 
}
.rules-left {
    color: inherit;
    display: flex;
    align-items: center;
}
.rules-left>svg {
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
    width: 220px;
}
.edit {
    border-bottom: 1px dashed rgb(212, 212, 212);
    cursor: pointer;
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
    margin-left: 10px;
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
.btn-wrap {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 30px 0;
}
.btn-clear {
    border-radius: 19px;
    background-color: rgba(189, 3, 3, .1);
    color: rgba(189, 3, 3, 1);
    font-weight: 600;
    border: 1px solid rgba(189, 3, 3, 1);
    transition: all 0.15s ease-out;
    /* align-self: center; */
    /* margin: auto; */

}
.btn-clear:hover {
    background-color: rgba(189, 3, 3, 1);
    color: white;
}
.wrap-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
}
.wrap-item input {
    margin-right: 10px;
}
.activeInput:focus {
    border: 1px solid rgb(212, 212, 212);
    
}

.activeInput {
    background-color: rgba(212, 212, 212, .5);
}
fieldset {
    /* border: 1px solid rgba(212, 212, 212, .6); */
    font-weight: 600;

    border: 1px solid rgb(212, 212, 212);
    border: 1px solid rgb(218, 220, 224);
    /* border: none; */
    border-radius: 8px;
    /* box-shadow: 0 1px 5px 0 rgba(0,0,0,.14); */
}
fieldset p {
    font-weight: 400;
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