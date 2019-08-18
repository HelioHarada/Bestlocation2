<template>
  <div class="container">
    <form ref="form" @submit.prevent="handleSubmit">
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
     <h2>Informações básicas</h2>
      <br>
      <div class="form-group">
        <label for="">Titulo do imóvel</label>
        <input
          type="titulo"
          class="form-control input-grey"
          v-model="titulo"
          id="titulo"
          aria-describedby="emailHelp"
          placeholder="Casa no zona Sul de Marília"
        >
      </div>


        <label for="">Tipo do imóvel</label>
        <select  autocomplete="off" name="tipo" id="tipo" v-model="tipo" class="form-control input-grey tipo">
          <option value="Casa">Casa</option>
          <option value="Apartamento" selected>Apartamento</option>
          <option value="Chacara">Chacara</option>
          <option value="Kitnet">Kitnet</option>
        </select>
        
       


      <div class="form-group">
        <label for="">Transação</label>
        <select name="transação" id="status" v-model="status" class="form-control input-grey transacao">
          <option value="venda" selected>Venda</option>
          <option value="aluguel">Aluguel</option>
        </select>
      
      </div>
     <br>
     <h2>Onde fica seu imóvel?</h2>
     <hr>
      <div class="form-group">
        <label for="cep">CEP</label>
        <a target="_blank" href="http://www.buscacep.correios.com.br/sistemas/buscacep/">Não sei meu CEP</a>
        <input
        
          type="text"
          class="form-control input-grey cep"
          id="cep"
          v-model="cep"
          placeholder="CEP"

          @keyup="buscarCEP"
        >
      </div>
      <label for="endereco">Endereço</label>
      <div class="form-group">
        <input
          :disabled="disableInput"
          type="text"
          class="form-control input-grey endereco"
          id="endereco"
          v-model="rua"
          placeholder="Endereço"
        >
      </div>

      <label for="numEndereco">Número</label>
      <div class="form-group">
        <input
          type="text"
          class="form-control input-grey num-endereco"
          id="numEndereco"
          v-model="numEndereco"
          placeholder="Número"
        >
      </div>
      <label for="complementoEndereco">Complemento</label>
      <div class="form-group">
        <input
          type="text"
          class="form-control input-grey complemento"
          id="complementoEndereco"
          v-model="complementoEndereco"
          placeholder="Complemento"
        >
      </div>

      <label for="bairro">Bairro</label>
      <div class="form-group">
        <input
          type="text"
          class="form-control input-grey bairro"
          id="bairro"
          v-model="bairro"
          placeholder="Bairro"
        >
      </div>

      <label for="cidade">Cidade</label>
      <div class="form-group">
        <input
          :disabled="disableInput"
          type="text"
          class="form-control input-grey cidade"
          id="cidade"
          v-model="cidade"
          placeholder="Cidade"
        >
      </div>
      <label for="estado">Estado</label>
      <div class="form-group">
        <input
          type="text"
          class="form-control input-grey estado"
          id="estado"
          v-model="uf"
          placeholder="Estado"
        >
      </div>
      <br>
      <h2>Detalhes do seu imóvel</h2>
      <hr>
      <label for="descricao">Descreva o seu imóvel</label>
      <div class="form-group">
      <textarea 
        v-model="descricao"
        class="form-control textarea-grey"
        name="desc"  
        id="descricao" 
        cols="60" 
        rows="10">
      </textarea>
      </div>
      <!-- <div class="form-group">
        <input
          type="textarea"
          class="form-control input-grey"
          id="descricao"
          v-model="descricao"
          placeholder="Detalhes do imóvel"
        >
      </div> -->
      <label for="area">Área</label>
      <div class="form-group">
        <input
          type="number"
          class="form-control input-grey area"
          id="area"
          v-model="area"
          placeholder="Área (apenas números)"
        >
      </div>
      <div class="form-group">
      <label for="numQuartos">Números de quartos</label>
        <input
          type="number"
          class="form-control input-grey quartos"
          v-model="numQuartos"
          id="numQuartos"
          aria-describedby="emailHelp"
          placeholder="Número de quartos"
        >
      </div>
      <label for="numBanheiros">Números de banheiro</label>
      <div class="form-group">
        <input
          type="number"
          class="form-control input-grey banheiros"
          v-model="numBanheiros"
          id="numBanheiros"
          aria-describedby="emailHelp"
          placeholder="Número de banheiros"
        >
      </div>
      <label for="preco">Preço</label>
      <div class="form-group">
        <money
          id="preco"
          v-model="preco"
          v-bind="money"
          class="form-control input-grey preco"
          placeholder="Digite o Preço"
        ></money>
      </div>

      <button type="submit" class="btn button-grey">Cadastrar</button>
      <br>
      <br>
    </form>
  </div>
