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
					<div class="card-header bg-info" >
						<h3 class="m-b-0 text-white text-uppercase font-bold">Cliente Cadastrados</h3>
						<h6 class="m-b-0 text-white">Selecione um cliente e clique no botão para editar o cadastro.</h6>
					</div>
					<div class="card-body">
						<form class="form-material">
							<div class="row">
								<div class="col-6">
									<div class="form-group text-uppercase font-bold">
										<p>Cliente:
											<input type="radio" name="pessoa" id="fisica" value="FISICA" v-model="tipoCliente" checked="checked" />
											<label for="fisica" class="m-b-0">Físico</label>
											<input type="radio" name="pessoa" id="juridica" value="JURIDICA" v-model="tipoCliente" />
											<label for="juridica" class="m-b-0">Jurídico</label>
										</p>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-12">
									<div class="form-group">
										<input type="search" v-model="buscar" class="form-control" placeholder="Digite o nome, cpf, cnpj ou outros dados do cliente para localizar o cadastro" />
									</div>
								</div>
							</div>
							<div v-if="tipoCliente === 'FISICA'">
								<div class="table-responsive">
									<table class="table table-sm table-hover color-table primary-table">
										<thead>
											<tr>
												<th>Nome</th>
												<th>CPF</th>
												<th>E-mail</th>
												<th>Ação</th>
											</tr>
										</thead>
										<tbody>
											<template v-if="buscar === ''" v-for="(cli, index) in pessoaFisica">
												<tr :key="index">
													<td>{{ cli.nome }}</td>
													<td>{{ cli.cpf }}</td>
													<td>{{ cli.email }}</td>
													<td><router-link class="btn btn-sm btn-outline-primary text-uppercase font-bold" :to="{ name: 'atualizarcliente', params: { id: cli.id }}">Editar</router-link></td>
												</tr>
											</template>
											<template v-if="buscar" v-for="(clienteFisico, index) in filterPessoaFisica">
												<tr :key="index">
													<td>{{ clienteFisico.nome }}</td>
													<td>{{ clienteFisico.cpf }}</td>
													<td>{{ clienteFisico.email }}</td>
													<td><router-link class="btn btn-sm btn-outline-primary text-uppercase font-bold" :to="{ name: 'atualizarcliente', params: { id: clienteFisico.id }}">Editar</router-link></td>
												</tr>
											</template>
										</tbody>
									</table>
								</div>
							</div>
							<div v-if="tipoCliente === 'JURIDICA'">
								<div class="table-responsive">
									<table class="table table-sm table-hover color-table primary-table">
										<thead>
											<tr>
												<th>Razão Social</th>
												<th>Nome Fantasia</th>
												<th>CNPJ</th>
												<th>Nome do Representante</th>
												<th>CPF do Representante</th>
												<th>Ação</th>
											</tr>
										</thead>
										<tbody>
											<template v-if="buscar === ''" v-for="(cli, index) in pessoaJuridica">
												<tr :key="index">
													<td>{{ cli.razaoSocial }}</td>
													<td>{{ cli.nomeFantasia }}</td>
													<td>{{ cli.cnpj }}</td>
													<td>{{ cli.nomeRepresentante }}</td>
													<td>{{ cli.cpfRepresentante }}</td>
													<td><router-link class="btn btn-sm btn-outline-primary text-uppercase font-bold" :to="{ name: 'atualizarcliente', params: { id: cli.id }}">Editar</router-link></td>
												</tr>
											</template>
											<template v-if="buscar" v-for="(clienteJuridico, index) in filterPessoaJuridica">
											<tr :key="index">
												<td>{{ clienteJuridico.razaoSocial }}</td>
												<td>{{ clienteJuridico.nomeFantasia }}</td>
												<td>{{ clienteJuridico.cnpj }}</td>
												<td>{{ clienteJuridico.nomeRepresentante }}</td>
												<td>{{ clienteJuridico.cpfRepresentante }}</td>
												<td><router-link class="btn btn-sm btn-outline-primary text-uppercase font-bold" :to="{ name: 'atualizarcliente', params: { id: clienteJuridico.id }}">Editar</router-link></td>
											</tr>
											</template>
										</tbody>
									</table>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import { RestConnection } from '../../rest/rest-connection'
// import MaskedInput from 'vue-masked-input'
// import { VMoney } from 'v-money'

const globalFunc = require('../utilities/Functions.js')

export default {
	data: function () {
		return {
			pessoaFisica: [],
			pessoaJuridica: [],
			tipoCliente: 'FISICA',
			buscar: '',
			money: {
				decimal: ',',
				thousands: '.',
				prefix: 'R$ ',
				precision: 2,
				masked: false /* doesn't work with directive */
			}
		}
	},
	created: function () {
		globalFunc.buscaTodosClientePessoaJuridica().then((result) => {
			this.pessoaJuridica = result
		})
		globalFunc.buscaTodosClientePessoaFisica().then((result) => {
			this.pessoaFisica = result
		})
	},
	computed: {
		filterPessoaFisica () {
			return this.pessoaFisica
				.filter((clienteFisico) => {
					return (
						clienteFisico.nome.match(this.buscar) ||
						clienteFisico.cpf.match(this.buscar) ||
						clienteFisico.email.match(this.buscar)
					)
				})
		},
		filterPessoaJuridica () {
			return this.pessoaJuridica
				.filter((clienteJuridico) => {
					return (
						clienteJuridico.razaoSocial.match(this.buscar) ||
						clienteJuridico.nomeFantasia.match(this.buscar) ||
						clienteJuridico.cnpj.match(this.buscar) ||
						clienteJuridico.nomeRepresentante.match(this.buscar) ||
						clienteJuridico.cpfRepresentante.match(this.buscar)
					)
				})
		}
	}
}
</script>

<style scoped>
</style>
