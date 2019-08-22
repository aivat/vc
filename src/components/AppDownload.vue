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
                    <div class="mo-h2" >
                       Скачайте документы
                    </div>
                    <div class="mo-body-link">
                    </div>
                </header>

                <div class="mo-body">

                    <div class="individual">
                            <AppRules>
                                {{ rules }}
                            </AppRules>
                            <div class="individual-wrap">                         <button @click="consentRepresent()" class="consent-represent">Скачать согласие уполномоченного представителя</button>
                                <p>Документы для скачивания на заявителя:</p>
                                <button @click="statement()">Скачать заявление</button>
                                <button @click="powerAttorneyOrganization()">Скачать доверенность от организации</button>
                                <button @click="powerAttorneyEmployee()">Скачать доверенность от заявителя</button>
                                <button @click="consentInd()">Скачать согласие заявителя</button>
                                <router-link class="new-link" to="/three">Сгенерировать новые документы</router-link> 
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
// require('pdfmake/build/pdfmake.js')
// require('pdfmake/build/vfs_fonts.js')

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
            rules: ' скачайте документы, распечатайте, поставьте все подписи и печати.  '
        }
    },
    computed: {
        surname() {
            return this.$store.state.authrepresent.authrepresent.surname
        },
        name() {
            return this.$store.state.authrepresent.authrepresent.name
        },
        patronymic() {
            return this.$store.state.authrepresent.authrepresent.patronymic 
        },
        series() {
            return this.$store.state.authrepresent.authrepresent.series 
            
        },
        number() {
            return this.$store.state.authrepresent.authrepresent.number           
        },
        issued_by() {
            return this.$store.state.authrepresent.authrepresent.issued_by           
        },
        date_of_issue() {
            return this.$store.state.authrepresent.authrepresent.date_of_issue
                    
        },
        position() {
            return this.$store.state.authrepresent.authrepresent.position     
        },
        mo() {
            // console.log('this.mo.fullname=', this.$store.state.mo.myMOInfo)
            return this.$store.state.mo.myMOInfo
        },
        ind() {
            return this.$store.state.individual.individual
        },
        authrepresent() {
            return this.$store.state.authrepresent.authrepresent
        }

           
    },
    methods: {
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
                    columns: [
                            {
                                // width: 190,
                                width: 'auto',
                                text: 'Уполномоченное лицо ГБУЗ «МИАЦ»'
                            }, {
                                width: 'auto',
                                text: '___________(______________)',
                                style: 'usersBold'
                            }                            
                        ],
                        columnGap: 2,
                        margin: [0, 0, 0, 10]
                    // }, {
                    //     text: 'Уполномоченное лицо ГБУЗ «МИАЦ»   ___________(______________)',
                    //     margin: [0, 15, 0, 0]
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
                            headerRows: 1,
                            widths: ['*'],

                            body: [   
                                [ { text: this.ind.position + ' ' + this.ind.surname + ' ' + this.ind.name + ' ' + this.ind.patronymic + ' ' + this.getPatronymicTr(), alignment: 'center'} ],
                                [ 'паспорт серия ' + this.ind.series + ' № ' + this.ind.number + ', выдан ' + this.ind.date_of_issue + ' г. ' + this.ind.issued_by]
                            ]
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
    },
    created () {
        this.$store.dispatch('setProgressValue', 100)
        this.$store.dispatch('initialiseStoreMyMOInfo')
        this.$store.dispatch('initialiseStoreIndividual')
        this.$store.dispatch('initialiseStoreAuthRepresent')
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
    border-radius: 19px;
    border: 0;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
    outline: 0;
    color: rgb(34, 34, 34);
    cursor: pointer;
    width: 600px;
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
    font-weight: 500;
}
.individual-wrap {

    display: flex;
    flex-direction: column;
    align-items: center;
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
.consent-represent {
    margin: 30px 0;
}
.new-link {
    margin-top: 50px;
    display: inline-block;
    border-bottom: 1px dashed rgba(66, 133, 244, 1);
    color: rgba(66, 133, 244, 1); 
    text-decoration: none;
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