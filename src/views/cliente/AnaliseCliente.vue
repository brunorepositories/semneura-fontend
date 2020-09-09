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
						<h3 class="m-b-0 text-white text-uppercase font-bold">Análise de cliente</h3>
						<h6 class="m-b-0 text-white">Verifique se todos os dados estão corretos antes de aceitar o cliente.</h6>
					</div>
					<div class="card-body">
						<div class="form-material">
							<div v-if="cliente.tipo == 'FISICA'">
								<h4 class="card-title text-uppercase font-bold">Cliente Pessoa Física</h4>
								<hr/>
								<div class="row">
									<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
										<div class="form-group">
											<label>Nome</label>
											<input class="form-control width-90per" type="text" disabled placeholder="Nome do Cliente" v-model="cliente.pessoaFisica.nome" style="color: black;">
											<i class="icon-close" @click="inputCheck()" />
										</div>
										<div class="form-group">
											<label>CPF</label>
											<masked-input class="form-control width-90per" type="text" disabled placeholder="CPF" mask="111.111.111-11" v-model="cliente.pessoaFisica.cpf" />
											<i class="icon-close" @click="inputCheck()" />
										</div>
										<div class="form-group">
											<label>Data de nascimento</label>
											<input class="form-control width-90per" type="text" disabled placeholder="Data de Nascimento" v-model="cliente.pessoaFisica.dataNascimento" />
											<i class="icon-close" @click="inputCheck()" />
										</div>
										<div class="form-group">
											<label>Nacionalidade</label>
											<input class="form-control width-90per" type="text" disabled placeholder="Nacionalidade" v-model="cliente.paisCliente" />
											<i class="icon-close" @click="inputCheck()"/>
										</div>
									</div>
									<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
										<div class="form-group">
											<label>Sexo</label>
											<input class="form-control width-90per" type="text" disabled placeholder="Sexo" v-model="cliente.pessoaFisica.sexo" />
											<i class="icon-close" @click="inputCheck()"/>
										</div>
										<div class="form-group">
											<label>Profissão</label>
											<input class="form-control width-90per" type="text" disabled placeholder="Profissão" v-model="cliente.pessoaFisica.profissao" />
											<i class="icon-close" @click="inputCheck()" />
										</div>
										<div class="form-group">
											<label>Patrimonio</label>
											<input class="form-control width-90per" type="text" disabled placeholder="Patrimônio" v-model="cliente.pessoaFisica.patrimonio" />
											<i class="icon-close" @click="inputCheck()" />
										</div>
										<div class="form-group">
											<label>Nome da mãe</label>
											<input class="form-control width-90per" type="text" disabled placeholder="Nome da Mãe" v-model="cliente.pessoaFisica.nomeDaMae" />
											<i class="icon-close" @click="inputCheck()" />
										</div>
									</div>
									<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
										<div class="form-group">
											<label>Renda</label>
											<input class="form-control width-90per" type="text" disabled placeholder="Renda" v-model="cliente.pessoaFisica.renda" />
											<i class="icon-close" @click="inputCheck()"/>
										</div>
										<div class="form-group">
											<label>E-mail</label>
											<input class="form-control width-90per" type="text" disabled placeholder="E-mail" v-model="cliente.pessoaFisica.email" />
											<i class="icon-close" @click="inputCheck()" />
										</div>
										<div class="form-group">
											<label>Naturalidade</label>
											<input class="form-control width-90per" type="text" disabled placeholder="Naturalidade" v-model="cliente.cidadeCliente" />
											<i class="icon-close" @click="inputCheck()" />
										</div>
									</div>
								</div>
							</div>
							<div v-if="cliente.tipo == 'JURIDICA'">
								<h4 class="card-title text-uppercase font-bold">Cliente: Pessoa Juridica</h4>
								<hr/>
								<div class="form-group">
									<div class="col-xs-4 col-sm-4 col-md-12">
										<input class="form-control width-90per" type="text" disabled placeholder="Razão Social" v-model="cliente.pessoaJuridica.razaoSocial" />
										<i class="icon-check" @click="inputCheck()" />
									</div>
									<div class="col-xs-4 col-sm-4 col-md-12">
										<input class="form-control width-90per" type="text" disabled placeholder="Nome Fantasia" v-model="cliente.pessoaJuridica.nomeFantasia" />
										<i class="icon-check" @click="inputCheck()" />
									</div>
									<div class="col-xs-4 col-sm-4 col-md-12">
										<input class="form-control width-90per" type="text" disabled placeholder="CNPJ" v-model="cliente.pessoaJuridica.cnpj" />
										<i class="icon-check" @click="inputCheck()" />
									</div>
								</div>
								<div class="form-group">
									<div class="col-xs-6 col-sm-6 col-md-6">
										<input class="form-control width-90per" type="text" disabled placeholder="Representante" v-model="cliente.pessoaJuridica.nomeRepresentante" />
										<i class="icon-check" @click="inputCheck()" />
									</div>
									<div class="col-xs-6 col-sm-6 col-md-6">
										<input class="form-control width-90per" type="text" disabled placeholder="CPF Representante" v-model="cliente.pessoaJuridica.cpfRepresentante" />
										<i class="icon-check" @click="inputCheck()" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="card">
					<div class="card-header bg-primary" >
						<div class="row">
							<div class="col-6">
								<h4 class="m-b-0 text-white text-uppercase font-bold">Telefones</h4>
							</div>
						</div>
					</div>
					<div class="col-12">
						<div class="table-responsive">
							<table class="table table-hover">
								<thead>
									<tr>
										<th>DDI</th>
										<th>DDD</th>
										<th>Número</th>
										<th>Tipo de Contato</th>
										<th>Verificar</th>
									</tr>
								</thead>
								<tbody>
									<template v-for="(cli, index) in cliente.telefones">
										<tr :key="index">
											<td>{{ cli.ddi }}</td>
											<td>{{ cli.ddd }}</td>
											<td>{{ cli.numero }}</td>
											<td>{{ cli.descricao }}</td>
											<td><i class="icon-close" @click="inputCheck()" /></td>
										</tr>
									</template>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			<div class="card">
				<div class="card-header bg-primary" >
					<div class="row">
						<div class="col-6">
							<h4 class="m-b-0 text-white text-uppercase font-bold">Endereços</h4>
						</div>
					</div>
				</div>
					<div class="col-12">
						<div class="table-responsive">
							<table class="table table-hover">
								<thead>
									<tr>
										<th>Logradouro</th>
										<th>Número</th>
										<th>Bairro</th>
										<th>Cidade</th>
										<th>Unidade</th>
										<th>Complemento</th>
										<th>Tipo do Endereço</th>
										<th>Verificar</th>
									</tr>
								</thead>
								<tbody>
									<template v-for="(cli, index) in cliente.enderecos">
										<tr :key="index">
											<td>{{ cli.logradouro }}</td>
											<td>{{ cli.numero }}</td>
											<td>{{ cli.bairro }}</td>
											<td>{{ cli.nome }}</td>
											<td>{{ cli.unidade }}</td>
											<td>{{ cli.complemento }}</td>
											<td>{{ cli.descricao }}</td>
											<td><i class="icon-close" @click="inputCheck()" /></td>
										</tr>
									</template>
								</tbody>
							</table>
						</div>
					</div>
			</div>
			<div class="card">
				<div class="card-header bg-primary" >
					<div class="row">
						<div class="col-6">
							<h4 class="m-b-0 text-white text-uppercase font-bold">Anexos</h4>
						</div>
					</div>
				</div>
				<div class="card-body">
					<h4 class="text-themecolor m-b-15">Anexos (ainda serão inseridos)</h4>
					<div id="anexos" class="m-t-40">
						<div class="row">
							<div v-for="(anexo, idx) in cliente.anexos" v-bind:id='"cardAnexo" + anexo.id' :key="idx" >
								<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
									<b>Descrição</b>
									{{ anexo.descricao }}
								</div>
								<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
									<b>Data de Criação</b>
									{{ anexo.data_atualizado }}
								</div>
								<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
									<b>Situação</b>
									{{ anexo.status_anexo }}
								</div>
								<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
									<b>Ações</b>
									<button class="btn btn-sm btn-success" @click.prevent="showImgs(anexo.id, anexo.status_anexo)">IMGs</button>
									<!-- <div v-bind:id='"cardAnexoInner" + anexo.id' class="col-xs-12 col-sm-12 col-md-12 col-lg-12"></div> -->
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<p class="text-center m-b-30 m-t-0">
					<button class="btn btn-md btn-red text-uppercase font-bold">Reprovar</button>
					<button v-show="this.submitButton" class="btn btn-md btn-success text-uppercase font-bold p-l-25 p-r-25" @click.prevent="update(cliente)">Aceitar</button>
					<button v-show="!this.submitButton" class="btn btn-md  btn-warning text-uppercase font-bold p-l-25 p-r-25" @click.prevent="update(cliente)">Aceitar com pendências</button>
			</p>
		</div>
	</div>
