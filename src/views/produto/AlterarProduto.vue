<template>
	<div class="container-fluid">
		<div class="card-no-border">
			<div v-show="false" class="preloader">
				<div class="loader">
					<div class="loader__figure"></div>
					<p class="loader__label">Carregando..</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<div class="card">
					<div class="card-header bg-info">
						<h3 class="m-b-0 text-white font-bold text-uppercase">Alterar de Produto</h3>
						<h6 class="m-b-0 text-white">Selecione o produto que deseja alterar.</h6>
					</div>
					<div class="card-body">
						<form class="form-material">
							<div class="row">
								<div class="col-12">
									<div class="form-group">
										<label for="">Buscar</label>
										<input type="search" v-model="buscar" class="form-control" placeholder="Digite a descricao do produto para localizar o cadastro" />
									</div>
								</div>
							</div>
								<div class="table-responsive">
									<table class="table table-hover table-sm color-table primary-table">
										<thead>
											<tr>
												<th>Descrição</th>
												<th>Editar</th>
											</tr>
										</thead>
										<tbody>
											<template v-if="buscar === ''" v-for="(prod, index) in produtos">
												<tr :key="index">
													<td>{{ prod.descricao }}</td>
													<td><router-link class="btn btn-outline-primary btn-sm font-bold text-uppercase" :to="{ name: 'atualizarproduto', params: { id: prod.id }}">Editar</router-link></td>
												</tr>
											</template>
											<template v-if="buscar" v-for="(produto, index) in filterProduto">
												<tr :key="index">
													<td>{{ produto.descricao }}</td>
													<td><router-link class="btn btn-outline-primary btn-sm font-bold text-uppercase" :to="{ name: 'atualizarproduto', params: { id: produto.id }}">Editar</router-link></td>
												</tr>
											</template>
										</tbody>
									</table>
								</div>
							<!-- Botão Enviar -->
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

// import { RestConnection } from '../../rest/rest-connection'

const globalFunc = require('../utilities/Functions.js')

export default {
	data () {
		return {
			produtos: [],
			buscar: ''
		}
	},
	created: function () {
		globalFunc.buscarTodosProdutos().then((result) => {
			this.produtos = result
			console.log(result)
		})
	},
	computed: {
		filterProduto () {
			if (this.produto !== null) {
				return this.produtos
					.filter((produto) => {
						return (
							produto.descricao.match(this.buscar)
						)
					})
			}
			return this.produtos
		}
	}
}
</script>

<style scoped>
</style>
