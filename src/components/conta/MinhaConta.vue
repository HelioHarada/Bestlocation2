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
                            :to="{ name: 'cadastrar', params: { id: user._id }}"
                            >Cadastrar imóvel
                        </router-link>

                        <a class="nav-link" href="#">Meus imóveis</a>
    </div>
    
        
    

    
    <div>

    </div>
    <!-- <div class="row content-lista">
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
    
          <router-link class="btn button-plus" :to="{ name: 'desc', params: { id: imovel._id} }">Mais detalhes</router-link>
         
          </div>
      </div>
      </div>
    </div> -->
  </div>
</template>

<script>
  import { getUserID, closeMenu } from "../../api/";
export default {
  data() {
    return {
      imoveis: [],
      user: '',
      id: ""
    };
  },
    methods:{
        getUserID,
        closeMenu,
        async load(){
            console.log("entrooo")
            try{
                const res = await this.getUserID('5d4e18d3fbcd2b0016a55d0f');
                this.user = res.body
                console.log(this.user)
            }catch(e){
                console.log(e)
            }
            
        }

    },
    created() {
  
        if (localStorage.getItem("acess_token") == null) {
            
        this.$router.push('home')
        $('#login-modal').modal()
        $.growl({
            title: "Notificação",
            style: "error",
            message: "Efetue o Login primeiro"
        });
            setTimeout(function(){
                $('#login-modal').modal()
            },4000)
        }else{
            this.load();
        }
        console.log(localStorage.getItem("acess_token"));
    // 5cbffa7d52214b001787c4a3
        // let promise = this.$http.get('https://bestlocationapi.herokuapp.com/api/imoveis');
        // promise .then(function(res) {
        //   console.log(res)
        //      this.imoveis = res.body;
        // });
  }
};
</script>

<style scoped>

/* .nav-side-menu {
    margin-left: -15px;
  font-size: 16px;
  font-weight: 200;
  background-color: #343A40;
  width: 300px;
  height: 100%;
  color:white;
}

.nav-side-menu ul,
.nav-side-menu li ,
.title-name,
.nav-side-menu .nav-link {
  list-style: none;
  padding: 20px;
  margin-left: 10px;
  line-height: 35px;
  cursor: pointer;
  color:white;

} */
</style>
