<template>
    <div class="wrapper">

        <!-- Menu Sidebar  -->
        <Sidebar :menuActive="menuActive"></Sidebar>

        <!-- Header  -->
        <Header :menuActive="menuActive" @toogleMenu="menuActive = !menuActive"></Header>

        <!-- Body Content  -->
        <div class="content" :class="{active: menuActive}" >
            <router-view ></router-view>
        </div>

    </div>
</template>

<script>

import Header from '@/components/default/Header'
import Sidebar from '@/components/default/Sidebar'


export default {
    name: "Home",
    data: function() {
        return {
            menuActive: false
        };
    },
    components: { Sidebar, Header }
};

</script>

<style >


</style>
