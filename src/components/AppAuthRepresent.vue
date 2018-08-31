<template>
    <div class="mo">
        <div class="container">
            <div class="mo-wrap">
                <header>
                    <div class="mo-body-link">
                        <router-link to="/three" class="button-link">
                            Назад
                        </router-link>
                    </div>
                    <div class="mo-h2" >
                        Введите данные уполномоченного представителя
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
                                <label for="position" class="label-name">Должность:</label>
                                <input class="in position" type="text" id="position" v-model="position">  
                                <label class="label-show"> {{ position }} </label>
                                <label class="label-error" v-show="error.position">{{ error.position }} </label>
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
        surname: {
            get () {
                return this.$store.state.authrepresent.authrepresent.surname
            },
            set (value) {
                this.rules = 'если в паспорте в фамилии присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                this.checkForm(value, 'surname')  
                this.$store.dispatch('setAuthRepresentSurname', value.toUpperCase())
            }
        },
        name: {
            get () {
                return this.$store.state.authrepresent.authrepresent.name
            },
            set (value) {
                this.rules = 'если в паспорте в имени присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                this.checkForm(value, 'name') 
                this.$store.dispatch('setAuthRepresentName', value.toUpperCase()) 
            }
        },
        patronymic: {
            get () {
                return this.$store.state.authrepresent.authrepresent.patronymic 
            },
            set (value) {
                this.rules = 'если в паспорте в отчестве присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                this.checkForm(value, 'patronymic')  
                this.$store.dispatch('setAuthRepresentPatronymic', value.toUpperCase())  
            }
        },
        series: {
            get () {
                return this.$store.state.authrepresent.authrepresent.series 
            },
            set (value) {
                this.rules = 'серию и номер паспорта необходимо проверить на сайте МВД по списку недействительных российских паспортов'
                this.chekSeries(value)
                this.$store.dispatch('setAuthRepresentSeries', value.toUpperCase())
            }
        },
        number: {
            get () {
                return this.$store.state.authrepresent.authrepresent.number 
            },
            set (value) {
                this.rules = 'серию и номер паспорта необходимо проверить на сайте МВД по списку недействительных российских паспортов'
                this.chekNumber(value)
                this.$store.dispatch('setAuthRepresentNumber', value.toUpperCase())
            }            
        },
        issued_by: {
            get () {
                return this.$store.state.authrepresent.authrepresent.issued_by 
            },
            set (value) {
                this.rules = 'пишите кем выдан паспорт без сокращений имен собственных. Обращаем внимание, что "отдел" и "отделением" разные слова. Если слово подчеркнуто красным - значит ошибка в слове, зеленым - возможно ошибка. '
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
            let regex = /^[0-9]{3}-[0-9]{3}?$/

            if ( value.match(regex) === null ) {
                this.error.code = 'Номер паспорта в формате 123-456'
            } else {
                this.error.code = false
            }          
        },
        chekDate(value, index) {
            let regex = /^[0-3][0-9].[0-1][0-9].[0-9]{4}?$/

            if ( value.match(regex) === null ) {
                this.error[index] = 'Дата в формате "06.08.1991"'
            } else {
                this.error[index] = false
            }   
        },
        chekSnils(value) {

            let regex = /^[0-9]{3}-[0-9]{3}-[0-9]{3} [0-9]{2}?$/

            if ( value.match(regex) === null ) { 
                this.error.snils.is = true
                this.error.snils.text = 'СНИЛС формата 111-111-111-11'   
            }
            else  {
                let regex3 = /\d{1,}/g
                let as = value.match(regex3).join('')
                if ( !this.chekSnilsSum(as) ) {
      
                    this.error.snils.is = true
                    this.error.snils.text = 'В СНИЛСе контрольная сумма неверна'
                } else {
                    this.error.snils.is = false
                    this.error.snils.text = null
                }
            } 
        },
        chekPosition(value) {
            if (value != '') {
                 this.error.position = false
            } else {
                 this.error.position = 'Укажите должность'
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
        console.log('Nfnmzyf')
        this.$store.dispatch('initialiseStoreAuthRepresent')
        // this.checkForm(this.surname, 'surname')
        // this.checkForm(this.name, 'name')
        // this.checkForm(this.patronymic, 'patronymic')
        // this.chekSeries(this.series)
        // this.chekNumber(this.number)
        // this.chekIssuedBy(this.issued_by, 'issued_by')
        // this.chekIssuedBy(this.place_of_birth, 'place_of_birth')
        // this.chekCode(this.code)
        // this.chekDate(this.date_of_birth, 'date_of_birth')
        // this.chekDate(this.date_of_issue, 'date_of_issue')
        // this.chekSnils(this.snils)
        // this.chekSex(this.sex)
        // this.chekPosition(this.position)

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