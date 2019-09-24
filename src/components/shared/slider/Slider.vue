<template>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div >
    <div v-if="imovel.images[0]" class="carousel-inner">
      
      <div v-for="item in imovel.images" :key="item" class="carousel-item" v-bind:class="{'active': imovel.images[0] == item}">
            <img class="d-block w-100 card-img-top img-slider" :src="item" alt="Card image cap">
      </div>
    </div>
 
    <div v-else class="carousel-inner">
         <div  class="carousel-item active">
           <img  class="card-img-top img-slider" src="/../src/img/casa.jpg" alt="Card image cap">
         </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>
<script>
export default {
     props: ['imovel'],
}
</script>

<style scoped>
  .img-slider, .carousel-inner, .carousel-item{
    min-height: 400px;
    height: 400px;
  }
  #carouselExampleControls{
    min-height: 400px;
    height: 400px;
  }
  @media screen and (max-width: 990px) {
      #carouselExampleControls{
        min-height: 250px;
        height: 250px;
      }

    .img-slider, .carousel-inner, .carousel-item{
      min-height: 200px;
      height: 200px;
    } 
  }
</style>