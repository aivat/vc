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
                        Проверьте данные организации
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
                            <div>
                                <label for="fullname" class="label-name label-name-fullname" >Наименование организации:</label>
                                <div class="fullname-wrap">
                                    <input class="in fullname" :class="{ activeInput: readonly.fullname}" type="text" id="fullname" v-model.trim="fullname" placeholder="ПОЛНОЕ НАИМЕНОВАНИЕ" :readonly="readonly.fullname">
                                    <div class="edit" @click="readonly.fullname = !readonly.fullname">Изменить</div>
                                </div>
                            </div>
                            <div class="wrap-item">
                                <label for="shortname" class="label-name" >Сокращенное наименование:</label>
                                <input class="in" :class="{ activeInput: readonly.shortname }" type="text" id="shortname" v-model.trim="shortname" placeholder="ДЕЙЛ" :readonly="readonly.shortname">
                                <div class="edit" @click="readonly.shortname = !readonly.shortname">Изменить</div>
                            </div>
                            <div class="wrap-item">
                                <label for="Locality" class="label-name" >Город:</label>
                                <input class="in" :class="{ activeInput: readonly.Locality }" type="text" id="Locality" v-model.trim="Locality" placeholder="ДЕЙЛ" :readonly="readonly.Locality">
                                <div class="edit" @click="readonly.Locality = !readonly.Locality">Изменить</div>
                            </div>
                            <div class="wrap-item">
                                <label for="streetAddress" class="label-name" >Улица:</label>
                                <input class="in" :class="{ activeInput: readonly.streetAddress }" type="text" id="streetAddress" v-model.trim="streetAddress" placeholder="ДЕЙЛ" :readonly="readonly.streetAddress">
                                <div class="edit" @click="readonly.streetAddress = !readonly.streetAddress">Изменить</div>
                            </div>
                            <div class="wrap-item">
                                <label for="INN" class="label-name" >ИНН:</label>
                                <input class="in" :class="{ activeInput: readonly.INN }" type="text" id="INN" v-model.trim="INN" placeholder="ДЕЙЛ" :readonly="readonly.INN">
                                <div class="edit" @click="readonly.INN = !readonly.INN">Изменить</div>
                            </div>
                            <div class="wrap-item">
                                <label for="OGRN" class="label-name" >ОГРН:</label>
                                <input class="in" :class="{ activeInput: readonly.OGRN }" type="text" id="OGRN" v-model.trim="OGRN" placeholder="ДЕЙЛ" :readonly="readonly.OGRN">
                                <div class="edit" @click="readonly.OGRN = !readonly.OGRN">Изменить</div>
                            </div>
                            <p>
                                <label class="label-name"> Должность руководителя:</label>
                                <input class="radio" type="radio" id="sex1" name="position" v-model="position" value="главный врач">   
                                <label for="sex1">Главный врач</label>
                                <input class="radio" type="radio" id="sex2" name="position" v-model="position" value="и.о. главного врача">   
                                <label for="sex2">и.о. главного врача</label>
                                <input class="radio" type="radio" id="sex3" name="position" v-model="position" value="директор">   
                                <label for="sex3">Директор</label>
                            </p>
                            <div class="wrap-item">
                                <label for="head_physician" class="label-name" >ФИО руководителя:</label>
                                <input class="in" :class="{ activeInput: readonly.head_physician }" type="text" id="head_physician" v-model.trim="head_physician" placeholder="ДЕЙЛ" :readonly="readonly.head_physician">
                                <div class="edit" @click="readonly.head_physician = !readonly.head_physician">Изменить</div>
                            </div>                                                                 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            readonly: {
                fullname: true,
                shortname: true,
                Locality: true,
                streetAddress: true,
                INN: true,
                OGRN: true,
                position: true,
                head_physician: true
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
            rules: ' все поля форм заполняются строго как в документах. ',
            mo: ''
        }
    },
    computed: {
        fullname: {
            get () {
                return this.$store.state.mo.myMOInfo.fullname
            },
            set (value) {
                this.rules = 'если в паспорте в фамилии присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                let temp = {
                    index: 'fullname',
                    val: value
                }
                this.$store.dispatch('setMyMOInformation', temp)
            }
        },
        shortname: {
            get () {
                return this.$store.state.mo.myMOInfo.shortname
            },
            set (value) {
                this.rules = 'если в паспорте в имени присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                let temp = {
                    index: 'shortname',
                    val: value
                }
                this.$store.dispatch('setMyMOInformation', temp)    
            }
        },
        Locality: {
            get () {
                return this.$store.state.mo.myMOInfo.Locality
            },
            set (value) {
                this.rules = 'если в паспорте в имени присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                let temp = {
                    index: 'Locality',
                    val: value
                }
                this.$store.dispatch('setMyMOInformation', temp)    
            }
        },
        streetAddress: {
            get () {
                return this.$store.state.mo.myMOInfo.streetAddress
            },
            set (value) {
                this.rules = 'если в паспорте в имени присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                let temp = {
                    index: 'streetAddress',
                    val: value
                }
                this.$store.dispatch('setMyMOInformation', temp)    
            }
        },
        INN: {
            get () {
                return this.$store.state.mo.myMOInfo.INN
            },
            set (value) {
                this.rules = 'если в паспорте в имени присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                let temp = {
                    index: 'INN',
                    val: value
                }
                this.$store.dispatch('setMyMOInformation', temp)    
            }
        },
        OGRN: {
            get () {
                return this.$store.state.mo.myMOInfo.OGRN
            },
            set (value) {
                this.rules = 'если в паспорте в имени присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                let temp = {
                    index: 'OGRN',
                    val: value
                }
                this.$store.dispatch('setMyMOInformation', temp)    
            }
        },
        position: {
            get () {
                return this.$store.state.mo.myMOInfo.position
            },
            set (value) {
                this.rules = 'если в паспорте в имени присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                let temp = {
                    index: 'position',
                    val: value
                }
                this.$store.dispatch('setMyMOInformation', temp)    
            }
        },
        head_physician: {
            get () {
                return this.$store.state.mo.myMOInfo.head_physician
            },
            set (value) {
                this.rules = 'если в паспорте в имени присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                let temp = {
                    index: 'head_physician',
                    val: value
                }
                this.$store.dispatch('setMyMOInformation', temp)    
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
        chekSex(value) {
            if (value == 'муж.' || value == 'жен.') {
                 this.error.sex = false
            } else {
                 this.error.sex = 'Укажите пол'
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
        this.$store.dispatch('initialiseStoreIndividual')
        this.$store.dispatch('initialiseStoreMyMOInfo')
        this.mo = this.$store.state.mo.myMOInfo
        console.log('mo=', this.mo)
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
    width: 230px;
}

.in {
    border-radius: 4px;
    outline: 0;
    border: 1px solid rgb(212, 212, 212);
    font-size: 14px;
    padding: 5px 15px;
    font-weight: 400;
    width: 300px;
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
.fullname {
    width: 1100px;
}
.label-name-fullname {
    width: auto;
}
.activeInput:focus {
    border: 1px solid rgb(212, 212, 212);
    
}

.activeInput {
    background-color: rgba(212, 212, 212, .5);
}

.fullname-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.edit {
    border-bottom: 1px dashed rgb(212, 212, 212);
    cursor: pointer;
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