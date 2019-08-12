
var url = 'https://bestlocationapi.herokuapp.com'

// Variavel Global Store
// token
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

export function returnToken(token){
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload).idUser

}

export function getUserID (id) {
  console.log(id)
  return this.$http.get(url+'/api/users/crud/'+id);
}

export function getUserImoveis (id) {
  console.log(id)
  return this.$http.get(url+'/api/imoveis/user/'+id);
}

export function cadastrarImovel () {

  return this.$http.post(+"/api/imoveis", {
    titulo: this.titulo,
    status: this.status,
    endereco: this.rua,
    numEndereco: this.numEndereco,
    complementoEndereco: this.complementoEndereco,
    cidade: this.cidade,
    bairro: this.bairro,
    uf: this.uf,
    descricao: this.descricao,
    numBanheiros: this.numBanheiros,
    numQuartos: this.numQuartos,
    preco: this.preco,
    area: this.area,
    cep: this.cep
  });
}

export function closeMenu() {
  $('.navbar-collapse').collapse('hide');
}

 export function auth(){
   return this.$http.post(url+'/api/users/login',{
      emailLogar: this.emailLogar,
      passwordLogar: this.passwordLogar
   })
 }