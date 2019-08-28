<template>
  <div class="container-fluid card-left">
    <notifications group="foo" position="top left"/>
    <div class="row">
      <contato-modal :imovel="imovel"></contato-modal>
      <div class="col-md-6 slide">
        <slide></slide>
      </div>
      <div class="col-md-6">
        <div class="card-body card-imovel">
          <h2 class="card-title">R${{imovel.preco}}</h2>
          <h6 class="card-title">{{imovel.status}} : {{imovel.titulo}}</h6>
          <p class="card-text">Descrição: {{imovel.descricao}}</p>
          <p class="card-text">
            <img src="/../src/img/bed.png" />
            {{imovel.numQuartos}}
            -
            <img src="/../src/img/banheiro.png" />
            {{imovel.numBanheiros}}
            -
            <img src="/../src/img/size.png" />
            {{imovel.area}}m²
          </p>
          <p class="card-text">
            Endereço: {{imovel.endereco}}, {{imovel.numEndereco}} {{imovel.complementoEndereco}} - {{imovel.bairro}},
            {{imovel.cidade}} - {{imovel.uf}}, {{imovel.cep}}
          </p>
          <button
            class="btn button-plus btn-contato"
            data-toggle="modal"
            data-target="#contato-modal"
          >Contato</button>
          <br>

          <button 
            @click="favoritar"
            class="btn button-plus btn-icon" 
            data-toggle="tooltip" 
            title="Favoritos">
            <i v-if="statusFav" class="fas fa-heart"></i>
            <i v-else class="far fa-heart"></i>
          </button>
          <button
            class="btn button-plus btn-icon"
            @click="shareface()"
            data-toggle="tooltip"
            title="Compartilhar"
          >
            <i class="fab fa-facebook-f"></i>
          </button>
          
        </div>
      </div>
  
      <div class="place-map">
        <hr>
        <h3 align="center">Maps</h3>

        <div class="place-button-desc">
            <button class="btn button-plus" @click="markerHospital()">
              <i class="fas fa-hospital"></i> Hospital
            </button>
            <button class="btn button-plus" @click="markerFood()">
              <i class="fas fa-utensils"></i> Restaurante
            </button>
            <button class="btn button-plus" @click="markerSchool()">
              <i class="fas fa-school"></i> Escola
            </button>
            <button class="btn button-plus" @click="markerMarket()">
              <i class="fas fa-cart-plus"></i> Mercado
            </button>
            <button class="btn button-plus" @click="markerFarmacia()">
              <i class="fas fa-pills"></i> Farmácia
            </button>
            <button class="btn button-plus" @click="markerBus()">
              <i class="fas fa-bus"></i> Ponto de ônibus
            </button>
        </div>
        <div class="google-map" :id="mapName"></div>
      </div>

      <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14772.848850018188!2d-49.967845!3d-22.2320257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x18636cf8fd387b35!2sUNIVEM!5e0!3m2!1spt-BR!2sbr!4v1555356629592!5m2!1spt-BR!2sbr" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> -->
    </div>
  </div>
</template>

<script>
  import routes from "../../routes";
  import Slider from "../shared/slider/Slider.vue";
  import Contato from "../shared/contato/Contato.vue";
  import { getImovelID, returnToken, favoritarImovel } from "../../api/";
  import { markerFood, markerHospital, markerFarmacia, markerSchool, markerMarket, markerBus, closeMenu} from "../../api/marker";  

