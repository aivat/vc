<template>
  <div class="container" id="app">
    <AppHeader/>
    <main>
      <transition name="modal" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
// import AppSearchMO from './components/AppSearchMO'

export default {
  name: 'app',
  components: {
    AppHeader
    // AppSearchMO
  },
  created () {
    console.log('сборка приложения')
      this.$store.dispatch('initialiseStoreEmployeesFromLocalStorage')
      this.$store.dispatch('initialiseStoreCountFromLocalStorage')
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700');

body {
  margin: 0;
  font-size: 16px;
  height: 100%;
  overflow-y: scroll;
}

#app {
  font-family: Roboto, RobotoDraft, Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  display: block;
}

main {
    top: 52px;
    position: relative;  
}
.fade-enter-active, .fade-leave-active {
 transition: all .1s ease-out;
}
  
.fade-enter, .fade-leave-active {
opacity: 0;
}

.modal-enter {
  opacity: 0;
  transition: all .1s ease-out;
  /* transform: translateX(200px); */
}
.modal-leave-active {
  opacity: 0;
  transition: all .1s ease;
  /* transform: translateX(-200px); */
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transition: all .1s ease;
}
</style>
