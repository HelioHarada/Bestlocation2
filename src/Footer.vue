<template>
  <div class="container-fluid footer">
      <div class="row">
          <div class="col-md-4">
            <img class="img-logo" src="/src/img/Logobranca.png">
          </div>
          <div class="col-md-4">
            <span class="cp_right">Copyright © 2018-2019</span>
          </div>
          <div class="col-md-4">
            <div class="place_icon_social">
              <a href="http://www.facebook.com/BestlocationBR"  target="_blank" > <img  class="icon_social_media" src="/src/png/facebookicon.png"> </a>
              <a href="https://www.instagram.com/BestLocationBR/"  target="_blank"> <img  class="icon_social_media" src="/src/png/instagramicon.png">  </a>
            </div>
          </div>
      </div>
  </div>

</template>

<script>
export default {
}
</script>

<style>

.footer{
    background-color: #343A40;
    clear: both;
}


.cp_right{
    color:white;
    display: flex;
    margin-top: 20px;
    justify-content: center;
}

.place_icon_social{
    margin-top: 10px;
}



.icon_social_media{
    cursor: pointer;
    width: 40px;
}

/* Footer Mobile */
@media screen and (max-width: 990px){
    .footer{
      display: none;
    }
    .footer img{
        margin-left : 25%;
    }

}
/* Footer desktop */
@media screen and (min-width: 990px){

}


</style>
