import Vue from 'vue'
import App from '@/App.vue'

import VueRouter from 'vue-router'
import routes from '@/routes.js'

/* Para instalar nuestro plugin lo importamos y con Vue.use() le decimos que lo vamos a utilizar */
import EventBus from '@/plugins/event-bus.js'

Vue.use(EventBus)
Vue.use(VueRouter)

const router = new VueRouter({ routes })

new Vue({
  el: '#app',
  render: h => h(App),
  router
})