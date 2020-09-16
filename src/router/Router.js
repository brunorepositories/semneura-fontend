// Instancias Vue
import Vue from 'vue'
import Router from 'vue-router'


// Home
import Home from '@/views/Home/Home'

//Categorias
// import ListarCategorias from '@/views/categorias/ListarCategorias'
// import CadastrarCategoria from '@/views/categorias/CadastrarCategoria'
// import EditarCategoria from '@/views/categorias/EditarCategorias'

// Clientes
import ListarClientes from '@/views/clientes/ListarClientes'
import CadastrarCliente from '@/views/clientes/CadastrarCliente'
import EditarCliente from '@/views/clientes/EditarCliente'

//Compras
// import ListarCompras from '@/views/compras/ListarCompras'
// import RealizarCompra from '@/views/compras/RealizarCompra'


//CondicoesPagamento
// import ListarCondicoesPagamento from '@/views/condicoesPagamento/ListarCondicoesPagamento'
// import CadastrarCondicaoPagamento from '@/views/condicoesPagamento/CadastrarCondicaoPagamento'
// import EditarCondicaoPagamento from '@/views/condicoesPagamento/EditarCondicaoPagamento'


//ContasPagar
// import ListarContasPagar from '@/views/contasPagar/ListarContasPagar'
// import EditarContasPagar from '@/views/contasPagar/EditarContasPagar'

//ContasReceber
// import ListarContasReceber from '@/views/contasReceber/ListarContasReceber'
// import EditarContasReceber from '@/views/contasReceber/EditarContasReceber'

//Fornecedores
// import ListarFornecedoress from '@/views/fornecedores/ListarFornecedoress'
// import CadastrarFornecedores from '@/views/fornecedores/CadastrarFornecedores'
// import EditarFornecedores from '@/views/fornecedores/EditarFornecedores'

//Pais
// import ListarPaises from '@/views/localizacoes/paises/ListarPaises'
// import CadastrarPais from '@/views/localizacoes/paises/CadastrarPais'
// import EditarPais from '@/views/localizacoes/paises/EditarPais'

//Estado
// import ListarEstados from '@/views/localizacoes/estados/ListarEstados'
// import CadastrarEstado from '@/views/localizacoes/estados/CadastrarEstado'
// import EditarEstado from '@/views/localizacoes/estados/EditarEstado'

//Cidade
// import ListarCidades from '@/views/localizacoes/cidades/ListarCidades'
// import CadastrarCidade from '@/views/localizacoes/cidades/CadastrarCidade'
// import EditarCidade from '@/views/localizacoes/cidades/EditarCidade'

//Produto
// import ListarProdutos from '@/views/produto/ListarProdutos'
// import CadastrarProduto from '@/views/produto/CadastrarProduto'
// import EditarProduto from '@/views/produto/EditarProduto'

//Vendas
// import ListarVendas from '@/views/Vendas/ListarVendas'
// import RealizarVenda from '@/views/Vendas/RealizarVenda'







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
