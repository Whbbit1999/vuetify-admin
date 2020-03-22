import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3001/api/'
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
