<template>
<div id="app">
   <header-app></header-app>
   <router-view></router-view>
   <footer-app></footer-app>
</div>
</template>

<script>
import headerApp from './views/default/header'
import footerApp from './views/default/footer'


export default {
   name: 'App',
   components: {
      headerApp,
      footerApp
   }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 0%;
}
</style>
