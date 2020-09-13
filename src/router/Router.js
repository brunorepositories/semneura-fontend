// Instancias Vue
import Vue from 'vue'
import Router from 'vue-router'


// Home
import Home from '@/views/Home'

// Clientes
import ListarClientes from '@/views/clientes/ListarClientes'
import CadastrarCliente from '@/views/clientes/CadastrarCliente'
import EditarCliente from '@/views/clientes/EditarCliente'


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
            },
            {
                name: 'EditarCliente',
                path: 'editar-cliente',
                component: EditarCliente,
            }
        ]
    }
]

const router = new Router({ routes })

export default router
