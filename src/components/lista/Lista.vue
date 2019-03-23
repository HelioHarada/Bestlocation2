<template>
<div class="row content-lista" >
  <div class="col-md-4 card-house" v-for="imovel in imoveis" v-bind:key="imovel">
    <div class="card">
       <img class="card-img-top" src="/../src/img/casa.jpg" alt="Card image cap">
       <div class="card-body card-imovel">
         <h4 class="card-title" >{{imovel.titulo}}</h4>
         <h6 class="card-title" >{{imovel.status}} : R$ {{imovel.preco}}</h6>
         <p class="card-text">Descrição: {{imovel.descricao}}</p>
         <p class="card-text">Quartos: {{imovel.numQuartos}} / Banheiros: {{imovel.numBanheiros}}</p>
         <p class="card-text">Endereço: {{imovel.endereco}} - {{imovel.cidade}}</p>
         <!-- <p class="card-text">id: {{imovel._id}}</p> --> 
         <a class="btn button-plus" @click="getId(imovel._id)"  data-toggle="modal" data-target="#desc-modal" >Mais+</a>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

  data(){
        return{
            imoveis: [],
        }
  },

  created() {

    let promise = this.$http.get('http://localhost:8080/api/imoveis');
    promise .then(function(res) {
        console.log(res.body[3]);
         this.imoveis = res.body
    });
  }

}
</script>

<style>

</style>
