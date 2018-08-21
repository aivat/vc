<template>
  <div class="container" id="app">
    <AppHeader/>
    <main>
      <transition name="fade" mode="out-in">
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
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700');

body {
  margin: 0;
  font-size: 16px;
  height: 100%;
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
    top: 61px;
    position: relative;  
}
</style>
