<template>
      <nav id="header" class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <notifications group="foo" position="top left"/>
  <!-- Logo -->
  <a class="navbar-brand" href="/#/">
     <img class="img-logo" src="../src/img/Logobranca.png">
    </a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto navbar-right">
      <li class="nav-item">
         <router-link class="router" @click.native="closeMenu()"  :to="{ name: 'home'}">  <a class="nav-link" href="/#/">Home <span class="sr-only">(current)</span></a></router-link>
      </li>
      <li class="nav-item">
        
        
        <router-link class="router" @click.native="closeMenu()"  :to="{ name: 'lista'}"><a class="nav-link" >Compre seu imóvel</a></router-link>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto navbar-right">
        <li v-if="storeState.visibleLogin" class="nav-item">
            <a class="nav-link menu-login" data-toggle="modal" data-target="#login-modal" > <img src="./img/user.svg" class="icon-user" alt="user">Login</a>
        </li>
        <ul class="navbar-nav mr-auto " v-else>
            <li class="nav-item">
              <router-link class="router" @click.native="closeMenu()"  :to="{ name: 'account'}">  <a class="nav-link" href="/#/">Minha conta <span class="sr-only">(current)</span></a></router-link>
            </li>
            <li class="nav-item">       
                <a class="nav-link menu-login" @click="logout()"><img src="./img/user.svg" class="icon-user" alt="user">Logout</a>
            </li> 

        </ul>
        <li class="nav-item dropdown " v-show="false">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Admin
          </a>
          <div class="dropdown-menu navbar-dark bg-dark " aria-labelledby="navbarDropdown">
             <router-link class="router" @click.native="closeMenu()"  :to="{ name: 'cadastrar'}">  <a class="nav-link" href="/#/">Cadastrar <span class="sr-only">(current)</span></a></router-link>
             <router-link class="router" @click.native="closeMenu()"  :to="{ name: 'usuario'}">  <a class="nav-link" href="/#/">Lista usuario <span class="sr-only">(current)</span></a></router-link>
             <router-link class="router" @click.native="closeMenu()"  :to="{ name: 'deletar'}">  <a class="nav-link" href="/#/">Deletar <span class="sr-only">(current)</span></a></router-link>   
              <!-- <router-link class="router" @click.native="closeMenu()"  :to="{ name: 'find'}">  <a class="nav-link" href="/#/">Descobrindo Perfil <span class="sr-only">(current)</span></a></router-link>      -->
    
          </div>
        </li> 
         <!-- <li class="nav-item">
            <a class="nav-link" href="formchat.html">chat</a>
        </li> -->
    </ul>
  </div>

</nav>
</template>

<script>
  // tamanho da tela do usuáro 
  // var width = $( window ).width();
  // // Verificar resize
  // $(window).resize(checkWidth);

  // function checkWidth(){

  //   width = $( window ).width();

  //     if(width <= 975){
  //       console.log("mobile")
  //       setTimeout(function(){
  //             $('#header')
  //             // .css({
  //             //   'display':  'flex',
  //             // 'align-items:' : 'flex-end'
  //             // })
  //             .addClass("fixed-bottom");
  //       }, 1000);
  //     }
  //     if(width > 975){
  //       (console.log("desktop"))
  //       setTimeout(function(){
  //             $('#header').removeClass("fixed-bottom");
  //       }, 1000);
  //     }
  // }
import {store} from '../src/api'
export default {
  data(){
    return{
       storeState: store.state
    }
  },
  methods: {
    closeMenu() {
        $('.navbar-collapse').collapse('hide');
    },
    logout(){
        let promise = this.$http.post('https://bestlocationapi.herokuapp.com/api/users/logout');
        promise.then(function(res){
          
            localStorage.clear();
            store.clearToken();
            this.$router.push('home')
            console.log(this.storeState.visibleLogin)
            console.log(res.body);
            this.$notify({
            group: 'foo',
            type : 'success',
            title: 'Logout efetuado',
            });
        })
    }
  },
  created(){
    console.log(localStorage.getItem("acess_token"))
  if( localStorage.getItem("acess_token") != null ){
         this.storeState.visibleLogin = false
        console.log(this.storeState.visibleLogin )
    }else{
       this.storeState.visibleLogin = true
    }
    
  }
}


</script>

<style>


/* Bootstrap */
#loading-center-absolute {
 
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
}

.icon-user{
    width: 16px;
    margin-right: 5px;

}

.nav-bl{
    justify-content: flex-end;
}

.ml-auto .dropdown-menu {
    left: auto !important;
    right: 0px;
  }
.img-logo{
    width: 120px;
}

.menu-login{
    cursor: pointer;
}

.title{
    font-size: 82px;
    text-shadow: 2px 2px 2px #ccc;
    margin: 100px 0px 0px 140px;
}
.router:hover{
  text-decoration: none;
}
</style>


