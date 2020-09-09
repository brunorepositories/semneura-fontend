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
						<h3 class="m-b-0 text-white font-bold text-uppercase">Atualizar de Produto</h3>
						<h6 class="m-b-0 text-white">Preencha a descrição para atualizar o produto.</h6>
					</div>
					<div class="card-body">
						<form class="form-material">
							<div class="col-xs-12">
								<div class="form-group">
									<label for="">Descrição do produto</label>
									<input class="form-control" type="text" required placeholder="Ex: Colchão Nipponflex King Size" v-model="produto.descricao">
								</div>
							</div>
							<!-- Botão Enviar -->
							<div class="form-group text-center">
								<div class="col-xs-12">
									<router-link class="btn btn-danger btn-md font-bold text-uppercase" :to="{ name: 'alterarproduto' }">cancelar</router-link>
									<button class="btn btn-md btn-info font-bold text-uppercase" @click="atualizar(produto)">Atualizar</button>
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

import { RestConnection } from '../../rest/rest-connection'

export default {
	data () {
		return {
			produto: {}
		}
	},
	methods: {
		carregaProduto: async function () {
			const id = this.$route.params.id
			if (id === undefined) {
				this.$router.push({ name: 'alterarproduto' })
				alert('Por favor selecione o cadastro novamente.')
			} else {
				try {
					let response = await RestConnection.get('produto/busca/' + id)
					this.produto = response.data
				} catch (e) {
					console.log(e)
					if (e.status === 400) {
						alert(e.data.text_message)
					} else {
						alert('Houve um erro! Por favor tente novamente.')
					}
				}
			}
		},
		atualizar: async function (produto) {
			event.preventDefault()

			if (this.produto.descricao.length <= 0) {
				alert('Você deve inserir uma descrição.')
				return
			}

			const dados = {
				descricao: produto.descricao
			}
			// console.log(dados)
			try {
				let response = await RestConnection.put('/produto/atualiza/' + produto.id, dados)
				console.log(response.status)
				this.$router.push({ name: 'alterarproduto' })
				alert('Produto Atualizado com sucesso!')
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
		this.carregaProduto()
	}
}
</script>

<style scoped>
</style>
