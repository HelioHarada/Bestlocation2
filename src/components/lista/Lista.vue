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
            <button>lista</button>
            <button>coluna</button>
      
          </div>
        </div>
        <hr>

  <div class="row content-lista">
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
          <!-- <p class="card-text">id: {{imovel._id}}</p> --> 
          <router-link @click.native="closeMenu()" class="btn button-plus" :to="{ name: 'desc', params: { id: imovel._id} }">Mais detalhes</router-link>
          <!-- <a class="btn button-plus" @click="getId(imovel._id)" :meu_id="imovel._id"  data-toggle="modal" data-target="#desc-modal" >Mais+</a> -->
          </div>
      </div>
    </div>
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
            error : false
        }
  },
  computed:{
    imoveisFiltro(){
        if(this.filtro){


          
          let exp = new RegExp(this.filtro.trim(), 'gi');
          console.log(exp)

  

      // exp.replace(/[^a-z0-9]/gi,''); 


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
            this.error = true;
          }
          
      },function(){
        console.log("tentando acessar https")
        promise = this.$http.get('https://bestlocation.com.br/api/imoveis');
        promise .then(function(res) { this.imoveis = res.body;});
      });
  },
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
</style>
