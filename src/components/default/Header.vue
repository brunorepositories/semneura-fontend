<template>
<div class="headerApp row m-t-15">
   <div class="col-2 teste">
      <ul class="nav justify-content-start ">
         <li class="nav-item">
            <a class="nav-link active nav-custom" href="#">Logo</a>
         </li>
      </ul>
   </div>
   <div class="col-8">
      <ul class="nav justify-content-center nav-custo-header">
         <li class="nav-item">
            <router-link to="/geral" class="nav-link nav-custom active">Geral</router-link>
         </li>
         <li class="nav-item">
            <router-link to="/lancamentos" class="nav-link nav-custom">Lançamentos</router-link>
         </li>
         <li class="nav-item">
            <router-link to="/categorias" class="nav-link nav-custom">Categorias</router-link>
         </li>
          <li class="nav-item">
            <router-link to="/contas" class="nav-link nav-custom">Contas</router-link>
         </li>
         <li class="nav-item">
            <router-link to="/relatorios" class="nav-link nav-custom">Relatórios</router-link>
         </li>
      </ul>
   </div>
   <div class="col-2">
      <ul class="nav justify-content-end">
         <li class="nav-item">
            <a class="nav-link active nav-custom" href="#">User-Icon</a>
         </li>
      </ul>
   </div>
</div>
</template>


<script>
export default {
   name: 'Header'

}
</script>

<style>
.headerApp{
   background-color:#7CE58A;
   line-height: 2rem;
}
.nav-custom{
   padding-left: 8px;
   padding-right: 8px;
}
</style>

