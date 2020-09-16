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
      <div class="sidebar-body">

        <ul class="list-unstyled components">

            <li>
                <a href="#clientes" data-toggle="collapse" class="dropdown-toggle">Clientes</a>
                <ul class="collapse list-unstyled" id="clientes">
                    <li>
                        <router-link :to="{ name: 'ListarClientes' }">Listar</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'CadastrarCliente' }">Cadastrar</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'EditarCliente' }">Editar</router-link>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#fornecedores" data-toggle="collapse" class="dropdown-toggle">Fornecedores</a>
                <ul class="collapse list-unstyled" id="fornecedores">
                    <li>
                        <router-link :to="{ name: 'ListarFornecedores' }">Listar</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'CadastrarFornecedor' }">Cadastrar</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'EditarFornecedor' }">Editar</router-link>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#condicoesPagamento" data-toggle="collapse" class="dropdown-toggle">Condições de Pagamento</a>
                <ul class="collapse list-unstyled" id="condicoesPagamento">

                    <li>
                        <router-link :to="{ name: 'ListarCondicoesPagamento' }">Listar</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'CadastrarCondicaoPagamento' }">Cadastrar</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'EditarCondicaoPagamento' }">Editar</router-link>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#categoria" data-toggle="collapse" class="dropdown-toggle">Categoria</a>
                <ul class="collapse list-unstyled" id="categoria">
                    <li>
                        <router-link :to="{ name: 'Listarcategorias' }">Listar</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Cadastrarcategoria' }">Cadastrar</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Editarcategoria' }">Editar</router-link>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#produtos" data-toggle="collapse" class="dropdown-toggle">Estoque</a>
                <ul class="collapse list-unstyled" id="produtos">
                    <li>
                        <router-link :to="{ name: 'ListarProdutos' }">Listar</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'CadastrarProduto' }">Cadastrar</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'EditarProduto' }">Editar</router-link>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#Vendas" data-toggle="collapse" class="dropdown-toggle">Vendas</a>
                <ul class="collapse list-unstyled" id="Vendas">
                    <li>
                        <router-link :to="{ name: 'ListarVendas' }">Listar</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'RealizarVenda' }">Realizar Venda</router-link>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#Compra" data-toggle="collapse" class="dropdown-toggle">Compra</a>
                <ul class="collapse list-unstyled" id="Compra">
                    <li>
                        <router-link :to="{ name: 'ListarCompras' }">Listar</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'RealizarCompra' }">Realizar Compra</router-link>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#contasReceber" data-toggle="collapse" class="dropdown-toggle">Contas a Receber</a>
                <ul class="collapse list-unstyled" id="contasReceber">
                    <li>
                        <router-link :to="{ name: 'ListarContasReceber' }">Listar</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'BaixarContasReceber' }">Baixar</router-link>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#contasPagar" data-toggle="collapse" class="dropdown-toggle">Contas a Pagar</a>
                <ul class="collapse list-unstyled" id="contasPagar">
                    <li>
                        <router-link :to="{ name: 'ListarContasPagar' }">Listar</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'BaixarContasPagar' }">Baixar</router-link>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#cadastros" data-toggle="collapse" class="dropdown-toggle">Cadastros </a>
                <ul class="collapse list-unstyled" id="cadastros">
                    <li>
                        <router-link :to="{ name: 'ListarPais' }">Lista de Paises</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'CadastrarPais' }">Cadastrar Pais</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'EditarPais' }">Editar Pais</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'ListarEstados' }">Lista de Estados</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'CadastrarEstado' }">Cadastrar Estado</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'EditarEstado' }">Editar Estado</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'ListarCidades' }">Lista de Cidades</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'CadastrarCidade' }">Cadastrar Cidade</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'EditarCidade' }">Editar Cidade</router-link>
                    </li>
                </ul>
            </li>
        </ul>
      </div>
      <hr class="m-b-30">
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

