<template>
<div id="login">

</div>
</template>

<script>
export default {


   props: ['imovel'],

   methods:{
      send: function(){
          this.load('mail.js');
      }
   }


}

</script>


<style>
@media screen and (max-width: 990px){
    .contato-dialog{
        width: auto;
    }

    .modal-contato{
        position: relative;
        width: auto!important;
    }
}

.contato-dialog{
  max-width: 600px;
}
.modal-contato{
  width: 600px;
}

.telefone{
  margin-top: 20px;
}


</style>