</div>
		<!-- Modal Anexos
		<sweet-modal modal-theme="dark" overlay-theme="dark" ref="modalAnexos">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
					<b>Descrição</b>
				</div>
				<div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
					<b>Situação</b>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-12 col-lg-4">
					<b>Data de Criação</b>
				</div>
				<div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
					<b>Ações</b>
				</div>
			</div>
			<anexo-imagem :anexoImg="anexoImgs" :anexoStatus="anexoStatus"></anexo-imagem>
		</sweet-modal>
		-->
</template>

<script>
import { RestConnection } from '../../rest/rest-connection'
import MaskedInput from 'vue-masked-input'
import { cardTelefone, cardEndereco, AnexoImagem } from '../card'

const globalFunc = require('../utilities/Functions.js')

export default {
	data () {
		return {
			anexoImgs: [],
			anexoStatus: 0,
			inputsCliFisico: 11,
			inputsCliJuridico: 5,
			submitButton: false,
			inputCount: 0,
			paises: [],
			cidades: [],
			motivosReprovacao: [],
			telefoneTipos: [],
			enderecoTipos: [],
			anexos: [],
			cliente: {
				enderecos: [],
				telefones: []
			}
		}
	},
	components: {
		MaskedInput,
		AnexoImagem,
		cardTelefone,
		cardEndereco
	},
	watch: {
		inputCount: function () {
			let somaInputs = this.cliente.telefones.length + this.cliente.enderecos.length

			if (this.cliente.tipo === 'FISICA') {
				somaInputs += this.inputsCliFisico
			} else {
				somaInputs += this.inputCliJuridico
			}

			if (somaInputs === this.inputCount) {
				this.submitButton = true
			} else {
				this.submitButton = false
			}
		}
	},
	methods: {
		update: async function (perfil) {
			event.preventDefault()

			let somaInputs = perfil.telefones.length + perfil.enderecos.length

			if (perfil.tipo === 'FISICA') {
				somaInputs += this.inputsCliFisico
			} else {
				somaInputs += this.inputCliJuridico
			}

			if (this.inputCount === somaInputs) {
				console.log('---- ENTROU NO IF ----')
			} else {
				alert('Você deve confirmar todos os campos')
			}
		},
		carregaInformacoesCliente: async function () {
			console.log('============')
			try {
				console.log('teste01')
				let response = await RestConnection.get('/cliente/busca/26570585-fce8-4836-aa6b-d9886f587277')
				let retorno = response.data.conteudo
				this.cliente = retorno.cliente
				this.cliente.enderecos = retorno.enderecos
				this.cliente.cidadeCliente = retorno.cidadeCliente.nome
				this.cliente.paisCliente = retorno.paisCliente.nome
				this.cliente.telefones = retorno.telefones
				this.cliente.pessoaFisica = retorno.pessoaFisica
				this.cliente.pessoaJuridica = retorno.pessoaJuridica
				this.anexos = retorno.anexos

				// console.log(this.cliente.cidadeCliente)
				// console.log(this.cliente.paisCliente)

				//	while (this.qtdTelefones <= this.cliente.telefones.length) {
				//	this.qtdTelefones++
				// }
				// while (this.qtdEnderecos <= this.cliente.telefones.length) {
				//	this.qtdEnderecos++
				// }
				// for (let i in this.cliente.telefones) {
				// 	this.qtdTelefones++
				// }
				// for (let i in this.cliente.enderecos) {
				// 	this.qtdEnderecos++
				// }
			} catch (e) {
				console.log(e)
				if (e.status === 400) {
					alert(e.data.text_message)
				} else {
					alert('Houve um erro! Por favor tente novamente.')
				}
			}
		},
		inputCheck: function () {
			if (event.target.classList.contains('icon-check')) {
				// remove -1
				this.inputCount--
				// remove class
				event.target.classList.remove('icon-check')
				event.target.classList.add('icon-close')
			} else {
				// add +1
				this.inputCount++
				// add class
				event.target.classList.add('icon-check')
				event.target.classList.remove('icon-close')
			}
		},
		showImgs: async function (idAnexo, statusAnexo) {
			this.anexoImgs = []
			this.anexoStatus = 0
			try {
				let response = await RestConnection.get('/cliente/anexo/imgs/' + idAnexo)
				// this.$set(this.anexoImgs, '' + idAnexo, response.data)
				this.anexoImgs = response.data
				this.anexoStatus = statusAnexo
				this.anexoMotivos = this.motivosReprovacao
				this.$refs.modalAnexos.open()
			} catch (e) {
				console.log(e)
				if (e.response.status === 400) {
					alert(e.response.data.text_message)
				} else {
					alert('Houve um erro! Por favor tente novamente.')
				}
			}
		}
	},
	created: function () {
		this.carregaInformacoesCliente()

		globalFunc.buscaPaises().then((result) => {
			this.paises = result
			// console.log(result)
		})
		globalFunc.buscaCidades().then((result) => {
			this.cidades = result
			// console.log(result)
		})
		globalFunc.buscaTelefoneTipos().then((result) => {
			this.telefoneTipos = result
			// console.log(result)
		})
		globalFunc.buscaEnderecoTipos().then((result) => {
			this.enderecoTipos = result
			// console.log(result)
		})
	}
}
</script>

<style scoped>
.icon-check {
	font-weight: bold;
	font-size: 30px;
	color: #0cc21c;
	position: absolute;
}

.icon-close {
	font-weight: bold;
	font-size: 30px;
	color: #f44336;
	position: absolute;
}

.width-90per {
	width: 90%;
}

td.icon-close {
		padding-top: 0px;
}

label {
	display: block;
}

</style>
