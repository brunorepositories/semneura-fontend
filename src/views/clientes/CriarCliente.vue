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
						<h3 class="m-b-0 text-white text-uppercase font-bold">Cadastro de cliente</h3>
						<h6 class="m-b-0 text-white">Preencha os campos abaixo para cadastrar um novo cliente.</h6>
					</div>
					<div class="card-body">
						<div class="form-material">
							<p class="text-uppercase font-bold">Cliente:
								<input type="radio" name="pessoa" id="fisica" value="FISICA" v-model="perfil.tipo" checked="checked" />
								<label for="fisica" class="m-b-0">Físico</label>
								<input type="radio" name="pessoa" id="juridica" value="JURIDICA" v-model="perfil.tipo" />
								<label for="juridica" class="m-b-0">Jurídico</label>
							</p>
						</div>
						<hr/>
						<div v-if="perfil.tipo == 'FISICA'">
							<div class="row">
								<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
									<div class="form-group form-material">
										<label>Nome completo</label>
										<input class="form-control " type="text" placeholder="Ex: João da Silva" v-model="perfil.nome">
									</div>
								</div>
								<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
									<div class="form-group form-material">
										<label>CPF</label>
										<masked-input	class="form-control" type="text" required="" placeholder="Ex: 000.000.000-00" v-model="perfil.cpf" mask="111.111.111-11" />
									</div>
								</div>
								<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
									<div class="form-group form-material">
										<label style="text-decoration-color: white">Data de nascimento</label>
										<masked-input class="form-control" type="text" required="" placeholder="Ex: 01/01/1980" v-model="perfil.dataNascimento" mask="11/11/1111" />
									</div>
								</div>
								<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
									<div class="form-group form-material">
										<label>Nacionalidade</label>
										<select class="form-control" v-model="nacionalidade">
											<option disabled value="0">Selecione uma nacionalidade</option>
											<option v-for="(pais, idx) in paises" :key="idx" :value="pais.id">{{ pais.nome }}</option>
										</select>
									</div>
								</div>
								<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
									<div class="form-group form-material">
										<label>Naturalidade</label>
										<!-- Cidade -->
										<select class="form-control" v-model="naturalidade">
											<option disabled value="0">Selecione uma naturalidade</option>
											<option v-for="(cidade, idx) in cidades" :key="idx" :value="cidade.id">{{ cidade.nome }}</option>
										</select>
									</div>
								</div>
								<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
									<div class="form-group form-material">
										<label>Nome da mãe</label>
										<input class="form-control" type="text" required="" placeholder="Ex: Maria da Silva" v-model="perfil.nomeDaMae">
									</div>
								</div>
								<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
									<div class="form-group form-material">
										<label>Gênero</label>
										<select class="form-control" v-model="sexo">
											<option disabled value="0">Selecione um genêro</option>
											<option value="MASCULINO">Masculino</option>
											<option value="FEMININO">Feminino</option>
										</select>
									</div>
								</div>
								<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
									<div class="form-group form-material">
										<label>E-mail</label>
										<input class="form-control" type="text" required="" placeholder="Ex: joao@gmail.com" v-model="perfil.email">
									</div>
								</div>
								<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
									<div class="form-group form-material">
										<label>Profissão</label>
										<input class="form-control" type="text" required="" placeholder="Ex: Empresário" v-model="perfil.profissao">
									</div>
								</div>
								<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
									<div class="form-group form-material">
										<label>Patrimônio</label>
										<input class="form-control" type="text" required="" placeholder="Ex: Patrimonio" v-model="perfil.patrimonio" v-money="money">
									</div>
								</div>
								<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
									<div class="form-group form-material">
										<label>Renda</label>
										<input class="form-control" type="text" required="" placeholder="Ex: Renda" v-model="perfil.renda"	v-money="money">
									</div>
								</div>
								<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
									<div class="form-group form-material">
										<label>Nome do(a) conjuge</label>
										<input class="form-control" type="text" required="" placeholder="Ex: Joana da Silva" v-model="perfil.conjuge.nome">
									</div>
								</div>
								<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
									<div class="form-group form-material">
										<label>CPF do(a) conjuge</label>
										<masked-input	class="form-control" type="text" required="" placeholder="Ex: 000.000.000-00" v-model="perfil.conjuge.cpf" mask="111.111.111-11" />
									</div>
								</div>
							</div>
						</div>
						<div v-if="perfil.tipo == 'JURIDICA'">
							<div class="row">
								<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
									<div class="form-group form-material">
										<label>Razão Social</label>
										<input class="form-control" type="text" required="" placeholder="Ex: Joao e Joana" v-model="perfil.razaoSocial">
									</div>
								</div>
								<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
									<div class="form-group form-material">
										<label>Nome fantasia</label>
										<input class="form-control" type="text" required="" placeholder="Ex: Google" v-model="perfil.nomeFantasia">
									</div>
								</div>
								<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
									<div class="form-group form-material">
										<label>CNPJ</label>
										<masked-input	class="form-control" type="text" required="" placeholder="Ex: 00.000.000/0000-00" v-model="perfil.cnpj" mask="11.111.111/1111-11" />
									</div>
								</div>
								<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
									<div class="form-group form-material">
										<label>Nome do representante</label>
										<input class="form-control" type="text" required="" placeholder="Ex: Jonas de Lima" v-model="perfil.nomeRepresentante">
									</div>
								</div>
								<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
									<div class="form-group form-material">
										<label>CPF do representante</label>
										<masked-input	class="form-control" type="text" required="" placeholder="Ex: 000.000.000-00" v-model="perfil.cpfRepresentante" mask="111.111.111-11" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="card">
					<div class="card-header bg-primary">
						<h4 class="m-b-0 text-white text-uppercase font-bold">Telefones</h4>
					</div>
					<div class="card-body">
						<!-- Telefones -->
						<div id="telefones">
							<!-- COMPONENTE -->
							<card-telefone :objTelefone="null" :cardId="1" :paises="paises" :telefoneTipos="telefoneTipos" :showButton="true" @save-telefone="saveTelefone"></card-telefone>
						</div>
						<div class="table-responsive" v-show="perfil.telefones.length > 0">
							<!-- v-show="arrayTelefone != null" -->
							<table class="table table-hover table-sm">
								<thead>
									<tr>
										<th>DDI</th>
										<th>DDD</th>
										<th>Número</th>
										<th>Tipo de telefone</th>
										<th>Remover</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(tel, index) in perfil.telefones" :key="index">
										<td>{{ tel.ddi }}</td>
										<td>{{ tel.ddd }}</td>
										<td>{{ tel.numero }}</td>
										<td>{{ tel.tipoTelefone.descricao }}</td>
										<td><button class="btn btn-sm btn-outline-danger" @click.prevent="perfil.telefones.splice(index, 1)">Remover</button></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div class="card">
					<div class="card-header bg-primary">
						<h4 class="m-b-0 text-white text-uppercase font-bold">Endereços</h4>
					</div>
					<div class="card-body">
						<!-- Endereços -->
						<div id="endereco">
							<!-- COMPONENTE -->
							<card-endereco :objEndereco="null" :cidades="cidades" :enderecoTipos="enderecoTipos" :showButton="true" @save-endereco="saveEndereco"></card-endereco>
						</div>
						<div class="table-responsive" v-show="perfil.enderecos.length > 0">
							<table class="table table-hover table-sm">
								<thead>
									<tr>
										<th>CEP</th>
										<th>Logradouro</th>
										<th>Bairro</th>
										<th>Complemento</th>
										<th>Unidade</th>
										<th>Numero</th>
										<th>Localidade</th>
										<th>Tipo do Endereço</th>
										<th>Remover</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(ende, index) in perfil.enderecos" :key="index">
										<td>{{ ende.bairro }}</td>
										<td>{{ ende.logradouro }}</td>
										<td>{{ ende.cep }}</td>
										<td>{{ ende.complemento }}</td>
										<td>{{ ende.numero }}</td>
										<td>{{ ende.unidade }}</td>
										<td>{{ ende.localidade.nome }}</td>
										<td>{{ ende.tipoEndereco.descricao }}</td>
										<td><button class="btn btn-sm btn-outline-danger" @click.prevent="perfil.enderecos.splice(index, 1)">Remover</button></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- Botão Enviar -->
		<div class="text-center">
			<router-link class="btn btn-md btn-danger text-uppercase font-bold" :to="{ name: 'criarcliente' }">Cancelar</router-link>
			<button class="btn btn-md btn-success text-uppercase font-bold" @click="create(perfil)">Cadastrar</button>
		</div>
	</div>
