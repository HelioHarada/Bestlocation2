<template>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <div>
          <img v-if="imovel.images[0]" :src="imovel.images[0]" alt="Card image cap" class="card-img-top">
          <img v-else class="card-img-top" src="/../src/img/casa.jpg" alt="Card image cap">
        </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/../src/img/casa.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/../src/img/casa.jpg" alt="Third slide">
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