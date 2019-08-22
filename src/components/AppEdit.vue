<template>
    <div class="mo">
        <div class="container">
            <div class="mo-wrap">
                <div class="employee">
                    <h1>{{ isEdit ? 'Редактирование работника ' + surname + ' ' + name + ' ' + patronymic: 'Добавление работника' }}</h1>
                    <AppRules v-bind:class="{ 'max': isMax }" >
                        {{ rules }}
                    </AppRules>
                    <div class="employee-wrap">
                        <div class="item item-flex">
                            <div class="label-name" >Фамилия</div>
                            <div class="item-wrap">
                                <input class="in" type="text" id="surname" v-model.trim="surname" placeholder="ФАМИЛИЯ" v-bind:class="{ 'input-err': error.surname }" @focus="onFocus('surname')" >
                                <div class="label-show"> {{ surname }} </div>
                                <div class="label-error" v-show="error.surname">{{ errorText.surname }} </div>                
                            </div>
                        </div>
                        <div class="item item-flex" >
                            <div class="label-name" >Имя</div>
                            <div class="item-wrap">
                                <input class="in" type="text" id="name" v-model.trim="name" placeholder="ИМЯ" v-bind:class="{ 'input-err': error.name }" @focus="onFocus('name')">
                                <div class="label-show"> {{ name }} </div>
                                <div class="label-error" v-show="error.name">{{ errorText.name }} </div>
                            </div>
                        </div>
                        <div class="item item-flex">
                            <div class="item-top">
                                <label for="patronymic" class="label-name" >Отчество</label>
                                <div class="item-top-check" @click="addPatr()">
                                <svg v-if="readOnlyPatronymic" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                                <svg v-if="!readOnlyPatronymic" :class="{ 'svg-active': !readOnlyPatronymic }" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                                </div>
                            </div>
                            <div class="item-wrap">
                                <input class="in" type="text" id="patronymic" v-model.trim="patronymic" placeholder="ОТЧЕСТВО" v-bind:class="{ activeInput: readOnlyPatronymic, 'input-err': error.patronymic }" @focus="onFocus('patronymic')" :readonly="readOnlyPatronymic">
                                <label class="label-show"> {{ patronymic }} </label>
                                <label class="label-error" v-show="error.patronymic">{{ errorText.patronymic }} </label>
                            </div>
                        </div>
                        <div class="item item-flex">
                            <div class="item-top">
                                <label for="patronymicTr" class="label-name" >Доп. поле для отчества</label>
                                <div class="item-top-check" @click="addPatrTr()">
                                    <!-- {{ readOnlyPatronymicTr ? 'Включить' : 'Не включать' }} -->
                                <svg v-if="readOnlyPatronymicTr" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                                <svg v-if="!readOnlyPatronymicTr" :class="{ 'svg-active': !readOnlyPatronymicTr }" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                                </div>
                            </div>
                            <div class="item-wrap">
                                <input class="in" :class="{ activeInput: readOnlyPatronymicTr, 'input-err': error.patronymicTr }" type="text" id="patronymicTr" v-model.trim="patronymicTr" placeholder="КЫЗЫ/АГЛЫ и т.п." :readonly="readOnlyPatronymicTr" >
                                <label class="label-error" v-show="error.patronymicTr">{{ errorText.patronymicTr }} </label>
                            </div>
                        </div>
                        <div class="item item-flex">
                            <label class="label-name">Пол</label>
                            <div class="item-wrap">
                                <div class="wrap-sex">
                                    <input class="radio" type="radio" id="sex1" name="sex" v-model="sex" value="муж.">
                                    <svg @click="sex = 'муж.'" v-if="'муж.' != sex" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                                    <svg v-if="'муж.' == sex" class="svg-active" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                                    <label for="sex1">Мужской</label>
                                </div>
                                <div class="wrap-sex">
                                    <input class="radio" type="radio" id="sex2" name="sex" v-model="sex" value="жен.">
                                    <svg v-if="'жен.' != sex" @click="sex = 'жен.'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                                    <svg v-if="'жен.' == sex" class="svg-active" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M0 0h24v24H0z" fill="none"/></svg>  
                                    <label for="sex2">Женский</label>
                                </div>
                                <label class="label-error" v-show="error.sex">{{ errorText.sex }} </label>
                            </div>
                        </div>
                        <div class="item item-flex">
                            <label for="position" class="label-name">Должность</label>
                            <div class="item-wrap">
                                <input class="in position" type="text" id="position" v-model="position" v-bind:class="{ 'input-err': error.position }" @focus="onFocus('position')">  
                                <label class="label-show"> {{ position }} </label>
                                <label class="label-error" v-show="error.position">{{ errorText.position }} </label>
                            </div>
                        </div>
                        <div class="item item-flex">
                            <label for="snils" class="label-name">СНИЛС</label>
                            <div class="item-wrap">
                                <input class="in snils" type="text" id="snils" v-model="snils" maxlength="14" placeholder="111-222-333 44" @focus="onFocus('snils')" v-bind:class="{ 'input-err': error.snils }">  
                                <label class="label-show"> {{ snils }} </label>
                                <label v-show="error.snils" class="label-error"> {{ errorText.snils }} </label>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="item item-flex">
                            <label for="series" class="label-name">Серия</label>
                            <div class="item-wrap">
                                <input class="in series" id="series" size="4" v-model.lazy="series" maxlength="4" placeholder="1234" @focus="onFocus('series')" v-bind:class="{ 'input-err': error.series }"> 
                                <label v-show="!error.series" class="label-show">{{ series }} </label>
                                <label v-show="error.series" class="label-error">{{ errorText.series }} </label>
                            </div>
                        </div>
                        <div class="item item-flex">
                            <label for="number" class="label-name">Номер</label>
                            <div class="item-wrap">
                                <input class="in number" type="text" v-model.lazy="number" id="number" maxlength="6" placeholder="123456" @focus="onFocus('number')" v-bind:class="{ 'input-err': error.number }">
                                <label class="label-show" v-show="!error.number">{{ number }}</label>
                                <label v-show="error.number" class="label-error">{{ errorText.number }} </label>
                            </div>
                        </div>
                        <div class="item item-flex">
                            <label for="issued_by" class="label-name">Кем выдан</label>
                            <div class="item-wrap">
                                <input class="in issued_by" type="text" id="issued_by" v-model="issued_by" @focus="onFocus('issued_by')" v-bind:class="{ 'input-err': error.issued_by }"> 
                                <label class="label-error-issued" v-html="errorHTML.issued_by"> </label>
                            </div>
                        </div>
                        <!-- <div class="item item-flex">
                            <label for="issued_by2" class="label-name"></label>
                            <label class="label-show">{{ issued_by }}</label>     
                        </div> -->
                        <div class="item item-flex">
                            <label for="date_of_issue" class="label-name">Дата выдачи</label>
                            <div class="item-wrap">
                                <input class="in date" type="text" id="date_of_issue" v-model="date_of_issue" maxlength="10" placeholder="31.12.2018" @focus="onFocus('date_of_issue')" v-bind:class="{ 'input-err': error.date_of_issue }">
                                <label class="label-show" v-show="!error.date_of_issue">{{ date_of_issue }}</label>
                                <label class="label-error" v-show="error.date_of_issue">{{ errorText.date_of_issue }} </label>
                            </div>
                        </div>
                        <div class="item item-flex">
                            <label for="code" class="label-name">Код подразделения</label>
                            <div class="item-wrap">
                                <input class="in code" type="text" id="code" v-model="code" maxlength="7" placeholder="502-123" @focus="onFocus('code')" v-bind:class="{ 'input-err': error.code }">
                                <label class="label-show" v-show="!error.code">{{ code }}</label>
                                <label class="label-error" v-show="error.code">{{ errorText.code }} </label> 
                            </div>
                        </div>
                        <div class="item item-flex">
                            <label for="date_of_birth" class="label-name">Дата рождения</label>
                            <div class="item-wrap">
                                <input class="in date" type="text" id="date_of_birth" v-model="date_of_birth" maxlength="10" placeholder="31.12.1991" @focus="onFocus('date_of_birth')" v-bind:class="{ 'input-err': error.date_of_birth }">
                                <label class="label-show" v-show="!error.date_of_birth">{{ date_of_birth }}</label>
                                <label class="label-error" v-show="error.date_of_birth">{{ errorText.date_of_birth }} </label> 
                            </div>      
                        </div>
                        <div class="item item-flex">
                            <label for="place_of_birth" class="label-name">Место рождения</label>
                            <div class="item-wrap">
                                <input class="in issued_by" type="text" id="place_of_birth" v-model="place_of_birth" @focus="onFocus('place_of_birth')" v-bind:class="{ 'input-err': error.place_of_birth }">
                                <label class="label-error-issued" v-html="errorHTML.place_of_birth"> </label>
                            </div> 
                        </div>
                        <div class="item item-flex">
                            <label for="place_of_birth" class="label-name"></label>
                            <label class="label-show">{{ place_of_birth }}</label> 
                        </div>
                    </div>
                    <div class="btn-wrap">
                        <button class="btn-clear" @click="add" v-if="!isEdit">Добавить</button>
                        <button class="btn-clear" @click="edit" v-if="isEdit">Сохранить</button>
                    </div>   
                    <!-- <button @click="add" v-if="!isEdit">Добавить</button> -->
                    
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
    data() {
        return {
            isMax: false,
            rules: ' все поля форм заполняются строго как в документах. ',
            readOnlyPatronymicTr: true,
            readOnlyPatronymic: false,
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
            }
        }
    },
    computed: {
        isEdit() {
            return (this.$route.name == 'edit') ? true : false 
        },
        surname: {
            get () {
                return this.$store.state.employees.surname
            },
            set (value) {
                this.checkForm(value, 'surname')     
                this.$store.dispatch('setEmployee', { value: value.toUpperCase(), index: 'surname' })
            }
        },
        name: {
            get () {
                return this.$store.state.employees.name
            },
            set (value) {
                this.checkForm(value, 'name')     
                this.$store.dispatch('setEmployee', { value: value.toUpperCase(), index: 'name' })
            }
        },
        patronymic: {
            get () {
                return this.$store.state.employees.patronymic 
            },
            set (value) {
                this.checkForm(value, 'patronymic')
                this.$store.dispatch('setEmployee', { value: value.toUpperCase(), index: 'patronymic' }) 
            }
        },
        patronymicTr: {
            get () {
                return this.$store.state.employees.patronymicTr 
            },
            set (value) {
                this.checkForm(value, 'patronymicTr')
                this.$store.dispatch('setEmployee', { value: value.toUpperCase(), index: 'patronymicTr' }) 
            }            
        },
        sex: {
            get () {
                return this.$store.state.employees.sex
            },
            set (value) {
                this.chekSex(value)
                this.$store.dispatch('setEmployee', { value: value, index: 'sex' })
            }            
        },
        position: {
            get () {
                return this.$store.state.employees.position
            },
            set (value) {
                this.chekPosition(value)
                this.$store.dispatch('setEmployee', { value: value.toUpperCase(), index: 'position' })
            }              
        },
        snils: {
            get () {
                return this.$store.state.employees.snils
            },
            set (value) {
                if ( ( value.length == 3 ) || (value.length == 7)) {
                    value = value + '-'
                }
                if ( value.length == 11 ) {
                    value = value + ' '
                }
                this.chekSnils(value)
                this.$store.dispatch('setEmployee', { value: value.toUpperCase(), index: 'snils' })
            }              
        },  
        series: {
            get () {
                return this.$store.state.employees.series 
            },
            set (value) {
                this.chekSeries(value)
                this.$store.dispatch('setEmployee', { value: value.toUpperCase(), index: 'series' }) 
            }
        },
        number: {
            get () {
                return this.$store.state.employees.number 
            },
            set (value) {
                this.chekNumber(value)
                this.$store.dispatch('setEmployee', { value: value.toUpperCase(), index: 'number' })
            }            
        },
        issued_by: {
            get () {
                return this.$store.state.employees.issued_by 
            },
            set (value) {
                this.chekIssuedBy(value, 'issued_by')
                this.$store.dispatch('setEmployee', { value: value.toUpperCase(), index: 'issued_by' })
            }            
        },
        place_of_birth: {
            get () {
                return this.$store.state.employees.place_of_birth 
            },
            set (value) {
                this.chekIssuedBy(value, 'place_of_birth')
                this.$store.dispatch('setEmployee', { value: value.toUpperCase(), index: 'place_of_birth' }) 
            }            
        },
        code: {
            get () {
                return this.$store.state.employees.code
            },
            set (value) {
                if ( value.length == 3 ) {
                    value = value + '-'
                }
                this.chekCode(value)
                this.$store.dispatch('setEmployee', { value: value.toUpperCase(), index: 'code' })

            }             
        },
        date_of_birth: {
            get () {
                return this.$store.state.employees.date_of_birth
            },
            set (value) {
                if ( ( value.length == 2 ) || (value.length == 5)){
                    value = value + '.'
                }
                this.chekDate(value, 'date_of_birth')
                this.$store.dispatch('setEmployee', { value: value.toUpperCase(), index: 'date_of_birth' })
            }             
        },
        date_of_issue: {
            get () {
                return this.$store.state.employees.date_of_issue
            },
            set (value) {
                if ( ( value.length == 2 ) || (value.length == 5)){
                    value = value + '.'
                }
                this.chekDate(value, 'date_of_issue')
                this.$store.dispatch('setEmployee', { value: value.toUpperCase(), index: 'date_of_issue' })
            }             
        }
    },
    methods: {
        toggleSex() {
            this.sex = 'муж.'
        },
        add(){
            if ( JSON.stringify(this.errorFalse) === JSON.stringify(this.error) ) {
                this.$router.push('/employees')
                this.$store.dispatch('addEmployee')
            } else {
                for ( let key in this.error) {
                    if (this.error[key] != false)
                        this.error[key] = true
                }
                this.rules = 'исправьте все ошибки'
            }
        },
        edit(){
            if ( JSON.stringify(this.errorFalse) === JSON.stringify(this.error) ) {
                this.$store.dispatch('editEmployee', this.$route.params.id)
                this.$router.push('/employees')
            } else {
                for ( let key in this.error) {
                    if (this.error[key] != false)
                        this.error[key] = true
                }
                this.rules = 'исправьте все ошибки'
            }
        },
        onFocus(value) {
            console.log('edfefrf')
            switch (value) {
                case 'surname':
                    this.isMax = false
                    this.rules = 'если в паспорте в фамилии присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                    break
                case 'name':
                    this.isMax = false
                    this.rules = 'если в паспорте в имени присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                    break;
                case 'patronymic':
                    this.isMax = false
                    this.rules = 'если в паспорте в отчестве присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                    break
                case 'sex':
                    this.isMax = false
                    this.rules = ''
                    break
                case 'series':
                    this.isMax = false
                    this.rules = 'серию и номер паспорта необходимо проверить на сайте МВД по списку недействительных российских паспортов'
                    break
                case 'number':
                    this.isMax = false
                    this.rules = 'серию и номер паспорта необходимо проверить на сайте МВД по списку недействительных российских паспортов'
                    break

                case 'issued_by':
                    this.isMax = true
                    this.rules = 'пишите кем выдан паспорт без сокращений имен собственных. Обращаем внимание, что "отдел" и "отделением" разные слова. Если слово подчеркнуто красным - значит ошибка в слове, зеленым - возможно ошибка. '
                    break
                case 'date_of_issue':
                    this.isMax = false  
                    this.rules = 'дата выдачи паспорта'
                    break
                case 'code':
                    this.rules = 'код подразделения'
                    break
                case 'date_of_birth':
                    this.isMax = false
                    this.rules = 'дата рождения'
                    break
                case 'place_of_birth':
                    this.isMax = true
                    this.rules = 'пишите место рождения без сокращений имен собственных. Если слово подчеркнуто красным - значит ошибка в слове, зеленым - возможно ошибка.'   
                    break
                case 'position':
                    this.isMax = false
                    this.rules = 'должность согласно штатному расписанию'
                    break
                case 'snils':
                    this.isMax = false
                    this.rules = 'СНИЛС'
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
        addPatr() {
            if (!this.readOnlyPatronymic) {
                this.error.patronymic = false
                this.$store.dispatch('setEmployee', { value: null, index: 'patronymic' }) 
            } else {
                this.error.patronymic = null
            }
            this.readOnlyPatronymic = !this.readOnlyPatronymic
        },
        addPatrTr() {
            if (!this.readOnlyPatronymicTr) {
                this.error.patronymicTr = false
                this.$store.dispatch('setEmployee', { value: null, index: 'patronymicTr' }) 
                // this.$store.dispatch('setPatronymicTr', null)  
            } else {
                this.error.patronymicTr = null
            }
            this.readOnlyPatronymicTr = !this.readOnlyPatronymicTr
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
                    return ( (item != 'РП.' ) && (item != 'АВТ.' ) && (item != 'ОКР.' ) && (item != 'Р-ОН' ) && (item != 'ОБЛ.') && (item != 'Д.') && (item != 'ДЕР.') && (item != 'ИМ.') && (item != 'ДЕТ.') && (item != 'СТ.') && (item != 'РЕСПУБ.') && (item != 'РЕСП.') && (item != 'Р.') && (item != 'Р-НЕ') && (item != 'Р-НА') && (item != 'С.') && (item != 'ПОС.') && (item != 'П.') && (item != 'ГГ.') && (item != 'Г.') && (item != 'ГОР.') && (item != 'Р.')) 
                })
                newArr = arrFilter.map( (item, i) => {
                    console.log( i + ": " + item )
                    if ( value == '' ) {
                        err = true
                        return '<span style="text-decoration: underline; color: rgba(217, 48, 37, 1)"> Заполните поле</span>'
                    }
                    if (~item.indexOf(".")) {
                        err = true
                        return '<span style="text-decoration: underline; color: rgba(217, 48, 37, 1)">' + item + '</span>'
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
                    this.errorText.snils = 'Формат СНИЛСа 111-111-111-11'   
                }
                else  {
                    let regex3 = /\d{1,}/g
                    let as = value.match(regex3).join('')
                    if ( !this.chekSnilsSum(as) ) {
        
                        this.error.snils = true
                        this.errorText.snils = 'Неверная контрольная сумма'
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
        }
    },
    created() {
        if ( this.$route.name == 'edit') {     
            this.$store.dispatch('getEditEmployee', this.$route.params.id)
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
            console.log(' пытаемся сохрнаиться ')
        }
        if ( this.$route.name == 'new') {
            this.$store.dispatch('clearEmployee')
            console.log(' пытаемся создать нового ')
        }
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
    padding: 0 12px;
}
h1 {
    font-size: 18px;
    margin: 10px 0;
}

.employee-wrap {
    font-size: 15px;
    /* margin-top: 25px; */
}
.item {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}
.item-wrap {
    display: flex;
    flex-direction: column;
}
.item-top {
    display: flex;
    margin-bottom: 5px;
}
.item-top-check {
    /* margin-left: 5px; */
    width: 48px;
    text-align: center;
    /* padding: 4px 12px 4px;
    background-color: rgba(217, 48, 37, .1);
    border: 1px solid rgba(217, 48, 37, 1);
    color: rgba(217, 48, 37, 1);
    border-radius: 14px; */
    cursor: pointer;
}
.item-top-check svg {
    position: relative;
    top: 2px;
}
.label-name {
    padding: 4px 0 8px;
    color: #909499;
}
.label-show {
    display: none;
}
.label-error {
    padding: 4px 0 4px;
    color: rgba(217, 48, 37, 1); 
    font-size: 12px;
}
.label-error-issued {
    margin-top: 4px;
}
.in {
    font-family: 'Roboto', sans-serif;
    outline: 0;
    padding: 9px 10px 11px;
    border-radius: 4px;
    border: 1px solid #caced4;
    font-size: 15px;
    color: #2c3e50;
    font-weight: 600;
    word-wrap: break-word;
    /* border-color: #caced4; */
}
.in::placeholder {
    font-weight: 400;
    color: #909499;
    /* text-align: left; */
}
.in:focus:not(.input-err) {
    border: 1px solid rgb(117, 116, 116);
}
.input-err {
    border-color: rgb(241, 2, 2);
}
.activeInput {
    background-color: rgba(212, 212, 212, .5);
}
svg {
    fill: #caced4;
    /* transition: all .25s ease-in; */
}
.svg-active {
    /* transition: all .25s ease-in; */
    fill: rgba(66, 133, 244, 1);
}
.wrap-sex {
    display: flex;
    align-items: center;
    padding: 4px 2px;
}
.wrap-sex svg {
    margin-right: 5px;
}
.wrap-sex label, .wrap-sex svg {
    cursor: pointer;
}
.radio {
    display: none;
    cursor: pointer;
}
.line {
    margin: 25px 0 15px;
    border-top: 1px solid #caced4;
}
.snils {
    width: 115px;
}
.series {
    display: block;
    width: 35px;
}

.number {
    width: 55px;
   
}
.date {
    width: 78px;

}

.code {
    width: 60px;

}

.btn-wrap {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 0 0 25px;
}
.btn-clear {
    border-radius: 19px;
    background-color: rgba(189, 3, 3, .1);
    color: rgba(189, 3, 3, 1);
    font-weight: 600;
    border: 1px solid rgba(189, 3, 3, 1);
    transition: all 0.15s ease-out;
    padding: 10px 15px;
    cursor: pointer;
    outline: 0;
    font-size: 15px;
    /* align-self: center; */
    /* margin: auto; */

}
.btn-clear:hover {
    background-color: rgba(189, 3, 3, 1);
    color: white;
}
@media (min-width: 1280px) {
    .mo {
        justify-content: center;
    }  

    .container {
        width: 1280px; 
    }
    .mo-wrap {
        padding: 0 25px;
        /* padding-top: 15px; */
    }
    
    .employee-wrap {
        margin-top: 25px;
    }
    h1 {
        font-size: 20px;
        margin: 25px 0;
    }
    .label-name {
        padding: 0;
        align-self: center;
        width: 250px;
    }
    .item-flex {
        flex-direction: row;
        justify-content: space-between;
    }
    .item-block {
        display: block;
    }
    .item-wrap {
        /* display: flex; */
        
        flex-grow: 2;
    }
    .item-top {
        margin-bottom: 0;
        width: 250px;
    }
    .item-top>.label-name {
        margin-bottom: 0;
        width: auto;
    }
    .item-top-check svg {
        position: relative;
        top: 9px;
    }
    .line {
        margin: 45px 0 35px;
        border-top: 1px solid #caced4;
    }
    .btn-wrap {
        margin: 20px 0 50px;
    }
}
</style>