<template>

  <nav class="navbar-menu" :class="{active: menuActive}" >
    <!-- <nav class="navbar-menu navbar-expand-lg navbar-light bg-light" :class="{active: menuActive}" > -->
    <!-- <div class="container-fluid"> -->
        <div class="col-2">
          <button type="button" class="btn-clean " @click.prevent="ativarMenu">
            <i v-if="menuActive" class="fa fa-arrow-right color-secondary"></i>
            <i v-else class="fa fa-arrow-left color-secondary"></i>
          </button>
        </div>
        <div class="col-10">

        </div>

      <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="nav navbar-nav ml-auto">
              <li class="nav-item active">
                  <a class="nav-link" href="#">Sair</a>
              </li>
          </ul>
      </div> -->
    <!-- </div> -->
  </nav>

</template>


<script>
export default {
  name: 'Header',
  props: {
    menuActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ativarMenu () {
      this.$emit('toogleMenu')
    }
  }
}

</script>

<style scope>
</style>

