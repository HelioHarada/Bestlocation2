<template>
  <div class="row container-fluid">
    <div class="col-md-6">
       <img class="card-img-top" src="/../src/img/casa.jpg" alt="Card image cap">
    </div>
    <div class="col-md-6">
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
      </div>
    </div>
    <!-- <div class="col-md-9 card-house">
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
      
            <router-link class="btn button-plus" :to="{ name: 'desc', params: { id: imovel._id} }">Mais detalhes</router-link>
           
            </div>
        </div>
    </div> -->
  </div>
</template>
<script>

import routes from '../../routes'
export default {
  data(){
    return{
      id : '',
      imovel : ''
    }
  },
  methods:{

    setID: function (){
    this.id = this.$route.params.id;
    console.log(this.id)
    },

    getImovel: function(){
        let promise = this.$http.get('https://bestlocation.com.br/api/imoveis/'+this.id);
        promise .then(function(res) {
          console.log(res)
            this.imovel = res.body;
        });
    }

  },
  created () {
      this.setID();
      this.getImovel();
  }
}
</script>