export default {
  methods: {
    closeMenu() {
      $(".navbar-collapse").collapse("hide");
    }
  },

  name: "google-map",
  props: ["name"],
  components: {
    slide: Slider,
    "contato-modal": Contato
  },

  data() {
    return {
      idImovel: "",
      idUser: "",
      imovel: "",
      map: "",
      statusFav:"",
      mapName: this.name + "-map",
      address: "",
      markerCoordinates: "",
      map: null,
      bounds: null,
      markers: [],
      options: "",
      count : 0,
    };
  },

  methods: {
    closeMenu,
    getImovelID,
    returnToken,
    favoritarImovel,
    markerFood,
    markerHospital,
    markerFarmacia,
    markerSchool,
    markerMarket,
    markerBus,

    setID: function() {
      this.idImovel = this.$route.params.id;
    },

    async getToken(){
      try{
        const id = this.returnToken(localStorage.getItem("acess_token"))
        console.log(id)
        this.idUser = id;
        return this.idUser
      
      }catch(e){
        console.log(e)
      }
    },


    async load(){
      try{
          const idUser = await this.getToken()

          const res = await this.getImovelID(this.idImovel, idUser)
          this.imovel = res.body.data[1];
          console.log(this.imovel)
          this.statusFav = res.body.data[0].isFavorite

          console.log(this.statusFav);
          this.getLocation(
            this.imovel.endereco + this.imovel.cidade + this.imovel.numEndereco
          );
      }catch(e){
          console.log(e)
      }
    },


    favoritar(){
      if(localStorage.getItem("acess_token") == null)
      {
      this.$notify({
        group: 'foo',
        type : 'warn',
        title: 'Faça o login primeiro!',
      });
        $("#login-modal").modal("show");
      }else{
        this.getToken()
        this.postFavoritar()
      }
    },

    async postFavoritar(){
      try{
          const res = this.favoritarImovel(this.idUser);
          this.statusFav = !this.statusFav
          console.log(res)
          if(this.statusFav){
            this.$notify({
              group: 'foo',
              type : 'success',
              title: 'Salvo nos favoritos!',
            });
          }else{
            this.$notify({
              group: 'foo',
              type : 'warning',
              title: 'Desfavoritado!',
            });
          }
      }catch(e){  
          console.log(e)
      }
    },

    shareface: function() {
      var url = window.location.host + window.location.pathname;
      window.open(
        "https://www.facebook.com/sharer/sharer.php?u=" + url,
        "_blank"
      );
    },



    getLocation: function(address) {
      const bounds = new google.maps.LatLngBounds();
      const element = document.getElementById(this.mapName);
      // geocoder API (pega o endereço)
      var geocoder = new google.maps.Geocoder(address);
      let self = this;
        geocoder.geocode({ address: address }, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();
            // Salva na marcação
            this.markerCoordinates = [
              { latitude: latitude, longitude: longitude }
            ];
          }
          var mapCentre = this.markerCoordinates[0];

          var options = {
            zoom: 16,
            center: new google.maps.LatLng(
              mapCentre.latitude,
              mapCentre.longitude
            )
          };
          this.options = options;

          this.map = new google.maps.Map(element, options);

          this.markerCoordinates.forEach(coord => {
            const position = new google.maps.LatLng(
              coord.latitude,
              coord.longitude
            );
            const marker = new google.maps.Marker({
              position,
              map: this.map
            });
          });
        });
    },
    setMapOnAll: function(map) {
      for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(map);
      }
    },
    clearMakers() {
      this.setMarkerMap(null);
    },
    createMarker: function(places, img) {
      const icon = {
        url: img,
        scaledSize: new google.maps.Size(30, 30) // scaled size
      };

      const marker = new google.maps.Marker({
        map: map,
        title: places.name,
        icon: icon,
        position: places.geometry.location
      });
      this.markers.push(marker);
    },
  },
  created() {
    this.setID();
    this.load();
  },

};
</script>


<style>
.card-left {
  margin-top: 20px;
  margin-bottom: 200px;
  border: 1px solid #ccc;
}

@media screen and (max-width: 990px) {
  .slide {
    padding-right: 0px;
    padding-left: 0px;
  }
}

.card-body {
  margin-top: 10px;
}

.btn-icon {
  width: 40px;
}

.btn-contato {
  width: 100%;
  height: 50px;
  max-width: 500px;
}
.place-map {
  margin-top: 50px;
  width: 100%;
}

.place-button-desc{
  display: flex;
  justify-content: center;
}

.google-map {
  width: 100%;
  height: 500px;
  margin: 0 auto;
  background: gray;
}
</style>