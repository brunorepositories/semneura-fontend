/* eslint-disable vue/no-parsing-error */
<template>
  <!-- Sidebar  -->
  <nav class="sidebar" :class="{active: menuActive}">

    <!-- Header Menu  -->
      <div class="sidebar-header m-b-5">
        <h3 class="logo-menu-title m-b-0">sem neura</h3>
        <h6 class="logo-menu-subtitle">produtos sensuais</h6>
      </div>
      <hr class="m-b-5">

      <!-- Menu Itens -->
      <ul class="list-unstyled components">

        <li>
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Clientes</a>
            <ul class="collapse list-unstyled" id="homeSubmenu">
                <li>
                    <router-link :to="{ name: 'ListarClientes' }">Listar Cliente</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'CadastrarCliente' }">Cadastrar Cliente</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'EditarCliente' }">Editar Cliente</router-link>
                </li>
            </ul>
        </li>

          <li>
              <a href="#">About</a>
          </li>
          <li>
              <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
              <ul class="collapse list-unstyled" id="pageSubmenu">
                  <li>
                      <a href="#">Page 1</a>
                  </li>
                  <li>
                      <a href="#">Page 2</a>
                  </li>
                  <li>
                      <a href="#">Page 3</a>
                  </li>
              </ul>
          </li>
          <li>
              <a href="#">Portfolio</a>
          </li>
          <li>
              <a href="#">Contact</a>
          </li>
      </ul>

      <!-- <ul class="list-unstyled CTAs">
          <li>
              <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
          </li>
          <li>
              <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
          </li>
      </ul> -->
  </nav>
</template>


<script>

export default {
   name: 'Sidebar',
   props: {
    menuActive: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>

</style>

