import Vue from 'vue'
import Header from './Header.vue'
import Index from './Index.vue'
import Footer from './Footer.vue'
import { routes } from './routes'

// Vue router
import VueRouter from 'vue-router';
Vue.use(VueRouter)

// Vue resource
import VueResource from 'vue-resource';
Vue.use(VueResource);

const router = new VueRouter({ 
  routes,
  mode : 'history'
})



new Vue({
  el: '#index',
  router,
  render: h => h(Index)
})

new Vue({
  el: '#header',
  render: h => h(Header)
})

new Vue({
  el : '#footer',
  render: h => h(Footer)
})