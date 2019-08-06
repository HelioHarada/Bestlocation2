<template>
  <div class="container-fluid card-left">
    <div class="row">
    <contato-modal :imovel="imovel"></contato-modal>
    <div class="col-md-6 slide">
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
            <p class="card-text">Endereço: {{imovel.endereco}}, {{imovel.numEndereco}} {{imovel.complementoEndereco}} - {{imovel.bairro}},
                {{imovel.cidade}} - {{imovel.uf}}, {{imovel.cep}}</p>
                <button class="btn button-plus btn-icon" data-toggle="tooltip" title="Favoritos" ><i class="far fa-heart"></i></button>
                <button class="btn button-plus btn-icon" @click="shareface()"  data-toggle="tooltip" title="Compartilhar" ><i class="fab fa-facebook-f"></i></button>
                <button class="btn button-plus btn-contato" data-toggle="modal" data-target="#contato-modal" >Contato</button>
                           
             
      </div>
      
    </div>

     <div class="place-map ">
        <h3 align="center">Maps</h3>

      <div  class="google-map" :id="mapName" > </div>
     </div>
      
      <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14772.848850018188!2d-49.967845!3d-22.2320257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x18636cf8fd387b35!2sUNIVEM!5e0!3m2!1spt-BR!2sbr!4v1555356629592!5m2!1spt-BR!2sbr" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> -->
    </div>
    </div>
  
</template>

<script>

import routes from '../../routes'
import Slider from '../shared/slider/Slider.vue'
import Contato from '../shared/contato/Contato.vue'
import {getImovelID} from '../../api/'

export default {
      name: 'google-map',
     
      props: ['name'],
      components: {
        'slide' : Slider,
        'contato-modal' : Contato
    },
  data(){
    return{
      id : '',
      imovel : '',
      map: '',
      mapName: this.name + "-map",
       address : '',
      markerCoordinates : '',
    map: null,
    bounds: null,
    markers: []
    }
  },
  methods:{
    getImovelID,

    setID: function (){
    this.id = this.$route.params.id;
    console.log(this.id)
    },


    async load () {
      await this.getImovelID(this.id).then(res => {
        this.imovel = res.body;
       this.GetLocation(this.imovel.endereco + this.imovel.cidade + this.imovel.numEndereco);
      }).catch(console.error)
    },

    shareface: function(){
        var url = window.location.host+window.location.pathname
        window.open('https://www.facebook.com/sharer/sharer.php?u='+url,'_blank');
    },

    GetLocation : function(address){
      console.log(address)
      const element = document.getElementById(this.mapName)
      // geocoder API (pega o endereço)
      var geocoder = new google.maps.Geocoder(address);
      // Pega o endereço e transforma e lat long
      geocoder.geocode({ 'address': address,}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();
                // Salva na marcação
               this.markerCoordinates = [{"latitude" :latitude , "longitude" : longitude}]
         

          // this.bounds = new google.maps.LatLngBounds();
          
          const mapCentre = this.markerCoordinates[0]
          const options = {
            zoom : 16,
           center: new google.maps.LatLng(mapCentre.latitude , mapCentre.longitude)
          }
 
          this.map = new google.maps.Map(element, options);
        
          this.markerCoordinates.forEach((coord) => {
            const position = new google.maps.LatLng(coord.latitude, coord.longitude);
            const marker = new google.maps.Marker({ 
              position,
              map: this.map
            });
          // this.markers.push(marker)
            // this.map.fitBounds(this.bounds.extend(position))
          });

        } else {
               alert("Request failed.")
        }
      
      });
      
    },
    createMap : function(){
        console.log("createMap")

    },
  },
      // center: new google.maps.LatLng(-22.235696, -49.927110)
    mounted: function () {
     
    },
  created () {
      this.setID();
      this.load();
      // this.GetLocation();
        // this.createMap();
      
      
  },

}
</script>

<style>
.card-left{
  margin-top: 20px;
  margin-bottom: 200px;
  border: 1px solid #ccc;
}

@media screen and (max-width: 990px){


  .slide{
    padding-right: 0px;
    padding-left: 0px;
  }

}


.card-body {
  margin-top: 10px;
}

.btn-icon{
  width: 40px;
}

.btn-contato{
  width: 100%;
  height: 50px;
}
.place-map{
  width: 100%;
}

.google-map {
  width: 100%;
  height: 500px;
  margin: 0 auto;
  background: gray;
} 
</style>