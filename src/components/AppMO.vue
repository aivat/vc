<template>
    <div class="mo">
        <div class="container">
            <div class="mo-wrap">
                <header>
                    <div class="mo-body-link">
                        <router-link to="/two" class="btn-link">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="48px" height="48px" viewBox="1 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                            <path d="M15.41,16.59L10.83,12l4.58-4.59L14,6l-6,6l6,6L15.41,16.59z"/>
                            <path fill="none" d="M0,0h24v24H0V0z"/>
                            </svg>
                        </router-link>
                    </div>
                    <div class="mo-h2" >
                        Проверьте данные организации
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <circle cx="12" cy="19" r="2"/>
                                <path d="M10 3h4v12h-4z"/>
                                <path fill="none" d="M0 0h24v24H0z"/>
                            </svg>
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
                                <label class="label-error" v-show="error.fullname">{{ error.fullname }} </label>
                            </div>
                            <div class="wrap-item">
                                <label for="shortname" class="label-name" >Сокращенное наименование:</label>
                                <input class="in" :class="{ activeInput: readonly.shortname }" type="text" id="shortname" v-model.trim="shortname" placeholder="ДЕЙЛ" :readonly="readonly.shortname">
                                <div class="edit" @click="readonly.shortname = !readonly.shortname">Изменить</div>
                                <label class="label-error" v-show="error.shortname">{{ error.shortname }} </label>
                            </div>
                            <div class="wrap-item">
                                <label for="locality" class="label-name" >Город:</label>
                                <input class="in" :class="{ activeInput: readonly.locality }" type="text" id="locality" v-model.trim="locality" placeholder="ДЕЙЛ" :readonly="readonly.locality">
                                <div class="edit" @click="readonly.locality = !readonly.locality">Изменить</div>
                                <label class="label-error" v-show="error.locality">{{ error.locality }} </label>
                            </div>
                            <div class="wrap-item">
                                <label for="streetAddress" class="label-name" >Улица:</label>
                                <input class="in" :class="{ activeInput: readonly.streetAddress }" type="text" id="streetAddress" v-model.trim="streetAddress" placeholder="ДЕЙЛ" :readonly="readonly.streetAddress">
                                <div class="edit" @click="readonly.streetAddress = !readonly.streetAddress">Изменить</div>
                                <label class="label-error" v-show="error.streetAddress">{{ error.streetAddress }} </label>
                            </div>
                            <div class="wrap-item">
                                <label for="INN" class="label-name" >ИНН:</label>
                                <input class="in" :class="{ activeInput: readonly.INN }" type="text" id="INN" v-model.trim="INN" placeholder="ДЕЙЛ" :readonly="readonly.INN">
                                <div class="edit" @click="readonly.INN = !readonly.INN">Изменить</div>
                                <label class="label-error" v-show="error.INN">{{ error.INN }} </label>
                            </div>
                            <div class="wrap-item">
                                <label for="OGRN" class="label-name" >ОГРН:</label>
                                <input class="in" :class="{ activeInput: readonly.OGRN }" type="text" id="OGRN" v-model.trim="OGRN" placeholder="ДЕЙЛ" :readonly="readonly.OGRN">
                                <div class="edit" @click="readonly.OGRN = !readonly.OGRN">Изменить</div>
                                <label class="label-error" v-show="error.OGRN">{{ error.OGRN }} </label>
                            </div>
                            <p>
                                <label class="label-name"> Должность руководителя:</label>
                                <input class="radio" type="radio" id="sex1" name="position" v-model="position"  value="ГЛАВНОГО ВРАЧА">   
                                <label for="sex1">Главный врач</label>
                                <input class="radio" type="radio" id="sex2" name="position" v-model="position" value="И.О. ГЛАВНОГО ВРАЧА">   
                                <label for="sex2">и.о. главного врача</label>
                                <input class="radio" type="radio" id="sex3" name="position" v-model="position" value="ДИРЕКТОРА">   
                                <label for="sex3">Директор</label>
                            </p>
                            <div class="wrap-item">
                                <label for="head_physician" class="label-name" >ФИО руководителя:</label>
                                <input class="in" :class="{ activeInput: readonly.head_physician }" type="text" id="head_physician" v-model.trim="head_physician" placeholder="ДЕЙЛ" :readonly="readonly.head_physician">
                                <div class="edit" @click="readonly.head_physician = !readonly.head_physician">Изменить</div>
                                <label class="label-error" v-show="error.head_physician">{{ error.head_physician }} </label>
                            </div>                                                                <div class="wrap-item">
                                <label for="basis" class="label-name" >Руководитель действует на основании: </label>
                                <input class="in" :class="{ activeInput: readonly.basis }" type="text" id="basis" v-model.trim="basis" placeholder="устава" :readonly="readonly.basis">
                                <div class="edit" @click="readonly.basis = !readonly.basis">Изменить</div>
                                <label class="label-error" v-show="error.basis">{{ error.basis }} </label>
                            </div>
                            <div class="wrap-item">
                                <label for="data_power_of_attorney" class="label-name">Срок действия доверенностей:</label>
                                <input class="in" :class="{ activeInput: readonly.data_power_of_attorney }" type="text" id="data_power_of_attorney" v-model="data_power_of_attorney" maxlength="10" placeholder="31.12.2018" :readonly="readonly.data_power_of_attorney">
                                <div class="edit" @click="readonly.data_power_of_attorney = !readonly.data_power_of_attorney">Изменить</div>
                                <label class="label-error" v-show="error.data_power_of_attorney">{{ error.data_power_of_attorney }} </label>
                            </div> 
                            <div class="wrap-item">
                                <label for="email" class="label-name">E-mail:</label>
                                <input class="in" type="text" id="email" v-model="email">  
                                <label class="label-show"> {{ email }} </label>
                                <label class="label-error" v-show="error.email">{{ error.email }} </label>
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
                locality: true,
                streetAddress: true,
                INN: true,
                OGRN: true,
                position: true,
                head_physician: true,
                basis: true,
                data_power_of_attorney: true
            },
            error: {
                fullname: null,
                shortname: null,
                locality: null,
                streetAddress: null,
                INN: null,
                OGRN: null,
                head_physician: null,
                basis: null,
                data_power_of_attorney: null,
                email: null
            },
            errorFalse: {
                fullname: false,
                shortname: false,
                locality: false,
                streetAddress: false,
                INN: false,
                OGRN: false,
                head_physician: false,
                basis: false,
                data_power_of_attorney: false,
                email: false            
            },
            rules: ' все поля форм заполняются строго как в документах. ',
            mo: ''
        }
    },
    computed: {
        email: {
            get () {
                return this.$store.state.mo.myMOInfo.email
            },
            set (value) {
                let temp = {
                    index: 'email',
                    val: value
                }
                this.chekEmail(value)
                this.$store.dispatch('setMyMOInformation', temp)     
            }
        },
        data_power_of_attorney: {
            get () {
                return this.$store.state.mo.myMOInfo.data_power_of_attorney
            },
            set (value) {
                if ( ( value.length == 2 ) || (value.length == 5)){
                    value = value + '.'
                }
                let temp = {
                    index: 'data_power_of_attorney',
                    val: value
                }
                // this.chekDate(value, 'date_of_birth')
                this.$store.dispatch('setMyMOInformation', temp)
                this.chekDataPowerOfAttorney(value)
            }               
        },
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
                this.chekFullname(value)
            }
        },
        shortname: {
            get () {
                return this.$store.state.mo.myMOInfo.shortname_2
            },
            set (value) {
                this.rules = 'если в паспорте в имени присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                let temp = {
                    index: 'shortname',
                    val: value
                }
                this.$store.dispatch('setMyMOInformation', temp)   
                this.chekShortname(value) 
            }
        },
        locality: {
            get () {
                return this.$store.state.mo.myMOInfo.locality
            },
            set (value) {
                this.rules = 'если в паспорте в имени присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                let temp = {
                    index: 'locality',
                    val: value
                }
                this.$store.dispatch('setMyMOInformation', temp)  
                this.chekLocality(value)  
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
                this.chekStreetAddress(value)  
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
                this.chekINN(value)  
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
                this.chekOGRN(value) 
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

                let position_nominative = ''
                
                switch (value) {
                case 'ГЛАВНОГО ВРАЧА':
                    position_nominative = 'ГЛАВНЫЙ ВРАЧ'
                    break
                case 'И.О. ГЛАВНОГО ВРАЧА':
                    position_nominative = 'И.О. ГЛАВНОГО ВРАЧА'
                    break
                case 'ДИРЕКТОРА':
                    position_nominative = 'ДИРЕКТОР'
                    break
                }  

                let temp_nominative = {
                    index: 'position_nominative',
                    val: position_nominative
                }   

                this.$store.dispatch('setMyMOInformation', temp)    
                this.$store.dispatch('setMyMOInformation', temp_nominative)  
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
                this.chekHeadPhysician(value)
            }
        },
        basis: {
            get () {
                return this.$store.state.mo.myMOInfo.basis
            },
            set (value) {
                this.rules = 'если в паспорте в имени присутствует буква "Ё", то необходимо писать именно букву "Ё"'
                let temp = {
                    index: 'basis',
                    val: value
                }
                this.$store.dispatch('setMyMOInformation', temp) 
                this.chekBasis(value)   
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

        sex: {
            get () {
                return this.$store.state.individual.individual.sex
            },
            set (value) {
                this.chekSex(value)
                this.$store.dispatch('setSex', value)
            }            
        },
     
    },
    methods: {
        chekFullname(value) {
            if (value != '') {
                 this.error.fullname = false
            } else {
                 this.error.fullname = 'Укажите наименование организации'
            }           
        },
        chekShortname(value) {
            if (value != '') {
                 this.error.shortname = false
            } else {
                 this.error.shortname = 'Укажите сокращенное наименование организации'
            }           
        },
        chekLocality(value) {
            if (value != '') {
                 this.error.locality = false
            } else {
                 this.error.locality = 'Укажите название города, где зарегистрирована МО, согласно ЕГРЮЛ'
            }           
        },
        chekStreetAddress(value) {
            if (value != '') {
                 this.error.streetAddress = false
            } else {
                 this.error.streetAddress = 'Укажите улицу, где зарегистрирована МО, согласно ЕГРЮЛ'
            }           
        },
        chekINN(value) {
            if (value != '') {
                 this.error.INN = false
            } else {
                 this.error.INN = 'Укажите ИНН'
            }           
        },
        chekOGRN(value) {
            if (value != '') {
                 this.error.OGRN = false
            } else {
                 this.error.OGRN = 'Укажите ОГРН'
            }           
        },
        chekHeadPhysician(value) {
            if (value != '') {
                 this.error.head_physician = false
            } else {
                 this.error.head_physician = 'Укажите ФИО руководителя'
            }           
        },
        chekBasis(value) {
            if (value != '') {
                 this.error.basis = false
            } else {
                 this.error.basis = 'Укажите основание действия руководителя'
            }           
        },
        chekDataPowerOfAttorney(value) {
            if (value != '') {
                 this.error.data_power_of_attorney = false
            } else {
                 this.error.data_power_of_attorney = 'Укажите срок действия доверенностей'
            }           
        },
        chekEmail(value) {
            if (value != '') {
                 this.error.email = false
            } else {
                 this.error.email = 'Укажите E-mail'
            }           
        },
        get_data_power_of_attorney() {
            let d = new Date()
            d.setDate(d.getDate() - 1)
            d.setFullYear(d.getFullYear() + 1)
            let formatter = new Intl.DateTimeFormat("ru")
            let temp = {
                    index: 'data_power_of_attorney',
                    val: formatter.format(d)
            }
            this.$store.dispatch('setMyMOInformation', temp)
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
            // this.$router.push('/four')
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
        this.$store.dispatch('setProgressValue', 49)
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
        
        this.chekFullname(this.fullname)

        
        this.chekShortname(this.shortname)
        this.chekLocality(this.locality)
        this.chekStreetAddress(this.streetAddress)
        this.chekINN(this.INN)
        this.chekOGRN(this.OGRN)
        this.chekHeadPhysician(this.head_physician)
        this.chekBasis(this.basis)
        // this.chekDataPowerOfAttorney(this.data_power_of_attorney)
        this.chekEmail(this.email)
        // this.chekPosition(this.position)

        // this.surname.set(this.surname)
    },
    mounted() {
        this.get_data_power_of_attorney()
        this.chekDataPowerOfAttorney(this.data_power_of_attorney)
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
    color: rgb(60, 64, 67);
}
.individual-wrap {
    margin-top: 15px;
}
.individual-wrap>p {
    margin: 0;
    margin: 10px 0;
}
.label-name {
    display: inline-block;
    width: 310px;
}

.in {
    border-radius: 4px;
    outline: 0;
    border: 1px solid rgb(212, 212, 212);
    font-size: 14px;
    padding: 5px 15px;
    font-weight: 400;
    width: 320px;
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
    margin-bottom: 5px;
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
@media (min-width: 1280px) {
    .mo {
        justify-content: center;
    }  

    .container {
        width: 1280px; 
    }  
}
</style>