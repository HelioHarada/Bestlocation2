import Vue from 'vue'
import Header from './Header.vue'
import Index from './Index.vue'
import Footer from './Footer.vue'
import money from './components/cadastrar/v-money'
import VueTheMask from 'vue-the-mask'
// Uso de async await
require("babel-core/register");
require("babel-polyfill");

Vue.config.productionTip = false;

import { routes } from './routes'
Vue.use(money, {precision: 2})
Vue.use(VueTheMask)

// Vue router
import VueRouter from 'vue-router';
Vue.use(VueRouter)

// Vue resource
import VueResource from 'vue-resource';
Vue.use(VueResource);

const router = new VueRouter({ 
  routes,
  mode : 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})



new Vue({
  el: '#index',
  router,
  render: h => h(Index)
})

new Vue({
  el: '#header',
  router,
  render: h => h(Header)
})

new Vue({
  el : '#footer',
  render: h => h(Footer)
})