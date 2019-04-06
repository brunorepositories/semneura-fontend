import Vue from 'vue'
import Router from 'vue-router'
import Geral from '../views/Geral'
import Lancamentos from '../views/Lancamentos'
import Relatorios from '../views/Relatorios'
import Categorias from '../views/Categorias'
import Contas from '../views/Contas'

Vue.use(Router)

export default new Router({
   routes: [
      {
         path: '/',
         redirect: '/geral'
      },
      {
         path: '/geral',
         name: 'geral',
         component: Geral
      },
      {
         path: '/lancamentos',
         name: 'lancamentos',
         component: Lancamentos
      },
      {
         path: '/relatorios',
         name: 'relatorios',
         component: Relatorios
      },
      {
         path: '/categorias',
         name: 'categorias',
         component: Categorias
      },
      {
         path: '/contas',
         name: 'constas',
         component: Contas
      }
   ]
})