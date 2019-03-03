import Vue from 'vue'
import Header from './Header.vue'
import Index from './Index.vue'
import Footer from './Footer.vue'

// Vue router
import VueRouter from 'vue-router';
Vue.use(VueRouter)

new Vue({
  el: '#header',
  render: h => h(Header)
})

new Vue({
  el: '#index',
  render: h => h(Index)
})


new Vue({
  el : '#footer',
  render: h => h(Footer)
})