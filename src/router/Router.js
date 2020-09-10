// Instancias Vue
import Vue from 'vue'
import Router from 'vue-router'


// Home
import Home from '@/views/Home'

// Clientes
import ListarClientes from '@/views/clientes/ListarClientes'
import CadastrarCliente from '@/views/clientes/CadastrarCliente'


Vue.use(Router)

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
        children: [
            {
                name: 'ListarClientes',
                path: 'listar-clientes',
                component: ListarClientes,
            },
            {
                name: 'CadastrarCliente',
                path: 'cadastrar-cliente',
                component: CadastrarCliente,
            }
        ]
    }
]

const router = new Router({ routes })

export default router
