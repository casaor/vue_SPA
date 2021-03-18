<template>

  <div id="app">
         
      <navbar></navbar>
      <router-view></router-view>

  </div>

</template>

<script>

import Navbar from './views/Navbar.vue'

export default {
  name: 'App',

components: {
    Navbar,
  }
}
</script>

<style>
#app {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  margin: 0;
  padding: 0;
}

</style>
