<template>
  <div class="container-fluid catalago">
    <div class="alert alert-danger" role="alert" v-if="error">
      <b>Imóvel não encontrado! Cidade {{query}} não encontrada</b>
    </div>
  
    <div class="topo-catalago">
      <div class="busca_imovel">
        <input
          type="search"
          v-on:input="filtro = $event.target.value"
          class="form-control input-grey"
          placeholder="Digite a cidade"
        />
      </div>
      <div class="text-catalogo"></div>
      <div class="place-button-catalogo">
        <button @click="changeView('list')" class="btn-view">
          <img src="/../src/img/list.png" />
        </button>
        <button @click="changeView('card')" class="btn-view">
          <img src="/../src/img/square.png" />
        </button>
      </div>
    </div>
    <hr />
    <p>Total de imóveis {{this.totalImoveis}}</p>


  <transition name="fade" mode="out-in">
    <div class="lazy-loading" v-if="lazyLoading" key="3">
        <img class="img-logo-loader" src="/src/img/BestLocation-logo.jpg" alt="">
        <img class="img-loader" src="/src/img/loader_new.gif" alt="">
    </div>

    <div v-else key="4" class="content-lista">
      <!-- Paginação -->
      <nav aria-label="Navegação de página exemplo">
        <ul class="pagination pagination-lg justify-content-center">
          <li v-for="(page , index) in totalPages" :key="index" v-bind:class="{active : activePage(index+1) }" class="page-item"><a class="page-link" @click="getPageImoveis(index+1)">{{index+1}}</a></li>   
        </ul>
      </nav>
      <transition name="fade">
        <!-- Lista -->
        <div class="row" style="min-height : 500px" v-if="view == 'list'" key="1">
          <div
            class="list offset-md-1 col-md-10"
            v-for="(imovel, index) in imoveisFiltro"
            :key="index"
          >
            <div>
              <img class="img-list img-fluid" src="/../src/img/casa.jpg" alt="Card image cap" />
            </div>
            <div class="text-list">
               
              <h4 class="list-preco">R${{imovel.preco}}</h4>
              <h6 class="list-titulo">{{imovel.status}} : {{imovel.titulo}}</h6>
              <p class="list-endereco">
                Endereço: {{imovel.endereco}}, {{imovel.numEndereco}} {{imovel.complementoEndereco}} - {{imovel.bairro}},
                {{imovel.cidade}} - {{imovel.uf}}, {{imovel.cep}}
              </p>

              <router-link
                @click.native="closeMenu()"
                class="btn button-desc"
                :to="{ name: 'desc', params: { id: imovel._id} }"
              >Mais detalhes</router-link>
            </div>
          </div>
        </div>
        <!-- Card -->
        <div v-else-if="view == 'card'" key="2" class="row">
          <div class="col-md-4 card-house" v-for="(imovel, index) in imoveisFiltro" :key="index">
            <div class="card">
              <img class="card-img-top" src="/../src/img/casa.jpg" alt="Card image cap" />
              <div class="card-body card-imovel">
                <h4 class="card-title">R${{imovel.valorImovel}}</h4>
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

                <router-link
                  @click.native="closeMenu()"
                  class="btn button-plus"
                  :to="{ name: 'desc', params: { id: imovel._id} }"
                >Mais detalhes</router-link>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <!-- Paginação -->
      <nav aria-label="Navegação de página exemplo">
        <ul class="pagination pagination-lg justify-content-center">
          <!-- <li class="page-item disabled">
          <a class="page-link" href="#" aria-label="Anterior">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Anterior</span>
          </a>
          </li> -->
          <li v-for="(page , index) in totalPages" :key="index" v-bind:class="{active : activePage(index+1) }" class="page-item"><a class="page-link" @click="getPageImoveis(index+1)">{{index+1}}</a></li>   
          <!-- <li class="page-item">
          <a class="page-link" href="#" aria-label="Próximo">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Próximo</span>
          </a>
          </li> -->
        </ul>
      </nav>
    </div>
  </transition>

  </div>
</template>

<script>
import routes from "../../routes";
import { getImoveis, getQuery } from "../../api/";

