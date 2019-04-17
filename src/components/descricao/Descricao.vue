<template>
  <div class="row container-fluid card-left">
    <contato-modal :imovel="imovel"></contato-modal>
    <div class="col-md-6 ">
      <slide ></slide>
       <!-- <img class="card-img-top" src="/../src/img/casa.jpg" alt="Card image cap"> -->
    </div>
    <div class="col-md-6">
      <div class="card-body card-imovel">
            <h2 class="card-title" > R${{imovel.preco}}</h2>
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
                <button class="btn button-plus" data-toggle="tooltip" title="Favoritos" ><i class="far fa-heart"></i></button>
                <button class="btn button-plus" @click="shareface()"  data-toggle="tooltip" title="Compartilhar" ><i class="fas fa-share-alt"></i></button>
                <button class="btn button-plus btn-contato" data-toggle="modal" data-target="#contato-modal" >Contato</button>
                           
             
      </div>
      
    </div>
    <div align="center" class="maps">
      <h3>Maps</h3>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14772.848850018188!2d-49.967845!3d-22.2320257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x18636cf8fd387b35!2sUNIVEM!5e0!3m2!1spt-BR!2sbr!4v1555356629592!5m2!1spt-BR!2sbr" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
  </div>
  
</template>
<script>

import routes from '../../routes'
import Slider from '../shared/slider/Slider.vue'
import Contato from '../shared/contato/Contato.vue'

export default {
      components: {
        'slide' : Slider,
        'contato-modal' : Contato
    },
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
      
        let promise = this.$http.get('http://bestlocation.com.br/api/imoveis/'+this.id);
        promise .then(function(res) {
          console.log(res)
            this.imovel = res.body;
        });
    },
    shareface: function(){
        var url = window.location.host+window.location.pathname
        window.open('https://www.facebook.com/sharer/sharer.php?u='+url,'_blank');
    }

  },
  created () {
      this.setID();
      this.getImovel();
  }
}
</script>

<style>
.card-left{
  margin-top: 20px;
  margin-bottom: 200px;
  border: 1px solid #ccc;

}
.card-body {
  margin-top: 10px;
}

.btn-contato{
  margin-top: 100px;
  width: 100%;
  height: 50px;
}

.maps{
  margin-top: 30px;
  margin-left: 20px;
  width: 100%;
}
</style>