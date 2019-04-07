<template>
<div class="categorias">
   <div class="container">
      <h3 class="margin-top-none mb-0">Cadastrar Categoria</h3>
      <hr class="mt-0"/>
         <input v-model="descricao" type="text" class="form-control mb-3" placeholder="Descrição da conta" >
         <router-link :to="{name: 'geral'}">
            <button type="button" class="btn btn-outline-danger">Cancelar</button>
         </router-link>
         <button type="button" class="btn btn-outline-success" @click="enviar()">Enviar</button>
   </div>
</div>
</template>

<script>
import {VMoney} from 'v-money'
import RestConnection from '../../restConnection/RestConnection'
import Util from '../../utilities'

export default {
   name: 'categorias',
   directives: {money: VMoney},
   data() {
      return {
         descricao: ''
      }
   },
   methods: {
      async enviar() {
         if (this.descricao.trim().length <= 0) {
            return alert('Informe a uma Descrição para cadastrar!')
         }

         const dados = {
            descricao: this.descricao.trim()
         }

         try {
            const response = await RestConnection.post('/categoria/criar', dados)
            alert(response.data)
         } catch (e) {
            console.log(e)
         }
      }
   }
}
</script>

<style scope>
.container {
   background-color: #ffffff;
   text-align: center;
   padding-top: 5px;
   padding-bottom: 20px;
   margin-top: 2rem;
   width: 50%;
   border-radius: 10px;
   /* font-size: 30px; */
}
</style>
