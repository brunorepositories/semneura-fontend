/* eslint-disable vue/no-parsing-error */
<template>
 <aside class="aside-menu">
    <h6 class="text-uppercase font-700 text-center bg-f1f1f1 m-0 p-15">Seu perfil</h6>
    <img src="http://placehold.it/768x768" alt="" class="img-fluid rounded-circle p-30">
    <h6 class="font-1-1em font-700 text-center text-uppercase m-b-30">Nome do operador</h6>
    <h6 class="text-uppercase font-700 text-center bg-f1f1f1 m-b-15 p-15">Funções atuais</h6>
    <div class="p-l-15 p-r-15">
      <p class="font-300">
        <!-- <div class="div-icon-holder"><i class="fa fa-check color-primary"></i></div><span class="font-700">Análise</span><br>
        <div class="div-icon-holder"><i class="fa fa-close color-red"></i></div>Confirmação<br>
        <div class="div-icon-holder"><i class="fa fa-check color-primary"></i></div><span class="font-700">Cobrança</span><br>
        <div class="div-icon-holder"><i class="fa fa-close color-red"></i></div>Jurídico -->
      </p>
    </div>
			<p class="text-center p-l-15 p-r-15">
				<button class="btn btn-block btn-primary text-uppercase font-700" v-b-tooltip title="Atualiza seu perfil com a lista de permissões mais recente"><i class="fa fa-refresh m-r-10"></i>Atualizar token</button>
			</p>
			<h6 class="text-uppercase font-700 text-center bg-f1f1f1 p-15 m-b-0">Menu</h6>
			<div class="p-15">
				<button class="btn btn-block btn-info text-uppercase font-700 m-b-15">Editar perfil</button>
				<button class="btn btn-block btn-info text-uppercase font-700 m-b-15">Reportar um bug</button>
				<button class="btn btn-block btn-danger text-uppercase font-700 m-b-15">Sair (logout)</button>
			</div>
	</aside>
</template>


<script>

export default {
   name: 'Sidebar'

}

</script>

<style>
.sidebar{
  background-color: red;
  width: 50px;
  height: 100%;
}

</style>

