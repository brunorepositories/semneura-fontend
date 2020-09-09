<template>
  <div class id="app">
    <Header></Header>
    <Sidebar></Sidebar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/default/Header'
import Footer from './components/default/Footer'
import Sidebar from './components/default/Sidebar'

export default {
   name: 'App',
   components: {
      Header,
      Footer,
      Sidebar
   }
}

</script>

<style>
</style>

