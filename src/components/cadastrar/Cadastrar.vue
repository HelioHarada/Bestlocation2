<template>
  <div class="container">
    <div >
    <div class="alert alert-danger" id ="message-errors" role="alert"  v-if="errors.length" >
      <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
      <ul>
        <li v-for="(error , index ) in errors" :key="index">{{ error }}</li>
      </ul>
   </div>
      <br>
      <h2 align="center">Cadastrar Ímovel</h2>
      <hr>
      <br>

      <transition name="fade">
      <div>
        <!-- step 1 tipo imovel -->
        <tipo-imovel
          v-if="step === 1"
          key="1"
          :imovelProp="imovel"  
          @back="goBack"
          @next="goNext"
          @sync="syncImovel"
        ></tipo-imovel>

        <!-- step 2 localização imovel-->
        <local-imovel
          v-if="step === 2"
          key="2"
          :imovelProp="imovel"  
          @back="goBack"
          @next="goNext"
        ></local-imovel>
        <br>
        <!-- step 3 descrição imóvel -->
        <descricao-imovel
          v-if="step === 3"
          :imovelProp="imovel"  
          @back="goBack"
          @next="syncImovel"
          @persist="cadastrar"
          @update="update"
          key="3"
        ></descricao-imovel>
      </div>
      </transition>
      <br>
 

      <!-- <button @click="validate()" class="btn button-grey">Cadastrar</button> -->

    </div>
  </div>
</template>

<script>
import routes from "../../routes";
import tipoImovel from "./TipoImovel";
import localImovel from "./LocalizacaoImovel";
import descricaoImovel from "./DescricaoImovel";
import { Money } from "./v-money.js";
import { closeMenu, cadastrarImovel, getImovelID, updateImovel} from "../../api/";
export default {
  components: {
     Money,
     tipoImovel         : tipoImovel,
     'local-imovel'     : localImovel,
     'descricao-imovel' : descricaoImovel,
  },

  data() {
    return {
      query:"",
      step: 1,
      imovel:'',
      errors: [],

      id:"",
      // === Money === //

    };
  },
  mounted: function() {
    $("#cep").mask("00000-000");
  },
  methods: {
    closeMenu,
    cadastrarImovel,
    getImovelID,
    updateImovel,
    load(){
        const res =  this.$route.params.id;
        this.id = res
        if(res == undefined || res == '')
        {
            this.$router.push('account')
        }
    },

    async cadastrar(imovel){
      console.log(imovel)
      try{
        const res = await this.cadastrarImovel(imovel);
      
        this.$router.push('account')
      }catch(err){
        console.log(err);
        // $("html, body").animate({ scrollTop: 0 }, "slow");
      }
    },
    async update(imovel){
      console.log("update")
      try{
        const res = await this.updateImovel(imovel,this.$route.params.idUser, this.$route.params.id);
        this.$router.push('account')
      }catch(err){
        console.log(err);
      }
    },
    async getImovel(){
      try{
        if(!this.$route.params.id){
          console.log(this.$route.params.id)
            const res = await this.getImovelID(this.$route.params.id);
            this.imovel = { ...this.imovel, ...res.body.data[1]}
        }
      }catch(e){
        console.log(e);
      }
      
    },
    validate() {
      this.errors = [];
      console.log("foi")
      if (!this.titulo) {
        this.errors.push('O titulo é obrigatório.');
      }

      if (!this.rua) {
        this.errors.push('O endereço é obrigatório.');
      }
      if (!this.descricao) {
        this.errors.push('O descricao é obrigatório.');
      }
      if (!this.tipo) {
        this.errors.push('O Tipo é obrigatório.');
      }
      if (!this.cidade) {
        this.errors.push('A cidade é obrigatório.');
      }
     if (!this.preco) {
        this.errors.push('O preço é obrigatório.');
      }
      if (!this.numEndereco) {
        this.errors.push('O numero do endereço é obrigatório.');
      }
      if (!this.area) {
        this.errors.push('O Area do imóvel é obrigatório.');
      }
      if (!this.cep) {
        this.errors.push('O CEP do imóvel é obrigatório.');
      }
      if (!this.errors.length)
      {
          this.cadastrar()
      }
      
    },
    openCard(index) {
        this.step = index 
    },
    //  adição de objetos no imovel
    syncImovel(newPartImovel){ 
        this.imovel = { ...this.imovel, ...newPartImovel }
        console.log(this.imovel)
    },
    // next step. 
    goNext(imovel) {
      this.syncImovel(imovel)
      this.openCard(this.step + 1)
    },
    goBack(){
      console.log(this.step - 1)
      this.openCard(this.step - 1)
    }
  },
  mounted(){
    console.log(this.$route.params.id)
    console.log(this.$route.params.idUser)
    // verificação editar ou criar
    if(this.$route.params.type == "editar")
    {
      console.log("é para editar")
      this.getImovel();
    }
  },
  created(){
    this.load();

  }
};
</script>

<style>

.input-grey {
  margin-bottom: 25px;
  margin-top: 0px;
  display: block;
  height: 45px;
  border-radius: 5px;
  border: 0;
  color: #050505;
  background: #ccc;
  transition: 0.3s ease;
}


.textarea-grey{
  margin-bottom: 25px;
  border-radius: 5px;
  border: 0;
  color: #1a212f;
  background: #bdc3c7;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
</style>