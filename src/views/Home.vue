<template>
  <div class="wrapper">
    <!-- Menu Sidebar  -->
    <Sidebar :menuActive="menuActive"></Sidebar>

    <!-- Header  -->
    <Header :menuActive="menuActive" @toogleMenu="menuActive = !menuActive"></Header>

    <!-- Content  -->
    <router-view class="content" :class="{active: menuActive}" ></router-view>

  </div>
</template>

<script>
// import { mapActions, mapState } from "vuex";

import Header from '../components/default/Header'
// import Footer from './components/default/Footer'
import Sidebar from '../components/default/Sidebar'


export default {
  name: "Home",
  data: function() {
    return {
        menuActive: false
      };
  },
  components: {
    Sidebar,
    Header
  }
};

</script>

<style >


</style>
