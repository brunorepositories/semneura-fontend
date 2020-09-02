import Vue from 'vue'
import Router from 'vue-router'

// Geral
import Geral from '../views/geral/Geral'

// Contas
import Contas from '../views/contas/GerenciarContas'
import CadastrarConta from '../views/contas/CadastrarConta'


// Categorias
import Categorias from '../views/categorias/GerenciarCategorias'
import CadastrarCategorias from '../views/categorias/CadastrarCategoria'


// Relatorios
import Relatorios from '../views/relatorios/Relatorios'

// Lancamentos
import Lancamentos from '../views/lancamentos/GerenciarLancamentos'
import CadastrarLancamentos from '../views/lancamentos/CadastrarLancamento'

// teste

Vue.use(Router)

export default new Router({
   routes: [
      {
         path: '/',
         redirect: 'geral'
      },
      {
         path: '/geral',
         name: 'geral',
         component: Geral
      },
      {
         path: '/lancamentos',
         name: 'lancamentos',
         component: Lancamentos,
         children: [
            {
               path: 'cadastrar',
               name: 'cadastrar-lancamentos',
               component: CadastrarLancamentos,
            }
         ]
      },
      {
         path: '/relatorios',
         name: 'relatorios',
         component: Relatorios
      },
      {
         path: '/categorias',
         name: 'categorias',
         component: Categorias,
         children: [
            {
               path: 'cadastrar',
               name: 'cadastrar-categoria',
               component: CadastrarCategorias,
            }
         ]
      },
      {
         path: '/contas',
         name: 'contas',
         component: Contas,
         children: [
            {
               path: 'cadastrar',
               name: 'cadastrar-conta',
               component: CadastrarConta,
            }
         ]
      }
   ]
})