export default {
  methods: {
    closeMenu() {
      $(".navbar-collapse").collapse("hide");
    }
  },

  data() {
    return {
      imoveis: [],
      id: "",
      query: "",
      filtro: "",
      view: "list",
      error: false,
      totalImoveis: "",
      lazyLoading: false,
      totalPages:"",
      page:"",
      isActive: true,
    };
  },
  computed: {
    imoveisFiltro() {
      let exp = new RegExp(this.filtro.trim(), "gi");
      if (this.filtro) {
        
        // this.load();
        this.totalImoveis = this.imoveis.filter(imovel => exp.test(imovel.cidade)).length;
        console.log(this.imoveis.filter(imovel => exp.test(imovel.cidade)))
        if(this.imoveis.filter(imovel => exp.test(imovel.cidade)) == ""){
          this.listaVazia = true;
        }else{
          this.listaVazia = false;
        }
        return this.imoveis.filter(imovel => exp.test(imovel.cidade));
    
      } else {
        
        this.totalImoveis = this.imoveis.filter(imovel => exp.test(imovel.cidade)).length;
        return this.imoveis;
      }
    }
  },
  methods: {
    getImoveis,
    getQuery,

    async load(){
      try{
   
        this.lazyLoading = true
        const res = await this.getImoveis()
        console.log(res)
        this.totalPages = res.body.pages
        if(this.page == ""){
          this.page = 1
        }
        this.lazyLoading = false
        this.imoveis = res.body.data
        this.totalImoveis = this.imoveis.length;
        console.log(this.totalImoveis)
        
      }catch(e){
        console.log(e);
        console.log("error")
      }
    },
    setQuery: function() {
      this.query = this.$route.params.query;
      return this.query;
    },

    async getPageImoveis(page){
        this.lazyLoading = true
        const res = await this.getImoveis(page)
      
        this.totalPages = res.body.pages
        this.page = page
        this.lazyLoading = false
        this.imoveis = res.body.data
        console.log(this.imoveis)
        this.totalImoveis = this.imoveis.length;
    },
    activePage(index){
      if(index == this.page)
      {
        return true
      }else{
        return false
      }
    },
    // async nextprevPage(index){
    //   try{
    //     this.lazyLoading = true
    //     const res = await this.getImoveis(index)
    //   }catch(e){

    //   }
    // },
    async busca() {
      await this.getQuery(this.query)
        .then(res => {
          console.log(res);
          this.imoveis = res.body.list;
          if (res.body.list == "") {
            console.log("busca vazia. " + this.query + "Não encontrado");
            this.$router.go();
            this.error = true;
          }
        })
        .catch(console.error);
    },
    changeView: function(type) {
      this.view = type;
    }
  },

  created() {
    this.setQuery();
    if (typeof this.setQuery() == "undefined" || this.setQuery() == "") {
      this.load();
      
    } else {
      this.busca();
    }

 
  }

};
</script>

<style>
@media screen and (max-width: 990px) {
  .list-preco {
    font-size: 14px;
    white-space: nowrap;
  }

  .list-endereco {
    display: none;
  }

  .list-titulo {
    font-size: 12px;
    /* white-space: nowrap; */
  }

  .button-plus {
    width: 120px;
    font-size: 12px;
  }
}

.lazy-loading{
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  height: 100%;
  width: 100%;
  z-index: 1;
  /* margin-left: 30%; */

}
.catalago {
  margin-top: 20px;
}

.card-text {
  max-height: 50px;
  overflow: hidden;
}

.card {
  margin-top: 5px;
}

.topo-catalago {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.place-button-catalogo {
  margin-top: 20px;
}

.text-catalogo {
  margin-top: 25px;
}
.busca_imovel {
  width: 400px;
}

/* Lista */

.content-lista {
  margin: 15px;
  min-height: 500px;
}

.list {
  box-shadow: 0px 3px 10px -4px #000;
  display: flex;
  margin-bottom: 10px;
  flex-direction: row;
  padding: 0px;
}

.text-list {
  padding: 20px;
  max-width: 700px;
}
.list-endereco {
  overflow: hidden;
}

.img-list {
  width: 400px;
  min-width: 150px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}

.button-desc {
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 2px;
  background-color: #ff7f00;
  color: white !important;
}

.btn-view {
  border-radius: 4px;
  height: 54px;
  width: 54px;
  margin: 3px 4px 0px 0px;
  float: right;
  border: none;
  cursor: pointer;
}

.page-link{
  border-color: #ccc
}

.page-item.active .page-link{
  background-color: #ff7f00;
  border-color: #ccc
}
</style>
