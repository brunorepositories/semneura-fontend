import Vue from 'vue'
import App from './App.vue'
import router from './Router/Router'
import VueAxios from 'vue-axios'
import RestConnection from './RestConnection/RestConnection'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue, VueAxios, RestConnection)

new Vue({
  el: '#app',
  router,
  render: r => r(App)
})
