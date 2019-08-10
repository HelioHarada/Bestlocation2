
var url = 'https://bestlocationapi.herokuapp.com'

export const store = {
  debug: true,
  state: {
    token: '',
    visibleLogin: ''
  },
  setToken (token) {
    if (this.debug) console.log('setMessageAction triggered with', token)
    console.log(token)
    this.state.token = token
    this.state.visibleLogin = false
  },
  clearToken () {
    if (this.debug) console.log('clearMessageAction triggered')
    this.state.token = ''
    this.state.visibleLogin = true
    
  }
}

export function getImoveis () {
  return this.$http.get(url+'/api/imoveis');
}

export function getQuery (query) {
  return this.$http.get(url+'/api/searchimovel/?query='+query);
}

export function getImovelID (id) {
  return this.$http.get(url+'/api/imoveis/'+id);
}

export function getUserID (id) {
  console.log(id)
  return this.$http.get(url+'/api/users/crud/'+id);
}

 export function auth(){
   return this.$http.post(url+'/api/users/login',{
      emailLogar: this.emailLogar,
      passwordLogar: this.passwordLogar
   })
 }