<template>
<div id="login">
<div class="modal modal-grey fade" id="login-modal" tabindex="-1" role="dialog">
 <div class="modal-dialog" role="document">
   <div class="modal-content content-grey ">
     <div class="modal-header header-grey">
       <!-- tab panelsss -->
       <nav>
         <div class="nav nav-tabs" id="nav-tab" role="tablist">
             <a href="#login-tab" id="login-link" data-toggle="tab" class="nav-item nav-link active" role="tab" aria-selected="true">Login</a>
             <a href="#register-tab" id="register-link" data-toggle="tab" class="nav-item nav-link" role="tab" aria-selected="true">Cadastrar</a>

             <!-- <ul class="nav nav-tabs">
                 <li class="nav-item">
                 
                   <a href="#login-tab" id="login-link" data-toggle="tab" class="nav-link active" role="tab" aria-selected="true">   Login</a>
                 </li>
                 <li class="nav-item">
                   <a href="#register-tab" id="register-link" data-toggle="tab" class="nav-link" role="tab" aria-selected="true">Cadastrar</a>
                 </li>
               </ul> -->
         </div>
       </nav>
      <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <span aria-hidden="true">&times;</span>
       </button> -->
     </div>
     <div class="modal-body body-grey">

      <!--  ================== Tabs ====================== -->

       <div class="tab-content" >

       <!-- ================= Login ====================== -->

         <div class="tab-pane fade show active" id="login-tab">
             <!-- Form login -->
           <form>
            
             <div class="form-group">
              <!-- <label for="exam2pleInputEmail1">Email address</label> -->
               <input type="email" class="form-control input-grey" id="exampleInputE2mail1" aria-describedby="emailHelp" placeholder="Digite e-mail">
              
             </div>

             <div class="form-group">
               <!-- <label for="exampleInputPassword1">Password</label> -->
               <input type="password" class="form-control input-grey" id="exampleInputPassword2" placeholder="Senha">
             </div>
           
             <button type="submit" class="btn button-grey">Entrar</button>
           </form>

         </div>
      
        <!-- ============================= Register =================================== -->
        <!-- mensagem de erro -->
        <!-- <div class="alert alert-danger" role="alert"  v-if="errors.length" >
          <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </div> -->
  
        
         <div class="tab-pane fade" id="register-tab" role="tabpanel" aria-labelledby="register-link">

           <form @submit.prevent="cadastrar">

            <div class="form-group">
              <!-- <input type="text" class="form-control input-grey" v-model="username"  id="name" placeholder="Nome"> -->
              <input type="text" class="form-control input-grey"   id="name" placeholder="Nome">
            </div>
           
             <div class="form-group">
               <!-- <input type="email" class="form-control input-grey" v-model="email" id="email" aria-describedby="emailHelp" placeholder="Digite e-mail"> -->
                <input type="email" class="form-control input-grey"  id="email" aria-describedby="emailHelp" placeholder="Digite e-mail">
             </div>
             
            <div class="form-group">
               <!-- <input type="password" class="form-control input-grey" v-model="password" id="password" placeholder="Digite a senha"> -->
               <input type="password" class="form-control input-grey"  id="password" placeholder="Digite a senha">
            </div>

             <div class="form-group">
               <!-- <input type="password" class="form-control input-grey" v-model="password2" id="confirm password" placeholder="Confirme a senha"> -->
               <input type="password" class="form-control input-grey"  id="confirm password" placeholder="Confirme a senha">

            </div>
            <!-- 
            <div class="form-check">
              <input disabled type="checkbox" class="form-check-input" v-model="isAdmin" id="exampleInputPass2word1" placeholder="Numero Telefone">
             <label class="form-check-label" >Administrador</label>
           </div>
           -->
             <button type="submit"  class="btn button-grey">Cadastrar-se</button>
           </form>

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
    data(){
        return{
            errors: [],
        }
    }
}
</script>

<style>


/* POPUP GREY */

@media screen and (max-width: 990px){
    .dialog-grey{
        width: auto;
    }

    .content-grey{
        position: relative;
        width: auto!important;
    }
}

/* position popup */
.modal-grey{
    padding-top:115px;
}

/* tamanho dela */

.content-grey{
    width: 450px;
}

.body-grey{
    margin-top: 15px;
    padding: 1px 20px 30px;
}

.header-grey .nav-tabs>a{
    width: 50%;
}

.header-grey .nav-tabs{
    border: none;
}

.input-grey{
    margin-top:25px;
    display: block;
    width: 100%;
    height: 45px;
    border-radius: 25px;
    border: 0;
    color: #1a212f;
    background: #ccc;
    transition: .3s ease;
}


.header-grey nav{
    width: 100%;
}

.header-grey{
    padding: 0px;
    border-bottom: none;
}


.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active{
    background: none;
    border: none;
    border-radius: 0px 4px 0 0;
    color:#545962;
    transition: .3s ease;
    padding: 15px 15px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
}

.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link{
    background: none;
    border: none;
    border-radius: 0px 4px 0 0;
    color:#545962;
    transition: .3s ease;
    padding: 15px 15px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
}

.nav-tabs .nav-item .nav-link, .nav-tabs .nav-link{
    background-color: #303340;
    color: #EBEBEC;
    border:none;
    font-weight: bold;
}

.header-grey .nav-tabs>li a,.header-grey .nav-tabs li a:hover,.header-grey .nav-tabs li a:focus{
    background-color: #303340;
    color: #EBEBEC;
    border:none;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
}

.button-plus{
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    background-color: #ff7f00;
    color:white!important;
}

.button-plus:hover{
    background-color:#ff8915;
    border: 1px solid #ccc;
}

.button-grey{
    margin-bottom: 15px;
    border-radius: 25px;
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    background-color: #ff7f00;
    color:white;
}

.button-grey:hover{
    background-color:#ff8915;
}

</style>

