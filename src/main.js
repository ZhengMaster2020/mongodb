import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'

import commonComponents from './components/index.js'

Vue.config.productionTip = false

Vue.use(commonComponents)

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:5000/api'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