</template>

<script>
import { RestConnection } from '../../rest/rest-connection'
import MaskedInput from 'vue-masked-input'
import { VMoney } from 'v-money'
import { cardTelefone, cardEndereco } from '../card'

const globalFunc = require('../utilities/Functions.js')

export default {
	data: function () {
		return {
			deletarFone: true,
			deletarEndereco: true,
			paises: [],
			cidades: [],
			telefoneTipos: [],
			enderecoTipos: [],
			naturalidade: 0,
			nacionalidade: 0,
			sexo: 0,
			perfil: {
				tipo: 'FISICA',
				telefones: [],
				enderecos: [],
				conjuge: {}
			},
			money: {
				decimal: ',',
				thousands: '.',
				prefix: 'R$ ',
				precision: 2,
				masked: false /* doesn't work with directive */
			}
		}
	},
	directives: {money: VMoney},
	components: {
		MaskedInput,
		cardTelefone,
		cardEndereco
	},
	methods: {
		create: async function (perfil) {
			event.preventDefault()
			if (this.perfil.telefones.length <= 0) {
				alert('Você deve ao menos inserir UM telefone para contato.')
				return
			}
			if (this.perfil.enderecos.length <= 0) {
				alert('Você deve ao menos inserir UM endereço.')
				return
			}

			let dados = {}

			if (perfil.tipo === 'FISICA') {
				let objPessoa = {
					tipo: perfil.tipo,
					ativo: 'ATIVO',
					observacoes: 'Ok',
					nome: perfil.nome,
					cpf: globalFunc.updateCPFData(perfil.cpf),
					dataNascimento: globalFunc.updateDateData(perfil.dataNascimento),
					nacionalidade: this.nacionalidade,
					naturalidade: this.naturalidade,
					nomeDaMae: perfil.nomeDaMae,
					sexo: this.sexo,
					email: perfil.email,
					profissao: perfil.profissao,
					patrimonio: globalFunc.updateMoneyData(perfil.patrimonio),
					renda: globalFunc.updateMoneyData(perfil.renda),
					telefones: perfil.telefones,
					enderecos: perfil.enderecos,
					conjuge: perfil.conjuge
				}

				objPessoa.conjuge.cpf = globalFunc.updateCPFData(objPessoa.conjuge.cpf)

				for (let i in objPessoa.telefones) {
					objPessoa.telefones[i].numero = globalFunc.updateNumeroData(objPessoa.telefones[i].numero)
					objPessoa.telefones[i].ddd = globalFunc.updateDddData(objPessoa.telefones[i].ddd)
					objPessoa.telefones[i].tipoTelefone = objPessoa.telefones[i].tipoTelefone.id
				}
				for (let i in objPessoa.enderecos) {
					objPessoa.enderecos[i].cep = globalFunc.updateCepData(objPessoa.enderecos[i].cep)
					objPessoa.enderecos[i].tipoEndereco = objPessoa.enderecos[i].tipoEndereco.id
					objPessoa.enderecos[i].localidade = objPessoa.enderecos[i].localidade.id
				}

				dados = objPessoa
			} else if (perfil.tipo === 'JURIDICA') {
				let objPessoa = {
					tipo: perfil.tipo,
					ativo: 'ATIVO',
					observacoes: 'Ok',
					razaoSocial: perfil.razaoSocial,
					nomeFantasia: perfil.nomeFantasia,
					cnpj: globalFunc.updateCNPJData(perfil.cnpj),
					nomeRepresentante: perfil.nomeRepresentante,
					cpfRepresentante: globalFunc.updateCPFData(perfil.cpfRepresentante),
					telefones: perfil.telefones,
					enderecos: perfil.enderecos,
					conjuge: perfil.conjuge
				}

				for (let i in objPessoa.telefones) {
					objPessoa.telefones[i].numero = globalFunc.updateNumeroData(objPessoa.telefones[i].numero)
					objPessoa.telefones[i].ddd = globalFunc.updateDddData(objPessoa.telefones[i].ddd)
					objPessoa.telefones[i].tipoTelefone = objPessoa.telefones[i].tipoTelefone.id
				}

				for (let i in objPessoa.enderecos) {
					objPessoa.enderecos[i].cep = globalFunc.updateCepData(objPessoa.enderecos[i].cep)
					objPessoa.enderecos[i].tipoEndereco = objPessoa.enderecos[i].tipoEndereco.id
					objPessoa.enderecos[i].localidade = objPessoa.enderecos[i].localidade.id
				}
				console.log(objPessoa)

				dados = objPessoa
			} try {
				let response = await RestConnection.post('/cliente', dados)
				console.log(response.data)
				alert('Cliente criado com sucesso!')
				// location.reload()
			} catch (e) {
				console.log(e)
				if (e.response.status === 400) {
					alert(e.response.data.text_message)
				} else {
					alert('Houve um erro! Por favor tente novamente.')
				}
			}
		},
		saveTelefone: function (obj) {
			// Adicionar no Array
			// Cria um cópia do objeto para desvincular o v-model e não alterar os dados do array
			if (obj.ddd !== '' && obj.ddi !== '0' && obj.numero !== '' && obj.tipoTelefone !== '0') {
				return this.perfil.telefones.push(Object.assign({}, obj))
			}
		},
		saveEndereco: function (obj) {
			if (obj.bairro !== '' && obj.cep !== '' && obj.complemento !== '' && obj.localidade !== '0' && obj.logradouro !== '' && obj.numero !== '' && obj.tipoEndereco !== '0' && obj.unidade !== '') {
				return this.perfil.enderecos.push(Object.assign({}, obj))
			}
		}
	},
	created: function () {
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
		// this.paises = await globalFunc.buscaPaises()
		// this.cidades = await globalFunc.buscaCidades()
		// this.telefoneTipos = await globalFunc.buscaTelefoneTipos()
		// this.enderecoTipos = await globalFunc.buscaEnderecoTipos()
		// console.log(this.paises)
		// console.log(this.cidades)
		// console.log(this.telefoneTipos)
		// console.log(this.enderecoTipos)
	}
}
</script>

<style scoped>
</style>
