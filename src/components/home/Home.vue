<template>
      <div class="container-fluid ">

         <!-- ### INPUT FORM ### -->
         <div class="row banner-begin">
            <div class="offset-md-3 col-md-6 form-search" id="form-busca">
              <h2 align="center" class="title-form ">Busque o seu imóvel</h2>

              <div id="placeBuscar">
                <input-busca></input-busca>
              </div>
           
            </div>
         </div>
      
         <div class="row">
            <div class="find_perfil_place col-md-12">
                <div class="title_descobrir_place">
                  <h2 class="titulo_descobrir">Descubra seu perfil</h2>
                  <h5 class="subtitulo_descobrir">Descubra o imóvel ideal para você </h5>
                </div>
                <div class="place_button_perfil">
                  <a href="https://links.collect.chat/5d388d08ae0fe57267cc7f56"><button class="btn button_descobrir">Descobrir!</button></a>
                </div>
            </div>
         </div>
        <div class="container">
        <div class="row funcionalidade">
          <div c class="col-md-4 text-center img-funcionalidade">
              <img src="../../png/011-building.png" alt="">
              <h4>Empresarial</h4>
              <p>Busque escritórios ou estabelecimento para o seu négócio. A bestlocation te ajuda
                a encontrar o melhor local de acordo com seu publico alvo. </p>
          </div>
          <div class="col-md-4 text-center img-funcionalidade">
            <img src="../../png/004-money.png" alt="">
              <h4>Gaste apenas o necessário</h4>
              <p>Saiba de nossos planos e gaste apenas caso queira impulsonar suas vendas,
                Anunciar é GRÁTIS </p>
          </div>
          <div class="col-md-4 text-center img-funcionalidade">
              <img src="../../png/021-search-1.png" alt="">            
              <h4>Encontre seu imóvel perfeito</h4>
              <p>É possível encontrar seu novo lar através dos filtros de palavra-chave, características e 
                valores. </p>
          </div>
        </div>
        </div>

      </div>
      
</template>

<script>
import Busca from '../shared/campo/Busca.vue'
export default {
    components: {
        'input-busca' : Busca
    }
  
}
</script>

<style>
.img-funcionalidade{
    filter: grayscale(90%);
}

.img-funcionalidade:hover{
    filter: grayscale(0%);
}

@media screen and (max-width: 990px) {
    .img-funcionalidade{
    filter: grayscale(0%);

    }
}

.funcionalidade{
    margin-top: 90px;
}

/* imagem inicio */
.banner-begin{
    background-image: url("/src/img/bannerInicio.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 600px;
}

/* Input buscaf inicio */

.title-form{
    font-weight: 900; 
    text-shadow: 0.5px 0.2px #fff;
}

.icon-serach{
    color: white;
    font-size: 18px;
}

.place-input{
    background-color: white;
    height: 60px;
    border-radius: 4px;
    box-shadow:0px 3px 10px -4px #000;
}


.form-search{
    padding-top: 90px;
}


.input-principal{
    height: 100%;
    width: calc(100% - 60px);
    border: none;
    border-radius: 4px;
    padding: 0px 0px 0px 15px;
    font-size: 18px;
}

.input-principal:focus, .btn-enviar:hover, .btn-enviar:active{
    outline: none;
}


.btn-enviar{
    border-radius: 4px;
    height: 54px;
    width: 54px;
    margin: 3px 4px 0px 0px;
    float: right;
    border: none;
    background-color: #ff7f00;
    cursor: pointer;
}

.btn-enviar:hover{
    background-color: #ff8915;
}

/* Descubra o seu Perfil */


.find_perfil_place{
    background-image: url('/src/img/04.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 100%;
    height: 660px;
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
}

.title_descobrir_place{
    margin-bottom: 220px;

   
}

.titulo_descobrir{
    text-align: center;
    color: #000;
    font-size: 54px;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.2);

}
.subtitulo_descobrir{
    color: #000;
    font-weight: bold;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
  
}

.place_button_perfil{
    position: relative;
    bottom: 160px;
}

.button_descobrir{
    margin-bottom: 15px;
    border-radius: 25px;
    width: 170px;
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    background-color: #ffa801;
    color:white;
    overflow: hidden;
    box-shadow: inset 0 0 0 0 #ff7f00;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;
}


.button_descobrir:hover{
    box-shadow: inset 0 0 0 50px #ff7f00;
    /* background: rgba(0,0,0,0);
    color: black;
    text-shadow: 6px 6px 10px rgba(0,0,0,0.2);
	box-shadow: inset 0 0 0 3px #d35400; */
}


</style>

