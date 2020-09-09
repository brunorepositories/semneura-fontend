<template>
	<div class="card-no-border">
		<section id="wrapper">
			<div class="login-register" style="background-image:url(/static/assets/images/background/login-register.jpg);">
				<div class="login-box card">
					<div class="card-body">
						<form class="form-horizontal form-material" id="loginform">
							<h3 class="box-title m-b-20">Acessar Sistema</h3>
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
							<div class="form-group row">
								<div class="col-md-12">
									<a href="javascript:void(0)" @click="showRecoverPWD" id="to-recover" class="pull-right">Esqueceu sua senha?</a>
								</div>
							</div>
							<div class="form-group text-center">
								<div class="col-xs-12 p-b-20">
									<button class="btn btn-block btn-lg btn-info btn-rounded" type="submit" @click="login(perfil)">Entrar</button>
								</div>
							</div>
							<div class="form-group m-b-0">
								<div class="col-sm-12 text-center">
									Ainda não possui uma conta?
									<router-link class="btn btn-info btn-sm" :to="{ name: 'registro' }">Cadastre-se</router-link>
								</div>
							</div>
						</form>
						<form class="form-horizontal form-material" id="recoverform">
							<div class="form-group ">
								<div class="col-xs-12">
									<h3>Recuperar Senha</h3>
									<p class="text-muted">Digite seu E-mail e as instruções serão enviadas a você!</p>
								</div>
							</div>
							<div class="form-group ">
								<div class="col-xs-12">
									<input class="form-control" type="text" required="" placeholder="E-mail" v-model="recuperarEmail">
								</div>
							</div>
							<div class="form-group text-center m-t-20">
								<div class="col-xs-12">
									<button class="btn btn-block btn-lg btn-info btn-rounded" type="submit" @click="recuperarSenha(recuperarEmail)">Enviar</button>
								</div>
							</div>
							<div class="form-group row">
								<div class="col-md-12">
									<a href="javascript:void(0)" @click="hideRecoverPWD" id="hide-to-recover" class="text-dark">Voltar</a>
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
	name: 'Auth',
	data () {
		return {
			recuperarEmail: '',
			perfil: {}
		}
	},
	methods: {
		login: async function (perfil) {
			event.preventDefault()
			if (!perfil.email || !perfil.senha) {
				alert('Informe E-mail e Senha para continuar.')
				return
			}
			const dados = {email: perfil.email, senha: perfil.senha}
			try {
				let response = await RestConnection.post('/auth', dados)
				localStorage.setItem('_mtr_ilg', response.data.token)
				this.$router.push({path: '/'})
			} catch (e) {
				if (e.response.status === 400) {
					alert('E-mail ou Senha inválido.')
				} else {
					alert('Houve um erro! Por favor tente novamente.')
				}
			}
		},
		recuperarSenha: async function (recuperarEmail) {
			event.preventDefault()
			if (!recuperarEmail) {
				alert('Informe um E-mail para continuar.')
				return
			}
			const dados = {email: recuperarEmail}
			try {
				let response = await RestConnection.post('/auth/senha/recuperar', dados)
				console.log(response.data)
				alert(response.data.message)
				this.hideRecoverPWD()
			} catch (e) {
				if (e.response.status === 400) {
					alert('E-mail não encontrado.')
				} else {
					alert('Houve um erro! Por favor tente novamente')
				}
			}
		},
		showRecoverPWD: function () {
			$('#loginform').slideUp()
			$('#recoverform').fadeIn()
		},
		hideRecoverPWD: function () {
			$('#loginform').slideDown()
			$('#recoverform').fadeOut()
		}
	}
}
</script>
<style scoped>
	@import '../../../static/assets/css/pages/login-register-lock.css';
    .box-title{
        margin-bottom: 2rem;
    }
</style>
