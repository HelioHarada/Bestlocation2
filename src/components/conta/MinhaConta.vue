<template>
  <div class="container-fluid">
      <br>
      <h1 align="center">Minha Conta</h1>
      <h5 class="title-name">Bem-vindo {{user.firstName}} </h5>
      <hr>
    <div class="row">
    <router-link
        @click.native="closeMenu()"
        class="nav-link"
        :to="{ name: 'cadastrar', params: { id: id }}"
        >Cadastrar imóvel
    </router-link>

    <a class="nav-link" href="#">Meus imóveis</a>
    </div>
    
    <div>

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
              <div v-if="visibleDelete.id">
                <button  data-toggle="modal"  @click="checkDelete(imovel._id)" class="icon-delete btn btn-danger"><i class="far fa-trash-alt"></i></button>
              </div> 
              <div v-else>
                <button @click="visibleDelete = !visibleDelete" class="btn btn-secondary">Cancel</button>
                <button @click="deletarImovel(imovel._id)" class="btn btn-danger">Delete</button>
              </div>
          </div>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {  returnToken,getUserID, closeMenu, getUserImoveis } from "../../api/";
export default {
  data() {
    return {
      imoveis: [],
      user: '',
      id: "",
      visibleDelete:[]
    };
  },
    methods:{
        getUserID,
        closeMenu,
        returnToken,
        getUserImoveis,
        checkDelete(){
            this.visibleDelete = false
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
                this.imoveis = res.body
                for(const x in this.imoveis)
                {

                  item = this.imoveis[x]._id
                this.visibleDelete.push({
                  item : 'true'
                })
                  console.log(this.visibleDelete)
                }
                
              

           
            }catch(e){
                console.log(e)
            }
        },
        async deletarImovel(id){
          try{
            console.log(id)
            // const res = this.deleteImovelId();
            // console.log(res)
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
</style>
