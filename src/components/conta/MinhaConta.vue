<template>
  <div class="container-fluid">
      <br>
      <h1 align="center">Minha Conta</h1>
      <h5 class="title-name">Bem-vindo {{user.firstName}} </h5>
      <hr>
    <div class="row">
    <router-link
        @click.native="closeMenu()"
        class="btn button-plus"
        :to="{ name: 'cadastrar', params: { id: id }}"
        >Anuncie!
    </router-link>

    <a @click="getImoveis(id)" class="btn button-plus" href="#">Meus imóveis</a>
    <button @click="showFavoritos()" class="btn button-plus">Favoritos</button>
    </div>

    <transition name="fade" mode="out-in">
      <h2 key="1" v-if="favoritosVisible" align="center">Favoritos</h2>
      <h2  key="2" v-else align="center">Meus imóveis</h2>
    </transition>
    <div class="noneImovel" v-show="imoveisCadastrado">
      <br>
        <h4 align="center">Você não tem nenhum imóvel anunciado</h4>
        <br>
        <br>
        <router-link
            @click.native="closeMenu()"
            class="btn button-plus"
            :to="{ name: 'cadastrar', params: { id: id }}"
            >Anuncie agora é Grátis!
        </router-link>  
    </div> 
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
          <p class="card-text">Endereço: {{imovel.endereco}}, {{imovel.numEndereco}} {{imovel.complementoEndereco}} - {{imovel.bairro}},
              {{imovel.cidade}} - {{imovel.uf}}, {{imovel.cep}}</p>
    
          <div class="flex-align">
              <router-link class="btn button-plus" :to="{ name: 'desc', params: { id: imovel._id} }">Mais detalhes</router-link>
                <button data-toggle="modal" @click="deletarImovel()" class="icon-delete btn btn-danger"><i class="far fa-trash-alt"></i></button>
          </div>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {  returnToken,getUserID, closeMenu, getUserImoveis, getFavImoveis } from "../../api/";
export default {
  data() {
    return {
      imoveis: [],
      user: '',
      id: "",
      visibleDelete: "",
      imoveisCadastrado: "",
      favoritosVisible: "",
    };
  },
    methods:{
        getUserID,
        closeMenu,
        returnToken,
        getUserImoveis,
        getFavImoveis,
        checkDelete(id){
              console.log(id)
              console.log(this.visibleDelete.boolean)
            // this.visibleDelete[id]._id.visible = true
            this.visibleDelete.boolean = false
            console.log(this.visibleDelete.boolean)
        },
        async getToken(){
          try{
            const id = this.returnToken(localStorage.getItem("acess_token"))
            console.log(id)
            this.id = id;
            this.getImoveis(id)
          }catch(e){
            console.log(e)
          }
        },
        async getImoveis(id){
            try{
                const res = await this.getUserImoveis(id);
                this.favoritosVisible = false
                console.log(res.body)
                if(res.body == ""){
                  console.log("vazio")
                  this.imoveisCadastrado = true
                }else{
                  this.imoveisCadastrado = false
                }
                this.imoveis = res.body
                this.visibleDelete = this.imoveis
            }catch(e){

                console.log(e)
            }
        },

        async showFavoritos(){
            try{
              const res = await this.getFavImoveis(this.id)
              console.log(res.body)
              this.imoveis = res.body
              this.favoritosVisible = true
              this.imoveisCadastrado = false
            }catch(e){
              console.log(e)
            }
        },

        async deletarImovel(id){
          try{
            $("#modal-delete").modal("show");
          }catch(e){
            console.log(e)
          }
        },

    },
    created() {
  
        if (localStorage.getItem("acess_token") == null) {
            this.$router.push('home')
            $('#login-modal').modal()
                setTimeout(function(){
                    $('#login-modal').modal()
            },4000)
        }else{
            this.getToken();
        }
       
  }
};
</script>

<style scoped>
.button-plus{
  margin-bottom: 0px;
}
.flex-align{
  display: flex;
  justify-content: space-between;
}

.noneImovel{
  display: flex;
  flex-direction:column;
  justify-content: center;
   align-items: center;
}

.noneImovel .button-plus{
  width: 300px;
}
</style>
