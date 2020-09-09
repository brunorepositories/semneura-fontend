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
						<h3 class="m-b-0 text-white text-uppercase font-bold">Atualizar o cadastro do cliente</h3>
						<h6 class="m-b-0 text-white">Altere os campos abaixo e clique em salvar para atualizar o cadastro.</h6>
					</div>
					<div class="card-body">
						<form class="form-material">
							<div v-if="perfil.tipo == 'FISICA'">
								<h4 class="text-uppercase font-bold">cliente Pessoa física</h4>
								<hr/>
								<div class="row">
									<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
										<div class="form-group">
											<label for="">Nome completo</label>
											<input class="form-control" type="text" required="" placeholder="Ex: João da Silva" v-model="perfil.nome">
										</div>
									</div>
									<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
										<div class="form-group">
											<label for="">CPF</label>
											<masked-input	class="form-control" type="text" required="" placeholder="Ex: 000.000.000-00" v-model="perfil.cpf" mask="111.111.111-11" />
										</div>
									</div>
									<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
										<div class="form-group">
											<label for="">Data de nascimento</label>
											<masked-input class="form-control" type="text" required="" placeholder="Ex: 01/01/1980" v-model="perfil.dataNascimento" mask="11/11/1111" />
										</div>
									</div>
									<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
										<div class="form-group">
											<label for="">Nacionalidade</label>
											<select class="form-control" v-model="nacionalidade">
												<option disabled value="0">Selecione uma nacionalidade</option>
												<option v-for="(pais, idx) in paises" :key="idx" :value="pais.id">{{ pais.nome }}</option>
											</select>
										</div>
									</div>
									<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
										<div class="form-group">
											<label for="">Naturalidade</label>
											<!-- Cidade -->
											<select class="form-control" v-model="naturalidade">
												<option disabled value="0">Selecione uma naturalidade</option>
												<option v-for="(cidade, idx) in cidades" :key="idx" :value="cidade.id">{{ cidade.nome }}</option>
											</select>
										</div>
									</div>
									<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
										<div class="form-group">
											<label for="">Nome da mãe</label>
											<input class="form-control" type="text" required="" placeholder="Ex: Maria da Silva" v-model="perfil.nomeDaMae">
										</div>
									</div>
									<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
										<div class="form-group">
											<label for="">Gênero</label>
											<select class="form-control" v-model="sexo">
												<option disabled value="0">Selecione um genêro</option>
												<option value="MASCULINO">Masculino</option>
												<option value="FEMININO">Feminino</option>
											</select>
										</div>
									</div>
									<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
										<div class="form-group">
											<label for="">E-mail</label>
											<input class="form-control" type="text" required="" placeholder="Ex: joao@gmail.com" v-model="perfil.email">
										</div>
									</div>
									<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
										<div class="form-group">
											<label for="">Profissão</label>
											<input class="form-control" type="text" required="" placeholder="Ex: Empresário" v-model="perfil.profissao">
										</div>
									</div>
									<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
										<div class="form-group">
											<label for="">Patrimônio</label>
											<input class="form-control" type="text" required="" placeholder="Ex: Patrimonio" v-model="perfil.patrimonio" v-money="money">
										</div>
									</div>
									<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
										<div class="form-group">
											<label for="">Renda</label>
											<input class="form-control" type="text" required="" placeholder="Ex: Renda" v-model="perfil.renda"	v-money="money">
										</div>
									</div>
									<!-- <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
										<div class="form-group">
											<label for="">Nome do(a) conjuge</label>
											<input class="form-control" type="text" placeholder="Ex: Joana da Silva" v-model="perfil.conjuge.nome">
										</div>
									</div>
									<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
										<div class="form-group">
											<label for="">CPF do(a) conjuge</label>
											<masked-input	class="form-control" type="text" placeholder="Ex: 000.000.000-00" v-model="perfil.conjuge.cpf" mask="111.111.111-11" />
										</div>
									</div> -->
								</div>
							</div>
							<div v-if="perfil.tipo == 'JURIDICA'">
								<h4 class="m-b-15 text-uppercase font-bold">cliente Pessoa jurídica</h4>
								<hr/>
								<div class="row">
									<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
										<div class="form-group">
											<label for="">Razão Social</label>
											<input class="form-control" type="text" required="" placeholder="Ex: Joao e Joana" v-model="perfil.razaoSocial">
										</div>
									</div>
									<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
										<div class="form-group">
											<label for="">Nome fantasia</label>
											<input class="form-control" type="text" required="" placeholder="Ex: Google" v-model="perfil.nomeFantasia">
										</div>
									</div>
									<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
										<div class="form-group">
											<label for="">CNPJ</label>
											<masked-input	class="form-control" type="text" required="" placeholder="Ex: 00.000.000/0000-00" v-model="perfil.cnpj" mask="11.111.111/1111-11" />
										</div>
									</div>
									<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
										<div class="form-group">
											<label for="">Nome do representante</label>
											<input class="form-control" type="text" required="" placeholder="Ex: Jonas de Lima" v-model="perfil.nomeRepresentante">
										</div>
									</div>
									<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
										<div class="form-group">
											<label for="">CPF do representante</label>
											<masked-input	class="form-control" type="text" required="" placeholder="Ex: 000.000.000-00" v-model="perfil.cpfRepresentante" mask="111.111.111-11" />
										</div>
									</div>
								</div>
							</div>
						</form>
						<div class="text-center">
							<button class="btn btn-md btn-info text-uppercase font-bold m-t-20" @click="atualizarCliente(perfil)">Atualizar</button>
						</div>
					</div>
				</div>
				<modal-atualizar-telefone :arrayTelefone="perfil.telefones" @atualizar-telefone="atualizarTelefone" :telefoneTipos="telefoneTipos" :paises="paises"></modal-atualizar-telefone>
				<modal-atualizar-endereco :arrayEndereco="perfil.enderecos" @atualizar-endereco="atualizarEndereco" :enderecoTipos="enderecoTipos" :cidades="cidades"></modal-atualizar-endereco>
			</div>
		</div>
	</div>
