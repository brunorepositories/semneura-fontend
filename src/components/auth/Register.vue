<template>
	<div class="card-no-border">
		<section id="wrapper">
			<div class="login-register" style="background-image:url(/static/assets/images/background/login-register.jpg);">
				<div class="login-box card">
					<div class="card-body">
						<form class="form-horizontal form-material" id="loginform">
							<h3 class="box-title m-b-20">Cadastrar-se</h3>
							<div class="form-group ">
								<div class="col-xs-12">
									<input class="form-control" type="text" required="" placeholder="Usuário / E-mail" v-model="perfil.email">
								</div>
							</div>
							<div class="form-group">
								<div class="col-xs-12">
									<input class="form-control" type="password" required="" placeholder="Senha" v-model="perfil.senha">
								</div>
							</div>
							<div class="form-group">
								<div class="col-xs-12">
									<input class="form-control" type="password" required="" placeholder="Confirmar Senha" v-model="perfil.senha_repetida">
								</div>
							</div>
							<div class="form-group text-center">
								<div class="col-xs-12 p-b-20">
									<button class="btn btn-block btn-lg btn-info btn-rounded" type="submit" @click="register(perfil)">Cadastrar</button>
								</div>
							</div>
							<div class="form-group row">
								<div class="col-md-12">
									<router-link :to="{ name: 'login' }">Voltar</router-link>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { RestConnection } from '../../rest/rest-connection'

export default {
	data () {
		return {
			perfil: {}
		}
	},
	methods: {
		register: async function (perfil) {
			event.preventDefault()
			if (perfil.senha !== perfil.senha_repetida) {
				alert('Senhas diferentes')
				return
			}
			const dados = {
				email: perfil.email,
				senha: perfil.senha,
				ativo: 'ATIVO'
			}
			try {
				// let response = await RestConnection.post('/perfil', dados)
				await RestConnection.post('/perfil', dados)
				this.perfil = {}
				alert('Conta criada com sucesso, por favor faça o login para continuar.')
				this.$router.push({path: '/login'})
			} catch (e) {
				if (e.response.status === 400) {
					console.log(e.response.data)
					alert('E-mail já existente, por favor tente outro.')
				} else {
					alert('Houve um erro! Por favor tente novamente.')
				}
			}
		}
	}
}
</script>

<style scoped>
	@import '../../../static/assets/css/pages/login-register-lock.css';
</style>
