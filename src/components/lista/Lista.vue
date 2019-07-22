<template>
<div class="container-fluid catalago">
        <div class="alert alert-danger" role="alert"  v-if="error" >
          <b>Imóvel não encontrado! Cidade {{query}} não encontrada</b>
        </div>

        <div class=" topo-catalago">
          <div class="busca_imovel">
              <input type="search" v-on:input="filtro = $event.target.value" class="form-control input-grey" placeholder="Digite a cidade">
          </div>
          <div class="text-catalogo">
           <!-- <h4>Total de imóveis {{this.imoveis.length}}</h4> -->
          </div>
          <div class="place-button-catalogo">
            <button @click="changeView('list')" class="btn-view"> <img src="/../src/img/list.png">  </button>
            <button @click="changeView('card')" class="btn-view"> <img src="/../src/img/square.png">  </button>
      
          </div>
        </div>
        <hr>

  <div class="content-lista">
    <transition name="fade">
    <!-- Lista -->
        <div class="row" v-if="view == 'list'" key="1">
            <div class="list col-md-12" v-for="(imovel, index) in imoveisFiltro" :key="index">
              <div>
                <img class="img-list img-fluid" src="/../src/img/casa.jpg" alt="Card image cap">
              </div>
              <div class="text-list">
                <h4 class="list-preco" > R${{imovel.preco}}</h4>
                <h6 class="list-titulo" >{{imovel.status}} : {{imovel.titulo}}</h6>
                <p class="list-texto">Endereço: {{imovel.endereco}}, {{imovel.numEndereco}} {{imovel.complementoEndereco}} - {{imovel.bairro}},
                    {{imovel.cidade}} - {{imovel.uf}}, {{imovel.cep}}</p>
                
                <router-link @click.native="closeMenu()" class="btn button-desc" :to="{ name: 'desc', params: { id: imovel._id} }">Mais detalhes</router-link>
              
              </div>
            </div>
        </div>
      <!-- Card -->
        <div v-else-if="view == 'card'" key="2" class="row">
          <div class="col-md-4 card-house" v-for="(imovel, index) in imoveisFiltro" :key="index">
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
                <p class="card-text">Endereço: {{imovel.endereco}}, {{imovel.numEndereco}} {{imovel.complementoEndereco}} - {{imovel.bairro}},
                    {{imovel.cidade}} - {{imovel.uf}}, {{imovel.cep}}</p>
                
                <router-link @click.native="closeMenu()" class="btn button-plus" :to="{ name: 'desc', params: { id: imovel._id} }">Mais detalhes</router-link>
              
                </div>
            </div>
          </div>
        </div>
    </transition>
  </div>
</div>
</template>

<script>
import routes from '../../routes'

export default {
           methods: {
            closeMenu() {
                $('.navbar-collapse').collapse('hide');
            }
        },

  data(){
        return{
            imoveis: [],
            id: '',
            query: '',
            filtro : '',
            view : 'list',
            error : false
        }
  },
  computed:{
    imoveisFiltro(){
        if(this.filtro){

          let exp = new RegExp(this.filtro.trim(), 'gi');
          console.log(exp)

          return this.imoveis.filter(imovel => exp.test(imovel.cidade));
        }else{
          return this.imoveis;
        }
    }
  },
  methods:{
    listaGeral:function(){
          let promise = this.$http.get('http://bestlocation.com.br/api/imoveis');
          promise .then(function(res) {
            console.log(res)
              this.imoveis = res.body;
              
          },function(){
            console.log("tentando acessar https")
            promise = this.$http.get('https://bestlocation.com.br/api/imoveis');
            promise .then(function(res) { this.imoveis = res.body;});
          });
    },
    setQuery: function (){
    this.query = this.$route.params.query;
    return this.query 
    },

      listaQuery:function(){
    console.log(this.query)
      let promise = this.$http.get('http://bestlocation.com.br/api/searchimovel/?query='+this.query);
      promise .then(function(res) {
        console.log(res)
          this.imoveis = res.body.list;
          if(res.body.list == ""){
            console.log("busca vazia. "+ this.query + "Não encontrado")
            this.$router.go()
            this.error = true;
          }
          
      },function(){
        console.log("tentando acessar https")
        promise = this.$http.get('https://bestlocation.com.br/api/imoveis');
        promise .then(function(res) { this.imoveis = res.body;});
      });
  },
    changeView:function(type){
      this.view = type;
    }
  },

  created() {
     this.setQuery() 
     if(typeof this.setQuery() == "undefined" || this.setQuery() == ""){
       this.listaGeral();
     }else{
       this.listaQuery();
     }
     
     
   
  },

}
</script>

<style>
@media screen and (max-width: 990px){

  .list-preco{
    font-size: 14px;
     white-space: nowrap;
  }

  .list-texto{
    display: none;
  }

  .list-titulo{
    font-size: 12px;
    /* white-space: nowrap; */
  }

  .button-plus{
    width: 120px;
    font-size: 2px;
  }
  
}

.catalago{
  margin-top: 20px;
}

.topo-catalago{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.place-button-catalogo{
  margin-top: 20px;
}

.text-catalogo{
  margin-top: 25px;
}
.busca_imovel{
  width: 400px;

}

/* Lista */

.content-lista{
  margin: 15px;
}

.list{
  box-shadow:0px 3px 10px -4px #000;
  display: flex;
  margin-bottom: 10px;
  flex-direction: row;
  padding: 0px;
}

.text-list{
  padding: 20px;
}

.img-list{
  width: 400px;
  min-width: 150px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}

.button-desc{
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 2px;
    background-color: #ff7f00;
    color:white!important;
}

.btn-view{
    border-radius: 4px;
    height: 54px;
    width: 54px;
    margin: 3px 4px 0px 0px;
    float: right;
    border: none;
    cursor: pointer;
}

</style>