</template>

<script>
import { RestConnection } from '../../rest/rest-connection'
import MaskedInput from 'vue-masked-input'
import { VMoney } from 'v-money'
import { modalAtualizarEndereco, modalAtualizarTelefone } from '../modal'

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
		modalAtualizarEndereco,
		modalAtualizarTelefone
	},
	methods: {
		atualizarEndereco: async function (endereco) {
			const id = endereco.idEndereco
			try {
				let response = await RestConnection.put('/cliente/endereco/atualiza/' + id, endereco)
				console.log(response.data)

				$('.modal').modal('hide')

				alert('Endereço atualizado com sucesso.')
			} catch (e) {
				console.log(e)
				if (e.response.status === 400) {
					alert(e.response.data.text_message)
				} else {
					alert('Houve um erro! Por favor tente novamente.')
				}
			}
		},
		atualizarTelefone: async function (telefone) {
			const id = telefone.idTelefone
			try {
				let response = await RestConnection.put('/cliente/telefone/atualiza/' + id, telefone)
				console.log(response.data)

				$('.modal').modal('hide')

				alert('Telefone atualizado com sucesso.')
			} catch (e) {
				console.log(e)
				if (e.response.status === 400) {
					alert(e.response.data.text_message)
				} else {
					alert('Houve um erro! Por favor tente novamente.')
				}
			}
		},
		atualizarCliente: async function (perfil) {
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
					objPessoa.telefones[i].idTipoTelefone = objPessoa.telefones[i].idTipoTelefone.id
				}
				for (let i in objPessoa.enderecos) {
					console.log(objPessoa.enderecos[i])
					objPessoa.enderecos[i].cep = globalFunc.updateCepData(objPessoa.enderecos[i].cep)
					objPessoa.enderecos[i].tipoEndereco = objPessoa.enderecos[i].idTipoEndereco
					objPessoa.enderecos[i].localidade = objPessoa.enderecos[i].idLocalidade
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
					objPessoa.telefones[i].idTipoTelefone = objPessoa.telefones[i].idTipoTelefone.id
				}
				for (let i in objPessoa.enderecos) {
					objPessoa.enderecos[i].cep = globalFunc.updateCepData(objPessoa.enderecos[i].cep)
					objPessoa.enderecos[i].tipoEndereco = objPessoa.enderecos[i].tipoEndereco.id
					objPessoa.enderecos[i].localidade = objPessoa.enderecos[i].localidade.id
				}
				console.log(objPessoa)
				dados = objPessoa
			}
			dados.idCliente = this.$route.params.id
			try {
				// /cliente/atualiza/pessoa/fisica/:idCliente
				// /cliente/atualiza/pessoa/juridica/:idCliente
				console.log(dados)
				if (dados.tipo === 'FISICA') {
					// cliente.nome, cliente.cpf, cliente.dataNascimento, cliente.nacionalidade, cliente.naturalidade, cliente.nomeDaMae, cliente.sexo, cliente.email, cliente.profissao, cliente.patrimonio, cliente.renda, cliente.idCliente
					let response = await RestConnection.put('/cliente/atualiza/pessoa/fisica/' + dados.idCliente, dados)
					console.log('Status ' + response.status + ': ' + response.statusText)
				} else if (dados.tipo === 'JURIDICA') {
					// cliente.razaoSocial, cliente.nomeFantasia, cliente.cnpj, cliente.nomeRepresentante, cliente.cpfRepresentante, cliente.idCliente
					let response = await RestConnection.put('/cliente/atualiza/pessoa/juridica/' + dados.idCliente, dados)
					console.log('Status ' + response.status + ': ' + response.statusText)
				}
				alert('Cliente atualizado com sucesso.')
			} catch (e) {
				console.log(e)
				if (e.response.status === 400) {
					alert(e.response.data.text_message)
				} else {
					alert('Houve um erro! Por favor tente novamente.')
				}
			}
		},
		carregaInformacoesCliente: async function () {
			try {
				let id = this.$route.params.id
				let response = await RestConnection.get('/cliente/busca/' + id)
				let retorno = response.data.conteudo
				console.log(retorno)
				this.perfil.tipo = retorno.cliente.tipo
				if (retorno.cliente.tipo === 'FISICA') {
					this.perfil.nome = retorno.pessoaFisica.nome
					this.perfil.cpf = retorno.pessoaFisica.cpf
					this.perfil.dataNascimento = globalFunc.convertDateData(retorno.pessoaFisica.dataNascimento)
					this.nacionalidade = retorno.pessoaFisica.nacionalidade
					this.naturalidade = retorno.pessoaFisica.naturalidade
					this.perfil.nomeDaMae = retorno.pessoaFisica.nomeDaMae
					this.sexo = retorno.pessoaFisica.sexo
					this.perfil.email = retorno.pessoaFisica.email
					this.perfil.profissao = retorno.pessoaFisica.profissao
					this.perfil.patrimonio = retorno.pessoaFisica.patrimonio
					this.perfil.renda = retorno.pessoaFisica.renda
					for (let i = 0; i < retorno.enderecos.length; i++) {
						// console.log(retorno.enderecos[i])
						this.perfil.enderecos.push(retorno.enderecos[i])
					}

					for (let i = 0; i < retorno.telefones.length; i++) {
						// console.log(retorno.enderecos[i])
						this.perfil.telefones.push(retorno.telefones[i])
					}
				} else if (retorno.cliente.tipo === 'JURIDICA') {
					this.perfil.cnpj = retorno.pessoaJuridica.cnpj
					this.perfil.cpfRepresentante = retorno.pessoaJuridica.cpfRepresentante
					this.perfil.nomeFantasia = retorno.pessoaJuridica.nomeFantasia
					this.perfil.nomeRepresentante = retorno.pessoaJuridica.nomeRepresentante
					this.perfil.razaoSocial = retorno.pessoaJuridica.razaoSocial
					if (retorno.hasOwnProperty('conjuge')) {
						this.perfil.conjuge.nome = retorno.pessoaJuridica.conjuge.nome
						this.perfil.conjuge.cpf = retorno.pessoaJuridica.conjuge.cpf
					}
				} else {
					alert('Há algo de errado com o cadastro: o cliente não é pessoa física nem jurídica.')
				}
			} catch (e) {
				console.log(e)
				if (e.status === 400) {
					alert(e.data.text_message)
				} else {
					alert('Cliente não possui telefone ou endereço cadastrado.')
				}
			}
		}
	},
	created: function () {
		if (this.$route.params.id === undefined) {
			alert('Nenhum cliente selecionado.')
			return this.$router.push({ name: 'alterarcliente' })
		}
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
</style>
