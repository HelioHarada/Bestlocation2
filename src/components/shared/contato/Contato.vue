<template>
    <div id="login">
<div class="modal modal-grey fade" id="contato-modal" tabindex="-1" role="dialog">
 <div class="modal-dialog contato-dialog" role="document">
   <div class="modal-content  modal-contato">
     <div class="modal-header header-grey">
       <!-- tab panelsss -->
       <nav>
         <div class="nav nav-tabs" id="nav-tab" role="tablist">
             <a href="#email-tab" id="email-link" data-toggle="tab" class="nav-item nav-link active" role="tab" aria-selected="true">E-mail</a>
             <a href="#telefone-tab" id="telefone-link" data-toggle="tab" class="nav-item nav-link" role="tab" aria-selected="true">Telefone</a>


         </div>
       </nav>
      <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">&times;</span>
       </button> -->
     </div>
     <div class="modal-body body-grey">

      <!--  ================== Tabs ====================== -->

       <div class="tab-content" >

       <!-- ================= E-mail ====================== -->

         <div class="tab-pane fade show active" id="email-tab">
             <!-- Form E-mail -->
           <form>
            
             <div class="form-group">

               <input type="email" class="form-control input-grey" id="1exampleInputE2mail1" aria-describedby="emailHelp" placeholder="Digite e-mail">
              
             </div>

             <div class="form-group">
              
               <textarea type="text" class="form-control input-grey" id="mensagem-contato"  rows="3">Olá, Gostaria de ter mais informações sobre o imóvel que encontrei na Bestlocation. Aguardo seu contato, obrigado.
               </textarea>
             </div>
           
             <button type="submit"  class="btn button-grey">Enviar</button>
           </form>

         </div>
         <div class="tab-pane fade" id="telefone-tab" role="tabpanel" aria-labelledby="telefone-link">
            <div class="container-fluid">
              <div class="telefone">
             
                  <p>Contato sobre o(a) {{imovel.status}}  do(a)   {{imovel.titulo}}</p>
                 <p>No endereço: {{imovel.endereco}} - {{imovel.cidade}} - {{imovel.uf}} </p>
                 <h2>telefone:(14)998601245</h2>
                
              </div>
            </div>
         </div>

        
       </div>
     </div>
   </div>
 </div>
</div>
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

