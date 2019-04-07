<template>
<div class="categorias">
   <div class="container">
      <h3 class="margin-top-none mb-0">Cadastrar Conta</h3>
      <hr class="mt-0"/>
         <input v-model="descricao" type="text" class="form-control mb-3" placeholder="Descrição da conta" >
          <b-form-select v-model="tipo" :options="tipoContas" class="mb-3">
            <template slot="first">
               <option :value="''" disabled>Tipo de conta</option>
            </template>
         </b-form-select>
         <div class="input-group mb-4">
            <input v-model="saldo" v-money="money" type="text" class="form-control" placeholder="Saldo">
            <div class="input-group-prepend">
               <span class="input-group-text">$</span>
            </div>
         </div>
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
         descricao: '',
         tipo: '',
         saldo: 0,
         tipoContas: [
            { value: 'C', text: 'Carteira' },
            { value: 'B', text: 'Bancária' },
            { value: 'P', text: 'Popança' }
         ],
         money: {
            decimal: ',',
            thousands: '.',
            prefix: 'R$ ',
            precision: 2,
            masked: false /* doesn't work with directive */
         }
      }
   },
   methods: {
      async enviar() {
         if (this.descricao.trim().length <= 0) {
            return alert('Informe a uma Descrição para cadastrar!')
         } else if (this.tipo.trim().length <= 0) {
            return  alert('Informe o Tipo de conta para cadastrar!')
         }

         const dados = {
               descricao: this.descricao,
               tipo: this.tipo,
               saldo: Util.replaceMoney(this.saldo)
         }

         try {
            const response = await RestConnection.post('/conta/criar', dados)
            alert(response.body)
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
