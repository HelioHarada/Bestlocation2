
var url = 'https://bestlocationapi.herokuapp.com'

export function getImoveis () {
  return this.$http.get(url+'/api/imoveis');
}

export function getQuery (query) {
  return this.$http.get(url+'/api/searchimovel/?query='+query);
}

export function getImovelID (id) {
  return this.$http.get(url+'/api/imoveis/'+id);
}