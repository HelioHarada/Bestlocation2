<template>
<div class="container-fluid">
  <div class="row content-lista">
    <div class="col-md-4 card-house" v-for="(imovel, index) in imoveis" :key="index">
      <div class="card">
        <img class="card-img-top" src="/../src/img/casa.jpg" alt="Card image cap">
        <div class="card-body card-imovel">
          <h4 class="card-title" > R${{imovel.preco}}</h4>
          <h6 class="card-title" >{{imovel.status}} : {{imovel.titulo}}</h6>
          <p class="card-text">Descrição: {{imovel.descricao}} </p>
          <p class="card-text">
          <img src="/../src/img/bed.png">   {{imovel.numQuartos}}
          -
          <img src="/../src/img/banheiro.png"> {{imovel.numBanheiros}}
          -
          <img src="/../src/img/size.png"> {{imovel.area}}m²</p>
          <p class="card-text">Endereço: {{imovel.endereco}} - {{imovel.bairro}},
              {{imovel.cidade}} - {{imovel.uf}}, {{imovel.cep}}</p>
          <!-- <p class="card-text">id: {{imovel._id}}</p> --> 
          <router-link class="btn button-plus" :to="{ name: 'desc', params: { id: imovel._id} }">Mais detalhes</router-link>
          <!-- <a class="btn button-plus" @click="getId(imovel._id)" :meu_id="imovel._id"  data-toggle="modal" data-target="#desc-modal" >Mais+</a> -->
          </div>
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
            id: ''
        }
  },

  created() {


    let promise = this.$http.get('https://bestlocation.com.br/api/imoveis');
    promise .then(function(res) {
      // console.log(res)
         this.imoveis = res.body;
    });

    // let test = this.$http.get('https://bestlocation.com.br/api/imoveis/5caf7ae75216d200176dc0ba');
    //     test .then(function(res) {
    //   console.log(res)
    //      this.imoveis = res.body;
    // });

  },
  methods:{
    getId(id){
      console.log(id)
          EventBus.$emit('DATA_PUBLISHED', id)
    }
    
  }

}
</script>


