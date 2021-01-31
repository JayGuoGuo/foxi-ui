import Vue from 'vue'
import App from './App.vue'
import FoxiUI from '../packages'

Vue.config.productionTip = false
Vue.use(FoxiUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
