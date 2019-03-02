import Vue from 'vue'
import Header from './Header.vue'
import Index from './Index.vue'

new Vue({
  el: '#header',
  render: h => h(Header)
})

new Vue({
  el: '#index',
  render: h => h(Index)
})
