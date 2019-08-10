<template>
  <div class="container-fluid">
      <br>
    <h1 align="center">Minha Conta</h1>
        <h4>Bem-vindo {{user.firstName}}</h4>
    <hr>

    
    <div>
        <p>email: {{user.email}}</p>
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
  import { getUserID } from "../../api/";
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


