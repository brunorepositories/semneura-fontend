<template>
<div class="contas">
   <router-link :to="{name: 'cadastrar-conta'}">
      <button type="button" class="btn btn-outline-info">Cadastrar</button>
   </router-link>
   <div class="container">
      <h4 class="margin-top-none ">CONTAS</h4>
         <ul v-for="(conta, k) in contas" :key="k" class="list-group list-group-flush text-left">
            <li class="list-group-item">Cras justo odio</li>
         </ul>
   </div>
</div>
</template>

<script>
import {VMoney} from 'v-money'
import RestConnection from '../../restConnection/RestConnection'
import Util from '../../utilities'

export default {
   name: 'contas',
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
