<template>
    <div class="mo">
        <div class="container">
            <div class="mo-wrap">
                <header>
                    <div class="mo-body-link">
                        <router-link to="/four" class="button-link">
                            Назад
                        </router-link>
                    </div>
                    <div class="mo-h2" >
                       Скачайте документы
                    </div>
                    <div class="mo-body-link">
                            <span @click="onward()" class="button-link">Далее</span>

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
                                <label class="label-show"> {{ surname }} </label>
                                <label class="label-error" v-show="error.surname">{{ error.surname }} </label>
                            </p>                                                            
                        </div>
                        <button @click="asd()">Скачать согласие</button>
                        <button @click="statement()">Скачать заявление</button>
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

export default {
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
            rules: ' все поля форм заполняются строго как в документах. '
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
            console.log('this.mo.fullname=', this.$store.state.mo.myMOInfo)
            return this.$store.state.mo.myMOInfo
        }    
    },
    methods: {
        asd() {
            pdfMake.fonts = {
            myFont: {
                normal: 'TimesNewRoman.ttf',
                bold: 'TimesNewRomanBold.ttf',
                italics: 'TimesNewRoman.ttf',
                bolditalics: 'TimesNewRoman.ttf'
            }
          }
            var docDefinition = {
                title:'Тестовый документ PDF',
                pageSize:'A4',
                pageMargins:[25, 25],
                defaultStyle: {
                    font: 'myFont'
                },              
                
                styles: {
                    body: {
                        leadingIndent: 25,
                        alignment: 'justify',
                    },
                    users: {
                        decoration: 'underline'
                    },
                    data: {
                       leadingIndent: 25
                    },
                    signature: {

                    }
                },
                content: [{
                    text:'СОГЛАСИЕ',
                        margin: [245, 0 , 0, 0],
                        style: {
                            bold: true
                        }
                    }, {
                        text:'на обработку персональных данных',
                        style:'body',
                        margin: [150, 0 , 0, 25]
                    }, {
                        text: [
                            'Я, ',
                            {
                                text: this.surname + ' ' + this.name + ' ' + this.patronymic + ',',
                                style: 'users',
                            },{
                                text: ' паспорт: '
                            },{ 
                                text: this.series + ' ' + this.number,
                                style: 'users'
                            },{
                                text: ' выдан: '
                            },{
                                text: this.issued_by,
                                style: 'users'
                            },{
                                text: ', дата выдачи: '
                            }, {
                                text: this.date_of_issue + ' г.,',
                                style: 'users'
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
                        style: 'body'
                    }

                ]
            }
            console.log('this.surname=', this.surname)
            pdfMake.createPdf(docDefinition).download("optionalName.pdf")
        },
        getDateNow() {
            let date = new Date()
            let monthA = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
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
                title:'Тестовый документ PDF',
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
                        margin: [70, 0 , 0, 25],
                        style: {
                            bold: true
                        }
                    }, {
                        text: [
                            {
                                text: this.mo.fullname,
                                style: 'users'
                            },{
                                text: ' в лице '
                            },{
                                text: 'главного врача',
                                style: 'users'
                            }
                        ],
                        style: 'body'
                    }, {
                        text: this.mo.head_physician,
                        margin: [170, 7, 0, 7],
                        style: 'users'
                    }, {
                        text: [
                            {
                                text: 'действующего на основании ',
                            }, { 
                                text: 'устава',
                                style: 'users'
                            }, {
                                text:', просит изготовить квалифицированный сертификат ключа проверки электронной подписи уполномоченного представителя, в соответствии с указанными в настоящем заявлении данными, передать в единую систему идентификации и аутентификации сведения о лице, получившем квалифицированный сертификат подписи уполномоченного представителя'
                            }
                        ],
                        style: 'body'
                    }, {
                        text: 'БАЙМЕШОВ АЙВАТ САГИМБАЕВИЧ',
                        margin: [170, 7, 0, 7],
                        style: 'usersBold'
                    }
                ]
            }
            console.log('this.surname=', this.surname)
            pdfMake.createPdf(docDefinition).download("zayuvlenie.pdf")
        }
    },
    created () {
        
        this.$store.dispatch('initialiseStoreMyMOInfo')
        this.mo.fullname
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