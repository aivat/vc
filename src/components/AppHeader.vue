<template>
  <header>
    <div class="wrap-top">
      <div class="wrap">
        <div class="item item-name">
          Система генерации документов для получения электронных подписей в ГБУЗ "МИАЦ"
        </div>
        <!-- <div class="item">
          ШАГ: 1
        </div> -->
      </div>
      <div class="wrap">
        <div class="item">
           {{ role }}
        </div>
        <div class="item item-mo">
          {{ mo }}
        </div>
        <!-- <div class="item item-logout">
          Выход
        </div> -->
      </div>
    </div>
    <progress class="progress" :value="progress" max="100"></progress>
    <!-- <ul class="progress"> -->
        <!-- <li class="progress-item" :class="{ active: progress.one }">
          
        </li>
        <li class="progress-item">
          
        </li>
        <li class="progress-item">
          
        </li>
        <li class="progress-item">
          
        </li>
        <li class="progress-item">
          
        </li>
        <li class="progress-item">
          
        </li> -->
	

    <!-- </ul> -->
    <div>
    </div>
  </header>
</template>

<script>

import { mapState, mapActions } from 'vuex'
// import ProgressBar from 'vue-progressbar-component'

export default {
  data () {
    return {
    }
  },
  computed: 
    mapState({
        mo: state => state.mo.myMO,
        role: state => state.mo.myRole,
        dashoffset: function () {
            return  (100 / 6) * 3
        },
        progress: state => state.progress.value
    }),
  created () {
        this.$store.dispatch('initialiseStoreRole')
        this.$store.dispatch('initialiseStoreMO')
  }
}
</script>


<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 -1px 8px rgba(0,0,0,.15);
  top: 0;
  position: fixed;
  /* height: 48px; */
  width: 100%;
  font-weight: 500;
  color: rgb(60, 64, 67);
  /* color: rgb(32, 33, 36); */
  z-index: 10;
}
.wrap-top {
  display: flex;
  justify-content: space-between; 
  height: 50px;;
}
.wrap {
  display: flex;
  align-items: center;
}

.item-name {
  padding-left: 15px;
  margin-right: 25px;
}
.item-mo {
  margin: 0 25px;
}
.item-logout{
  padding-right: 15px;
}
li {
  list-style-type: none;
  flex-grow: 1;
  text-align: center;
  /* border-right: 1px solid rgba(0,0,0,.15);
  border-top: 1px solid rgba(0,0,0,.15); */
}
li:last-child {
  border-right: none;
}
li:hover {
  background-color: rgba(66, 133, 244, .4);
}
ul {
  margin: 0;
  padding: 0;
  display: flex;
  font-size: 9px;
  color: rgba(0,0,0,.15);
  /* width: 100%; */
  /* justify-content: space-between; */
}

.active {
  background-color: #4285f4;
  color: white;
  /* border-radius: 0 8px 8px 0; */
}
progress {
  width: 100%;
  height: 2px;
  border: 0;
  outline: 0;
  /* border: 1px solid red; */
  transition: all .5s ease-out;
  background-color: rgb(255, 255, 255);
}
progress::-webkit-progress-bar {
   background-color: rgb(255, 255, 255);
   transition: all .5s ease-out;
  /* стили */
   /* background-color: #4285f4;
   color: #4285f4; */
}
 
progress::-webkit-progress-value {
  background-color: #4285f4;
  transition: all .5s ease-out;
}
 
progress::-moz-progress-bar {
  transition: all .5s ease-out;
  background-color: #4285f4;
}
</style>
