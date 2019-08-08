<template>
  <div class="container-fluid card-left">
    <div class="row">
      <contato-modal :imovel="imovel"></contato-modal>
      <div class="col-md-6 slide">
        <slide></slide>
        <!-- <img class="card-img-top" src="/../src/img/casa.jpg" alt="Card image cap"> -->
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
          <button class="btn button-plus btn-icon" data-toggle="tooltip" title="Favoritos">
            <i class="far fa-heart"></i>
          </button>
          <button
            class="btn button-plus btn-icon"
            @click="shareface()"
            data-toggle="tooltip"
            title="Compartilhar"
          >
            <i class="fab fa-facebook-f"></i>
          </button>
          <button
            class="btn button-plus btn-contato"
            data-toggle="modal"
            data-target="#contato-modal"
          >Contato</button>
        </div>
      </div>

      <div class="place-map">
        <h3 align="center">Maps</h3>

        <button @click="markerHospital()">Hospital</button>
        <button @click="markerFood()">Restaurante</button>
        <button @click="markerSchool()">Escola</button>

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
import { getImovelID } from "../../api/";

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
      id: "",
      imovel: "",
      map: "",
      mapName: this.name + "-map",
      address: "",
      markerCoordinates: "",
      map: null,
      bounds: null,
      markers: [],
      options: ""
    };
  },

  methods: {
    getImovelID,

    setID: function() {
      this.id = this.$route.params.id;
      console.log(this.id);
    },

    shareface: function() {
      var url = window.location.host + window.location.pathname;
      window.open(
        "https://www.facebook.com/sharer/sharer.php?u=" + url,
        "_blank"
      );
    },

    load() {
      this.getImovelID(this.id)
        .then(res => {
          this.imovel = res.body;
          this.getLocation(
            this.imovel.endereco + this.imovel.cidade + this.imovel.numEndereco
          );
        })
        .catch(console.error);
    },

    getLocation: function(address) {
      const bounds = new google.maps.LatLngBounds();
      const element = document.getElementById(this.mapName);
      var local;
      // geocoder API (pega o endereço)
      var geocoder = new google.maps.Geocoder(address);
      let self = this;
      coord(function(addr, options, map) {
        self.showMaps(options, map);
      });

      function coord(callback) {
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

          callback(this.markerCoordinates, this.options, this.map);
        });
      }
    },

    markerFood() {
      this.setMapOnAll(null);
      let self = this;
      let food = ["bar", "restaurant", "establishment", "food", "cafe"];
      var service = new google.maps.places.PlacesService(map);
      let img = "../src/img/food.png";
      let request = {
        location: options.center,
        types: food,
        radius: 2074
      };

      function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            self.createMarker(results[i], img);
          }
        }
      }

      service.nearbySearch(request, callback);
    },
    markerHospital() {
      this.setMapOnAll(null);
      let self = this;
      let type = ["hospital"];
      var service = new google.maps.places.PlacesService(map);
      let img = "../src/img/hospital.png";
      let request = {
        location: options.center,
        types: type,
        radius: 2074
      };

      function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            self.createMarker(results[i], img);
          }
        }
      }

      service.nearbySearch(request, callback);
    },
    markerSchool() {
      this.setMapOnAll(null);
      let self = this;
      let type = ["school"];
      var service = new google.maps.places.PlacesService(map);
      let img = "../src/img/school.png";
      let request = {
        location: options.center,
        types: type,
        radius: 2074
      };

      function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            self.createMarker(results[i], img);
          }
        }
      }

      service.nearbySearch(request, callback);
    },    

    setMapOnAll: function(map) {
      for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(map);
      }
    },
    clearMakers() {
      this.setMarkerMap(null);
    },
    showMakers(type) {
      console.log(map);
      this.setMapOnAll(map);
    },
    createMarker: function(places, img) {
      console.log(img)
      const icon = {
        // url: "../src/img/Fav.png", // url
        url: img,
        scaledSize: new google.maps.Size(50, 50), // scaled size
        // origin: new google.maps.Point(0, 0), // origin
        // anchor: new google.maps.Point(0, 0) // anchor
      };

      const marker = new google.maps.Marker({
        map: map,
        title: places.name,
        icon: icon,
        position: places.geometry.location
      });
      this.markers.push(marker);
    },
    showMaps: function(options, map) {
      let self = this;

      var x = 0;

      var service = new google.maps.places.PlacesService(map);

      const places = ["food", "hospital", "school"];

      var request = {};

      places.forEach(type => {});
    }
  },
  created() {
    this.setID();
    this.load();
  },
  mounted() {
    // this.createMap();
    // this.showMaps();
  }
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
}
.place-map {
  width: 100%;
}

.google-map {
  width: 100%;
  height: 500px;
  margin: 0 auto;
  background: gray;
}
</style>