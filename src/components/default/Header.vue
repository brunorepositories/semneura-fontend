<template>

  <nav class="navbar-menu" :class="{active: menuActive}" >
    <!-- <nav class="navbar-menu navbar-expand-lg navbar-light bg-light" :class="{active: menuActive}" > -->
    <!-- <div class="container-fluid"> -->

      <button type="button" class="btn btn-info" @click.prevent="ativarMenu">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>

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

