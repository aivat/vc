<template>
    <div class="mo">
        <div class="container">
            <div class="mo-wrap">
                <header>
                    <div class="mo-body-link">
                        <router-link to="/five" class="btn-link">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="48px" height="48px" viewBox="1 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                            <path d="M15.41,16.59L10.83,12l4.58-4.59L14,6l-6,6l6,6L15.41,16.59z"/>
                            <path fill="none" d="M0,0h24v24H0V0z"/>
                            </svg>
                        </router-link>
                    </div>
                    <h1>
                       Скачайте документы
                    </h1>
                    <div class="mo-body-link" style="width:48px;">
                    </div>
                </header>
                <AppRules class="rul">
                    {{ rules }}
                </AppRules>
                <div class="mo-body">
                    <div class="collective">
                        <div class="collective-item">
                            <span>Общая доверенность</span>
                            <span  class="collective-item-count">{{ countCompleted }}</span>
                            <div class="collective-item-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="collective-item">
                            <div class="btn" @click="reset">
                                <div class="btn-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
                                </div>
                                <div class="btn-text">Обнулить</div>
                            </div>
                            <!-- <button class="btn-clear">Сбросить</button> -->
                            <div class="collective-item-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg>
                            </div>
                        </div>
                        <div class="collective-item">
                            <div class="btn" @click="reset">
                                <div class="btn-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19 13v5c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1zm-6-.33l1.88-1.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-3.59 3.59c-.39.39-1.02.39-1.41 0L7.7 12.2c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L11 12.67V4c0-.55.45-1 1-1s1 .45 1 1v8.67z"/></svg>
                                </div>
                                <div class="btn-text">Скачать</div>
                            </div>
                            <div class="collective-item-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg>
                            </div>
                        </div>
                        <!-- <div class="collective-item">
                            <button class="btn-clear" >Скачать</button>
                            <div class="collective-item-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg>
                            </div>
                        </div> -->
                    </div>
                    <div class="main-wrap">
                        <div class="search" id="search" v-bind:style="styleObject">
                            <div class="search-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                            </div>
                            <input class="search-input" v-model="search" placeholder="Начните вводить имя работника" autocomplete="off" spellcheck="false" autofocus>
                            <div class="add-wrap" @click="newEm">
                                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                                <span  class="add-wrap-text">Добавить работника</span>
                            </div>
                        </div>
                        <div class="main">
                            <ul>
                                <li class="main-item" v-for="(employee, index) in employeesDouble" :key="index">
                                    <div class="main-item-top" :class="{ 'active-check': employee.completed }">
                                        <div class="main-item-name" @click="picked(employee.id)">
                                            <div class="main-item-top-wrap-svg" v-bind:class="{ 'active-svg-down': employee.id == ispicked ?  true : false }">
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"/></svg>
                                            </div>
                                            <label :for="index" v-html="employee.surname + ' ' + employee.name + ' ' + employee.patronymic"></label>
                                        </div>
                                        <div class="main-item-action">
                                            <div class="main-item-top-wrap">
                                                <div class="main-item-top-wrap-svg" @click="editEm(employee.id)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                                                </div>
                                                <router-link class="main-item-top-wrap-text" :to="{ name: 'edit', params: { id: employee.id }}">Изменить</router-link>
                                            </div>
                                            <div class="main-item-top-wrap">
                                                <div class="main-item-top-wrap-svg"  @click="removeEmployee(employee.id)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg>
                                                </div>
                                                <span  class="main-item-top-wrap-text" @click="removeEmployee(employee.id)">Удалить</span>
                                            </div>
                                            <div class="main-item-top-wrap">
                                                <div class="main-item-top-wrap-svg" @click="complete(employee.id)">
                                                    <svg v-show="employee.completed == false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z"/></svg>
                                                    <svg class="svg-check" v-show="employee.completed == true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"/></svg>
                                                </div>
                                                <span class="main-item-top-wrap-text" @click="complete(employee.id)">{{ employee.completed == true ? 'Убрать' : 'Выбрать' }}</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="no-active" v-bind:class="{ 'active': employee.id == ispicked ?  true : false }">
                                        <button @click="statement()">Скачать заявление</button>
                                        <button @click="powerAttorneyOrganization()">Скачать доверенность от орг-и</button>
                                        <button @click="powerAttorneyEmployee()">Скачать доверенность от заявителя</button>
                                        <button @click="consentInd()">Скачать согласие</button>
                                    </div>
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
import { mapGetters} from 'vuex'
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import petrovich from 'petrovich'

import AppRules from './AppRules'