</template>

<script>
import routes from "../../routes";
import { Money } from "./v-money.js";
import { closeMenu, cadastrarImovel } from "../../api/";
export default {
  components: { Money },

  data() {
    return {
      query:"",
      imoveis: [],
      errors: [],
      disableInput:false,
      status: "venda",
      titulo: "",
      endereco: {},
      rua: "",
      numEndereco: "",
      complementoEndereco: "",
      cidade: "",
      descricao: "",
      numBanheiros: "",
      preco: "",
      numQuartos: "",
      cep: "",
      area: "",
      uf: "",
      bairro: "",
      id:"",
      tipo:"Casa",
      // === Money === //
      money: {
        decimal: ",",
        thousands: ".",
        prefix: " ",
        suffix: " ",
        precision: 2,
        masked: true
      }
    };
  },
  mounted: function() {
    $("#cep").mask("00000-000");
  },
  methods: {
    closeMenu,
    cadastrarImovel,
    async load(){
      try{
        const res = await this.setQuery();
        console.log(res)
        this.id = res
        if(res == undefined || res == '')
        {
            this.$router.push('account')
        }
      }catch(e){
        console.log(e)
      }
    },

    async cadastrar(){
      try{
        const res = await this.cadastrarImovel();
        console.log(res);
        this.$router.push('account')
      }catch(err){
        console.log(err);
        // $("html, body").animate({ scrollTop: 0 }, "slow");
      }
    },
    buscarCEP() {
      var self = this;

      self.naoLocalizado = false;
      if (/^[0-9]{5}-[0-9]{3}$/.test(this.cep)) {
        $.getJSON("https://viacep.com.br/ws/" + this.cep + "/json/", function(
          endereco
        ) {
          console.log(endereco);
          if (endereco.erro) {
            self.endereco = {};
            $("#inputLogradouro").focus();
            self.naoLocalizado = true;
            self.disableInput = false;
            return;
          }
          self.disableInput = true;
          self.endereco = endereco;
          self.cidade = endereco.localidade;
          self.uf = endereco.uf;
          self.bairro = endereco.bairro;
          self.rua = endereco.logradouro;
        });
      }
    },
    setQuery: function() {
      
      this.query = this.$route.params.id;
      console.log(this.query)
      return this.query;
    },
    handleSubmit() {
      this.errors = [];

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
      
    }
  },
  created(){
    this.load();
    this.setQuery();
    // console.log(req)
  }
};
</script>
<style scoped>

.input-grey {
  margin-bottom: 25px;
  margin-top: 0px;
  display: block;
  width:  25rem;
  height: 45px;
  border-radius: 5px;
  border: 0;
  color: #1a212f;
  background: #ccc;
  transition: 0.3s ease;
}
.tipo{
  width: 12rem;
}

.trancasao{
  width: 12rem;  
}

.endereco{
  width: 30rem;
}

.textarea-grey{
  margin-bottom: 25px;
  border-radius: 5px;
  border: 0;
  color: #1a212f;
  background: #ccc;
}

</style>