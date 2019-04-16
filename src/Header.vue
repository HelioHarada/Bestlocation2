<template>
      <nav id="header" class="navbar navbar-expand-lg navbar-dark bg-dark ">
        
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
         <router-link class="router" :to="{ name: 'home'}">  <a class="nav-link" href="/#/">Home <span class="sr-only">(current)</span></a></router-link>
      
      </li>
      <li class="nav-item">
        
        
        <router-link class="router" :to="{ name: 'lista'}"><a class="nav-link" >Catálogo de imóveis</a></router-link>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a class="nav-link menu-login" data-toggle="modal" data-target="#login-modal" > <img src="./img/user.svg" class="icon-user" alt="user">Login</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Admin
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/cadastrar">Cadastrar</a>
            <a class="dropdown-item" href="/usuario">Lista de usuário</a>
            <a class="dropdown-item" href="/deletar">Deletar</a>
            <a class="dropdown-item" href="/find">Descobrindo Perfil</a>
    
          </div>
        </li> 
    </ul>
  </div>

</nav>
</template>

<script>
  // tamanho da tela do usuáro 
  var width = $( window ).width();
  // Verificar resize
  $(window).resize(checkWidth);

  function checkWidth(){

    width = $( window ).width();

      if(width <= 975){
        console.log("mobile")
        setTimeout(function(){
              // $('#header')
              // .css({
              //   'display':  'flex',
              // 'align-items:' : 'flex-end'
              // })
              // .addClass("fixed-bottom");
        }, 1000);
      }
      if(width > 975){
        (console.log("desktop"))
        setTimeout(function(){
              $('#header').removeClass("fixed-bottom");
        }, 1000);
      }
  }
export default {
    
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