export default {
    components: {
        AppRules
    },
    data () {
        return {
            search: '',
            ispicked: null,
            rules: ' все поля форм заполняются строго как в документах. ',
            styleObject: {
                boxShadow: 'none',
                // top: '360px',
                // position: 'static'
            },
            arr: []
        }
    },
    computed: {
        employeesCompleted() {
            return this.$store.getters.getEmployeesCompleted
        },
        countCompleted() {
            return this.$store.getters.countCompleted
        },
        employees() {
            return this.$store.state.employees.employees
        },
        employeesDouble() {
            return this.$store.getters.getEmployees(this.search)
        },
        pickedEmployee: {
            get () {
                return this.$store.state.individual.individual.id
            },
            set (value) {
                console.log('value=', value)
                this.$store.dispatch('setIndividual', value)
                this.$store.dispatch('setId', value)
            }            
        },
        mo() {
            return this.$store.state.mo.myMOInfo
        },
        ind() {
            return this.$store.state.individual.individual
        },
        authrepresent() {
            return this.$store.state.authrepresent.authrepresent
        }
    },
    created () {
        this.$store.dispatch('initialiseStoreMyMOInfo')
        this.$store.dispatch('initialiseStoreIndividual')
        this.$store.dispatch('initialiseStoreAuthRepresent')
        window.addEventListener('scroll', this.handleScroll)
        
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        generationListEmp() {
            this.employeesCompleted.forEach((item, i) => {
                this.arr.push([{
                    rowSpan: 2,
                    text: i
                    }, {
                    text: this.toLowerCaseStr(item.position) + '\n' + item.surname + ' ' + item.name + ' ' + item.patronymic + ' ' + this.getPatronymicTr(), alignment: 'left' 
                    }],[{
                    text: ''
                    }, {
                        text: 'паспорт серия ' + item.series + ' № ' + item.number + ', выдан ' + item.date_of_issue + ' г. ' + item.issued_by
                    }
                ])
            })

            return this.arr
        },
        toLowerCaseStr(text) {
            let textTemp = text[0] + text.substring(1).toLowerCase()
            return textTemp
        },
        handleScroll (event) {
            let hTop = 360
            let search = document.getElementById('search')
            console.log('window.pageYOffset=', window.pageYOffset)
            console.log('search.scrollTop=', search.scrollTop)
            let h = 0
            if (window.innerWidth>=1200) {
                h = 72
            } else h = 307
            if (window.pageYOffset>=h) { 
                // this.styleObject.top ="53px";
                this.styleObject.boxShadow = "0 2px 3px -1px rgba(0,0,0,0.12)";
                // this.styleObject.position = "fixed"
            }  else {
                    // this.styleObject.top = (hTop - window.pageYOffset)+"px";
                    this.styleObject.boxShadow = "none";
                    // this.styleObject.position = "static"
                }  
        },
        editEm(id) {
            this.$router.push('/employees/'+id+'/edit')
        },
        newEm() {
            this.$router.push('/employees/new')
        },
        removeEmployee(id) {
            this.$store.dispatch('removeEmployee',  id)
        },
        searchEmployee(req) {
            console.log('req=', req)
        },
        complete(id) {
            this.$store.dispatch('completeEmployee',  id)
        },
        reset() {
            this.$store.dispatch('resetComplete')
        },
        picked(value) {
            this.$store.dispatch('setIndividual', value)
            // this.$store.dispatch('setId', value)
            this.ispicked = value
            // console.log('qwe=',this.generationListEmp())
        },
       getPatronymicTr() {
            if ( this.ind.patronymicTr != null ) {
                return this.ind.patronymicTr
            } else return ''
        },
        editNameGenitive(name) {
            let nameArray = name.split(' ')
            let nameObject = {
                first: nameArray[1],
                middle: nameArray[2],
                last: nameArray[0]                
            }
            let temp = petrovich(nameObject, 'genitive')
            let nameStr = temp.last.toUpperCase() + ' ' + temp.first.toUpperCase() + ' ' + temp.middle.toUpperCase()
            // console.log('nameObject=', nameObject)
            return nameStr
        },  
        brevisNameHeadPhysician(name) {
            let brevis = name.split(' ')
            return brevis[1].charAt(0) + '.' + brevis[2].charAt(0) + '. ' + brevis[0]
        },
        consentInd() {
            pdfMake.fonts = {
            myFont: {
                normal: 'TimesNewRoman.ttf',
                bold: 'TimesNewRomanBold.ttf',
                italics: 'TimesNewRoman.ttf',
                bolditalics: 'TimesNewRoman.ttf'
                }
            } 
            var docDefinition = {
                title:'Согласие работника',
                pageSize:'A4',
                pageMargins:[30, 30],
                defaultStyle: {
                    font: 'myFont',
                    fontSize: 14
                },              
                
                styles: {
                    body: {
                        leadingIndent: 25,
                        alignment: 'justify',
                    },
                    users: {
                        decoration: 'underline'
                    },
                   usersBold: {
                        decoration: 'underline',
                        bold: true
                    },
                    data: {
                       leadingIndent: 25
                    },
                    signature: {

                    }
                },
                content: [{
                    text:'СОГЛАСИЕ',
                        margin: [0, 0 , 0, 0],
                        alignment: 'center',
                        style: {
                            bold: true
                        }
                    }, {
                        text:'на обработку персональных данных',
                        alignment: 'center',
                        // style:'body',
                        margin: [0, 0 , 0, 25]
                    }, {
                        text: [
                            'Я, ',
                            {
                                text: this.ind.surname + ' ' + this.ind.name + ' ' + this.ind.patronymic + ' ' + this.getPatronymicTr(),
                                style: 'usersBold',
                            },{
                                text: ', паспорт: '
                            },{ 
                                text: this.ind.series + ' ' + this.ind.number,
                                style: 'usersBold'
                            },{
                                text: ' выдан: '
                            },{
                                text: this.ind.issued_by,
                                style: 'usersBold'
                            },{
                                text: ', дата выдачи: '
                            }, {
                                text: this.ind.date_of_issue,
                                style: 'usersBold'
                            }, {
                                text: ' г.,'
                            }
                        ],
                        style: 'data'
                    }, {                                                  
                        text:'в соответствии с ч. 4 ст. 9 Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных», даю своё согласие Удостоверяющему центру ГБУЗ «МИАЦ» (далее – Удостоверяющий центр), в лице директора Варенниковой Юлии Викторовны, действующей на основании Устава, расположенному по адресу г. Оренбург, ул. Маршала Жукова, д.42, на обработку моих персональных данных, с использованием или без использования средств автоматизации: сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, обезличивание, блокирование, удаление, уничтожение, включающих: паспортные данные, должность, сведения о месте работы, адрес электронной почты, контактный(е) телефон(ы), страховой номер индивидуального лицевого счёта в Пенсионном фонде России (СНИЛС), индивидуальный номер налогоплательщика (ИНН), предоставляемых в Удостоверяющий центр согласно Регламенту Удостоверяющего центра (находящегося по адресу http://uc.mzorb.ru), в целях получения квалифицированного сертификата ключа проверки электронной подписи (далее - КСКПЭП), в соответствии со ст. 18 Федерального закона от 06.04.2011 №63-ФЗ «Об электронной подписи».',
                        style: 'body'                     
                    }, {
                        text:'Признаю, что мои персональные данные, в составе  КСКПЭП, относятся к общедоступным персональным данным, в соответствии с ч. 3 ст. 15 Федерального закона от 06.04.2011 №63-ФЗ «Об электронной подписи».',
                       
                        style: 'body'
                    }, {
                        text: 'Настоящее согласие действует со дня его подписания до дня предоставления соответствующего отзыва в письменной форме или в случае прекращения деятельности Удостоверяющего центра.',
                       
                        style: 'body'             
                    }, {
                        columns: [
                            {
                                text: this.getDateNow(),
                            }, {
                            stack: [
                                // second column consists of paragraphs
                                '___________________________________',
                                '(подпись субъекта персональных данных)',
                            ],
                                fontSize: 8
                            },  
                        ],
                        margin: [0, 45, 0, 0],
                        // style: 'body',
                        columnGap: 230
                    }

                ]
            }
            // console.log('this.surname=', this.surname)
            let name = this.ind.surname + '_' + this.ind.name.charAt(0) + this.ind.patronymic.charAt(0)+ '_согласие.pdf'
            pdfMake.createPdf(docDefinition).download(name)
        },
        consentRepresent() {
            pdfMake.fonts = {
            myFont: {
                normal: 'TimesNewRoman.ttf',
                bold: 'TimesNewRomanBold.ttf',
                italics: 'TimesNewRoman.ttf',
                bolditalics: 'TimesNewRoman.ttf'
                }
            } 
            var docDefinition = {
                title:'Согласие уполномоченного представителя',
                pageSize:'A4',
                pageMargins:[30, 30],
                defaultStyle: {
                    font: 'myFont',
                    fontSize: 14
                },              
                
                styles: {
                    body: {
                        leadingIndent: 25,
                        alignment: 'justify',
                    },
                    users: {
                        decoration: 'underline'
                    },
                   usersBold: {
                        decoration: 'underline',
                        bold: true
                    },
                    data: {
                       leadingIndent: 25
                    },
                    signature: {

                    }
                },
                content: [{
                    text:'СОГЛАСИЕ',
                        margin: [0, 0 , 0, 0],
                        alignment: 'center',
                        style: {
                            bold: true
                        }
                    }, {
                        text:'на обработку персональных данных',
                        alignment: 'center',
                        // style:'body',
                        margin: [0, 0 , 0, 25]
                    }, {
                        text: [
                            'Я, ',
                            {
                                text: this.surname + ' ' + this.name + ' ' + this.patronymic,
                                style: 'usersBold',
                            },{
                                text: ', паспорт: '
                            },{ 
                                text: this.series + ' ' + this.number,
                                style: 'usersBold'
                            },{
                                text: ' выдан: '
                            },{
                                text: this.issued_by,
                                style: 'usersBold'
                            },{
                                text: ', дата выдачи: '
                            }, {
                                text: this.date_of_issue,
                                style: 'usersBold'
                            }, {
                                text: ' г.,'
                            }
                        ],
                        style: 'data'
                    }, {                                                  
                        text:'в соответствии с ч. 4 ст. 9 Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных», даю своё согласие Удостоверяющему центру ГБУЗ «МИАЦ» (далее – Удостоверяющий центр), в лице директора Варенниковой Юлии Викторовны, действующей на основании Устава, расположенному по адресу: г. Оренбург, ул. Маршала Жукова, д.42, на обработку моих персональных данных, с использованием или без использования средств автоматизации: сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, обезличивание, блокирование, удаление, уничтожение, включающих: паспортные данные, должность, сведения о месте работы, предоставляемых в Удостоверяющий центр, согласно Регламенту Удостоверяющего центра (находящегося по адресу http://uc.mzorb.ru), в целях подтверждение права предоставления документов для получения квалифицированного сертификата ключа проверки электронной подписи (далее – КСКПЭП), подтверждения права обращения за получением КСКПЭП от имени заявителя, в соответствии со ст. 18 Федерального закона от 06.04.2011 №63-ФЗ «Об электронной подписи».',
                        style: 'body'                     
                    }, {
                        text: 'Настоящее согласие действует со дня его подписания до дня предоставления соответствующего отзыва в письменной форме или в случае прекращения деятельности Удостоверяющего центра.',
                       
                        style: 'body'             
                    }, {
                        columns: [
                            {
                                text: this.getDateNow(),
                            }, {
                            stack: [
                                // second column consists of paragraphs
                                '___________________________________',
                                '(подпись субъекта персональных данных)',
                            ],
                                fontSize: 8
                            },  
                        ],
                        margin: [0, 45, 0, 0],
                        // style: 'body',
                        columnGap: 230
                    }

                ]
            }
            console.log('this.surname=', this.surname)
            let name = this.surname + '_' + this.name.charAt(0) + this.patronymic.charAt(0)+ '_согласие.pdf'
            pdfMake.createPdf(docDefinition).download(name)
        },
        getDateNow() {
            let date = new Date()
            let monthA = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',')
            let strDate = date.getDate() + ' ' + monthA[date.getMonth()] + ' ' + date.getFullYear() + ' г.'

            return strDate
        },
        statement() {
            pdfMake.fonts = {
                myFont: {
                    normal: 'TimesNewRoman.ttf',
                    bold: 'TimesNewRomanBold.ttf',
                    italics: 'TimesNewRoman.ttf',
                    bolditalics: 'TimesNewRoman.ttf'
                }
            }
            var docDefinition = {
                title:'Заявление на изготовление сертификата ключа проверки электронной подписи',
                pageSize:'A4',
                pageMargins:[30, 30],
                defaultStyle: {
                    font: 'myFont',
                    fontSize: 11
                },              
                styles: {
                    body: {
                        leadingIndent: 30,
                        alignment: 'justify',
                    },
                    users: {
                        decoration: 'underline'
                    },
                    usersBold: {
                        decoration: 'underline',
                        bold: true
                    },
                    data: {
                       leadingIndent: 30
                    },
                    signature: {

                    }
                },
                content: [
                    {
                        text: 'Заявление на изготовление сертификата ключа проверки электронной подписи',
                        alignment: 'center',
                        margin: [0, 0, 0, 20],
                        style: {
                            bold: true
                        }
                    }, {
                        text: this.mo.fullname,
                        alignment: 'center',
                        margin: [0, 0, 0, 10]
                    }, {
                        text: [
                            {
                            //     text: this.mo.fullname,
                            //     style: 'users'
                            // },{
                                text: 'в лице '
                            },{
                                // text: 'главного врача',
                                text: this.mo.position.toLowerCase(),
                                style: 'users'
                            }, {
                                text: ' '
                            }, {
                                text: this.editNameGenitive(this.mo.head_physician),
                                // alignment: 'center',
                                // margin: [0, 7, 0, 7],
                                style: {
                                    bold: true,
                                    decoration: 'underline'
                                }      
                            }, {
                                text: ', действующего на основании '
                            }, { 
                                // text: 'устава',
                                text: this.mo.basis.toLowerCase(),
                                style: 'users'
                            }, {
                                text:', просит изготовить квалифицированный сертификат ключа проверки электронной подписи уполномоченного представителя, в соответствии с указанными в настоящем заявлении данными, передать в единую систему идентификации и аутентификации сведения о лице, получившем квалифицированный сертификат подписи уполномоченного представителя'
                            }
                        ],
                        style: 'body'
                    // }, {
                    //     text: this.mo.head_physician,
                    //     alignment: 'center',
                    //     margin: [0, 7, 0, 7],
                    //     style: 'users'
                    // }, {
                    //     text: [
                    //         {
                    //             text: 'действующего на основании ',
                    //         }, { 
                    //             text: 'устава',
                    //             style: 'users'
                    //         }, {
                    //             text:', просит изготовить квалифицированный сертификат ключа проверки электронной подписи уполномоченного представителя, в соответствии с указанными в настоящем заявлении данными, передать в единую систему идентификации и аутентификации сведения о лице, получившем квалифицированный сертификат подписи уполномоченного представителя'
                    //         }
                    //     ],
                    //     style: 'body'
                    }, {
                        // text: this.ind.surname + ' ' + this.ind.name + ' ' + this.ind.patronymic,
                        text: this.editNameGenitive(this.ind.surname + ' ' + this.ind.name + ' ' + this.ind.patronymic) + ' ' + this.getPatronymicTr(),
                        alignment: 'center',
                        margin: [0, 5, 0, 5],
                        style: 'usersBold'
                    }, {
                        columns: [
                            {
                                // width: 190,
                                 width: 'auto',
                                text: 'пол: '
                            }, {
                                width: 'auto',
                                text: this.ind.sex,
                                style: 'usersBold'
                            }                            
                        ],
                        columnGap: 2,
                        //  margin: [0, 0, 0, 2]
                    }, {
                        columns: [
                            {
                                // width: 190,
                                 width: 'auto',
                                text: 'дата рождения:'
                            }, {
                                width: 'auto',
                                text: this.ind.date_of_birth,
                                style: 'usersBold'
                            }                            
                        ],
                        columnGap: 2,
                        //  margin: [0, 0, 0, 2]
                    }, {
                        columns: [
                            {
                                // width: 190,
                                 width: 'auto',
                                text: 'место рождения:'
                            }, {
                                width: 'auto',
                                text: this.ind.place_of_birth,
                                style: 'usersBold'
                            }                            
                        ],
                        columnGap: 2,
                        //  margin: [0, 0, 0, 2]
                    }, {
                        columns: [
                            {
                                // width: 190,
                                 width: 'auto',
                                text: 'документ, удостоверяющий личность, паспорт:'
                            }, {
                                width: 'auto',
                                text: this.ind.series + ' № ' + this.ind.number,
                                style: 'usersBold'
                            }                            
                        ],
                        columnGap: 2,
                        //  margin: [0, 0, 0, 2]
                    }, {
                        columns: [
                            {
                                // width: 190,
                                 width: 'auto',
                                text: 'дата выдачи:'
                            }, {
                                width: 'auto',
                                text: this.ind.date_of_issue,
                                style: 'usersBold'
                            }                            
                        ],
                        columnGap: 2,
                        //  margin: [0, 0, 0, 2]
                    }, {
                        columns: [
                            {
                                // width: 190,
                                 width: 'auto',
                                text: 'выдан: '
                            }, {
                                width: 'auto',
                                text: this.ind.issued_by,
                                style: 'usersBold'
                            }                            
                        ],
                        columnGap: 2,
                        // margin: [0, 0, 0, 2]
                    }, {
                        columns: [
                            {
                                // width: 190,
                                 width: 'auto',
                                text: 'код подразделения: '
                            }, {
                                width: 'auto',
                                text: this.ind.code,
                                style: 'usersBold'
                            }                            
                        ],
                        columnGap: 2,
                        margin: [0, 0, 0, 10]
                    }, {
                    //     text: [
                    //         {
                    //             text: 'пол: '
                    //         }, {
                    //             text: this.ind.sex,
                    //             style: 'usersBold' 
                    //         }, {
                    //             text: ', дата рождения: '
                    //         }, {
                    //             text: this.ind.date_of_birth,
                    //             style: 'usersBold'
                    //         }, {
                    //             text: ' г., место рождения: '
                    //         }, {
                    //             text: this.ind.place_of_birth,
                    //             style: 'usersBold'
                    //         }, {
                    //             text: ', документ, удостоверяющий личность: '
                    //         }, {
                    //             text: this.ind.series,
                    //             style: 'usersBold'
                    //         }, {
                    //             text: ' № '
                    //         }, {
                    //             text: this.ind.number,
                    //             style: 'usersBold'
                    //         }, {
                    //             text: ' от '
                    //         }, {
                    //             text: this.ind.date_of_issue,
                    //             style: 'usersBold'
                    //         }, {
                    //             text: ' г., выдан '
                    //         }, {
                    //             text: this.ind.issued_by,
                    //             style: 'usersBold'
                    //         }, {
                    //              text: ', код подразделения: '
                    //         }, {
                    //             text: this.ind.code,
                    //             style: 'usersBold'
                    //         }
                    //     ],
                    //     margin: [0, 0, 0, 10],
                    // }, {
                        table: {
                            // headers are automatically repeated if the table spans over multiple pages
                            // you can declare how many rows should be treated as headers
                            headerRows: 1,
                            widths: [ 120, 'auto', '*'],

                            body: [
                                [ 'CommonName', 'Фамилия, Имя, Отчество', this.ind.surname + ' ' + this.ind.name + ' ' + this.ind.patronymic + ' ' + this.getPatronymicTr() ],
                                [ 'Contry', 'RU', 'Россия' ],
                                [ 'State', 'Область', '56 Оренбургская область' ],
                                [ 'Locality', 'Город', this.mo.locality ],
                                [ 'streetAddress', 'Адрес', this.mo.streetAddress ], 
                                [ 'Organization', 'Наименование организации', this.mo.shortname_2 ],
                                [ 'Title', 'Должность', this.ind.position ],
                                [ 'OGRN', 'ОГРН', this.mo.OGRN ],
                                [ 'SNILS', 'СНИЛС', this.ind.snils ],
                                [ 'INN', 'ИНН', this.mo.INN ],
                                [ 'E-Mail (E)', 'Адрес электронной почты', this.mo.email]                            
                            ]
                        }
                    }, {
                        text: 'Руководитель организации:',
                        margin: [0, 20, 0, 0]
                    }, {
                        columns: [
                            {
                                width: 150,
                                
                                text: this.mo.position_nominative.toLowerCase()
                            }, {
                                width: 100,
                                fontSize: 8,
                                text: '________________________ (подпись)',
                                alignment: 'center'
                            }, {
                                width: '*',
                                text: this.brevisNameHeadPhysician(this.mo.head_physician)    
                            }
                        ],
                        columnGap: 80
                    }, {
                        text: 'М.П.',
                        fontSize: 8,
                        margin: [360, 0, 0, 0]

                    }, {
                        text: this.getDateNow(),
                        margin: [0, -5, 0, 0],
                    }, {
                        text: 'Уполномоченный представитель:',
                        margin: [0, 25, 0, 0]
                    }, {
                        columns: [
                            {
                                width: 150,
                                text: this.ind.position
                            }, {
                                width: 100,
                                fontSize: 8,
                                text: '________________________ (подпись)',
                                alignment: 'center',
                            }, {
                                width: '*',
                                text: this.brevisNameHeadPhysician(this.ind.surname + ' ' + this.ind.name + ' ' + this.ind.patronymic) 
                            },
                            
                        ],
                        columnGap: 80,
                    }, {
                        text: this.getDateNow(),
                        margin: [0, 5, 0, 0],
                    }, {
                        canvas: [
                            { type: 'line', x1: 0, y1: 25, x2: 535, y2: 25, dash: {length: 4, space: 4} }
                        ]
                    }, {
                        text: '(заполняется уполномоченным лицом ГБУЗ «МИАЦ»)',
                        alignment: 'center',
                        fontSize: 8
                    }, {
                        text: 'Данное заявление зарегистрировано в реестре Удостоверяющего центра ГБУЗ «МИАЦ».',
                        margin: [0, 15, 0, 0]
                    }, {
                        text: 'Регистрационный № _________________ от «_____» ________________ 20__ г.'
                    }, {
                        text: 'Уполномоченное лицо ГБУЗ «МИАЦ» (доверенность №__ от __ . __ . 20__г.)		___________(______________)',
                        margin: [0, 15, 0, 0]
                    }, {
                        text: 'М.П.',
                        fontSize: 8,
                        alignment: 'right',
                        margin: [0, 5, 40, 0]
                    }
                ]
            }
            let name = this.ind.surname + '_' + this.ind.name.charAt(0) + this.ind.patronymic.charAt(0)+ '_заявление.pdf'
            pdfMake.createPdf(docDefinition).download(name)
        },
        powerAttorneyOrganization() {
            pdfMake.fonts = {
            myFont: {
                normal: 'TimesNewRoman.ttf',
                bold: 'TimesNewRomanBold.ttf',
                italics: 'TimesNewRoman.ttf',
                bolditalics: 'TimesNewRoman.ttf'
            }
          }
            var docDefinition = {
                title:'Доверенность работника от организации',
                pageSize:'A4',
                pageMargins:[30, 30],
                defaultStyle: {
                    font: 'myFont',
                    fontSize: 11
                },              
                
                styles: {
                    body: {
                        leadingIndent: 25,
                        alignment: 'justify',
                    },
                    users: {
                        decoration: 'underline'
                    },
                    usersBold: {
                        decoration: 'underline',
                        bold: true
                    },
                    data: {
                       leadingIndent: 25
                    },
                    signature: {

                    }
                },
                content: [{
                    text:'ДОВЕРЕННОСТЬ',
                        margin: [0, 0 , 0, 0],
                        alignment: 'center',
                        style: {
                            bold: true
                        }
                    }, {
                        text:'на выполнение действий от лица организации',
                        alignment: 'center',
                        // style:'body',
                        margin: [0, 0 , 0, 25]
                    }, {
                        text: this.mo.locality
                    }, {
                        text: this.getDateNow(),
                        margin: [0, -12, 0, 0],
                        alignment: 'right'
                    }, {
                        text: [
                            {
                                text: 'Настоящей доверенностью ' + this.mo.fullname
                            }, {
                                text: ' ИНН ' + this.mo.INN + ','
                            }, {
                                text: ' ОГРН ' + this.mo.OGRN
                            }, {
                                text: ' в лице '
                            }, {
                                text: this.mo.position.toLowerCase(),
                                style: 'users'                                
                            }, {
                                text: ' '
                            }, {
                                text: this.editNameGenitive(this.mo.head_physician),
                                style: {
                                    bold: true,
                                    decoration: 'underline'
                                }                                    
                            }, {
                                 text: ', действующего на основании '
                            }, {
                                text: this.mo.basis.toLowerCase(),
                                style: 'users'                                
                            }, {
                                text: ', уполномочивает'
                            }
                        ],
                        margin: [0, 25, 0, 10],
                        style: 'body'
                    }, {
                        table: {
                            // headers are automatically repeated if the table spans over multiple pages
                            // you can declare how many rows should be treated as headers
                            headerRows: 2,
                            widths: [30, '*'],

                            body:      this.generationListEmp()
                            // this.arr
                                // [ {
                                //     rowSpan: 2, 
                                //     text: '1.'
                                //     }, { 
                                //     text: this.toLowerCaseStr(this.ind.position) + '\n' + this.ind.surname + ' ' + this.ind.name + ' ' + this.ind.patronymic + ' ' + this.getPatronymicTr(), alignment: 'left'
                                //     } ],
                                // [ {
                                //     text: ''
                                //     }, {
                                //         text: 'паспорт серия ' + this.ind.series + ' № ' + this.ind.number + ', выдан ' + this.ind.date_of_issue + ' г. ' + this.ind.issued_by
                                //     }
                                // ]
                            
                        }                     
                    }, {
                        text: 'совершать следующие действия:',
                        margin: [0, 15]
                    }, {
                        text: '1. Передавать в Удостоверяющий центр ГБУЗ «МИАЦ» комплекты документов, предусмотренных Регламентом Удостоверяющего центра ГБУЗ «МИАЦ» для регистрации, генерации ключа электронной подписи, создания сертификатов ключей проверки электронной подписи на свое имя;',
                        style:'body'
                    }, {
                        text: '2. Выступать в роли Пользователя УЦ ГБУЗ «МИАЦ»;',
                        style:'body'
                    }, {
                        text: '3. Получать в Удостоверяющем центре ГБУЗ «МИАЦ» ключи электронной подписи, сертификаты ключей проверки электронной подписи на свое имя;',
                        style:'body'
                    }, {
                        text: '4. Ознакомиться с информацией, содержащейся в заявлениях, запросах на изготовление, аннулирование (отзыв), приостановку сертификатов и информацией содержащейся в получаемых сертификатах ключей проверки электронных подписей включая кодовые, парольные фразы;',
                        style:'body'
                    }, {
                        text: '5. Получать руководства по обеспечению безопасности использования электронной подписи и средств электронной подписи;',
                        style:'body'
                    }, {
                        text: '6. Передавать в Удостоверяющий центр ГБУЗ «МИАЦ» заявления на аннулирование сертификатов ключей проверки электронных подписей;',
                        style:'body'
                    }, {
                        text: '7. Расписываться в соответствующих учетных формах, предназначенных для исполнения поручений определенных настоящей доверенностью, в том числе на сертификатах ключей проверки электронной подписи на бумажном носителе. ',
                        style:'body'
                    }, {
                        text: [
                            {
                                text: 'Настоящая доверенность действительна по '
                            }, {
                                text: this.mo.data_power_of_attorney,
                                style: 'usersBold'
                            }, {
                                text: ' г. Без права передоверия.'
                            }
                        ],
                        margin: [0, 20]
                    }, {
                        text: 'Собственноручную подпись уполномоченного представителя:',
                        margin: [0, 5]
                    }, {
                        table: {
                            headerRows: 1,
                            widths: ['auto', '*', 100],
                            alignment: 'center',
                            body: [ 
                                [{ text: 'Должность', alignment: 'center' }, { text: 'ФИО', alignment: 'center' }, { text: 'Подпись', alignment: 'center' }],
                                [this.ind.position, { text: this.ind.surname + ' ' + this.ind.name + ' ' + this.ind.patronymic + ' ' + this.getPatronymicTr(), alignment: 'center' },'']
                            ]
                        } 
                    // }, {
                    //     columns: [
                    //         {
                    //             width: 'auto',
                    //             text: this.ind.surname + ' ' + this.ind.name + ' ' + this.ind.patronymic
                    //         }, {
                    //             width: 130,
                    //             fontSize: 8,
                    //             text: '__________________________          (подпись)',
                    //             alignment: 'center',
                    //         }                            
                    //     ],
                    //     columnGap: 180,
                    //     alignment: 'right'
                    }, {
                        text: 'удостоверяю.'
                    }, {
                        text: 'Руководитель организации:',
                        margin: [0, 35, 0, 0]
                    }, {
                        columns: [
                            {
                                width: 120,
                                
                                text: this.mo.position_nominative.toLowerCase()
                            }, {
                                width: 130,
                                fontSize: 8,
                                text: '__________________________ (подпись)',
                                alignment: 'center'
                            }, {
                                width: '*',
                                text: this.brevisNameHeadPhysician(this.mo.head_physician)    
                            }
                        ],
                        columnGap: 80
                    }, {
                        text: 'М.П.',
                        fontSize: 8,
                        margin: [350, 0, 0, 0]
                    }
                ]
            }
            let name = this.ind.surname + '_' + this.ind.name.charAt(0) + this.ind.patronymic.charAt(0)+ '_дов-ть_организация.pdf'
            pdfMake.createPdf(docDefinition).download(name)          
        },
        powerAttorneyEmployee() {
            pdfMake.fonts = {
            myFont: {
                normal: 'TimesNewRoman.ttf',
                bold: 'TimesNewRomanBold.ttf',
                italics: 'TimesNewRoman.ttf',
                bolditalics: 'TimesNewRoman.ttf'
            }
          }
            var docDefinition = {
                title:'Доверенность на выполнение действий от лица сотрудника',
                pageSize:'A4',
                pageMargins:[30, 30],
                defaultStyle: {
                    font: 'myFont',
                    fontSize: 11
                },              
                
                styles: {
                    body: {
                        leadingIndent: 25,
                        alignment: 'justify',
                    },
                    users: {
                        decoration: 'underline'
                    },
                   usersBold: {
                        decoration: 'underline',
                        bold: true
                    },
                    data: {
                       leadingIndent: 25
                    },
                    signature: {

                    }
                },
                content: [{
                    text:'ДОВЕРЕННОСТЬ',
                        margin: [0, 0 , 0, 0],
                        alignment: 'center',
                        style: {
                            bold: true
                        }
                    }, {
                        text:'на выполнение действий от лица сотрудника',
                        alignment: 'center',
                        // style:'body',
                        margin: [0, 0 , 0, 25]
                    }, {
                        text: this.mo.locality
                    }, {
                        text: this.getDateNow(),
                        margin: [0, -12, 0, 0],
                        alignment: 'right'
                    }, {
                        text: [
                            {
                                text: this.mo.fullname
                            }, {
                                text: ' ИНН ' + this.mo.INN + ','
                            }, {
                                text: ' ОГРН ' + this.mo.OGRN
                            }
                        ],
                        margin: [0, 25, 0, 0],
                        style: 'body'
                    }, {
                        text: 'Настоящей доверенностью, я',
                        margin: [0, 15]
                    }, {
                        table: {
                            headerRows: 1,
                            widths: ['*'],

                            body: [   
                                [ { text: this.ind.position + ' ' + this.ind.surname + ' ' + this.ind.name + ' ' + this.ind.patronymic + ' ' + this.getPatronymicTr(), alignment: 'center'} ],
                                [ 'паспорт: серия ' + this.ind.series + ' № ' + this.ind.number + ', выдан ' + this.ind.date_of_issue + ' г. ' + this.ind.issued_by]
                            ]
                        }                     
                    }, {
                        text: 'уполномочиваю',
                        margin: [0, 15]
                    }, {
                        table: {
                            // headers are automatically repeated if the table spans over multiple pages
                            // you can declare how many rows should be treated as headers
                            headerRows: 1,
                            widths: ['*'],

                            body: [   
                                [ { text: this.authrepresent.position + ' ' + this.authrepresent.surname + ' ' + this.authrepresent.name + ' ' + this.authrepresent.patronymic, alignment: 'center'} ],
                                [ 'паспорт: серия ' + this.authrepresent.series + ' № ' + this.authrepresent.number + ', выдан ' + this.authrepresent.date_of_issue + ' г. ' + this.authrepresent.issued_by]
                            ]
                        }                     
                    }, {
                        text: 'совершать следующие действия:',
                        margin: [0, 15, 0, 0]
                    }, {
                        text: '1. Передавать в Удостоверяющий центр ГБУЗ «МИАЦ» комплекты документов, предусмотренных Регламентом Удостоверяющего центра ГБУЗ «МИАЦ» для регистрации доверителя(ей) в качестве Пользователя УЦ, генерации ключа электронной подписи, создания сертификатов ключей проверки электронной подписи доверителя(ей);',
                        style:'body'
                    }, {
                        text: '2. Получать в Удостоверяющем центре ГБУЗ «МИАЦ» ключи электронной подписи, сертификаты ключей проверки электронной подписи и в электронном виде и на бумажном носителе доверителя(ей);',
                        style:'body'
                    }, {
                        text: '3. Ознакомиться с информацией, содержащейся в заявлениях, запросах на изготовление, аннулирование (отзыв), приостановку сертификатов и информацией, содержащейся в получаемых сертификатах ключей проверки электронных подписей включая кодовые, парольные фразы доверителя(ей);',
                        style:'body'
                    }, {
                        text: '4. Получать руководства по обеспечению безопасности использования электронной подписи и средств электронной подписи;',
                        style:'body'
                    }, {
                        text: '5. Передавать в Удостоверяющий центр ГБУЗ «МИАЦ» заявления на аннулирование сертификатов ключей проверки электронных подписей доверителя(ей);',
                        style:'body'
                    }, {
                        text: '6. Расписываться в соответствующих учетных формах, предназначенных для исполнения поручений определенных настоящей доверенностью, в том числе на сертификатах ключей проверки электронной подписи на бумажных носителях доверителя(ей).',
                        style:'body'
                    }, {
                        text: [
                            {
                                text: 'Настоящая доверенность действительна по '
                            }, {
                                text: this.mo.data_power_of_attorney,
                                style: 'usersBold'
                            }, {
                                text: ' г. Без права передоверия.'
                            }
                        ],
                        margin: [0, 20]
                    }, {
                        columns: [
                            {
                                width: 'auto',
                                text: 'Собственноручную подпись '
                            }, {
                                width: 130,
                                fontSize: 8,
                                text: '__________________________ (подпись уполномоченного лица)',
                                alignment: 'center',                                
                             }, {
                                width: 'auto',
                                text: this.authrepresent.surname + ' ' + this.authrepresent.name + ' ' + this.authrepresent.patronymic + ' удостоверяю.',
                                alignment: 'center',                                
                            }
                        ]
                    // }, {
                    //     text: 'удостоверяю.',
                    //     margin: [0, 10, 0, 15]
                    // }, {
                    //     table: {
                    //         headerRows: 1,
                    //         widths: ['auto', '*', 100],
                    //         alignment: 'center',
                    //         body: [ 
                    //             [{ text: 'Должность доверителя', alignment: 'center' }, { text: 'ФИО', alignment: 'center' }, { text: 'Подпись', alignment: 'center' }],
                    //             [this.ind.position, { text: this.ind.surname + ' ' + this.ind.name + ' ' + this.ind.patronymic, alignment: 'center' },'']
                    //         ]
                    //     } 
                    }, {
                        text: 'Должность доверителя:',
                        margin: [0, 35, 0, 0]
                    }, {
                        columns: [
                            {
                                width: 120,
                                
                                text: this.ind.position.toLowerCase()
                            }, {
                                width: 130,
                                fontSize: 8,
                                text: '__________________________ (подпись доверителя)',
                                alignment: 'center'
                            }, {
                                width: '*',
                                text: this.brevisNameHeadPhysician(this.ind.surname + ' ' + this.ind.name + ' ' + this.ind.patronymic)    
                            }
                        ],
                        columnGap: 80
                    }, {
                        text: 'Руководитель организации:',
                        margin: [0, 35, 0, 0]
                    }, {
                        columns: [
                            {
                                width: 120,
                                
                                text: this.mo.position_nominative.toLowerCase()
                            }, {
                                width: 130,
                                fontSize: 8,
                                text: '__________________________ (подпись)',
                                alignment: 'center'
                            }, {
                                width: '*',
                                text: this.brevisNameHeadPhysician(this.mo.head_physician)    
                            }
                        ],
                        columnGap: 80
                    }, {
                        text: 'М.П.',
                        fontSize: 8,
                        margin: [350, 0, 0, 0]
                    }
                ]
            }
            let name = this.ind.surname + '_' + this.ind.name.charAt(0) + this.ind.patronymic.charAt(0)+ '_дов-ть_сотрудник.pdf'
            pdfMake.createPdf(docDefinition).download(name)            
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
    /* padding: 0 12px; */
    font-size: 15px;
}
h1 {
    font-size: 18px;
    margin: 15px 0 10px;
}
header {
    display: flex;
    justify-content: space-between;
    padding: 7px 12px;
}
.rul {
    padding: 0 12px;
}
.no-active {
    display: none;
    flex-direction: column;
    opacity: 0;
    transition: all .25s ease-in;
    /* justify-content:  */
}
.active {
    display: flex;
    opacity: 1;
}
.btn-link {
    display: block;
    width: 48px;
    height: 48px;
    color: rgba(66, 133, 244, 1);
    border-radius: 50%;
    background-color: rgba(66, 133, 244, .15);
    transition: all .15s ease-in;
    cursor: pointer;
}
.btn-link:hover {
    color: white;
    background-color: rgba(66, 133, 244, 1);
}
.btn-link>svg {
    fill: currentColor;
}
.mo-h2 {
    /* text-align: center; */
    padding: 10px 0;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
}
.collective {
    padding: 15px 15px 15px;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
    border-radius: 8px;
    margin: 10px 12px;
}
.collective-item {
    display: flex;
    color: #909499;
    align-items: center;
    padding: 4px 0;
}

.collective-item-svg {
    position: relative;
    fill: #909499;
    width: 48px;
    top: 3px;
    cursor: pointer;
}

.collective-item-svg:active {
    fill: rgba(66, 133, 244, 1);
}

.collective-item-count {
    color: white;
    display: inline-block;
    background-color: rgba(66, 133, 244, 1);
    padding: 4px 6px;
    border-radius: 8px;
    margin: 0 5px;
}
.line {
    border-top: 1px solid rgba(66, 133, 244, .1);
    margin: 10px 0;
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
    margin-right: 5px;
    /* align-self: center; */
    /* margin: auto; */

}
.btn-clear:hover {
    background-color: rgba(189, 3, 3, 1);
    color: white;
}
.btn {
    display: flex;
    align-items: center;
    margin-right: 25px;
    cursor: pointer;
}
.btn:hover {
    color: rgba(66, 133, 244, 1);
}
.btn-icon {
    height: 24px;
    margin-right: 5px;
    fill: currentColor;
}
.btn-text{
    padding: 8px 0;
}
.search {
    display: flex;
    border-top: 1px solid rgb(231, 232, 236);
    border-bottom: 1px solid rgb(231, 232, 236);
    padding: 7px 4px;
    background-color: white;
    /* border-radius: 4px; */
    /* position: fixed; */
    position: sticky;
    top: 51px;
    /* width: 100vw; */
}
.add-wrap {
    display: flex;
    fill: rgba(66, 133, 244, 1);
    width: 48px;
    justify-content: center;
    align-items: center;
}

.add-wrap-text {
    display: none;
}
.search-input {
   outline: none;
   flex-grow: 1;
   border: none;
}
.search-svg {
    display: flex;
    fill: #909499;
    width: 32px;
    justify-content: center;
    align-items: center;
}
.main {
    /* margin-top: 50px; */
    margin-top: 10px;
    min-height: 100vh;
    padding: 0 4px;
}
li {
    list-style-type: none;
}
ul {
    margin: 0;
    padding: 0;
}
.main-item {
    
}
.main-item-top {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    margin-top: 5px;
}

.main-item-top-wrap-text {
    display: none;
}
.main-item-top-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    cursor: pointer;
    color: rgb(144, 148, 153);
}
.main-item-top-wrap:hover {
    color: rgba(66, 133, 244, 1);
}
.main-item-name, .main-item-action {
    display: flex;
    align-items: center;
}
.main-item-name {
    /* align-items: flex-start; */
    cursor: pointer;
}
.main-item-top-wrap-svg {
    height: 24px;
    fill: currentColor;
    transition: all .15s ease-in;
}
.main-item-name>label {
    border-bottom: 1px dashed red;
    cursor: pointer;
}
.svg-check {
    fill: rgba(66, 133, 244, 1);
}
.active-check {
    background-color: rgba(0,0,0,0.14);
    border-radius: 4px;
}
.active-svg-down {
    transform: rotate(90deg)
}
button {
    font-size: 16px;
    padding: 10px 15px;
    border-radius: 19px;
    border: 0;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
    outline: 0;
    color: rgb(34, 34, 34);
    cursor: pointer;
    margin-bottom: 7px;
    /* background-color: white; */
    /* background-color: rgba(217, 48, 37, .05);  */
    /* color: rgba(217, 48, 37, 1);  */
    /* font-weight: 600; */
}
button:hover {
    background-color: rgba(0,0,0,0.25)
}
button:active {
    background-color: rgba(0,0,0,0.08)
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
        /* font-size: 16px; */
    }
    
    .employee-wrap {
        margin-top: 25px;
    }
    h1 {
        font-size: 20px;
        padding: 10px 0;
        margin: 0;
    }
    .mo-body {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        justify-content: center;
    }
    .collective {
        order: 2;
    }
    .main-wrap {
        order: 1;
        width: 800px;
        margin-right: 40px;
    }
    .add-wrap {
        /* display: none; */
        width: auto;
        cursor: pointer;
    }
    .add-wrap-text {
        display: block;
        color: rgb(144, 148, 153);
    }
    .search {
        border: 1px solid rgb(231, 232, 236);
        border-radius: 8px;
        margin-top: 10px;
        padding-right: 10px;
        top: 86px;
    }
    .main-item-top-wrap-text {
        display: block;
        color: rgb(144, 148, 153);
        text-decoration: none;
    }
    .main-item-top-wrap-text:hover {
        color: rgba(66, 133, 244, 1);
    }
    .main-item-top-wrap {
        width: auto;
        justify-content: flex-start;
    }
    .main-item-top-wrap:nth-child(2) {
        margin: 0 5px;
    }
    .main-item-top-wrap:last-child{
        width: 92px;
    }
    .main-item-top-wrap-svg {
        margin-right: 5px;
    }
}
</style>