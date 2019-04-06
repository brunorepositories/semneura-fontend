import Vue from 'vue'
import Router from 'vue-router'

// Geral
import Geral from '../views/geral/Geral'

// Contas
import Contas from '../views/contas/Contas'

// Categorias
import Categorias from '../views/categorias/Categorias'

// Relatorios
import Relatorios from '../views/relatorios/Relatorios'

// Lancamentos
import Lancamentos from '../views/lancamentos/Lancamentos'

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